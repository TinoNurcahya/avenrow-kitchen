# Project Brief

Status: The four-page fictional portfolio concept is implemented and visually approved. Business framing below is a fictional brief, not evidence of an operating venue or paid client work.

This document owns business context and scope. Detailed behavior belongs in [requirements](requirements.md), implementation planning in [architecture](architecture.md), and approval gates in the [roadmap](roadmap.md).

## Business context

| Item | Direction |
| --- | --- |
| Project / repository | Avenrow Kitchen / `avenrow-kitchen` |
| Industry | Restaurant / hospitality |
| Business concept | Contemporary American restaurant with seasonal influences |
| Cuisine | Modern American |
| Setting | Brooklyn, New York, United States |
| Positioning | Premium casual dining |
| Brand personality | Warm, contemporary, refined, crafted, approachable, editorial |
| Language / currency | English (US) / USD |
| Project type | Fictional portfolio concept; not paid client work |

The concept should feel elevated and commercially usable while remaining warm and approachable, without ceremonial, pretentious, or inaccessible luxury cues. It must not claim an operating address, real chef affiliation, real customer testimonials, awards, press mentions, or actual business results.

Approved identity: AVENROW is the primary wordmark, Kitchen is a secondary descriptor, and the compact mark/favicon use an A monogram. Home uses an asymmetric editorial split hero, with text and CTAs on the left and a standalone food image on the right; mobile places the image below the text and actions. Featured dishes use photography, typography, whitespace, and fine separators instead of heavy card shells.

Fictional status is disclosed concisely in the shared footer, the Contact demonstration, the chef profile, the README, and concept metadata. Large repeated warnings are not part of the visual direction. Exact disclosure copy belongs in [content.md](content.md#disclosure-strategy).

## Client-style brief

Avenrow Kitchen needs a modern, responsive website that communicates a warm but refined dining experience. Visitors should understand the cuisine, browse dishes and prices, learn the story and philosophy, and find sample hours and location information. Photography should establish the atmosphere. Navigation and forms should be comfortable on desktop, tablet, and mobile. Animation should be subtle and purposeful.

This is a frontend-only concept. The contact experience demonstrates validation and simulated submission without delivering an inquiry. There is no backend or reservation service.

## Audience and user goals

| Audience | Goal | Successful experience |
| --- | --- | --- |
| First-time visitor | Understand the restaurant concept | Cuisine, setting, and atmosphere are immediately clear |
| Menu-focused visitor | Find dishes and prices | Menu is one navigation action away; pricing is easy to scan |
| Mobile visitor | Check practical details | Sample hours and location context are easy to find |
| Brand-focused visitor | Understand the philosophy | Short editorial sections communicate the concept |
| Contact visitor | Try the demonstration | Demo status is clear before entering information |
| Potential freelance client | Assess frontend capability | Responsive layouts and interactions work consistently |
| Repository reviewer | Understand the work | Documentation explains decisions, scope, evidence, and limitations |

The primary visitor action is Explore the Menu. Secondary actions are reading the story, reviewing sample visiting information, and trying the contact demonstration. Bookings, orders, and delivered inquiries are not success metrics.

## Project goals

- Translate a realistic client brief into a coherent page structure and UI.
- Demonstrate responsive React development and polished mobile behavior.
- Use reusable components and structured menu data without premature abstraction.
- Deliver accessible navigation, controls, and form behavior.
- Combine restaurant photography, typography, spacing, and restrained motion.
- Present evidence of frontend quality honestly in the repository and eventual case study.

The portfolio audience includes clients seeking React development, restaurant and small-business websites, responsive implementation, landing pages, and design-to-code work. Do not describe this project as design-to-code delivery from an external client design unless that actually occurs.

## Scope

### In scope

- Four responsive pages with shared navigation, mobile navigation, and footer.
- Approximately 18 menu items across five categories, plus an All filter.
- Three featured dishes using the same menu records as the full menu.
- Restaurant story, philosophy, gallery, and clearly fictional chef content.
- Approximately 8–10 unique core photographs, with deliberate reuse and four gallery images by default.
- Consistent sample hours and Brooklyn location context.
- Frontend contact validation and simulated submission.
- Reduced-motion support, accessible interaction, image optimization, and basic SEO.
- A supporting unknown-route screen.
- Eventual deployment preparation, verification, documentation, and screenshots.

### Out of scope

Accounts, authentication, admin dashboards, CMS, backend frameworks, databases, reservations, ordering, shopping carts, payments, delivery, reviews, loyalty systems, and complex API integrations.

The initial release also excludes live social feeds, interactive map embeds, photo lightboxes, carousels, menu search, sorting, dietary filtering, downloadable PDF menus, analytics, marketing trackers, video backgrounds, and elaborate page transitions. These add maintenance or interaction costs without improving the core brief enough to justify them.

## Sitemap

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Introduce food, atmosphere, brand, and sample visit details |
| `/menu` | Menu | Browse dishes and prices by category |
| `/about` | About | Explain the concept, principles, and fictional chef |
| `/contact` | Contact | Present sample details and the contact demonstration |
| Unmatched path | Not Found | Help visitors recover to Home or Menu |

The 404 screen is not a fifth primary navigation item.

## Constraints

- Use the specified React, JavaScript/JSX, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React stack during future implementation.
- React files use `.jsx`, not `.tsx`. Do not introduce TypeScript.
- Do not add Redux, Zustand, Next.js, Three.js, WebGL, GSAP systems, or unnecessary dependencies.
- All visitor-facing copy uses English (US), and all menu prices use USD.
- Use textual Brooklyn context; no street address, restaurant map pin, Google Business profile, chef identity impersonation, or usable restaurant contact service may be invented. Social links are absent until valid destinations exist.
- Image provenance and licensing must be recorded before use.
- Current authorization covers Markdown documentation only. Development requires explicit authorization.

The next design step is the low-fidelity Home desktop and mobile wireframe, not all four pages at once. Review that direction, validate asset slots, and refine composition before sourcing/generating final images. See [wireframes.md](wireframes.md) and the revised [roadmap](roadmap.md) for sequencing; do not begin wireframe work without authorization.

## Success criteria and portfolio positioning

The result should resemble a polished commercial restaurant frontend: clear hierarchy, readable menus, intentional mobile layouts, consistent photography, and reliable interactions. Quality must be assessed against approved layouts and the [acceptance criteria](requirements.md#acceptance-criteria), not price claims or a Lighthouse score alone.

The eventual README and case study should explain the brief, decisions, implementation, validation, and limitations. Screenshots must depict the actual deployed build. Never claim commissioned work, real business outcomes, or verification that has not occurred.
