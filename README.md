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
├── public/
│   └── favicon.svg
├── src/
│   ├── main.ts                # App bootstrap
│   ├── App.vue                # Page composition (nav, sections, footer)
│   ├── assets/
│   │   └── styles.css         # Design tokens, reset, shared utilities
│   ├── components/
│   │   ├── SiteNav.vue        # Sticky nav with mobile menu
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── UniraSection.vue   # Product spotlight, links to releases
│   │   ├── AboutSection.vue
│   │   ├── CtaBand.vue
│   │   ├── SiteFooter.vue
│   │   ├── SparkMark.vue      # Logo mark
│   │   └── IconArrow.vue      # Shared arrow glyph for links
│   ├── composables/
│   │   └── useReveal.ts       # IntersectionObserver scroll-reveal
│   └── data/
│       └── site.ts            # Copy, links and section content
├── vercel.json                # SPA rewrite for Vercel
├── vite.config.ts
└── tsconfig*.json
```

### Design system

Design tokens live in `src/assets/styles.css` under `:root`. The system is deliberately small:

- **Palette:** near-white paper background (`--paper`), deep ink text (`--ink`) and a single ember
  accent (`--ember`, used for the primary button, the running stage in the Unira frame, list
  bullets and focus rings). `--paper-2` is a soft tonal band and `--paper-0` a raised surface.
  Borders are 1px hairlines at low alpha. Surfaces are flat except for one soft shadow
  (`--shadow-1`) reserved for the Unira product frame.
- **Type:** Inter only, in three weights (400, 500, 600), loaded from Google Fonts. A
  metric-matched `Inter Fallback` face (Arial with `size-adjust`) prevents reflow while Inter
  loads. Headings use weight contrast and tight tracking rather than a second family; the hero
  headline ends in a softer tone for hierarchy.
- **Rhythm:** a 4px base with 8px steps (`--space-*`), sections on `--section-y` (80–120px) and a
  `--prose` measure of 38rem for ledes.
- **Separators:** sections are divided by hairlines. The Unira section is the single soft tonal
  band, so no rule is drawn on either side of it.
- **Motion:** two eases (`--ease-out` for arrival, `--ease-std` for state changes). Scroll reveal
  is a 700ms fade and 16px rise, staggered with a `--d` custom property. The nav and hero share
  one entrance sequence stepped by `--i`. Buttons darken on hover and scale to 0.98 on press;
  arrow links nudge 2px. The Unira frame fills its progress bar once when revealed and keeps a
  quiet ring on the running stage. Under `prefers-reduced-motion: reduce` every animation and
  transition resolves to its final state instantly and nothing loops.
- **Mobile:** tap targets are 44px or larger on touch devices, the menu is a full-height sheet
  with staggered items that locks page scroll while open, and the nav keeps a constant height so
  its scrolled state never shifts layout.

Each section carries one idea: hero (who, what, one CTA, practice index), services (three
pillars), Unira (product spotlight with one quiet frame), about (studio principles), contact,
footer.

Section content (service descriptions, Unira feature list, about principles, external links) is
kept in `src/data/site.ts` so copy changes don't require touching component markup.

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

- Do not add fabricated metrics, customer logos, testimonials or revenue figures.
- Unira downloads and release notes link to
  https://github.com/GigiBeridzeAxal/unira-releases.
- The contact CTA is a `mailto:` link defined in `src/data/site.ts`. Update it there.

## License

© Softspark. All rights reserved.
