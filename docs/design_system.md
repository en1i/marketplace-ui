# AlphaGranny Marketplace — Design System

A warm, human marketplace for buying and selling unique goods, both locally and beyond. The visual language draws from craft/editorial commerce (Etsy) but is grounded in a calm, sandy-cream palette with deep plum for utility and a single brand orange used sparingly for the wordmark and accent badges.

---
## 1. Brand Foundations

### 1.1 Personality
- **Warm** — crafted, human, approachable. The mascot is a granny; the metaphor is grandma's shop.
- **Trustworthy** — clear, calm, uncluttered. Strong contrast between cream surfaces and deep plum chrome.
- **Inspiring** — discovery-driven and curated, with editorial moments built into the homepage.
- **Playful but refined** — a friendly mascot and rounded pills, but never loud.

### 1.2 Voice & Tone
- Conversational and encouraging. Short, benefit-led CTAs ("Sign in", "See all", "View all").
- Section labels are sentence-case ("Top sellers", "Recent listings", "Popular categories").
- Empty states are warm and human ("Nothing here yet — let's find something you'll love").

### 1.3 Logo Usage
- Wordmark "AlphaGranny" in **brand orange `#F1641E`**, paired with the granny icon glyph at its left.
- Always sits on the cream page background or sandy-cream `#EADBC2` block — never on a dark surface.
- Keep clear space ≥ the cap height of the wordmark.

---

## 2. Design Tokens

### 2.1 Color

The palette has been tightened to **three structural surfaces** plus brand orange and supporting accents. The hero, the footer, and any large light section share **one** light tone (`--color-bg-warm`); the cart pill, footer text accents, and any dark CTA share **one** dark tone (`--color-surface-dark`); inputs and content cards use **white**.

```css
:root {
  /* Surfaces */
  --color-bg-page:       #FAF8F5; /* cream page background */
  --color-bg-warm:       #EADBC2; /* sandy cream — hero, footer, promo blocks */
  --color-bg-surface:    #FFFFFF; /* inputs, cards, product card body */
  --color-bg-soft:       #F0EDE8; /* tertiary surface — e.g. category panel hover */

  /* Brand */
  --color-brand-primary:       #F1641E; /* logo + accent badges only */
  --color-brand-primary-hover: #D9531A;

  /* Ink / Text */
  --color-text-primary: #312B36; /* near-black plum — default body & headings */
  --color-text-muted:   #6B5F54; /* warm taupe for secondary copy on cream */
  --color-text-soft:    #888888; /* tertiary/meta */
  --color-text-inverse: #FAF8F5; /* on dark surfaces */

  /* Dark surface (signature) */
  --color-surface-dark:   #2F203C; /* deep plum — cart pill, dark CTAs */
  --color-surface-dark-2: #312B36; /* slightly cooler plum for chips/borders */

  /* Editorial accents — used sparingly */
  --color-accent-lilac: #DDD0E6; /* mascot hat, soft chips */
  --color-accent-blush: #F4D8D0; /* optional warm highlight */
  --color-accent-green: #A3D277; /* success badge */

  /* Borders */
  --color-border-warm:   #C4B8A8; /* primary border on cream — softer than gray */
  --color-border-strong: #312B36; /* high-contrast outlines */
  --color-border-subtle: rgba(49, 43, 54, 0.15);

  /* System */
  --color-success: #3A8B5D;
  --color-warning: #E7A33E;
  --color-danger:  #B3261E;
  --color-focus:   #1F6FEB;
}
```

**Usage rules**
- Page background is **never** pure white; use `--color-bg-page` for the canvas.
- **All large light blocks** (hero banner, footer, promo bands) use `--color-bg-warm`. Don't introduce a different cream/sand for similar surfaces.
- **All dark blocks** (cart pill, dark CTA, dark promo band) use `--color-surface-dark`.
- **Inputs and content cards** are `--color-bg-surface` (white) — exactly like the search input inside the hero banner.
- Borders on cream surfaces use `--color-border-warm` (`#C4B8A8`), not gray. This is the warm border tone that makes the marketplace feel crafted rather than corporate.
- Brand orange is reserved for the wordmark, the search submit button, and small accent badges (e.g. the count badge on the wishlist icon). It is **not** a primary CTA fill.

### 2.2 Typography

A single sans family is used for the entire UI. The serif previously used for editorial moments has been removed — it didn't earn its keep in a marketplace where clarity and density matter.

```css
:root {
  --font-ui: "ABCDiatype", -apple-system, "Helvetica Neue", "Droid Sans", Arial, sans-serif;
}
```

**Scale**

| Token        | Size / Line-height | Weight | Use                                               |
|--------------|--------------------|--------|---------------------------------------------------|
| `display-lg` | 32 / 40            | 800    | Hero banner headline ("Find anything…")           |
| `heading-lg` | 24 / 32            | 700    | Section titles ("Top sellers", "Recent listings") |
| `heading-md` | 20 / 28            | 700    | Card / sub-section titles                         |
| `heading-sm` | 16 / 22            | 700    | Footer column heads, modal titles                 |
| `body-lg`    | 16 / 24            | 400    | Default body                                      |
| `body-md`    | 14 / 20            | 400    | Card titles, nav labels, footer links             |
| `body-sm`    | 13 / 18            | 400    | Meta, price (when bold-700), captions             |
| `body-xs`    | 12 / 16            | 400    | Microcopy, count badges, legal                    |
| `label`      | 13 / 18            | 600    | Pills, buttons, nav-pill labels                   |

**Rules**
- Default body color: `--color-text-primary`. Muted text uses `--color-text-muted` on cream and `--color-text-soft` on white.
- Section titles (`heading-lg`) sit directly above the grid with **10 px** bottom margin — tight, not airy.
- Wordmark is always rendered in `--font-ui` at weight 800.

### 2.3 Spacing (4 px base)

```css
:root {
  --space-0:  0;
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;  /* default grid gap */
  --space-5:  24px;
  --space-6:  32px;  /* default section gap */
  --space-7:  48px;
  --space-8:  64px;
}
```

**Section rhythm**
- **Vertical gap between top-level sections: `--space-6` (32 px).** This is the rhythm used on the main page (hero → popular categories → top sellers → recent listings → trending → footer). Keep it consistent — varying gaps make the page feel uneven.
- **Page gutter: `--space-5` (20 px)** on the scrollable container, both sides.
- **Title → grid: `--space-2` to `--space-3`** (8–12 px).
- **Grid gap (any 4-up / 5-up grid): `--space-4` (16 px)**, both row and column. This includes Popular Categories tiles, Top Sellers cards, Recent Listings cards, and Trending. Don't mix 8/10/14 px gaps across grids on the same page.

**Horizontal-scroll rows**
- For Popular Categories (horizontal scroll), each item uses a **fixed width (80 px)** with centered, wrapping text — so the gap between items is always `--space-4` regardless of label length.

### 2.4 Radii

```css
:root {
  --radius-sm:    4px;   /* small chips, count badges */
  --radius-md:    8px;   /* cards, image tiles, footer */
  --radius-lg:    16px;  /* large promo blocks */
  --radius-pill:  9999px; /* buttons, search, pills */
}
```

- Search input uses **left half-pill** + the brand-orange **right half-pill** submit button.
- Nav action pills (Saved, Cart, Sign in / Cabinet) are full pills.
- Footer block uses `--radius-md` (8 px).

### 2.5 Elevation

Most depth comes from color, not shadow.

```css
:root {
  --shadow-sm:    0 1px 2px rgba(49, 43, 54, 0.06);
  --shadow-md:    0 2px 6px rgba(49, 43, 54, 0.12); /* slider arrows, raised pills */
  --shadow-lg:    0 10px 24px rgba(49, 43, 54, 0.12);
  --shadow-focus: 0 0 0 3px rgba(31, 111, 235, 0.35);
}
```

### 2.6 Motion

```css
:root {
  --ease-standard: cubic-bezier(0.2, 0, 0.2, 1);
  --duration-1: 120ms;
  --duration-2: 200ms;
  --duration-3: 320ms;
}
```

- Hover on tiles: subtle image scale (1.02), title color shift.
- Slider arrows: opacity/transform only — never animate layout.

### 2.7 Browser & Device Support

Target modern evergreen browsers: **Chrome, Firefox, and Safari** — desktop and mobile. Design and implement **mobile-first**: base styles target small screens, larger breakpoints are added with `min-width` media queries.

### 2.8 Breakpoints & Layout

```css
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

Max content width: 1440 px, centered, with `--space-5` side padding.

---

## 3. Iconography & Imagery

### 3.1 Icons
- Line icons, 24 × 24 default, 1.5 px stroke, rounded caps/joins.
- Where a navigation pill needs visual reinforcement, an emoji glyph (e.g. 🤍 🛒 👵) is acceptable as a placeholder until a custom icon set ships — the brand intentionally leans warm and human, so icon weight should match.

### 3.2 Imagery
- Photography is **warm, natural-lit, and craft-oriented** — no cold studio white.
- Aspect ratios:
  - Hero banner: full-bleed, ≥ 210 px tall.
  - Category circle/tile: 1:1, ~70 px in horizontal scroll rows.
  - Product card: 1:1.
  - Top-seller card collage: 2 × 2 grid of 1:1 thumbnails.

### 3.3 The Granny Mascot
- Optional brand element. Use sparingly — at most one mascot moment per screen.
- Approved placements: hero (right side, peeking), 404 / empty states, promo cards.
- The mascot wears the brand lilac (`--color-accent-lilac`) hat and sits on cream.

---

## 4. Components

### 4.1 Header / Global Nav

Two rows:
1. **Utility row** — logo · "☰ Categories" · search bar · `🌐 EN ▾` · **Saved** pill · **Cart** pill (filled plum) · **Sign in / Cabinet** pill.
2. **Sub-nav** — horizontal text links (Gifts, Top Picks, Home & Garden, Fashion, Vintage, Electronics, Handmade).

- Background: `--color-bg-page`.
- Action pills sit on the **right** of the row; language selector immediately precedes them.
- Sign in is the **last** item.

### 4.2 Nav Pills (signature pattern)

Each utility action is a **labeled pill** — the chosen pattern after exploring icon-only and bold-color variants. Labels prevent ambiguity (cart, wishlist, cabinet are easy to miss as bare icons).

```
Outline pill   bg: white   border: 1.5px solid --color-border-warm   color: --color-text-primary
Filled pill    bg: --color-surface-dark   color: white                no border
Cabinet pill   bg: --color-bg-soft         border: 1.5px solid --color-border-warm
                with avatar circle (28 px) in --color-accent-lilac
```

- Padding: `6px 12px` for outline pills; cabinet pill uses `4px 10px 4px 4px`.
- Label format: `<emoji> <Label> (<count>)` — count appears in parens, only when > 0.
- The cabinet pill is two-line: name on top, "My cabinet ▾" beneath in `--color-text-soft`.

### 4.3 Search Bar

- Pill-shaped, full-width inside header.
- Left half: white input with placeholder "Search for anything…".
- Right half: brand-orange submit with magnifier icon.
- Border: 2 px `--color-border-warm` on the input; the orange submit button has no left border.

### 4.4 Hero Banner

- Background: `--color-bg-warm` (`#EADBC2`).
- Padding: 36 px top/bottom, 20 px sides; min-height 210 px.
- Center-aligned headline (`display-lg`) + sub-text (`body-lg` in `--color-text-muted`) + secondary search/CTA row.
- Optional mascot placement: bottom-right (`right`) or peeking from bottom edge (`peek`).

### 4.5 Section Header

```
[Section title (heading-lg)]   [optional inline controls]   [optional ‹ › slider arrows]
```

- Title sits left; arrows sit immediately to the right of the title with `--space-3` gap (not pushed to the far right) so the slider affordance is unmistakably tied to the section.
- Slider arrows are **38 × 38 circular pills**, `--color-surface-dark` background, white glyph, with `--shadow-md` for lift.

### 4.6 Product Card

- 1:1 image with optional badge in top-left and a heart icon top-right.
- Title (max 2 lines), shop name (muted), price (bold).
- **No item rating** — this is C2C; ratings live on **sellers**, not goods.

### 4.7 Top-Seller Card

- Same width as a product card (lives on the same 4-up grid for visual consistency).
- Top: 2 × 2 collage of 1:1 product thumbnails, `--space-1` gap.
- Bottom: avatar circle (36 px, `--color-bg-soft` with warm border) · seller name (bold) · `★ rating · N sales` (muted).

### 4.8 Category Tile (horizontal-scroll)

- Fixed 80 px width per item.
- 70 × 70 image (any radius from `--radius-sm`), centered text below in `body-sm`, two-line wrap allowed.
- Row gap: `--space-4`.

### 4.9 Promo Band

- Full-width block on `--color-bg-warm` with `--color-text-primary`. Right-aligned CTA.
- Use sparingly — at most once per scrollable surface.

### 4.10 Footer

- Background: `--color-bg-warm` (`#EADBC2`) — same as the hero, by design.
- Text: `--color-text-primary` for headings, `--color-text-muted` for links.
- Layout: 4 columns on desktop — Brand · Marketplace · Account · Help.
- Bottom strip: copyright (left) · language selector (right).
- Language selector: row of pill chips for **English (default)**, **Albanian**, **Ukrainian**, **Russian**. Active chip uses a tinted background (`rgba(49,43,54,0.1)`) and bolder weight.

### 4.11 Input

- Height: 40 px default.
- Background: `--color-bg-surface` (white) — matching the hero search input.
- Border: 1.5 px `--color-border-warm`; on focus, 2 px `--color-text-primary` + `--shadow-focus`.
- Radius: `--radius-md`; only the global search uses pill.

### 4.12 Chip / Tag

- Height: 28 px, `--radius-pill`, padding `4px 12px`.
- Default: white with `--color-border-warm`.
- Active: `--color-surface-dark` with inverse text.

### 4.13 Badge

- Brand-orange pill `--color-brand-primary`, white text, `--radius-pill`, `--space-1` padding.
- Used for "New", "Bestseller", count badges on icons.
- Green badge `--color-accent-green` is reserved for "Star Seller" / verified-seller markers.

---

## 5. Accessibility

- Text contrast meets WCAG AA. Primary text on cream (`#312B36` on `#FAF8F5`) passes at ~13:1.
- Never rely on color alone — every count/state has a label.
- Focus styles: visible 3 px `--color-focus` ring on every interactive element.
- Minimum tap target: 44 × 44.
- All images require `alt`; decorative images use empty `alt=""`.
- Language selector is keyboard-navigable; current language has `aria-current="true"`.

---

## 6. Content Guidelines

- Sentence case for buttons, nav, and section titles ("Sign in", "Top sellers", "View all").
- CTAs start with a verb and are 1–4 words.
- Currency: `$24.00` — no space between symbol and amount.
- Count badges show numerals only ("12", not "12 items").
- The mascot is referred to as "Granny" or "Margaret" in copy, never "the granny" or "AlphaGranny mascot".

---

## 7. Page-Level Patterns

### Main page composition (the canonical example)

1. **Hero banner** — sandy-cream block with headline + search + optional mascot.
2. **Popular categories** — horizontal scroll of fixed-width tiles.
3. **Top sellers** — 4-up grid of seller cards with 2×2 collages; section title with inline `‹ ›` arrows.
4. **Recent listings** — 4-up product grid with right-aligned "View all" link.
5. **Promo band** — single warm-cream band promoting selling on AlphaGranny.
6. **Trending near you** — 4-up product grid.
7. **Footer** — sandy-cream with brand, link columns, language selector, copyright.

All sections share the same vertical gap (`--space-6`) and grid gap (`--space-4`).

---

## 8. Quick-Start Checklist for a New Page

1. Wrap the layout in the page shell with `--space-5` side padding.
2. Use `--color-bg-page` for the canvas — never pure white.
3. Use `--color-bg-warm` for any large light block (hero, footer, promo).
4. Use `--color-surface-dark` for any dark element (cart pill, dark CTA).
5. Inputs and product cards stay white.
6. Borders on cream surfaces use `--color-border-warm`.
7. Section titles in `heading-lg` (sentence case), 10 px bottom margin.
8. All grids use `--space-4` (16 px) gap.
9. All sections separated by `--space-6` (32 px).
10. Validate contrast, focus ring, and keyboard order before merging.