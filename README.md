# Softspark landing site

Marketing landing page for **Softspark**, a software company and tech hub in Georgia (the country).
Softspark builds custom websites and web apps, trains and consults on AI models, and works on
embedded and firmware-adjacent systems. It also makes **Unira**, a desktop orchestrator for visible,
workflow-driven teams of AI coding CLIs.

The site is a static single-page Vue 3 application. There is no backend and no API.

## Stack

- [Vue 3](https://vuejs.org/) with `<script setup>` and TypeScript
- [Vite](https://vite.dev/) for dev server and production builds
- `vue-tsc` for type-checking `.vue` files during `npm run build`
- Plain CSS with design tokens as CSS custom properties (no CSS framework)

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:5173`).

## Scripts

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot module replacement          |
| `npm run build`   | Type-check with `vue-tsc`, then build to `dist/`               |
| `npm run preview` | Serve the production build from `dist/` locally                |

## Project structure

```
.
├── index.html                 # HTML shell, meta tags, font links
├── design-import/             # Source design doc for the current direction
├── public/
│   └── favicon.svg
├── src/
│   ├── main.ts                # App bootstrap
│   ├── App.vue                # Page composition (nav, sections, footer)
│   ├── assets/
│   │   └── styles.css         # Design tokens, reset, shared primitives
│   ├── components/
│   │   ├── SiteNav.vue        # Fixed nav over the hero, mobile sheet
│   │   ├── HeroSection.vue    # Full-bleed hero over the film placeholder
│   │   ├── ServicesSection.vue# Centred statement + three disciplines
│   │   ├── StatsBand.vue      # Three large numbers
│   │   ├── AboutSection.vue   # Studio principles
│   │   ├── UniraSection.vue   # Product band, links to releases
│   │   ├── CtaBand.vue        # Closing line and email
│   │   └── SiteFooter.vue     # Mono footer row
│   ├── composables/
│   │   └── useReveal.ts       # IntersectionObserver scroll-reveal
│   └── data/
│       └── site.ts            # Copy, links and section content
├── vercel.json                # SPA rewrite for Vercel
├── vite.config.ts
└── tsconfig*.json
```

### Design system

The current look implements `design-import/Softspark Redesign.dc.html`, direction **1c
("Cinematic")** — dark, editorial, monochrome, with scale and contrast doing the work that an
accent colour usually does. Tokens live in `src/assets/styles.css` under `:root`.

- **Palette:** near-black ground (`--ink`, `#050506`) and warm paper type (`--paper`, `#f2f0ec`).
  There is no accent hue. Hierarchy comes from alpha steps on the paper colour —
  `--text-lede` (78%), `--text-muted` (62%), `--text-faint` (42%) and `--text-ghost` (34%, for
  placeholder captions only). Rules are 1px hairlines at 12% (`--line`); `--line-strong` (40%)
  outlines buttons. No shadows, no radii, no gradients except the two scrims that lift type off
  the hero and product bands.
- **Type:** three families, each with one job. `--font-display` (Newsreader, 300, italic for the
  softer half of a headline) sets every heading; `--font-sans` (Archivo) sets body copy and the
  large numbers at 600; `--font-mono` (IBM Plex Mono, 500, uppercase, wide tracking) sets every
  label, button and footer item. The display scale is pinned to the 1280px comp:
  `--display-1` 104px (hero), `--display-4` 64px (closing line), `--display-2` 52px (statements),
  `--display-3` 46px (product band), `--title` 30px (cards), `--stat` 76px (numbers), all as
  `clamp()` so they scale down instead of breaking.
- **Rhythm:** a 4px base with 8px steps (`--space-*`), sections on `--section-y` (56–88px), a
  44px `--gutter` and a `--prose` measure of 35rem for ledes. The page caps at `--shell` (100rem)
  and centres, so the comp's full-bleed proportions hold instead of sprawling on wide displays.
- **Separators:** sections are divided by hairlines. Three-up groups use `.grid-rule`, a grid with
  1px gaps that lets the line colour show through as internal rules.
- **Placeholders:** every image in the design is a labelled hatch and stays one — `.slot` for
  boxed 16:9 slots, `--hatch` / `--hatch-band` for the full-bleed plates behind the hero and
  product bands, and `.slot-note` for the mono caption naming the asset that belongs there. All
  of them are `aria-hidden`; their labels are notes to whoever supplies the real footage.
- **Motion:** one arrival ease (`--ease-out`) and one for state changes (`--ease-std`). The hero
  headline rises 26px (`rise`), the rule under it draws itself in (`draw-line`), and everything
  else in the hero arrives on one sequence stepped by `--enter-step`. The hero hatch pans forever
  at 24s (`pan`). Below the fold, sections fade and rise 18px on scroll, staggered with a `--d`
  custom property. Buttons scale to 0.98 on press. Under `prefers-reduced-motion: reduce` every
  animation and transition resolves to its final state instantly and nothing loops.
- **Mobile:** tap targets are 44px or larger, the nav collapses to a full-height sheet with
  staggered serif items that locks page scroll while open, and three-up grids stack to one column.
  The hero drops its film caption and the product band drops its capture caption, since neither
  has room.

Each section carries one idea: hero (who, what, two actions), services (a statement and three
disciplines), numbers, studio (principles), Unira (our own product, the one cinematic break),
closing line and footer.

Section content (discipline copy, the numbers, studio principles, placeholder captions, external
links) is kept in `src/data/site.ts` so copy changes don't require touching component markup.

## Deployment

The build output in `dist/` is fully static and can be hosted anywhere that serves files.

### Vercel

`vercel.json` sets the framework to Vite, the build command to `npm run build`, the output
directory to `dist/`, and rewrites every path to `index.html`. Import the repository in Vercel and
deploy with the defaults, or run:

```bash
npx vercel
```

### Other static hosts

Run `npm run build` and upload `dist/`. If the host supports SPA fallback, point unmatched routes
to `index.html`. The site currently uses only hash anchors, so this is optional.

## Content guidelines

- Do not add fabricated metrics, customer logos, testimonials or revenue figures. The design doc
  fills its numbers band and case-study rows with invented figures (headcounts, devices in the
  field, renewal rates, client names); those are placeholders and were not carried over.
- The numbers band in `stats` (`src/data/site.ts`) therefore states the studio's shape —
  three disciplines, one team, no handoffs — rather than performance figures. Replace those
  values there if real, verifiable numbers become available.
- Unira downloads and release notes link to
  https://github.com/GigiBeridzeAxal/unira-releases.
- The contact CTA is a `mailto:` link defined in `src/data/site.ts`. Update it there.

## License

© Softspark. All rights reserved.
