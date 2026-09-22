# Architecture

Status: Home implementation established. The React/JSX shell, canonical featured data, routing, and Home components now exist. Supporting-page functionality and final media remain planned; the tree and later-page sections below describe the broader target, not completed features.

## Technical baseline

Use React, JavaScript, JSX, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React. Components use `.jsx`; data and utilities use `.js`. Do not introduce TypeScript or `.tsx`.

Use plain modules, local state, and a static deployment. No backend, database, fetch layer, global store, CMS, or authentication is needed. Select compatible dependency versions before scaffolding; use one documented setup rather than mixing version-specific tutorials. Choose one Framer Motion/Motion package and import convention without installing duplicate animation libraries.

The latest user authorization permits setup and Home implementation with development image placeholders before final assets and supporting-page designs. See the scoped progress record in [roadmap.md](roadmap.md). Final imagery, Menu/About/Contact designs, and deployment remain separate gates.

Current setup uses Vite 8, React 19, Tailwind 4's Vite plugin, React Router 7's data router, Framer Motion with LazyMotion/domAnimation, and Lucide icons. RouteEffects handles titles and heading focus; the router's ScrollRestoration handles new-route and Back/Forward scrolling. Only scroll positions use the router's session storage; no visitor-entered data is stored. ImageSlot supplies honest development labels now and accepts responsive media later. Font stacks use local system fallbacks until approved files arrive.

## Planned folder structure

This tree is documentation only. Create folders later only when they contain useful files.

```text
avenrow-kitchen/
├── public/                  # Favicons, shared social preview, host-specific public files
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── RouteEffects.jsx
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── shared/
│   │   ├── home/
│   │   ├── menu/
│   │   └── contact/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── data/
│   │   ├── menuData.js
│   │   ├── restaurantInfo.js
│   │   ├── navigationData.js
│   │   └── galleryData.js
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── formatCurrency.js
│   │   └── validateContact.js
│   └── main.jsx
├── docs/
├── index.html
├── package.json
└── README.md
```

No initial `services`, `store`, `api`, empty `hooks`, or About-only component directory is needed.

## Component responsibilities

| Area | Planned components | Responsibility |
| --- | --- | --- |
| Layout | SiteLayout, Header, MobileNavigation, Footer | Shared structure and navigation |
| Route behavior | RouteEffects | Coordinate route focus and scrolling |
| UI | Container, SectionHeading, ActionLink, Button, ResponsiveImage | Small set of reusable visual primitives |
| Shared content | OpeningHours; ConceptNotice only if reuse warrants it | Canonical hours; concise disclosure at the footer, Contact, and chef placements, not every section |
| Home | HomeHero, FeaturedDishes, DiningGallery, VisitSection | Editorial split hero, unboxed dishes, gallery, and combined visit information |
| Menu | MenuFilters, MenuSection, MenuItem | Category controls and structured rendering |
| Contact | ContactForm, FormField | Validation, simulation, and accessible presentation |
| Pages | HomePage, MenuPage, AboutPage, ContactPage, NotFoundPage | Compose route-specific content |

Extract for reuse, meaningful interaction, or substantial complexity. Keep short unique About sections in the page initially. Do not create components for every paragraph or divider, or a universal component with many unrelated variants.

MenuItem handles readable rows that remain complete without images. A separate featured presentation can use editorial numbering, whitespace, and separators rather than heavy card shells; both presentations read the same dish record. ActionLink renders navigation links; Button renders actions. Header uses AVENROW as the primary wordmark, and Footer remains a compact editorial composition without social placeholders.

## Data modules

| Module | Contents | Rules |
| --- | --- | --- |
| menuData.js | Ordered categories and menu records | Stable IDs, numeric USD amounts, one description per dish |
| restaurantInfo.js | Brand, location context, sample contacts, schedule, notices | One source for repeated restaurant information |
| navigationData.js | Labels, paths, display order | Reused by desktop, mobile, and footer |
| galleryData.js | Image references, order, crops, optional captions | Reference shared assets instead of duplicating files |

Menu fields: `id`, `name`, `category`, `price`, `description`, optional `image`, optional `dietary`, and `featured`. Category values use stable IDs such as `mains`; All is a filter state, not an item category. Format numeric prices as USD in the UI; current sample prices use whole dollars.

Image records should support responsive source variants, intrinsic dimensions, and crop positions. Determine alt text at the placement level because the same image can be informative in one context and redundant in another.

Store the single canonical detailed schedule from [content.md](content.md#canonical-sample-hours) with the time zone `America/New_York`; derive repeated displays from restaurantInfo rather than separate page copies. The hero uses Dinner daily from 5 PM. Do not implement an Open now calculation. Omit `socialLinks.js` and social UI until valid destinations exist; no fake profiles or placeholder links. Location defaults to textual Brooklyn context, without a street address, restaurant pin, or Google Business profile.

During planning, [content.md](content.md) owns the editorial baseline. During implementation, data modules become the runtime source of truth. Update editorial documentation in the same change when content changes. Never ship unresolved menu prices as zero or placeholder strings.

## State ownership

| Concern | State approach |
| --- | --- |
| Mobile navigation | Local open/closed state |
| Selected menu category | Local category ID, initially `all` |
| Filtered records | Derived from selected category and data; no duplicate state |
| Form values | Small local values object |
| Field errors | Local errors updated on submission and appropriate revisits |
| Form progress | `idle → validating → submitting → success`; errors are separate, and invalid input returns to editable `idle` |
| Active navigation | Derived from React Router |
| Responsive layout, hover, focus | CSS, not viewport state |
| Static hours | Data, not state |
| Reduced motion | CSS and motion-library preference support |
| Scroll history | Router support or one focused mechanism if needed |

No Redux, Zustand, global context store, or persistent browser storage. Filtering 18 records does not justify memoization without evidence.

## Routing and navigation

- Use React Router with clean browser URLs and the route map in [brief.md](brief.md#sitemap).
- Match Home exactly and expose the active page with `aria-current`.
- Close mobile navigation after selecting a destination.
- Start new-page navigation at the top and move focus to the page heading or main region.
- Preserve sensible Back/Forward scroll restoration where practical; do not reset scroll for filtering.
- Keep unknown-route recovery outside primary navigation.

The recommended mobile navigation is a disclosure beneath the header in normal flow. Expose expanded state, support Escape, manage focus return, and remove closed links from keyboard navigation. If a later approved design uses a modal overlay, it must additionally manage focus containment and background inertness.

## Contact form behavior

| Field | Required | Validation direction |
| --- | --- | --- |
| Full Name | Yes | Trimmed nonempty value; sensible length limit; accept varied names |
| Email Address | Yes | Browser-compatible email validation |
| Phone Number | No | Permissive telephone input; avoid US-only formatting rules |
| Subject | Yes | Select from a small approved set of inquiry types |
| Message | Yes | Trimmed nonempty value; proposed maximum 2,000 characters |

Submission follows `idle → validating → submitting → success`. Validating is an immediate local step, not a network operation or artificial delay; a simple local status is sufficient without a state-machine library. Show errors on submit and, when helpful, after a field has been visited. Do not show errors on untouched fields immediately. Invalid submission returns to editable idle, preserves values, associates messages with fields, and focuses the first invalid control when appropriate.

A valid submission simulates approximately 700 milliseconds of progress, prevents duplicate submissions, and displays explicit demo completion. Values exist only in temporary component memory while interacting with the form; do not transmit them, persist them, or log them. Do not simulate a fake server failure. Cancel timers when the page unmounts. Reset behavior and final field limits are content/interaction approval items.

Exact labels, messages, and the pending Subject options are in [content.md](content.md#contact-form-copy).

## Styling, images, and motion

Use the lightweight system in [brand.md](brand.md) through Tailwind and focused global styles when implementation is authorized; no enterprise token framework. Preserve the approved five-color hierarchy and serif/sans pairing. Warm Taupe is decorative only; do not use it for body text, placeholders, important borders, focus indicators, or essential states. Clay needs careful contrast treatment. Typography/container ranges remain guidance, not fixed pixel requirements.

Responsive decisions belong in mobile-first CSS, with content-driven breakpoints and image-specific focal points from [assets.md](assets.md). HomeHero places headline/support/actions left and standalone H1 right on desktop; mobile puts H1 below the actions and context after the image. No default background-photo overlay hero or forced 100vh layout. Image sourcing follows Home wireframes and slot validation, targeting 8–10 core photos with C1 reusing G2. Do not add per-item photography requirements to the Menu data contract.

Use CSS for simple hover/focus effects and Framer Motion for a restrained subset of the patterns in brand.md. Apply reduced-motion behavior explicitly. Critical content must not depend on animation completion. Exclude full-page exits, complex route transitions, scroll hijacking, dramatic parallax, character-by-character headings, and 3D effects; avoid structural animations that make filtering jump.

Start with simple page imports. Add route-level lazy loading only if production bundle evidence justifies it.

## Deployment and SEO

Select a static host that supports clean-route SPA rewrites. Direct requests to primary routes must serve the application entry. Verify deployment links, refresh, assets, and HTTPS on the actual host. No deployment is authorized in the current documentation phase.

An in-app Not Found screen does not automatically return HTTP 404. Document the limitation or address it through host configuration. Reference: [React Router SPA deployment guidance](https://reactrouter.com/how-to/spa).

Plan unique client-side page titles/descriptions plus a shared initial-HTML social preview. Do not promise route-specific bot previews without testing or approved prerendering. Canonical URLs depend on the actual domain. The proposed indexing policy and structured-data exclusions are owned by [requirements.md](requirements.md#seo-requirements).

## Risk register

| Risk | Mitigation |
| --- | --- |
| Mixed dependency-version examples | Choose compatible versions once; document the setup |
| Duplicate animation packages | Use one supported package/import convention |
| Image-heavy slow pages | Responsive variants, transfer budgets, eager hero, lazy secondary images |
| Deep links fail | Host rewrite configuration and direct-entry QA |
| SPA metadata/404 limitations | Test actual behavior and document limitations |
| Font-related layout shift | Minimal styles, suitable fallbacks, production measurement |
| Hidden content or layout jumps from motion | Prompt visibility, reduced motion, no disruptive structural effects |
| Stale form timer or duplicate submission | Cleanup and one pending simulation |
| Repeated content drifts | Shared records and synchronized editorial updates |
| False business expectations or intrusive warnings | Concise footer/Contact/chef disclosures; no fake address, pin, identity, or contact action |
| Nonexistent social destinations | Omit links until approved real destinations exist |
| Dietary claims lack evidence | Review complete ingredients or omit labels |
| Long Home/About content | Combine visit information and overlapping principles |
| Filter or editorial styling harms usability | Visible controls, clear prices, readable body type |

These are anticipated risks, not observed runtime defects.

## Technical decision record

- Confirmed constraints: JavaScript/JSX; specified focused stack; English (US)/USD; frontend only; no real transmission or persistence; shared canonical content; no operating-business claims.
- Finalized in the documentation revision: AVENROW/A identity, existing palette/typefaces, editorial split hero and unboxed dishes, concise disclosure placement, canonical hours/shorthand, no fake location/social destinations, local four-step form lifecycle with optional phone, wireframes before final assets, and SS1 screenshot ID. These are not pending approval.
- Retained working defaults: local category state, in-flow mobile navigation, wrapped mobile filters, 18-item target, shared social preview, no structured data, and noindex demo. Review layout details in wireframes and indexing at its delivery gate.
- Remaining decisions: see the single register in [roadmap.md](roadmap.md#decisions-requiring-approval). Missing menu prices, final layouts/assets, form details, and delivery choices must not be silently presented as approved or implemented.

Future decision-log entries should include a date, decision, rationale, and impact here rather than introducing a separate documentation system.
