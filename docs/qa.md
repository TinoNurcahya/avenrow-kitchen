# Quality Assurance

Status: Current evidence covers all four primary pages plus Not Found against a local production build. Consult the final production verification section below; older placeholder-era records are historical and do not describe current scope.

This document owns verification tasks and future evidence. Expected behavior and budgets are defined in [requirements.md](requirements.md); exact copy is in [content.md](content.md).

## Home implementation evidence — September 22, 2026

Scope: Home, shared layout, minimal Menu/About/Contact route placeholders, and Not Found. This does not verify the future menu filters or contact form. The user's implementation authorization explicitly permits temporary media before final asset production; it does not complete the original asset-first release gates.

Environment: Windows, Node 22.17.1, npm 11.5.1, headless Chrome 153.0.8010.53. Browser interaction and geometry checks used Chrome DevTools Protocol against local Vite development and production-preview servers. Screenshots were inspected for the desktop, tablet, mobile, and enlarged-text states; these are development evidence, not portfolio screenshots of a finished release.

| Check | Evidence / result |
| --- | --- |
| Production build | `npm run build` passes. Final initial JS: approximately 408.10 KB / 131.08 KB gzip; CSS: 17.05 KB / 4.72 KB gzip. These are build artifact sizes, not Lighthouse or field measurements. |
| Lint | `npm run lint` passes with zero warnings. |
| Dependency setup | `npm ls --depth=0` resolves the approved stack. Installation reported zero vulnerabilities at installation time; this is not a security audit. |
| Routes | Home plus direct entry and refresh for /menu, /about, /contact, and an unmatched path pass locally. Supporting routes show the exact next-phase notice. Active links and Home/Menu recovery destinations work. |
| CTA destinations | Both hero actions, View Full Menu, Story's Our Story, and Contact Us reach their intended routes. New navigation focuses the heading; Back restores the previous Home scroll position. |
| Mobile navigation | Keyboard activation, next-Tab entry, Escape closure/focus return, destination closure, and resizing an open disclosure into desktop navigation pass. Closed links are removed from layout and keyboard access. |
| Responsive geometry | Home checked at 320, 375, 430, 768, 1024, 1440, and 1920px. No horizontal page overflow. Desktop split, tablet dish rows, mobile text-before-image order, gallery sequence, and nine intended slot ratios verified. Landscape 812×375 also passes the overflow check. |
| Enlarged text | 200% root text-size simulation at 320, 375, 768, and 1440px shows no horizontal overflow or clipped placeholder labels. Temporary slots can grow vertically to fit enlarged labels; normal-size slots keep their intended ratios. This is additional reflow evidence, not native browser text/page-zoom certification. |
| Text and prices | No dish name/price collisions at the checked normal widths. Names and prices can wrap; no fixed-height text boxes are required. |
| Keyboard / focus | Skip link reaches main; route heading focus is applied without disrupting scroll restoration. A visible 2px Olive focus outline is present on the checked keyboard-focused action. |
| Reduced motion | Emulated reduced-motion preference keeps content visible with no reveal transforms. Normal motion never starts with content opacity at zero. CSS also disables hover transitions under reduced motion. |
| Console | Production interaction run records no console warnings, uncaught errors, React key warnings, or failed resource requests. Development emits Framer Motion's own reduced-motion diagnostic when that preference is enabled; it is absent in the production run. |
| Content / integrity | Canonical featured records and numeric USD values, detailed hours, hero shorthand, and footer disclosure retained. No photo/font downloads, fabricated address, social profile, form submission, or backend added. |

Local evidence lives in `%TEMP%/avenrow-home-qa/`: `production-results.json`, `supplemental-results.json`, browser-check scripts, and viewport screenshots. The profile and screenshots are intentionally outside source control and may expire with temporary storage; this repository summary records the scope and findings. Build and lint results are separate from rendered-browser observations.

Completed scope:

- [x] JavaScript/JSX scaffold and approved dependency setup.
- [x] Home's eight-part structure including shared header/footer.
- [x] Canonical featured data, hours, navigation, and disclosures.
- [x] Minimal supporting routes and unmatched-route recovery.
- [x] Initial responsive, keyboard, focus, motion, and console checks described above.
- [x] Production build and lint.

Still required:

- [ ] Review Home with approved final photography, fonts, and crops.
- [ ] Complete native browser text/page zoom checks and review extreme word wrapping.
- [ ] Test Edge, Firefox, Safari, iOS, Android, and real touch devices.
- [ ] Perform a full keyboard/screen-reader and contrast audit across final states.
- [ ] Run automated accessibility checks and recorded Lighthouse/performance measurements.
- [ ] Verify supporting-page functionality after its implementation.
- [ ] Verify final host rewrites, HTTP status behavior, metadata, and deployed routes.

The original full-project checklist follows. Its unchecked items should not be interpreted as a reversal of the limited evidence above, or checked merely because a subset of Home behavior passed.

## Design and asset workflow checks

- [ ] The first actual low-fidelity wireframe review covers Home desktop and mobile only, using wireframes.md.
- [ ] Home wireframe direction is reviewed before final asset sourcing/generation or React implementation.
- [ ] P0 slots are validated after wireframes for subject, composition, aspect ratio, and role; final images were not required before low-fidelity work.
- [ ] Asset slot validation and visual refinement precede production; only approved assets are sourced/generated.
- [ ] The inventory targets approximately 8–10 unique core photographs; unnecessary slots are merged instead of adding images to fill space.
- [ ] C1 preferably reuses G2; no unique fictional-chef portrait is required.
- [ ] Asset IDs are distinguishable from P0/P1/P2 priorities; portfolio screenshots use SS1.
- [ ] Photography follows the coherent master direction for lighting, color, food realism, depth of field, materials, and anonymous human presence.
- [ ] F1–F3 share a photographic family while retaining distinct compositions.
- [ ] H1 supports standalone right-side placement and rectangular/vertical crops without a required text-safe overlay area.
- [ ] Gallery defaults to four images; G5/G6 remain P2 and appear only if they add storytelling value.
- [ ] Supporting-page wireframes follow the established Home language, and project setup begins only at Phase 7.

## Functional checks

- [ ] All four primary routes work through navigation and direct entry (AC-01).
- [ ] Refresh works on every primary route.
- [ ] Unknown routes display recovery links to Home and Menu.
- [ ] Active navigation is correct, including exact Home matching.
- [ ] Mobile navigation opens, closes, and exposes the correct expanded state.
- [ ] Mobile navigation closes after selecting a destination and handles Escape/focus return.
- [ ] Resizing with navigation open creates no hidden focus or stale presentation.
- [ ] New-page navigation, Back/Forward, focus, and scrolling behave as specified.
- [ ] Each category shows the correct items and All restores 18 items in stable order (AC-02).
- [ ] Filtering preserves control focus, does not jump the viewport, and announces the result count.
- [ ] An empty category retains controls and presents the canonical empty-state copy.
- [ ] Featured dishes match Menu names, descriptions, and prices.
- [ ] Menu names, descriptions, category hierarchy, and prices remain understandable when all dish photography is removed.
- [ ] Invalid form submission preserves values, associates errors, and focuses the first invalid field (AC-04).
- [ ] Required, optional, email, whitespace-only, and approved length-limit cases behave correctly.
- [ ] Valid submission follows idle → validating → submitting → success, with local immediate validation, brief simulated progress, and explicit demo completion.
- [ ] Invalid validation returns to an editable state with preserved values and accessible errors; no artificial server failure is simulated.
- [ ] Repeated submission does not create multiple pending simulations.
- [ ] Leaving Contact during simulation cancels pending work without stale success feedback.
- [ ] Form behavior creates no submission network request, persistent storage, or console logging of entered values.
- [ ] No false server failure, delivered-message claim, or reply promise appears.
- [ ] All links and CTAs lead to real, accurately labeled destinations.

## Responsive and visual checks

- [ ] Review all four pages at 375px (AC-05).
- [ ] Review all four pages at 430px.
- [ ] Review all four pages at 768px.
- [ ] Review all four pages at 1024px.
- [ ] Review all four pages at 1440px and a wider desktop viewport.
- [ ] Check 320px reflow, 200% text zoom, and landscape orientation.
- [ ] No page-level horizontal overflow, clipped control, overlapping price, or off-screen error occurs.
- [ ] Mobile headings wrap intentionally and sections avoid oversized desktop spacing.
- [ ] Hero layout remains usable without a forced full-screen height.
- [ ] Hero follows the editorial split direction: left-side headline/support/actions and a standalone food photograph on the right (AC-09).
- [ ] Mobile hero follows headline, support, primary CTA, story link, image, then Brooklyn/dinner context beneath the wordmark/navigation.
- [ ] Featured dishes use editorial composition, whitespace, optional numbering, and fine separators without heavy rounded card shells.
- [ ] Footer is compact and editorial, with visible navigation and no corporate sitemap treatment.
- [ ] Category controls remain discoverable and comfortable on mobile.
- [ ] Long dish names/descriptions do not collide with prices.
- [ ] Each image preserves its subject at desktop and mobile crops.
- [ ] Gallery sequence, contact stacking, and footer layout remain intentional.
- [ ] Review open navigation and all form states at narrow widths.
- [ ] Compare rendered pages against the approved visual target, not screenshots alone.

## Accessibility checks

- [ ] Complete navigation, filtering, and form tasks with keyboard only (AC-03).
- [ ] Verify skip link, semantic landmarks, heading hierarchy, and reading order.
- [ ] Verify visible focus, sensible tab order, and route-change focus.
- [ ] Hidden navigation links are not focusable.
- [ ] Verify accessible names, active navigation, and filter pressed states.
- [ ] Verify labels, autocomplete, required/optional information, and error associations.
- [ ] With a screen reader, confirm filter counts and form feedback are understandable and not excessively repeated.
- [ ] Text errors accompany color changes; placeholders do not replace labels.
- [ ] Verify text and necessary non-text contrast in default, hover, selected, error, and focus states.
- [ ] Warm Taupe appears only decoratively, never as body text, placeholders, important borders, focus indicators, or essential states; Clay contrast is checked carefully.
- [ ] Check touch-target comfort against the 44px project target.
- [ ] Review contextual alt text, decorative images, and hidden decorative icons.
- [ ] Reduced motion removes unnecessary translation, scale, stagger, and scrolling without hiding information (AC-06).
- [ ] Critical content is available without animation completion; no full-page exit, complex route transition, dramatic parallax, scroll hijacking, character-by-character reveal, or 3D effect appears.
- [ ] No task depends on hover, movement, or image interpretation alone.
- [ ] Run an automated accessibility scan and manually verify the main flows; do not equate a scan with conformance.

## Browser checks

- [ ] Record exact browser versions, operating systems, and devices used.
- [ ] Test current and previous major Chrome releases at delivery.
- [ ] Test current and previous major Edge releases at delivery.
- [ ] Test current and previous major Firefox releases at delivery.
- [ ] Test current and previous major desktop Safari releases at delivery.
- [ ] Test current iOS Safari, preferably on a real device.
- [ ] Test current Android Chrome, preferably on a real device.
- [ ] Check touch behavior, mobile keyboard/form usability, orientation, and native control behavior.
- [ ] Document unavailable browser/device coverage rather than claiming it passed.

## Technical, console, and interaction tests

- [ ] Production build and lint checks pass (AC-07).
- [ ] React source uses JavaScript/JSX and no TypeScript/TSX implementation is introduced.
- [ ] Dependencies match the approved focused stack without duplicate animation libraries.
- [ ] Meaningful behavior tests cover filtering and form validation/submission.
- [ ] No console errors, React key warnings, or failed asset requests occur during main flows.
- [ ] No contact input values appear in console output or persistent storage.
- [ ] No stale state/timer warning occurs after leaving Contact during simulation.
- [ ] Runtime data is separated appropriately and repeated content is not independently hardcoded.

## Performance checks

- [ ] Verify responsive sources, image dimensions, byte sizes, and actual requested variants.
- [ ] Hero/LCP imagery loads eagerly and below-the-fold images load lazily as appropriate.
- [ ] Mobile does not unnecessarily download both hero variants.
- [ ] Font styles are limited, licensed, and served with readable fallbacks.
- [ ] Inspect production compressed JavaScript and initial mobile transfer against documented budgets.
- [ ] Check layout stability while images and fonts load.
- [ ] Check motion and interaction responsiveness on a representative mobile device.
- [ ] Record Lighthouse version, route, device/network profile, and results under repeatable conditions.
- [ ] Compare lab LCP/CLS and performance scores with targets; investigate misses.
- [ ] Record interaction measurements separately; do not claim field INP from Lighthouse alone.
- [ ] Record whether field data exists; do not present absent field data as a Core Web Vitals pass.
- [ ] No unnecessary embed, video background, tracker, or dependency inflates the page.

## Deployment and SEO checks

- [ ] Confirm deployment is authorized before publishing.
- [ ] Verify HTTPS, correct base paths, and assets on the selected host.
- [ ] Verify each route by direct entry and refresh on the deployed site.
- [ ] Verify unknown-route handling and record actual HTTP status behavior.
- [ ] Confirm the approved indexing policy is reflected in deployed metadata.
- [ ] Confirm route titles, descriptions, document language, and final-domain canonical URLs.
- [ ] Check the shared social preview and favicon in actual consuming surfaces where feasible.
- [ ] Do not claim unique route social previews without evidence.
- [ ] No misleading Restaurant/LocalBusiness structured data, fabricated rating, or business coordinate is published.
- [ ] Test the live links after deployment, not only in local development.

## Content checks

- [ ] All visitor-facing content uses English (US).
- [ ] AVENROW is the primary header/navigation wordmark; Kitchen is secondary, and the compact mark/favicon use the A monogram.
- [ ] All menu prices are approved USD values with consistent formatting.
- [ ] All 18 records are complete; no Pending approval, zero-price substitute, or placeholder dish remains.
- [ ] Home and Menu share canonical featured descriptions and prices.
- [ ] Detailed opening hours come from the single canonical schedule and match on Home and Contact.
- [ ] Hero shorthand is exactly Dinner daily from 5 PM, alongside Brooklyn, New York.
- [ ] No unapproved dietary, sourcing, award, press, testimonial, tax, or gratuity claim appears.
- [x] Subject is a required text input; no unapproved character limits are enforced.
- [ ] One concise Contact demonstration disclosure is visible before input and frames the example details/form; completion states explicitly say nothing was sent or stored.
- [ ] Fictional email/phone remain noninteractive and understandable as examples through the Contact demonstration context.
- [ ] Optional map link, if present, says Explore Brooklyn and has no restaurant pin or address.
- [ ] Alt text and captions match actual selected images without invented venue/person identity.

## Portfolio integrity checks

- [ ] The concise footer concept disclosure is readable on every primary route (AC-08).
- [ ] One concise chef fiction disclosure appears near the Ethan Cole profile.
- [ ] Chef imagery and alt text describe anonymous activity and do not identify a recognizable real or generated person as Ethan Cole.
- [ ] Large FICTIONAL, DEMO, or NOT REAL labels are not repeated throughout visual sections.
- [ ] No invented street address, fake restaurant map pin, Google Business profile, or restaurant directions appear.
- [ ] No real operating location, contact service, reservation, or ordering capability is implied.
- [ ] Social links are absent until valid destinations exist; no fake profiles/usernames, # destinations, or javascript:void(0) links appear.
- [ ] Asset and font provenance, licensing, attribution, and modifications are recorded.
- [ ] README clearly states that this is fictional and not paid client work.
- [ ] Screenshots depict the actual finished build and identify the captured state.
- [ ] README setup, features, live demo, and verification claims match the implementation.
- [ ] No invented commercial outcomes or unsupported accessibility/performance claims appear.
- [ ] Known limitations and missing browser coverage are explicit.
- [ ] The release satisfies the complete definition of done, not only a build or Lighthouse check.

## Future evidence record

For each executed check or grouped run, record the date, commit/build, route/state, viewport, browser/device, method, result, evidence location, and any follow-up issue. Keep build/test results, rendered-browser observations, and field-performance evidence separate. Leave checks unchecked until supported by actual execution.


## Menu implementation verification

Local production preview, Chrome headless, September 22, 2026. This is scoped Menu evidence, not a complete cross-browser/accessibility audit. Temporary reports/screenshots: `%TEMP%/avenrow-home-qa/menu-results.json`, `menu-*.png`. Build artifacts are local and not deployed.

- [x] Production build and lint pass after the final status-announcement fix.
- [x] All state renders 18 records: 3 Starters, 5 Mains, 3 Sides, 3 Desserts, 4 Drinks. IDs are unique; required fields and numeric prices are present. Three Home featured records remain unchanged.
- [x] Browser checks at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px: no horizontal overflow, six discoverable filters with 44px targets, canonical category order, zero Menu images.
- [x] Every filter selects the expected count; All restores 18. Enter activation preserves focus and scroll position. Exactly one button is pressed.
- [x] Status starts empty; category changes update it. Equal-count category changes also mutate the live-region content; repeated active selection produces no mutation. Actual screen-reader speech remains untested.
- [x] Desktop pairs complete categories in row-major order; narrow tablet/mobile use sequential categories; filtered lists cap at 640px. Screenshots reviewed for intro, rows, lower categories, visit context, and footer.
- [x] Nonalcoholic label is visible for Seasonal Citrus Spritz. No dietary claims or photography were added.
- [x] Empty category component rendered with empty test data and returned canonical recovery text. Normal dataset has no empty category.
- [x] Skip link, mobile navigation keyboard/Escape, Contact CTA, Home-to-Menu heading focus, direct Menu entry, supporting routes, and reduced-motion rendering checked.
- [x] Home regression smoke check: three featured dishes and all nine image elements remain; Home components and shared Header/Footer source were not changed.
- [x] No console errors or React warnings in the browser run.
- [x] 200% root text-size simulation at all eight widths produced no horizontal overflow.
- [ ] Native browser text zoom, screen-reader speech, physical-device testing, and Firefox/Safari/Edge coverage remain outstanding. Root text-size simulation is not native browser zoom evidence.

About and Contact remain temporary pages. No project-wide completion, field-performance result, or accessibility-conformance claim is made.


## About implementation verification

September 22, 2026, local production preview in headless Chrome. Evidence: `%TEMP%/avenrow-home-qa/about-results.json` and `about-<width>-about-<section>.png`. Browser launch initially failed automatic approval review due to a usage-limit error; the user resumed work, the retry was approved, and verification completed.

- [x] Production build and lint passed.
- [x] Direct `/about` entry, one Our Story H1, five content sections in approved DOM order, active About navigation, and exactly three loaded images.
- [x] 320, 375, 430, 768, 1024, 1280, 1440, and 1920px: no horizontal overflow; portrait no wider than 400px; Story/Chef landscapes at 3:2; disclosure 16px after the chef region.
- [x] Section screenshots captured; reviewed representative mobile, tablet, desktop crops and disclosure/Visit relationships.
- [x] Image alt contains visible scene descriptions without identifying Ethan Cole; existing WebP delivery reused.
- [x] Skip link, mobile navigation keyboard/Escape, both closing CTAs, Home-to-About route focus, and reduced-motion styles checked.
- [x] Home smoke check: nine images and three featured dishes. Menu smoke check: 18 items, Mains filtering returns five. Contact remains its placeholder.
- [x] No console errors or React warnings in the recorded run.
- [x] 200% root text-size simulation at all eight widths: no horizontal overflow.
- [ ] Native browser zoom, screen-reader speech/order audit, physical-device and additional-browser testing remain open. Text-size simulation is not native zoom evidence; no full accessibility-conformance claim is made.

No deployment or field-performance verification is claimed. Asset provenance and approved font delivery remain project-wide follow-up items.


## Contact implementation verification

Production build and ESLint pass. Headless Chrome against the local production preview verified 320, 375, 430, 768, 1024, 1280, 1440, and 1920px with no page horizontal overflow. Desktop/mobile screenshots were inspected for the approved open layout, readable fields, canonical hours, and footer separation. The form stays stacked at 768px and uses approximately 38/62 columns at 1024px, with a measured form width around 526px. No Contact photograph or package was added.

- [x] Direct /contact renders one Contact & Visit H1 and five correctly ordered controls.
- [x] Empty submission displays four inline errors and focuses Full Name; errors clear individually as corrected.
- [x] Invalid email is rejected; optional Phone may remain empty; no rigid name/phone rule or character cap is enforced.
- [x] Keyboard Enter submits single-line fields; textarea Enter creates a newline.
- [x] Valid simulation guards repeated submission and makes fields briefly read-only. Completion observed around 764ms for the 700ms timer.
- [x] Success clears values, restores editing, remains visible, and clears when a new entry begins.
- [x] No network requests occurred during submission; source review found no transmission, persistence, URL serialization, analytics, or logging of entries.
- [x] Mobile navigation opens/closes with Escape; View Menu routes correctly and route H1 receives focus.
- [x] Home/Menu/About/Contact route smoke checks pass; this pass did not edit Home/Menu/About or shared Header/Footer/SiteLayout components. New CSS selectors are Contact-scoped.
- [x] 200% root text enlargement at narrow width reflows without horizontal overflow.
- [x] Navigating away during simulation under reduced-motion emulation produces no delayed-update errors; timer cleanup is implemented.
- [x] Browser console/runtime capture reports no errors or React warnings during these checks.
- [ ] Real-device virtual keyboards, native browser zoom, screen-reader announcements, and cross-browser verification.

Evidence: temporary contact-check.mjs, contact-results.json, and contact viewport screenshots in the existing local avenrow-home-qa temporary directory. These scoped checks do not establish full accessibility certification, real message delivery, or deployment readiness. Final Site Pass remains separately authorized work.


## Final production verification - September 23, 2026

See [production report](production-report.md) for methods, measured image/bundle data, limitations, and deployment conditions.

| Status | Finding |
| --- | --- |
| PASS | Production Chrome: 40 combinations across five routes and 320/375/430/768/1024/1280/1440/1920px; no horizontal overflow, missing H1, broken loaded images, or missing alt attributes. |
| PASS | All routes checked at 844 x 390 landscape and 200% root-font enlargement at 320px. |
| PASS | Main CTA navigation and route focus; mobile disclosure/Escape/close on selection; menu category counts 3/5/3/3/4 and All 18. |
| PASS | Contact validation/correction, optional phone, keyboard submit/newline, guarded simulation, clear-after-success/reentry, no submission requests, unmount cleanup. |
| PASS | Modern browser selects WebP; separately exercised hero PNG fallback loads. Console/runtime capture clean. |
| PASS | Production build and ESLint; dependency advisory audit reports zero known vulnerabilities. |
| FIXED | Canonical/social/robots metadata now follows routes; unknown route gets noindex and no canonical. |
| FIXED | Smaller 640px hero, PNG format fallbacks, Vercel SPA config, and unsupported founding-date claim removed from current social preview. |
| FIXED | README/status synchronization and stale Not Found placeholder class cleanup. |
| MANUAL REVIEW NEEDED | Real devices/keyboards, native zoom, screen readers, Safari/Firefox, supplied asset rights. |
| NOT TESTED | Lighthouse (not installed/cached), hosted deployment behavior, live social unfurl/indexing, production field performance. |

No real form delivery, full WCAG certification, live deployment completion, or Lighthouse score is claimed. Historical unchecked release checklists above remain open unless this evidence directly verifies them.

## Post-deployment verification — September 23, 2026

| Status | Hosted finding |
| --- | --- |
| PASS | HTTPS Vercel responses for `/`, `/menu`, `/about`, `/contact`, and an unknown route returned `200` HTML with HSTS. Primary deep links returned the SPA entry rather than a Vercel 404. |
| PASS | `robots.txt`, `sitemap.xml`, social preview PNG, favicon, manifest, JavaScript, CSS, and the 640px hero WebP returned `200` with expected content types. |
| PASS | Hosted sitemap contains only the four primary routes; robots points to it. Static Home canonical uses the configured Vercel hostname. |
| FIXED IN SOURCE — REDEPLOY REQUIRED | Required page-title/OG/Twitter title values were corrected after the deployed HTML revealed an older Home title. Reverify all runtime metadata after redeployment. |
| MANUAL REVIEW NEEDED | Hosted browser console, rendered route content, responsive layouts, lazy-loading waterfall, Contact privacy lifecycle, Menu keyboard/live region, physical devices, screen readers, Firefox, Safari, native zoom, social unfurl, and hosted Lighthouse. |
| NOT TESTED | Lighthouse scores, Core Web Vitals/INP, field data, live search indexing, true HTTP 404 response, and asset-rights evidence. |

The deployed application is real and its SPA deep-link rewrite is verified at the HTTP layer. The prior local-only production evidence is retained separately; it is not represented as hosted browser evidence. See [production report](production-report.md#post-deployment-verification--september-23-2026).
