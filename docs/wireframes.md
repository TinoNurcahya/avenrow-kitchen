# Wireframe Plan

## Purpose

Status: Planning / Pre-development. This document plans the next design phase; it is not an actual wireframe, mockup, or implemented UI. No HTML, JSX, CSS, or image artifact is created here.

Low-fidelity wireframes will validate content hierarchy, layout, image roles, responsive behavior, section order, and CTA hierarchy before final asset production and implementation. Start only with Home desktop and Home mobile. Menu, About, and Contact wireframes follow later, after Home's visual language is established.

Use the approved direction in [brand.md](brand.md), canonical copy in [content.md](content.md), and the candidate image slots in [assets.md](assets.md). Final photography is not required for this low-fidelity stage. Do not lock exact pixels or redesign the approved identity, palette, and hero concept.

## Home — Desktop

| Order | Section | Intended low-fidelity relationships |
| --- | --- | --- |
| 1 | Header | AVENROW anchors the identity; Home, Menu, About, and Contact remain clear, with View Menu as the primary navigation CTA. Align with the shared content edges. |
| 2 | Editorial split hero | Large headline on the left, supporting copy and Explore the Menu beneath, then Our Story. Standalone H1 food photograph on the right. Use asymmetry and generous whitespace; place Brooklyn/dinner context near the bottom. No default full-screen background image or text overlay. |
| 3 | Featured dishes | Three editorial food presentations using F1–F3, with optional sequence numbers, large imagery, name/price alignment, concise descriptions, and fine separators. No heavy rounded card shells. End with View Full Menu. |
| 4 | Story introduction | Short narrative paired with I1 interior imagery in an editorial split; lead naturally to Our Story. Avoid duplicating the full About narrative. |
| 5 | Philosophy | Three concise principles with clear alignment and comfortable spacing; avoid turning each into a large isolated panel. |
| 6 | Dining gallery | Four purposeful images by default, using G1–G4 in a varied but coherent composition. Check that each adds something distinct; G5/G6 remain optional later. |
| 7 | Visit information | Combine canonical opening hours with textual Brooklyn context and Contact Us. Keep practical information easy to scan; no fake address, business pin, or directions. |
| 8 | Footer | Simple AVENROW identity, four navigation links, Brooklyn context, one concise concept disclosure, and copyright. No social placeholders or large corporate sitemap. |

Review relative visual weight, text measures, whitespace, and the rhythm between food and narrative. Treat image slots as roles to validate, not a mandate to produce every candidate photograph. H1 must complement the left-side type as an independent rectangular photograph with flexible cropping, not a text-overlay backdrop.

## Home — Mobile

Hero sequence:

1. AVENROW wordmark and mobile navigation.
2. Headline.
3. Supporting copy.
4. Explore the Menu.
5. Our Story.
6. Hero photograph.
7. Brooklyn, New York / Dinner daily from 5 PM.

Review this sequence at representative narrow widths with natural content height; do not force 100vh or shrink a desktop composition uniformly. Headline line breaks must be intentional, and both actions must be easy to find before the image.

| Section | Mobile restructuring |
| --- | --- |
| Header | Compact AVENROW with accessible navigation toggle; retain the working in-flow disclosure approach for review. |
| Split hero | Stack in the sequence above. Consider an art-directed 4:5 H1 crop below the actions, with context after it. |
| Featured dishes | Stack the three editorial presentations. Keep name and price readable, allow descriptions to wrap, and use spacing/separators instead of boxes. |
| Story introduction | Stack concise text, imagery, and story action in a logical reading order; avoid an oversized image or text section. |
| Philosophy | Present short sequential principles without three screen-height panels. |
| Dining gallery | Use a clear four-image sequence with reviewed crops and consistent gaps, avoiding an awkward compressed desktop mosaic. |
| Visit information | Stack hours and Brooklyn context so both remain discoverable; keep Contact Us easy to reach. |
| Footer | Keep all navigation visible, followed by concise location/disclosure/copyright content; no accordion or social placeholders. |

Use the existing responsive test guidance rather than inventing separate layouts for every width. The approximate container/padding/type ranges remain flexible. The first wireframe review concerns Home only; full browser, reflow, zoom, and implementation QA occur later.

## Wireframe Validation Questions

- Is menu access obvious in the header, hero, and featured section?
- Does the hero communicate restaurant character immediately?
- Does the approved split hero translate naturally to mobile widths?
- Do the headline, primary CTA, and story link retain clear hierarchy?
- Are featured dishes distinctive without generic cards?
- Is the homepage too long, or are any sections repeating the same message?
- Are opening hours and Brooklyn context discoverable?
- Are all planned photography slots necessary, and can compatible uses be merged?
- Does the gallery add atmosphere or useful storytelling rather than fill space?
- Does each section have a clear purpose and onward action where appropriate?
- Does H1 work independently without needing a text-safe overlay area?
- Can the final inventory stay near 8–10 unique photos, with C1 reusing G2?
- Is the footer disclosure readable without interrupting the editorial experience?

## Approval Gate

**Do not begin final asset generation or React implementation until Home desktop and mobile wireframe direction has been reviewed.** Final asset sourcing also waits for that review and the subsequent asset-slot validation.

Review is followed by approval of slot subject, composition, aspect ratio, and role, then visual refinement before sourcing/generation. Project setup still waits until Phase 7 of [roadmap.md](roadmap.md); wireframe review alone does not authorize application development.

Do not create the actual Home desktop/mobile wireframes until explicitly authorized. The next step is to review this plan and create those low-fidelity Home wireframes under that authorization.
