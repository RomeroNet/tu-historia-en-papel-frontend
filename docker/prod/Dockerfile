FROM node:26-bookworm AS builder

RUN npm install --global corepack@latest \
    && corepack enable pnpm

WORKDIR /app

ARG NUXT_PUBLIC_SITE_URL=https://creahistoriastudio.com
ENV NUXT_PUBLIC_SITE_URL=${NUXT_PUBLIC_SITE_URL}

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir=/pnpm/store

COPY . .

RUN pnpm build

FROM node:26-bookworm-slim AS runner

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

WORKDIR /app

COPY --from=builder --chown=node:node /app/.output ./.output

USER node

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
