# Technical Documentation - Next.js Version

## 1) Architecture Overview

The project now runs on Next.js App Router.

- `app/layout.js`: global metadata + shared document shell.
- `app/page.js`: homepage markup + client-side interaction logic.
- `app/globals.css`: full styling system and responsive design.
- `public/assets/images/`: static images served by Next.js.

## 2) Migration Summary

### Previous stack
- Static `index.html`, `styles.css`, `script.js`.

### Current stack
- `Next.js` + `React` + global CSS.

### Behavioral parity retained
- Preloader animation.
- Sticky navbar + active link detection.
- Back-to-top control.
- Mobile menu toggle.
- Scroll-triggered reveal animations.
- Hero counters and floating particles.
- Simulated appointment form submission state.

## 3) Runtime and Build

### Scripts

```bash
npm run dev
npm run build
npm run start
```

### Requirements

- Node.js 18.18+ (recommended current LTS).
- npm 9+.

## 4) SEO and Metadata

Defined in `app/layout.js`:

- `title`
- `description`
- `keywords`
- Google Fonts preload links

## 5) Styling System

Global style architecture is maintained in `app/globals.css`:

- CSS variables in `:root` for colors, spacing, radius, shadows.
- Section-based component styling blocks.
- Animation utility selectors via `data-animation`.
- Breakpoints at `992px` and `640px`.

## 6) Interactions and Client Logic

All former `script.js` interactions were moved into a `useEffect` block in `app/page.js`.

Important modules:

- Scroll listener (`navbar`, active nav links, back-to-top visibility)
- `IntersectionObserver` for reveal animations
- Counter animation with `requestAnimationFrame`
- Particle element generation
- Smooth anchor scrolling
- Appointment form submit UI states

## 7) File Ownership Guide

- **Content updates**: `app/page.js`
- **Theme/design updates**: `app/globals.css`
- **Global metadata/fonts**: `app/layout.js`
- **Images**: `public/assets/images/*`

## 8) Project Cleanup Notes

- Old static-only structure has been removed.
- Next.js app is now the single source of truth from `app/`.

## 9) Recommended Next Improvements

- Replace `dangerouslySetInnerHTML` with typed JSX components section-by-section.
- Add API route or external service integration for real appointment submission.
- Add Open Graph/Twitter metadata and structured data.
- Add automated linting and tests to CI.
