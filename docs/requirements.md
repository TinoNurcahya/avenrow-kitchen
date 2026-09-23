# Requirements

Status: The four primary pages are implemented and visually approved. This document preserves requirements and historical planning gates; current verification and release limitations are recorded in production-report.md and qa.md.

This document owns required behavior and acceptance criteria. Exact website wording belongs in [content](content.md), visual values in [brand](brand.md), technical mechanisms in [architecture](architecture.md), and execution evidence in [QA](qa.md).

## Global functional requirements

- **F-01:** Provide Home, Menu, About, and Contact at `/`, `/menu`, `/about`, and `/contact`.
- **F-02:** Use AVENROW as the primary header/navigation wordmark and share consistent navigation and a simple editorial footer. Include one concise footer concept disclosure, with contextual Contact and chef notices; do not repeat large warning labels throughout visual sections.
- **F-03:** Use links for navigation and buttons for actions. Every visible action must have a working, accurately labeled destination or behavior.
- **F-04:** Show active navigation and support keyboard navigation, direct route entry, refresh, and browser history.
- **F-05:** Provide an unmatched-route recovery screen with Home and Menu links.
- **F-06:** Use canonical data for repeated prices, descriptions, contact details, and hours.
- **F-07:** Do not create real form submissions, accounts, reservations, ordering, payment, or restaurant contact services.
- **F-08:** Omit social links until valid destinations exist. No fake profiles, usernames, `#` destinations, or `javascript:void(0)` links.

## Design workflow requirements

The next design deliverable is the low-fidelity Home desktop and mobile wireframe only. Use [wireframes.md](wireframes.md) as its plan; creating the actual wireframes requires authorization. Review both layouts before validating asset slots, refining their composition, and sourcing/generating final assets. P0 approval concerns subject, composition, aspect ratio, and role, not having final images before wireframes.

Follow [roadmap.md](roadmap.md): establish Home with approved assets before wireframing Menu/About/Contact; initialize the application only in Phase 7. Target approximately 8–10 unique core photos, with C1 preferably reusing G2. Keep the design system proportional to four pages.

## Page requirements

### Home

Order: header; hero; featured dishes; story introduction; philosophy; dining gallery; combined visit information; footer.

- Hero uses the approved asymmetric editorial split direction: large headline and supporting text/actions on the left, standalone food image H1 on the right, and small context near the bottom. Use strong whitespace; do not default to a full-screen background image with overlaid text.
- On mobile, order header/wordmark, headline, supporting copy, Explore the Menu, Our Story, hero image, then Brooklyn/dinner context. Avoid forced 100vh behavior.
- Use Brooklyn, New York and the canonical shorthand Dinner daily from 5 PM. Detailed hours come from the single content/data schedule.
- Feature three dishes with image, name, description, and USD price, followed by View Full Menu. Use editorial composition, whitespace, fine separators, and optional numbering; no generic large rounded card shells.
- Use a short story introduction with an editorial image and About link.
- Present three concise principles, avoiding oversized individual panels on mobile.
- Start with four gallery images; expand to six only if they improve the story.
- Combine opening hours and location context into one practical section.
- Use textual Brooklyn context by default. Do not invent a street address, restaurant map pin, Google Business profile, or restaurant directions. A later approved generic map link uses Explore Brooklyn.
- Keep the footer compact: AVENROW, four navigation links, Brooklyn context, concept disclosure, and copyright. No corporate sitemap or social placeholders.

### Menu

- Present a compact title, introduction, and a USD price note. The shared footer covers fictional status; a repeated section-level fiction warning is unnecessary.
- Provide All, Starters, Mains, Sides, Desserts, and Drinks filters.
- Default to All, retaining category headings and stable category order.
- Target 18 items: three starters, five mains, three sides, three desserts, and four drinks. Seven items still require completed content and prices.
- Keep names, descriptions, category hierarchy, and prices visible without hover. The menu must remain understandable with all dish photography removed; F1–F3 may be reused selectively, with no image requirement for every item.
- Filtering shows matching items without artificial loading or automatic scrolling. Focus stays on the activated control, and the result count is announced politely.
- A selected empty category retains its controls and shows the canonical empty-state message.
- Dietary labels are optional and require ingredient review. Do not add dietary filtering.
- Do not make ordinary menu rows clickable when there is no destination or action.

### About

- Include an Our Story introduction, concise narrative, cooking/hospitality explanation, fictional chef introduction, cohesive principles section, large editorial image, and View Menu CTA.
- Home provides the teaser; About provides more detail without becoming a wall of text.
- Combine overlapping philosophy and principles content.
- Keep Ethan Cole, Executive Chef, with one concise nearby fiction disclosure from [content.md](content.md#about). Do not invent awards, employers, press, or professional credentials.
- Prefer anonymous G2 imagery reused in C1. Do not source or generate a recognizable portrait and present the person as Ethan Cole; alt text describes the visible kitchen activity.

### Contact

- Use the concise Contact demonstration notice from [content.md](content.md#contact-form-copy) once, positioned so the sample details and form share its context and it is visible before input. Do not add a second large warning above the details.
- Display the canonical example email and phone as noninteractive information, with their sample nature understandable from surrounding demonstration context. They are not working customer channels.
- Use a two-column details/form arrangement when space permits and a single-column mobile layout with details first.
- Include Full Name, Email Address, optional Phone Number, Subject, and Message.
- Validate required fields, preserve invalid values, associate errors with fields, and focus the first invalid field on submission.
- Follow `idle → validating → submitting → success` for valid input. Validation is local and immediate; invalid input returns to an editable state with values preserved, accessible errors, and first-invalid-field focus when appropriate. Do not send a network request, persist values, or fake email delivery.
- Prevent duplicate submission. Cancel pending simulated work on navigation away.
- Explain that messages are not sent or stored both before input and after completion. Do not simulate a fictitious server failure.

## Information hierarchy

Answer visitor questions in this order: cuisine and setting; food and atmosphere; menu and prices; story; sample visit details; contact-demo behavior.

Use one clear H1 per page, H2s for major sections, and H3s for subordinate topics or dishes. Choose heading levels semantically. Keep body paragraphs focused and descriptions concrete. Essential menu information must never require animation, hover, or image recognition.

## Responsive requirements

- Verify every primary route at 375, 430, 768, 1024, and 1440px, including relevant interaction states.
- Use content-driven, mobile-first breakpoints; test widths do not require separate layouts at every width.
- Test 320px reflow, 200% text zoom, and landscape orientation.
- Prevent page-level horizontal overflow, clipped controls, overlapping prices, and off-screen form feedback.
- Stack hero text/image, featured dishes, and the contact layout on narrow screens. Do not force full-viewport hero heights.
- Wrap category controls on mobile so every category remains discoverable.
- Keep menu prices aligned without squeezing descriptions.
- Review heading wraps, spacing, and image focal points for each layout.
- Keep footer links visible without unnecessary accordion interaction.
- Use comfortable touch controls and avoid interactions that depend on hover.

## Accessibility requirements

Target WCAG 2.2 AA practices with manual verification, not an unsupported conformance claim.

- Use semantic landmarks and a visible-on-focus skip link.
- Provide logical reading order, visible focus, correct control semantics, and meaningful accessible names.
- Use at least 4.5:1 contrast for ordinary text, 3:1 for large text, and 3:1 for meaningful control boundaries/states where applicable.
- Preserve the approved five-color hierarchy. Warm Taupe is decorative only, never body text, placeholders, important borders, focus indicators, or essential states; use Clay carefully. Do not add brand colors without a specific need identified by a future design review.
- Use a 44px project target for touch controls. WCAG 2.2 AA's 24px target-size criterion has exceptions; 44px is the project's comfort target.
- Use labels rather than placeholder-only fields, suitable autocomplete, field-associated errors, and textual error cues.
- Announce filter results and submission status politely without excessive repetition.
- Hide decorative icons from assistive technology and give informative images contextual alternatives.
- Ensure hidden mobile-navigation links cannot receive focus. Support Escape and appropriate focus return.
- Coordinate route-change focus with scrolling. Avoid trapping focus outside a modal context.
- Remove unnecessary movement for reduced-motion users, including smooth scrolling when applicable.

Reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Performance requirements

Use optimized responsive images, reserved image dimensions, below-the-fold lazy loading, minimal font styles, and only needed icons. Load the likely hero/LCP image eagerly; do not download separate desktop and mobile images unnecessarily. Avoid embeds, video backgrounds, trackers, and animation of layout dimensions.

| Budget or measurement | Proposed target |
| --- | --- |
| Mobile hero | Approximately 150–250 KB |
| Desktop hero | Approximately 250–400 KB |
| Ordinary content image | Approximately 60–140 KB |
| Initial mobile route transfer | Aim below 1 MB |
| Initial compressed JavaScript | Aim around or below 200 KB; inspect production output |
| Lighthouse mobile performance | Target 90+ under recorded, repeatable conditions |
| LCP / CLS / INP | ≤2.5 seconds / ≤0.1 / ≤200 milliseconds |

These are proposed budgets, not measured results. Preserve acceptable visual quality. Field Core Web Vitals assessment uses the 75th percentile; Lighthouse alone does not establish real-user INP or field performance. Record lab measurements and field evidence separately. A low-traffic portfolio may have no field dataset.

Reference: [Web Vitals](https://web.dev/articles/vitals).

## SEO requirements

- Use an English document language, unique descriptive titles, descriptions, semantic headings, and readable links.
- Include favicon assets and a shared concept-labeled Open Graph image.
- Set canonical URLs only after the actual deployment domain is selected.
- Proposed default: noindex the restaurant demonstration and index the real developer portfolio case study. Approval is still required.
- Use a shared social preview in the initial HTML. Do not promise unique route previews without testing or an approved prerendering step.
- Default to no structured-data markup. Do not publish Restaurant/LocalBusiness markup, invented coordinates, ratings, reviews, or operating-business claims.
- Document the client-rendered SPA's crawler and HTTP-404 limitations.

Reference: [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Animation requirements

Use a restrained subset of brief hero reveal, selected section reveals, featured-dish stagger, image hover, navigation/mobile-menu transition, and short menu filtering from [brand.md](brand.md#motion). Keep critical content available independently of animation completion. Respect prefers-reduced-motion. Exclude full-page exits, complex route transitions, scroll hijacking, dramatic parallax, character-by-character headings, and 3D effects. Filtering must not create disruptive height changes.

## Edge cases

| Case | Required handling |
| --- | --- |
| Invalid route | Show recovery links; document host-level HTTP status behavior |
| Deep-link refresh | Serve the application entry correctly on the selected host |
| Empty category | Preserve filter controls and show the empty-state copy |
| Long names or descriptions | Wrap without covering the price or causing overflow |
| Missing menu image | Keep the complete text row usable; optional images are not required data |
| Broken image | Preserve layout and useful alternate information; fix broken assets before release |
| Invalid form | Preserve values, show associated errors, focus first invalid field |
| Repeated submit | Allow only one pending simulation |
| Route change during simulation | Cancel the timer; do not announce stale success |
| Navigation open during resize | No hidden focus or stale overlay; return to the correct layout |
| Reduced motion | Maintain all information and controls without movement dependencies |
| Unavailable fonts | Readable fallback typography without severe layout movement |

## Acceptance criteria

- **AC-01:** All four routes, active navigation, history behavior, direct entry, refresh, and recovery screen work on the chosen deployment.
- **AC-02:** The All filter displays the completed 18-item menu in stable order; each category filters correctly, featured records match canonical content, and menu information remains understandable without dish photography.
- **AC-03:** Keyboard and touch users can operate navigation, filters, and the form with understandable focus and feedback.
- **AC-04:** Invalid form submission preserves values and identifies errors; valid submission shows progress and explicitly simulated completion without transmission, persistence, or logging of entered data.
- **AC-05:** Required widths, zoom, and reflow checks show no unusable overflow, clipped content, or broken price/image layouts.
- **AC-06:** Reduced motion, contrast, labels, image alternatives, and route focus are manually reviewed; automated findings are resolved or documented accurately.
- **AC-07:** Production checks pass, console and assets are clean, and performance measurements are recorded against targets.
- **AC-08:** Disclosures, metadata, links, chef imagery, screenshots, and documentation do not imply a real operating restaurant or paid client engagement.
- **AC-09:** Home follows the approved editorial split hero and unboxed featured-dish direction; AVENROW is primary, photography follows the master direction, and disclosures remain concise and strategically placed.

## Definition of done

The implementation is done when all acceptance criteria pass; reviewed Home wireframes and validated asset slots informed the visual system; all pages match that system; missing content and asset rights are resolved; deployment supports primary deep links; and setup instructions, screenshots, provenance, verification evidence, and known limitations are documented.

No unresolved issue may block reading the menu, navigating, or completing the demonstration form. Browser observations, build/test results, and field performance claims must remain distinct. A Lighthouse score alone does not establish completion.
