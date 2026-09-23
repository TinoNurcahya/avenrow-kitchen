# Avenrow Kitchen

A fictional restaurant frontend concept created as a portfolio project. It is not an operating restaurant, client commission, or real booking/contact service.

## Overview and features

Four visually approved pages combine editorial photography and typography with responsive React components:

- `/` - split hero, three featured dishes, story, principles, gallery, and sample hours.
- `/menu` - 18 USD-priced records, accessible category filters, and one craft photograph.
- `/about` - concept narrative, principles, and an explicitly fictional chef profile.
- `/contact` - sample details, canonical hours, and a local form demonstration.
- Unknown routes - Page not found with Home and Menu recovery links.

Shared navigation includes an in-flow mobile disclosure, active routes, skip link, and route focus/scroll handling. Images use responsive WebP sources with PNG fallback, reserved dimensions, and deliberate loading priority. Layouts respect reduced motion and reflow at narrow widths.

## Tech stack

React, JavaScript/JSX, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React. Components use `.jsx`; data uses `.js`. No backend, database, analytics, reservations, authentication, or payment service is included.

Instrument Serif and Manrope are named design targets, but font files are not loaded. The approved implementation uses Georgia/system sans-serif fallbacks. Existing A-monogram browser icons are retained.

## Demo form behavior

The form validates required name, email, text Subject, and Message; Phone is optional. Errors are associated with fields and the first invalid field receives focus. A guarded 700ms local simulation clears fields and displays explicit demo completion. Nothing is sent, persisted, or logged. Browser autocomplete remains available. There are no unapproved character limits.

## Running locally

Use Node.js 22.13+ and npm. Dependencies are pinned in the lockfile.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run lint
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`. No secrets or environment variables are needed. The build output is `dist/`.

## Deployment and metadata

Vercel SPA rewrites are configured in `vercel.json`. The existing configured public hostname is `https://avenrow-kitchen.vercel.app`; confirm it in the hosting project before release. If it changes, update `src/data/pageMetadata.js`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` together.

Primary routes allow indexing; the client Not Found route sets noindex and removes canonical metadata. Titles, descriptions, canonical URLs, and social tags update during navigation. The static HTML provides a truthful project-wide share preview for crawlers that do not execute JavaScript. Route-specific sharing and a true HTTP 404 are limitations of this static SPA fallback, not server-rendered features.

## Project status

All four pages and local production checks are complete. Build/lint, the dependency advisory audit, and scoped Chrome route/responsive/form checks pass. The application is deployed at `https://avenrow-kitchen.vercel.app/`; hosted HTTPS, deep-link rewrite, and primary static assets have been verified. **Redeploy the current metadata correction before treating that deployment as final.** Asset provenance/licensing, hosted browser interactions, real-device checks, screen readers, Firefox/Safari, native zoom, social unfurling, and Lighthouse remain open. No WCAG certification or field-performance result is claimed.

See [production report](docs/production-report.md), [QA evidence](docs/qa.md), [asset inventory](docs/assets.md), and [roadmap](docs/roadmap.md). The [brief](docs/brief.md), [requirements](docs/requirements.md), [architecture](docs/architecture.md), [brand](docs/brand.md), [content](docs/content.md), and [wireframes](docs/wireframes.md) preserve the planning decisions and historical design rationale.
