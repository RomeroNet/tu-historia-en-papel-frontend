# Repository Guidelines

## Project Structure & Module Organization

This is a Nuxt 4 and Vue 3 application. Routes are in `app/pages/`, layouts in `app/layouts/`, and reusable Vue components in `app/components/`. Group feature components by area, as in `app/components/Home/Portfolio/`. Global SCSS belongs in `app/assets/scss/`; static images and `robots.txt` live in `public/`.

Docker definitions are under `docker/`, the Helm chart is in `helm/`, and production automation is in `.github/workflows/`. Do not commit generated `.nuxt/` or `.output/` directories.

## Build, Test, and Development Commands

Run project commands inside Docker Compose's `node` service. Use pnpm there, matching the version declared in `package.json` and the lockfile.

- `docker compose run --rm node pnpm install --frozen-lockfile` installs exact dependencies.
- `docker compose run --rm --service-ports node pnpm dev` starts the local server at `http://localhost:3000`.
- `docker compose run --rm node pnpm build` creates the production Nuxt/Nitro build in `.output/`.
- `docker compose run --rm --service-ports node pnpm preview` serves the production build locally.
- `docker compose run --rm node pnpm generate` prerenders the application for static hosting.
- `helm lint --strict helm` validates deployment templates.

## Coding Style & Naming Conventions

Use TypeScript in Vue `<script setup>` blocks and SCSS for component styles. Follow the existing four-space indentation, single quotes in TypeScript, and trailing commas in multiline configuration objects. Name Vue components in PascalCase (`PortfolioImage.vue`), pages and routes in lowercase (`contact.vue`), and SCSS variables in kebab-case. Prefer the `~/` alias for imports from `app/`. Keep component styles scoped unless they intentionally define global utilities.

No formatter or linter is currently configured; preserve surrounding style and keep diffs focused.

## Testing Guidelines

There is currently no automated test framework or coverage requirement. Before opening a pull request, run the Docker Compose build command above and manually verify affected routes at desktop and mobile widths. For Helm changes, also run `helm lint --strict helm`. If tests are introduced, colocate them with the feature and use `*.spec.ts` names.

## Commit & Pull Request Guidelines

History primarily follows Conventional Commits: `feat(portfolio): prerender page`, `fix: streamline Helm validation workflow`, and `chore: refresh pnpm lockfile`. Use an imperative, concise subject with an optional scope.

Pull requests should explain the user-visible change, list validation performed, and link related issues. Include before/after screenshots for visual or responsive changes. Call out modifications to images, route prerendering, Docker, Helm, or deployment configuration explicitly.
