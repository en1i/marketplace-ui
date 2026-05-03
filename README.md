# Marketplace UI

Frontend for [alphagranny.com](https://alphagranny.com) — a Next.js 16 app with React 19, TypeScript (strict), and Tailwind CSS 4.

Production: **https://alphagranny.com**

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16, App Router |
| UI | React 19, TypeScript strict |
| Styling | Tailwind CSS 4 + custom design token system |
| Linting / Formatting | Biome (not ESLint/Prettier) |
| Package manager | Yarn |
| Testing | Vitest + jsdom |

## Getting Started

```bash
yarn install
yarn dev       # dev server → http://localhost:3000
```

See [`docs/deployment.md`](docs/deployment.md) for Docker / Dev Container and production deployment.

## Commands

| Command | What it does |
|---------|-------------|
| `yarn dev` | Start dev server (localhost:3000, hot reload) |
| `yarn build` | Production build |
| `yarn lint` | Lint with Biome |
| `yarn lint --write` | Lint + auto-fix all safe issues |
| `yarn format` | Format with Biome |
| `yarn test` | Run tests with Vitest |

## Architecture

```
app/              # Next.js routes (App Router, file-based)
components/
  layout/         # Header, footer, container
  sections/       # Page sections (hero, categories, top sellers…)
  ui/             # Reusable primitives (card, chip, nav-pill…)
lib/              # Shared data and utilities (categories, placeholder data)
styles/           # Design system — loaded in app/globals.css
  tokens.css      # All :root CSS custom properties
  theme.css       # Maps tokens to Tailwind utilities
  typography.css  # 9-step type scale utilities
  base.css        # Font faces, body defaults, focus ring, scrollbar
public/
  fonts/          # Aptos (400/600/700/800) — no external font fetching
  images/         # Static images (granny mascot, etc.)
docs/             # Project documentation (see below)
```

**Path alias:** `@/*` maps to the project root.  
**React Compiler:** enabled in `next.config.ts` for automatic memoization.  
**Dark mode:** intentionally absent — AlphaGranny is light-only.

## Documentation

| Doc | Summary |
|-----|---------|
| [`docs/design_system.md`](docs/design_system.md) | Brand foundations · color tokens · typography scale (9 steps) · spacing · radii · shadows · motion · components (header, hero, cards, footer…) · accessibility · page composition |
| [`docs/deployment.md`](docs/deployment.md) | Local dev (direct + VS Code Dev Container) · production pipeline (GitHub Actions → GHCR → Flux → k3s on VPS) · troubleshooting |

## Contributing

**Pre-commit hook** (Husky) runs `yarn lint && yarn test` before every commit.

**Format on save:** install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) — workspace settings in `.vscode/settings.json` are already configured.

**Manual fix-all:**
```bash
yarn lint --write   # fixes lint + formatting in one pass
```
