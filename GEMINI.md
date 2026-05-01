# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# GEMINI.md

This file provides guidance to Gemini Gemini Code Assist (codeassist.google) when working with code in this repository.

# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Project Overview

Marketplace UI — a Next.js 16 application with React 19, TypeScript (strict mode), and Tailwind CSS 4.

## Commands

- **Dev server:** `yarn dev` (localhost:3000)
- **Build:** `yarn build`
- **Lint:** `yarn lint` (runs `biome check`)
- **Format:** `yarn format` (runs `biome format --write`)

No test framework is currently configured.

## Architecture

- **Routing:** Next.js App Router (`app/` directory), file-based routing
- **Styling:** Tailwind CSS 4. Design system tokens in `styles/` — see below. Dark mode intentionally absent (AlphaGranny is light-only).
- **Linting/Formatting:** Biome (not ESLint/Prettier) — 2-space indentation, auto import organization
- **React Compiler:** Enabled in `next.config.ts` for automatic memoization
- **Path alias:** `@/*` maps to the project root
- **Package manager:** Yarn
- **Fonts:** Aptos (Microsoft, free) — ttf files in `public/fonts/`. Weights used: Regular (400), SemiBold (600), Bold (700), ExtraBold (800).

### Design System (`styles/`)

| File | Purpose |
| ---- | ------- |
| `styles/tokens.css` | All `:root` CSS custom properties — names match design doc verbatim |
| `styles/theme.css` | `@theme inline {}` — maps tokens to Tailwind utilities (`bg-page`, `text-ink`, `rounded-pill`, etc.) |
| `styles/typography.css` | 9-step type scale as `@layer utilities` (`.text-display-lg` → `.text-body-xs`, `.text-label`) |
| `styles/base.css` | `@font-face`, `body` defaults, `:focus-visible` ring |

`app/globals.css` imports these in order after `tailwindcss`.

**Tailwind utility naming:** design-doc token names (`--color-bg-page`, `--color-text-primary`) are preserved in `tokens.css`. `theme.css` maps them to shorter Tailwind names (`bg-page`, `text-ink`).

**Border colors** have no Tailwind utility — use CSS vars directly: `border-[var(--color-border-warm)]`.

**`data-test-id` on every component:** Every exported component must have a `data-test-id` attribute on its root element. Format: `{folder}_{component-name-in-kebab-case}`. Examples: `data-test-id="sections_popular-categories"`, `data-test-id="layout_site-header"`, `data-test-id="ui_product-card"`. The folder segment is the immediate parent folder (`layout`, `ui`, `sections`). This is required for all new components — do not skip it.

**Tailwind class order:** Follow the recommended sort order when writing or reviewing `className` strings:
1. Layout (`display`, `position`, `flex`, `grid`, `overflow`)
2. Sizing (`w-`, `h-`, `min-`, `max-`)
3. Spacing (`m-`, `p-`, `gap-`)
4. Typography (`font-`, `text-`, `leading-`, `tracking-`)
5. Visual (`bg-`, `border-`, `shadow-`, `rounded-`, `opacity-`)
6. Interactivity (`cursor-`, `pointer-events-`, `transition-`)
7. Variants/modifiers last (`hover:`, `focus:`, `md:`, `lg:`)

Example: `flex items-center gap-4 w-full px-4 py-2 text-sm font-medium bg-page border rounded-pill hover:bg-surface`

## Docs

- Project setup and deployment guide: [`docs/deployment.md`](docs/deployment.md)

---

## Synchronization Policy

**CRITICAL**: This codebase uses 3 AI assistants. When adding or modifying ANY of the following, ALL related files MUST be updated in the same change:

### 1. Instruction Files (Always sync together)

| File        | AI Assistant       |
| ----------- | ------------------ |
| `CLAUDE.md` | Claude Code        |
| `GEMINI.md` | Gemini Code Assist |
| `AGENTS.md` | Codex              |

### 2. Commands (Source of truth + Codex runtime mapping)

When adding/modifying a command:

| Location                        | Action                                                                             |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `.claude/commands/<name>.md`    | Create/update command file                                                         |
| `.claude/COMMANDS.md`           | Add to commands table                                                              |
| `.codex/skills/<name>/SKILL.md` | Update/create only if command should be auto-runnable by Codex via intent matching |
| `CLAUDE.md`                     | Update "Available Commands & Skills" table                                         |
| `GEMINI.md`                     | Update "Available Commands & Skills" table                                         |
| `AGENTS.md`                     | Update "Available Commands & Skills" table                                         |

### 3. Skills (Cross-assistant mapping)

When adding/modifying a skill:

| Location                         | Format                                   | Action                                     |
| -------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `.claude/skills/<name>.md`       | Markdown (no frontmatter)                | Create/update skill (source of truth)      |
| `.codex/skills/<name>/SKILL.md`  | With frontmatter (`name`, `description`) | Create folder + SKILL.md                   |
| `.gemini/skills/<name>/SKILL.md` | With frontmatter (`name`, `description`) | Create folder + SKILL.md (same as Codex)   |
| `.claude/COMMANDS.md`            | -                                        | Add to skills section                      |
| `CLAUDE.md`                      | -                                        | Update "Available Commands & Skills" table |
| `GEMINI.md`                      | -                                        | Update "Available Commands & Skills" table |
| `AGENTS.md`                      | -                                        | Update "Available Commands & Skills" table |

### Skill Frontmatter Format (.codex/skills/\*/SKILL.md and .gemini/skills/\*/SKILL.md)

```yaml
---
name: skill-name
description: Brief description of what this skill does
---
```

### Sync Checklist

Before completing any command/skill change, verify:

- [ ] All 3 instruction files updated
- [ ] `.claude/COMMANDS.md` updated for command/skill catalog changes
- [ ] Every skill has matching `.codex/skills/<name>/SKILL.md` and `.gemini/skills/<name>/SKILL.md`

---

## Context7 MCP Usage

**IMPORTANT**: Always use Context7 MCP proactively when you need to use library's API without the user having to explicitly ask.

---

## Browser Debugging Workflow

**IMPORTANT**: When browser debugging is needed:

1. **First, check for existing browser**: Use `tabs_context_mcp` to check if there's already a running browser with a Marketplace tab (check for `localhost:8020` URL)
2. **Connect automatically**: If the Marketplace tab exists, connect to it without asking the user
3. **Ask only if needed**: Only if the tab is not found or browser is not running, ask the user to open a browser in debugging mode

This ensures a smoother debugging workflow by reusing existing browser sessions when available.

---

## Development Automation

The following slash commands and skills automate common development workflows.
For Claude Code: [.claude/COMMANDS.md](.claude/COMMANDS.md) for canonical command/skill documentation
For Codex: use `.codex/skills/*/SKILL.md` as Codex runtime skill files
For Gemini: use `.gemini/skills/*/SKILL.md` as Gemini runtime skill files

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
