# Avenrow Kitchen

**Status: Home implemented with approved photography — not release-ready**

Avenrow Kitchen is a restaurant website concept for a fictional contemporary American restaurant in Brooklyn, New York. The project explores the frontend workflow from a realistic client-style brief through content architecture, visual planning, and eventual responsive React implementation.

**This is a fictional portfolio project. It is not an operating restaurant, is not affiliated with a real restaurant, and is not paid client work.** Restaurant details, menu prices, hours, and chef information are concept content. The planned contact form will be a frontend demonstration that does not send or store messages.

## Planned experience

- Home: introduce the food, atmosphere, philosophy, and sample visiting information.
- Menu: browse dishes and USD prices using category filters.
- About: explore the restaurant concept and a clearly fictional chef profile.
- Contact: review sample details and try a transparent contact-form demonstration.

The approved brand direction is warm, editorial, contemporary, and approachable. AVENROW is the primary header/navigation wordmark, with Kitchen as a secondary descriptor and an A monogram for the compact mark and favicon. Home uses an asymmetric editorial split hero and unboxed featured-dish presentations, supported by coherent photography, intentional mobile layouts, and restrained motion.

The portfolio value is frontend architecture, visual execution, responsive implementation, accessibility, interaction quality, performance, and a complete client-style workflow. No real restaurant usage, conversion improvement, customer metrics, or business impact is claimed.

## Stack

React, JavaScript, JSX, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React.

React components use `.jsx`; data and utilities use `.js`. TypeScript and `.tsx` are outside the project scope. No backend, database, authentication, ordering, payments, or reservation system is planned.

## Current status

Home now implements the approved working wireframe: shared header/footer, asymmetric hero, three featured dishes, story, philosophy, four-image gallery, and sample visit information. Mobile navigation is an accessible in-flow disclosure. The application includes responsive layouts, route focus/scroll restoration, and restrained motion with reduced-motion support.

`/menu`, `/about`, and `/contact` are intentionally minimal route placeholders. Their full designs, menu filtering, and contact form are not implemented. Unknown routes offer recovery links.

The latest user authorization explicitly permits Home implementation before final imagery and supporting-page wireframes. It supersedes earlier documentation-only restrictions and sequencing gates for this limited phase; a subsequent authorization approves integration of the supplied nine Home photographs, but not deployment. The original documentation remains the planning source, and the [roadmap](docs/roadmap.md) records this scope adjustment.

## Local development

Use Node.js 22.13 or later and npm; verified with Node 22.17.1 / npm 11.5.1 on Windows.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

On PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`. Vite prints the local development/preview URL. No backend or environment secrets are required. A static host will need SPA rewrites for direct route requests; the local Not Found screen does not establish an HTTP 404 response on a deployed host.

Dependencies are pinned in package.json and package-lock.json. React Router 7 is intentional: the available Router 8 release requires Node 22.22+, newer than the verified environment. Tailwind 4 uses the [official Vite plugin workflow](https://tailwindcss.com/docs/installation/using-vite), with `@tailwindcss/vite` and a CSS import; there is no Tailwind 3 configuration or duplicate animation package.

## Temporary visuals and integration

Nine neutral, labeled development placeholders represent H1, F1–F3, I1, and G1–G4. They are layout aids, not restaurant photography. No images or font files have been downloaded or generated.

`src/data/homeImages.js` supplies explicit Vite imports, responsive sizes, dimensions, and reviewed alt text to `ImageSlot.jsx`. The hero loads eagerly with high priority; other photos are lazy-loaded. See the [asset record](docs/assets.md#integrated-home-assets--september-22-2026) for crops, sizes, and unresolved provenance.

The typography stacks in `src/styles/index.css` reserve Instrument Serif and Manrope and currently render with Georgia/system sans-serif fallbacks. Add licensed local WOFF2 files and `@font-face` rules there only after approval, then repeat layout checks. The favicon is intentionally empty until approved A-monogram artwork is supplied. Temporary `noindex, nofollow` metadata protects the unfinished demonstration; deployment indexing still requires a decision.

## Verification and limits

Production build and lint pass. Initial Chrome browser checks cover Home at 320, 375, 430, 768, 1024, 1440, and 1920px; navigation, route placeholders, CTA destinations, and reduced motion are checked. Text enlargement was simulated at 200%; this does not replace native browser zoom or assistive-technology testing. Detailed evidence and remaining coverage are in [QA](docs/qa.md).

Photography provenance, fonts, favicon/social preview, supporting pages, cross-browser/device testing, a full accessibility audit, Lighthouse measurements, and deployment remain outstanding. No release, field-performance, or accessibility-conformance claim is made.

## Documentation

| Document | Purpose |
| --- | --- |
| [Project brief](docs/brief.md) | Business context, audience, goals, scope, constraints, and portfolio positioning |
| [Requirements](docs/requirements.md) | Page behavior, quality requirements, acceptance criteria, and definition of done |
| [Architecture](docs/architecture.md) | JavaScript/JSX structure, components, data, state, routing, technical decisions, and risks |
| [Brand](docs/brand.md) | Visual direction, design tokens, typography, layout, photography, and motion |
| [Content](docs/content.md) | Canonical working website copy, sample menu, hours, disclosures, and content gaps |
| [Assets](docs/assets.md) | Complete planned asset inventory, crops, reuse, accessibility intent, and provenance |
| [Home wireframes](docs/wireframes.md) | Working desktop/mobile layout used for the Home implementation |
| [Roadmap](docs/roadmap.md) | Ordered phases, dependencies, tasks, completion gates, and approval decisions |
| [QA](docs/qa.md) | Initial Home verification evidence and remaining full-project checks |

## Next milestone

Resolve photography provenance and review the integrated Home before separately authorizing Menu, About, and Contact design. Finalize the outstanding menu/form content at the relevant later gates.
