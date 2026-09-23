# Final production report

Date: September 23, 2026. Scope: the existing approved React/JavaScript/JSX site, without redesign, new features, framework changes, or deployment.

**Disposition: local production checks pass; public release is conditional.** Confirm rights/provenance for supplied photography and icon artwork and verify the actual Vercel deployment before claiming release readiness. Manual device/browser/assistive-technology checks remain open. This report is not a Lighthouse score or accessibility certification.

## Implemented changes

- Centralized route titles/descriptions and configured origin in `src/data/pageMetadata.js`; RouteEffects updates canonical, robots, Open Graph, and Twitter card values without adding a package. Unknown routes remove canonical and set noindex. Known routes retain indexing. Query parameters do not enter canonical URLs.
- Added minimal Vercel SPA fallback in `vercel.json`, following [Vercel's Vite SPA guidance](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas). No serverless functions were added.
- Added a 640px hero WebP and real picture/source WebP selection with PNG fallback on Home/About/Menu. Existing sources, responsive crops, intrinsic dimensions, eager hero/About-intro loading, and lazy lower imagery remain intact.
- Created an honest 1200 x 630 text-only social preview using the existing ivory/ink/olive visual language. The delivery PNG is 46,476 bytes; its SVG source is editable. The superseded JPG's unsupported EST. 2026 statement is no longer served by public metadata; the original is archived in docs/asset-sources.
- Retained supplied A-monogram favicons, Apple touch icon, and manifest icons. No new identity system, font download, or photography generation.
- Renamed the final Not Found layout's stale placeholder class and removed its unused paragraph rule. Menu's picture wrapper has a scoped layout rule. No shared header/footer or approved section layout was redesigned.
- Updated README and documentation status, preserving historical planning reasoning. Added a measured CSV asset inventory.

## Cross-page and responsive verification

PASS: production-preview Chrome checked all four pages plus an unknown route at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px: 40 combinations. No page horizontal overflow, missing image alternatives, broken loaded images, missing H1, or unexpected internal-link destinations were found. Every rendered photograph selected WebP. PNG fallback was separately exercised by removing the hero source in the browser; the fallback loaded successfully.

PASS: 844 x 390 landscape and 200% root-font enlargement at 320px were checked on all five routes. Root-font enlargement is a text-reflow simulation, not proof of native browser zoom. Full-page screenshots and selected viewport crops were captured. Home hero/Gallery, Menu dish/price wrapping, About disclosure/imagery, Contact layout, and the simple recovery page retained the approved composition. No visual redesign was necessary.

PASS: every distinct main CTA destination was clicked from its page, with resulting route and H1 focus checked. Mobile disclosure open/Escape/close-on-route behavior passed. Hidden mobile navigation uses the native hidden attribute. The shared active navigation and skip-link/focus implementation remain intact.

## Accessibility and interaction findings

PASS: source/DOM review verified one H1 per route, section headings, main/header/footer/navigation landmarks, labeled controls, required/optional semantics, contextual image alt or intentional decorative empty alt, pressed menu filters, form-associated errors, and one polite form status. Keyboard submit and textarea newline behavior passed. Reduced-motion emulation preserves content and removes reveal transforms.

PASS: computed token contrast against ivory is approximately 15.50:1 for ink, 8.76:1 for olive, and 4.67:1 for clay. Taupe is 2.10:1 and remains decorative separators rather than essential input boundaries or body copy. Contact uses olive borders and visible focus. This token calculation is not a full automated contrast scan of every rendered state.

MANUAL REVIEW NEEDED: screen-reader announcements and browse order, Safari/Firefox, native 200% zoom, actual iOS/Android keyboards, touch/assistive input, and physical-device focus visibility. No full WCAG conformance claim.

## Contact privacy and data

PASS: Contact was regression-tested after production changes: empty submit, invalid email, individual error correction, optional empty Phone, text Subject, keyboard submit, textarea newline, read-only progress, duplicate-submit guard, success reset, re-entry, and timer cleanup during navigation. Completion was observed around 739ms for the 700ms timer. No submission network request occurred; source has no form-value logging, persistence, analytics, URL serialization, API, or email service. Browser autocomplete remains a browser feature.

PASS: Menu filters produced Starters 3, Mains 5, Sides 3, Desserts 3, Drinks 4, and All 18. Home's featured records remain Braised Short Rib, Seared Atlantic Salmon, and Wild Mushroom Rigatoni. USD formatting and canonical hours/contact examples are shared from existing modules; no content prices or schedule were changed.

## Assets and performance

See [asset audit](asset-audit.csv) for every raster source/export/icon, the new SVG, dimensions, bytes, placement, and hash. Nine PNG masters total 20,239,618 bytes. The nine largest WebP versions total 1,404,858 bytes, 93.1% smaller. Existing optimized derivatives were retained; the new 640px hero is 71,712 bytes, 45.3% smaller than the previous minimum 960px export (131,026 bytes). This is file-size evidence, not a promise of identical transfer savings on every device.

PNG fallbacks increase stored dist size by approximately 20.24MB, but the tested modern browser requests WebP; older decoders may download the larger PNGs. Responsive selection avoids loading all derivatives. No AVIF pipeline was added because the existing WebP workflow is sufficient. The PNG masters are preserved, not renamed or recompressed destructively. No byte-identical raster duplicates were found.

The production application bundle is approximately 424.25kB uncompressed / 135.50kB gzip; CSS approximately 23.63kB / 5.94kB gzip in the final build. No speculative bundle rewrite or risky package upgrade was justified. All direct runtime dependencies have actual imports; development dependencies serve Vite/Tailwind/lint. npm audit returned zero known advisories at the time of this pass; this is not a guarantee against future vulnerabilities.

Diagnostic local Chrome observations at 1440px: Home LCP 108ms, Menu 100ms, About 120ms, Contact 96ms, recovery 100ms; observed CLS 0 for those runs. These are unthrottled localhost PerformanceObserver samples, affected by the scripted page/scroll sequence. They are not Lighthouse results, production Core Web Vitals, or field measurements.

NOT TESTED: Lighthouse was unavailable locally and absent from the offline npm cache. No Lighthouse package was added and no score is reported. Hosted throttled performance remains a release check. Actual loaded fonts remain Georgia/system sans-serif; Instrument Serif/Manrope are not bundled. Font integration is not a blocker by itself and would require another visual check.

## SEO, sharing, and deployment

PASS: each primary route has its own title/description, matching canonical path, Open Graph/Twitter values, and normal indexing. Unknown routes have no canonical and use noindex. Static HTML contains a generic truthful site-wide social preview for crawlers that do not run JavaScript. No Restaurant/LocalBusiness schema, fake address, phone schema, social account, or real-service claim was introduced.

The hostname `https://avenrow-kitchen.vercel.app` was already configured in index.html, robots.txt, and sitemap.xml; this pass did not invent it. Confirm ownership/project mapping and replace it consistently if the final URL differs. The sitemap contains only the four primary pages. Icon/manifest files exist and are decoded in the inventory. Live fetch/unfurl validation remains open.

PASS: local direct-route/recovery checks and production build/lint. CONFIGURED: minimal Vercel rewrite. NOT TESTED: hosted Vercel rewrite behavior, deployed HTTPS/cache headers, live indexing/social scraper behavior, or production uptime. No deployment was performed.

Known SPA limits: crawlers without JavaScript receive shared HTML metadata; unknown paths typically receive HTTP 200 from the SPA fallback while showing the client Not Found page. Client noindex is implemented, but true HTTP 404 semantics are not claimed. No SSR or router/framework migration was introduced to disguise those limits.

## Remaining release work

1. Confirm supplied photography/icon provenance, licensing, and any required releases/attribution. Visual approval is not proof of rights.
2. Verify configured hostname and deploy through the intended Vercel project; test direct routes, assets, HTTPS, and social unfurl on that host.
3. Complete the named physical-device, screen-reader, cross-browser, and native zoom checks.
4. Run hosted Lighthouse/throttled performance and review indexing/crawler behavior with the SPA limitations understood.
5. Select actual screenshots and write the portfolio case study; neither fabricated screenshots nor business-impact claims are appropriate.

Evidence files remain in the existing temporary `avenrow-home-qa` directory: final-results.json, contact-results.json, final-check.mjs, final-extra.mjs, contact-check.mjs, and final/review screenshots. They are QA captures, not deployed artifacts or fake mockups. The repository contains no added browser profiles, test-run logs, new backend, or unrelated feature work.


## Repository change inventory

Created: `vercel.json`, `src/data/pageMetadata.js`, `src/assets/images/home/hero/avenrow-hero-640.webp`, `public/social/og-preview.svg`, `public/social/og-preview.png`, `docs/asset-audit.csv`, and this report.

Moved intact: `public/social/og-image.jpg` to `docs/asset-sources/og-image-original.jpg`.

Modified implementation: `index.html`, `src/app/RouteEffects.jsx`, `src/components/ui/ImageSlot.jsx`, `src/data/homeImages.js`, `src/pages/MenuPage.jsx`, `src/pages/NotFoundPage.jsx`, `src/styles/index.css`.

Modified documentation: README; brief, requirements, architecture, brand, content, assets, roadmap, QA, and wireframes. Status summaries were synchronized; historical design decisions remain available. `docs/lighthouse.png` is an existing user artifact, not a Lighthouse result generated by this pass, and is preserved outside the runtime asset inventory.

No Contact logic, Home/About page composition, shared navigation/footer, package manifest/lockfile, or source photography was changed. No temporary browser profiles or test scripts were added to the repository.

## Post-deployment verification — September 23, 2026

The application was subsequently deployed at `https://avenrow-kitchen.vercel.app/`. This section preserves the prior “No deployment was performed” statement as historical context for the local production pass; it is superseded for hosted HTTP delivery by the evidence below.

### PASS

- HTTPS requests to `/`, `/menu`, `/about`, `/contact`, and `/this-route-does-not-exist` returned Vercel-served `200` HTML with HSTS (`max-age=63072000; includeSubDomains; preload`). Direct primary-route responses used the same application entry as `/`, confirming the deployed SPA rewrite rather than a Vercel 404.
- Hosted `robots.txt`, `sitemap.xml`, `social/og-preview.png`, `favicon.ico`, and `site.webmanifest` returned `200` with expected content types. The social PNG was served at 46,476 bytes. The sitemap lists only `/`, `/menu`, `/about`, and `/contact`; robots names that sitemap and allows indexing.
- The deployed HTML references the expected bundled JavaScript and CSS (`index-BDxg7Glf.js`, 424,250 bytes; `index-BCZdidnZ.css`, 23,630 bytes). The 640px hero WebP returned `200`, `image/webp`, 71,712 bytes. No failing production asset URL was found in the checked set.
- The host resolves consistently as `https://avenrow-kitchen.vercel.app`, with no localhost or alternate-host canonical observed in its static Home HTML, robots, or sitemap. The public static social preview labels the project as fictional and does not expose business schema, false contact channels, or social usernames.

### FIXED IN SOURCE — REDEPLOY REQUIRED

The deployed static Home metadata still returned the older title `Avenrow Kitchen — Fictional Restaurant Concept` and matching older Open Graph/Twitter title. That does not meet the required title set. `src/data/pageMetadata.js` and the `index.html` fallback were corrected to:

- Home: `Avenrow Kitchen — Contemporary American Dining`
- Menu: `Menu — Avenrow Kitchen`
- About: `Our Story — Avenrow Kitchen`
- Contact: `Contact & Visit — Avenrow Kitchen`

This is a minimal metadata-only correction. It is not live until the updated source is redeployed. `sitemap.xml` source timestamps were also advanced to September 23, 2026. Verify all four runtime titles, descriptions, canonical URLs, Open Graph/Twitter values, and unknown-route noindex/canonical removal after that deployment.

### MANUAL REVIEW NEEDED

- A full hosted Chromium CDP interaction run did not return usable output from this environment, so rendered page content, browser console, real network waterfall/lazy-loading behavior, Contact lifecycle/privacy, Menu keyboard/live-region behavior, and responsive production layouts remain unverified on the hosted origin. The completed local-production evidence remains valid only for local preview.
- Test real iOS Safari, Android Chrome, Firefox, Safari, native 200% browser zoom, touch targets, screen-reader browse order, and form/live-region announcements.
- Run a hosted social-card unfurl and Lighthouse or another throttled lab measurement. Lighthouse was not installed/cached and no score is claimed.
- Confirm supplied photography/icon provenance, rights, releases, and attribution obligations. This remains unresolved; deployment does not establish usage rights.

### NOT TESTED

- Hosted Lighthouse metrics, production Core Web Vitals, INP, field data, and cache behavior beyond the observed Vercel headers.
- A true HTTP 404 response: the intended SPA rewrite returns `200` and client routing must render the recovery page. This is an expected static-SPA limitation, not a rewrite failure.
- Live external social-network unfurling and search-engine indexing.
