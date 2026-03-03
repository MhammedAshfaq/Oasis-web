# Oasis - Next.js Migration

Oasis hospital website is now migrated from static HTML/CSS/JS into a Next.js App Router project.

## What Changed

- Migrated runtime to `Next.js` + `React`.
- Preserved existing one-page website layout and behavior.
- Removed old static project structure and kept only the Next.js app.
- Updated documentation for framework-based development and deployment.

## Tech Stack

- `Next.js` (App Router)
- `React`
- `CSS` (global stylesheet)

## Project Structure

```text
Microservice-infr/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   └── assets/
│       └── images/
├── next.config.mjs
├── package.json
├── README.md
└── TECHNICAL_DOCS.md
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (or newer LTS)
- npm 9+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Customization Notes

- Main page markup and behavior: `app/page.js`
- Global style tokens/components: `app/globals.css`
- SEO metadata and fonts: `app/layout.js`
- Images: `public/assets/images/` (`hero-bg.png`, `pattern.svg`, `doctor.svg`)

## Deployment

This app is now deployment-ready for popular Next.js platforms like Vercel, Netlify, and Node-based hosting.

## License

Private project for Oasis Unani Hospital.
