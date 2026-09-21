# Development Roadmap

Status: Planning / Pre-development. The blueprint and approved revision decisions are documented. No wireframe, asset production, project setup, implementation, runtime QA, or deployment has been performed.

This roadmap is the authoritative sequence for future work. The current task authorizes documentation updates only. Do not begin the Home wireframe itself until explicitly authorized.

## Finalized direction

The revision approves AVENROW as the primary wordmark, the A monogram/favicon direction, the existing palette and typefaces, the editorial split hero, unboxed featured dishes, the photography master direction, restrained motion, concise fiction disclosures, canonical hours and hero shorthand, textual Brooklyn context, no fake social/location destinations, and the local contact demonstration with optional phone.

The asset target is approximately 8–10 unique core photographs, with C1 preferably reusing G2 and SS1 identifying portfolio screenshots. P0 is about approving subject, composition, aspect ratio, and role before final visual design; final images are not a prerequisite for low-fidelity wireframes. Do not reopen these decisions as unanswered brand questions.

## Decisions requiring approval

Only the remaining content, design artifacts, and delivery details need review. Items resolved above are not pending.

| ID | Remaining decision | Current position | Review point |
| --- | --- | --- | --- |
| R-01 | Seven additional menu records | Three sides and four drinks still need final names, descriptions, and USD prices; preserve existing canonical featured records | Finalize for supporting-page content review, before Menu implementation |
| R-02 | Remaining supporting copy | Review unfinished About/supporting copy and metadata; keep fixed hero wording, hours, and disclosure wording | Corresponding page review |
| R-03 | Form details | Approve Subject options, exact length limits, and reset/retry presentation; field set, optional phone, and four-step demo lifecycle are fixed | Contact wireframe, before implementation |
| R-04 | Actual Home layouts | Review desktop/mobile low-fidelity relationships, mobile navigation, section length, and editorial dish composition within the approved direction | Phase 2 |
| R-05 | Asset slot and source choices | Validate ratios, necessity, reuse, final files, provenance, and rights; no identity portrait for C1 | Phases 3–4 |
| R-06 | Final visual treatment and supporting wireframes | Review typography rendering, crops, controls, and spacing; keep the approved palette/hero/wordmark | Phases 5–6 |
| R-07 | Indexing policy | Retained recommendation: noindex standalone demo, index the real portfolio case study; shared initial-HTML social preview | Before deployment |
| R-08 | Host and domain | Static host with clean-route SPA rewrites; not selected | Before deployment |
| R-09 | Browser coverage and measured budgets | Retain proposed browser matrix and performance targets; agree practical coverage and record unavailable devices | Before final QA |

Dietary labels remain omitted unless ingredient assumptions are reviewed; social links and a map action remain absent by default. These omissions do not block Home wireframing. A later generic map action would use Explore Brooklyn.

Compatible dependency versions and one Framer Motion/Motion package convention are technical selections to document before Phase 7, not a reason to restart brand planning.

## Asset workflow and phase relationship

Planning → Low-fidelity wireframe → Asset slot validation → Visual direction refinement → Asset sourcing / generation → High-fidelity implementation → Responsive crop QA.

Phase 3 includes slot-level visual refinement before production. Phase 5 then uses approved assets to validate the high-level Home composition; it does not require generating assets before the initial wireframes. Supporting-page slots first receive a provisional necessity/reuse check after Home, then a detailed review in Phase 6. If a later slot changes, repeat validation before producing only the affected asset.

## Phase 0 — Planning and documentation

**Objective:** Maintain one consistent project source.

**Dependencies:** Existing blueprint and the approved revision instructions.

**Tasks:** Update the existing documents, record finalized decisions, retain genuine content gaps, and create the Home-only wireframe plan.

**Completion criteria:** Documentation is consistent, linked, and clear about current authorization. This phase does not create any actual wireframe, asset, or application.

## Phase 1 — Brand direction approval

**Objective:** Confirm the documented direction is ready to guide wireframes.

**Dependencies:** Phase 0.

**Tasks:** Check the already-approved wordmark, palette, typography pairing, split hero, editorial dishes, photography rules, and disclosure strategy against brand.md. Keep size/spacing ranges flexible.

**Completion criteria:** Approved direction is reflected consistently, with no need to reselect the palette or hero concept. Artifact-level visual review remains ahead; this is not approval of unseen layouts.

## Phase 2 — Low-fidelity wireframes

**Objective:** Validate Home hierarchy and desktop/mobile layout before final assets.

**Dependencies:** Phase 1 and explicit authorization to create the wireframes.

**Tasks:** Create only Home desktop and Home mobile using [wireframes.md](wireframes.md). Review section order, CTA hierarchy, the split-to-stacked hero, editorial featured dishes, image roles, page length, and visit-information discovery. Do not wireframe all four pages now.

**Completion criteria:** Home desktop/mobile direction has been reviewed and layout issues recorded or resolved. Final photography need not exist yet.

## Phase 3 — Asset slot validation

**Objective:** Make the inventory follow the reviewed layout.

**Dependencies:** Reviewed Phase 2 Home wireframes.

**Tasks:** Check whether every planned slot remains necessary; validate Home slots concretely and review future-page slots provisionally. Refine composition, ratios, crop needs, and reuse before production. Approve P0 subject/composition/ratio/role, keep the 8–10-photo target, and prefer G2 for C1.

**Completion criteria:** Approved slot specifications and production list; unnecessary slots merged or removed; no final image demanded merely to start a low-fidelity wireframe.

## Phase 4 — Photography / visual asset production

**Objective:** Produce only approved, purposeful assets.

**Dependencies:** Phase 3 slot approval and authorization for sourcing/generation.

**Tasks:** Source or generate approved imagery using the photography master direction; prepare approved wordmark/monogram/font assets as needed; record rights and provenance. Review realism, F1–F3 family consistency, H1 crop flexibility, and anonymous chef activity. Do not add photographs just to fill space.

**Completion criteria:** Assets needed for the Home visual review are approved and usable. P1 assets must be ready before the corresponding page's final implementation/polish; SS1 remains post-implementation. Revalidate any changed slot before additional production.

## Phase 5 — High-level Home visual direction

**Objective:** Test the approved composition with real/approved assets.

**Dependencies:** Reviewed Home wireframes and the relevant Phase 4 assets.

**Tasks:** Validate typography, color, whitespace, image treatment, editorial dish presentation, restrained disclosure, and desktop/mobile composition. This is visual design review, not React implementation.

**Completion criteria:** Home's visual language is reviewed with actual approved imagery; responsive crop intent and shared visual rules are clear.

## Phase 6 — Menu / About / Contact wireframes

**Objective:** Extend the established Home language to the remaining pages.

**Dependencies:** Phase 5 Home direction.

**Tasks:** Wireframe Menu, About, and Contact using the shared language. Resolve R-01–R-03 content gaps for the relevant pages. Verify a primarily typographic menu, merged About principles, anonymous chef imagery, practical information, and the complete form lifecycle. Recheck supporting-page image slots and reuse before producing any changed/new asset.

**Completion criteria:** Supporting-page wireframes and interaction states are reviewed; outstanding content is resolved before its implementation; no new visual system is invented for another page.

## Phase 7 — Project setup

**Objective:** Initialize the approved implementation stack, for the first time.

**Dependencies:** Phases 0–6 and explicit authorization to begin application development.

**Tasks:** Initialize React, Vite, JavaScript/JSX, Tailwind CSS, React Router, Framer Motion, and Lucide React. Select compatible versions, use .jsx components and .js data/utilities, and establish only necessary project tooling.

**Completion criteria:** Minimal approved scaffold and initial build/lint checks work, with no TypeScript/TSX or excluded technology. No package installation or scaffold belongs to earlier phases.

## Phase 8 — Global foundation

**Objective:** Establish shared layout, data, routing, and accessibility.

**Dependencies:** Phase 7.

**Tasks:** Build the lightweight design system, containers, AVENROW header, mobile navigation, simple footer, route structure, skip link, route focus/scroll behavior, 404 recovery, and canonical data modules.

**Completion criteria:** Shared shell and primary routes work responsively and by keyboard; repeated content has one runtime source.

## Phase 9 — Menu implementation

**Objective:** Complete the central information experience first.

**Dependencies:** Phase 8 and complete approved menu content.

**Tasks:** Render the 18-item menu, categories, prices, filters, counts, selected states, and empty-state behavior. Keep images optional and use meaningful behavior checks.

**Completion criteria:** All/category views are correct; focus and touch behavior work; menu information remains complete with photography removed.

## Phase 10 — Home implementation

**Objective:** Implement the established Home visual direction.

**Dependencies:** Shared foundation, canonical Menu data, and approved Home assets/design.

**Tasks:** Build the split hero, unboxed featured dishes, story, philosophy, four-image gallery, combined visit information, and footer. Reuse canonical dish records and hours, and review responsive crops.

**Completion criteria:** Home follows the reviewed desktop/mobile composition, with correct CTAs, practical context, and restrained disclosure.

## Phase 11 — About implementation

**Objective:** Communicate the brand through concise narrative and imagery.

**Dependencies:** Shared foundation, approved About wireframe/copy, and required imagery.

**Tasks:** Build story, cohesive principles, Ethan Cole profile with one concise fiction note, anonymous C1 imagery preferably reused from G2, editorial image, and Menu CTA.

**Completion criteria:** About is responsive, coherent with Home, and free of invented credentials or identifiable-person impersonation.

## Phase 12 — Contact implementation

**Objective:** Deliver accessible local demonstration behavior.

**Dependencies:** Shared foundation, approved Contact wireframe, canonical details, and resolved form rules.

**Tasks:** Build details/hours, one concise demonstration notice, required fields plus optional phone, and idle → validating → submitting → success. Preserve invalid values, associate errors, focus appropriately, prevent duplicates, and clean up timers.

**Completion criteria:** Contact works without network submission, persistence, fake email delivery, or artificial server failures; completion explicitly states that nothing was sent or stored.

## Phase 13 — Motion and interaction polish

**Objective:** Add only useful, restrained motion and finish interaction details.

**Dependencies:** All four pages implemented.

**Tasks:** Apply the selected reveal/stagger/hover/navigation/filter patterns, reduced-motion behavior, focus handling, and loading/status feedback. Remove motion that delays access or causes layout jumps.

**Completion criteria:** Interactions remain usable without animation; no full-page exits, complex route transitions, dramatic parallax, or scroll hijacking.

## Phase 14 — Responsive / accessibility QA

**Objective:** Verify layouts and core interactions across the agreed matrix.

**Dependencies:** Phase 13 production candidate.

**Tasks:** Execute responsive, functional, browser, keyboard, screen-reader, contrast, zoom/reflow, and reduced-motion checks in [qa.md](qa.md). Validate image crops and correct failures.

**Completion criteria:** Core flows pass at the target widths and supported environments; evidence and unavailable coverage are recorded honestly.

## Phase 15 — Performance / SEO / deployment

**Objective:** Verify and publish the production candidate when authorized.

**Dependencies:** Phase 14, host/domain selection, indexing decision, and deployment authorization.

**Tasks:** Optimize images/fonts and inspect bundles; record performance measurements; configure metadata, shared social preview, favicon, canonicals, indexing, and SPA rewrites. Verify build/lint/console health, deploy, and test HTTPS, direct routes, refresh, and assets. Recheck affected responsive/accessibility behavior after material changes.

**Completion criteria:** Deployment works, performance and SEO limits are documented, and no core usability issue remains. Do not substitute a Lighthouse score for complete QA.

## Phase 16 — Portfolio presentation

**Objective:** Present the actual work and verification honestly.

**Dependencies:** Verified deployment and final implementation.

**Tasks:** Capture SS1 desktop/mobile screenshots, update README with actual setup/demo/features/results, finish provenance and QA evidence, and explain decisions and limitations without fabricated client metrics.

**Completion criteria:** Screenshots and documentation match the release; the full [definition of done](requirements.md#definition-of-done) is satisfied.

## Next step

Review and create the low-fidelity Home desktop + mobile wireframe once explicitly authorized. Do not begin it as part of this documentation revision.
