# M. Muralidharan — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

## Stack

- **Next.js** (App Router, static export–friendly)
- **TypeScript**
- **Tailwind CSS v4** — custom light/dark theme tokens via CSS variables, no config file needed
- **next/font** — self-hosted Google Fonts (Space Grotesk, Inter, JetBrains Mono), no runtime font requests
- Content lives in `src/lib/data.ts`, separate from the components that render it — edit your resume details there, not inside the JSX

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

Add your resume PDF to `/public/Muralidharan_Resume_Sept_2026.pdf`
(or change `resumeHref` in `src/lib/data.ts` to match whatever you name it).

## Build

```bash
npm run build
npm start
```

## Deploy

The easiest path is [Vercel](https://vercel.com/new) — push this folder to a GitHub repo and import it there; it detects Next.js automatically and needs no config. Netlify and Cloudflare Pages both also support Next.js directly if you'd rather use those.

## Project structure

```
src/
  app/
    layout.tsx      — fonts, metadata, theme-flash prevention script
    page.tsx         — composes the sidebar + all sections
    globals.css       — Tailwind import + color tokens (light/dark) + shared frame styles
  components/         — one file per section (Hero, Projects, Skills, ...)
  lib/data.ts          — all resume content: edit this file to update the site
  hooks/useActiveSection.ts — IntersectionObserver hook for nav highlighting
```

## Notes on the design

- Layout is a sticky sidebar + content app-shell on screens ≥1024px (`lg:` breakpoint), collapsing to a single column with a top nav bar below that — this is what fixes the "not using the full screen" issue from the plain-HTML version.
- Dark/light theme toggle is class-based (`.dark` on `<html>`), persisted to `localStorage`, with an inline pre-hydration script so there's no flash on load.
- The sidebar's canvas animation is a small hand-rolled simulation of your own ByteTrack/YOLO output (bounding boxes + confidence labels drifting over a grid) instead of stock photography.
- Respects `prefers-reduced-motion` (canvas freezes on a static frame, CSS transitions shorten to ~0ms).
- iOS safe-area insets are applied to the sidebar and footer for notches/home indicators.
