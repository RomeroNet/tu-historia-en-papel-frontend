# Repository Guidelines

## Project Structure & Module Organization

Nuxt 4 + Vue 3 app. Routes: `app/pages/`; layouts: `app/layouts/`; reusable Vue components: `app/components/`. Group features by area, e.g. `app/components/Home/Portfolio/`. Global SCSS: `app/assets/scss/`; static images + `robots.txt`: `public/`.

Docker: `docker/`; Helm chart: `helm/`; prod automation: `.github/workflows/`. Never commit generated `.nuxt/` or `.output/`.

## Build, Test, and Development Commands

Run all project commands inside Docker Compose `node` service. Use pnpm version from `package.json` + lockfile.

- `docker compose run --rm node pnpm install --frozen-lockfile`: install exact dependencies.
- `docker compose run --rm --service-ports node pnpm dev`: local server at `http://localhost:3000`.
- `docker compose run --rm node pnpm build`: production Nuxt/Nitro build in `.output/`.
- `docker compose run --rm --service-ports node pnpm preview`: serve production build locally.
- `docker compose run --rm node pnpm generate`: prerender for static hosting.
- `helm lint --strict helm`: validate deployment templates.

## Coding Style & Naming Conventions

Use TypeScript in Vue `<script setup>`; SCSS for component styles. Four-space indentation; TypeScript single quotes; trailing commas in multiline config objects. Vue components PascalCase (`PortfolioImage.vue`); pages/routes lowercase (`contact.vue`); SCSS variables kebab-case. Prefer `~/` imports from `app/`. Scope component styles unless intentionally global.

No formatter/linter configured. Preserve surrounding style; keep diffs focused.

## Testing Guidelines

No automated test framework or coverage requirement. Before PR: run Docker Compose build above; manually verify affected routes at desktop + mobile widths. Helm changes: run `helm lint --strict helm`. New tests: colocate with feature; name `*.spec.ts`.

## Commit & Pull Request Guidelines

Use Conventional Commits, e.g. `feat(portfolio): prerender page`, `fix: streamline Helm validation workflow`, `chore: refresh pnpm lockfile`. Subject imperative + concise; scope optional.

PRs: explain user-visible change; list validation; link issues. Visual/responsive changes need before/after screenshots. Explicitly flag image, route prerendering, Docker, Helm, or deployment config changes.
