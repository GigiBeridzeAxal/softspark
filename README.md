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
│   │   └── SparkMark.vue      # Logo mark
│   ├── composables/
│   │   └── useReveal.ts       # IntersectionObserver scroll-reveal
│   └── data/
│       └── site.ts            # Copy, links and section content
├── vercel.json                # SPA rewrite for Vercel
├── vite.config.ts
└── tsconfig*.json
```

### Design system

Design tokens live in `src/assets/styles.css` under `:root`. The palette is warm ember and amber
on deep ink, with an off-white paper tone for type. Typography uses Fraunces for headings, Inter
for body copy and JetBrains Mono for labels, loaded from Google Fonts with system fallbacks.

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
