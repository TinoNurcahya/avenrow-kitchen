# Quality Assurance

Status: Planning / Pre-development. Checks below cover future design review, implementation, and release verification. They remain unchecked until the relevant work is performed; the application does not exist yet. Documentation updates do not count as completed visual or runtime checks.

This document owns verification tasks and future evidence. Expected behavior and budgets are defined in [requirements.md](requirements.md); exact copy is in [content.md](content.md).

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
- [ ] Subject options and final validation limits match approved content.
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
