# Brand and Design Direction

Status: Planning / Pre-development. Brand personality, wordmark direction, palette, typefaces, split hero, and editorial featured-dish direction are approved. Responsive sizes and spacing remain working guidance; final layouts and assets have not been produced.

## Personality and visual principles

Avenrow Kitchen is warm, contemporary, refined, crafted, approachable, and editorial. Premium casual dining should feel elevated and inviting without becoming ceremonial, pretentious, overly luxurious, or inaccessible.

Lead with typography, photography, spacing, hierarchy, grid composition, and subtle details. Establish cuisine and atmosphere quickly; keep menu access and prices prominent. Use concise editorial sections rather than oversized decorative panels.

Avoid corporate SaaS styling, neon technology aesthetics, glassmorphism, generic restaurant templates, American-flag clichés, excessive graphics, heavy card shells, exaggerated luxury language, over-animation, scroll-jacking, WebGL spectacle, and elaborate experimental effects. Do not invent awards, press mentions, or testimonials.

## Palette

| Role | Color | Intended use |
| --- | --- | --- |
| Background / Warm Ivory | `#F3EFE7` | Main surfaces |
| Primary text / Ink | `#181816` | Headings, body, navigation |
| Brand / Olive | `#3B4536` | Primary actions, selected controls, selective dark sections |
| Accent / Clay | `#9B5A3C` | Small editorial details |
| Decorative neutral / Warm Taupe | `#B5A58E` | Nonessential rules and decoration |

This is the approved working palette. Use ivory and ink most often, olive selectively, clay sparingly, and taupe decoratively. The colors should not receive equal visual weight. Do not introduce additional brand colors during planning unless a future design review identifies a specific need.

Calculated solid-color contrast on ivory: Ink approximately 15.50:1; Olive 8.76:1; Clay 4.67:1; Taupe 2.10:1. These calculations are not a rendered-interface audit.

Warm Taupe is decorative only: do not use it for body text, placeholders, important borders, focus indicators, or essential UI states. Clay has only moderately strong contrast against ivory and passes ordinary-text contrast narrowly in this pairing; use it carefully and do not reduce its opacity. Test all final state combinations, including focus on dark surfaces.

## Typography

Use Instrument Serif for display/headings and Manrope for body/interface text. Self-host licensed WOFF2 files with minimal styles and readable fallbacks.

| Role | Typeface | Mobile | Desktop |
| --- | --- | --- | --- |
| Home display | Instrument Serif | 44–52px | 76–96px |
| Interior H1 | Instrument Serif | 40–48px | 60–72px |
| H2 | Instrument Serif | 32–38px | 44–56px |
| H3 | Instrument Serif | 24–28px | 28–34px |
| Body | Manrope | 16px | 16–18px |
| Supporting text | Manrope | 14px | 14px |
| Navigation / buttons | Manrope | 14–16px | 14–16px |
| Editorial labels | Manrope | 12–13px | 12–13px |

Typography should be one of the strongest visual elements. Use approximately 1.05–1.15 heading line height and 1.55–1.7 body line height. Keep these ranges flexible rather than locking every value to exact pixels. Use roughly 60–68 characters for body-copy line length and review intentional mobile headline wraps. Restrain display typography; giant decorative text must not impair usability.

## Wordmark and favicon

AVENROW is the finalized primary header/navigation wordmark. Kitchen can be a secondary descriptor, for example beneath AVENROW or in the full name Avenrow Kitchen. The compact mark is an A monogram, and the favicon is based on it. Keep the identity typography-led; do not create a complex illustrated logo. Final typographic styling and artwork remain future design work.

## Editorial split hero

The approved direction is an asymmetric editorial split composition. On desktop, place navigation above a large headline on the left, supporting text and actions beneath it, and a large standalone food photograph on the right. Use strong whitespace, unequal visual weights, and small Brooklyn/dinner context near the bottom. Text sits beside the image; a full-screen background photograph with text over it is not the default.

On mobile, order the wordmark/navigation, headline, supporting copy, primary CTA, secondary story link, hero image, then Brooklyn/dinner context. Do not force 100vh or full-screen behavior. These are layout relationships rather than a pixel-locked wireframe; the next review is defined in [wireframes.md](wireframes.md).

## Editorial featured dishes

Present the three dishes through large photography, clear name/price alignment, concise descriptions, whitespace, and fine separators. Optional editorial numbering such as 01, 02, and 03 can support the sequence. Avoid large rounded containers enclosing image, title, price, and copy. Each dish should feel distinct within one composition; exact arrangements remain subject to wireframe review.

## Layout and spacing

- Maximum content width: approximately 1,240px.
- Side padding: approximately 20px mobile, 32px tablet, 48px desktop.
- Section spacing: 48–64px mobile and 80–112px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 112px.
- Use mobile-first, content-driven breakpoints.
- Stack the hero and contact composition on mobile; avoid forced full-screen sections.
- Use an editorial desktop gallery and an intentional, simpler mobile sequence.
- Keep price alignment, accessible controls, and text measures more important than decorative symmetry.

These values are design guidance, not rigid implementation constraints. Maintain a lightweight system for colors, typography, spacing, containers, buttons, links, fields, image ratios, focus states, menu presentation, and shared layout. Do not introduce an enterprise token framework or extract components merely because a one-off element exists.

## UI character

| Element | Direction |
| --- | --- |
| Images | Mostly square corners or subtle 0–4px radius |
| Controls | Restrained 4–6px radius; approximately 44–48px minimum button height |
| Primary button | Olive surface with ivory text |
| Secondary action | Outline or readable text-link treatment |
| Inline links | Underline or another non-color cue |
| Focus | Visible offset outline, checked on light and dark surfaces |
| Navigation | Clear active state; intentional desktop and mobile composition |
| Menu rows | Fine separators, aligned prices, readable descriptions |
| Featured dishes | Image and typography without heavy card containers |
| Forms | Persistent labels, visible borders, readable helper/error text |
| Shadows | Minimal |

## Photography Master Direction

Aim for warm, editorial, intimate, natural, realistic, slightly cinematic imagery. The restaurant should feel busy enough to feel alive and quiet enough to feel premium. Favor contemporary American food, preparation, ingredients, cocktails, dining rooms, and table settings.

| Dimension | Direction |
| --- | --- |
| Lighting | Warm late-afternoon or evening restaurant light; soft direction and natural falloff; no harsh direct flash |
| Color | Warm neutral whites, muted earth tones, olive, walnut, cream, and charcoal; avoid strong orange/yellow grading |
| Food | Contemporary American presentation, refined but believable, realistic portions, visually readable dishes; no tiny experimental Michelin-style portions or oversized fast-food presentation |
| Camera feel | Approximately 35mm/50mm editorial feeling for environments and 50mm/85mm feeling for food; visual character, not literal EXIF requirements |
| Depth of field | Moderate; clearly readable primary subject, softly separated background; no extreme artificial blur |
| Materials | Natural wood, stone, linen, brushed metal, and ceramic tableware |
| Human presence | Hands, partial bodies, silhouettes, anonymous kitchen activity; avoid recognizable model-style portraits or implied real employee identities |

The photographic color vocabulary describes materials and light, not additional UI brand colors. F1–F3 should share lighting, tableware, grading, realism, and restaurant atmosphere while retaining distinct compositions. H1 must work independently as a right-side editorial image and allow vertical/rectangular crops; no large text-safe overlay area is required.

Avoid hyper-saturation, cheap fast-food styling, mismatched stock imagery, unrealistic AI food, and darkness that obscures the dishes. Select a coherent lighting and color family without applying one destructive crop to every image.

The complete inventory, dimensions, priorities, crop guidance, and rights requirements are in [assets.md](assets.md). No assets have been sourced or generated.

For Ethan Cole's fictional profile, prefer G2 reused as C1: hands plating, a partial body, a cook from behind, or cropped kitchen activity. Do not generate or source a recognizable portrait and present that person as Ethan Cole. Alt text describes visible activity; use the concise nearby disclosure from [content.md](content.md#about).

## Footer, location, and disclosure

Keep the footer editorial and simple: AVENROW, the four navigation links, Brooklyn context, one concise concept disclosure, and copyright. Do not build a large corporate sitemap or add social links without valid destinations. Never use placeholder links, fake usernames, or fake profiles.

Use textual Brooklyn context by default, without a street address, restaurant map pin, Google Business profile, or directions claim. A later approved generic map action would be labeled Explore Brooklyn. Put restrained disclosures in the footer, Contact demonstration, and chef profile; do not repeat large FICTIONAL, DEMO, or NOT REAL labels throughout the visual sections. Exact copy is owned by [content.md](content.md#disclosure-strategy).

## Motion

| Pattern | Proposed treatment |
| --- | --- |
| Hero text | One brief opacity/vertical reveal; no character-by-character sequence |
| Section entry | Optional 12–20px movement over 350–500ms |
| Featured stagger | Approximately 50–70ms between items |
| Image hover | At most approximately 1.02 scale on suitable pointer devices |
| Buttons / links | 150–200ms color or underline changes |
| Mobile navigation | Brief reveal without delaying access |
| Menu filtering | Immediate update or short fade; avoid large height animation |
| Route transitions | No full-page exit animation or complex route transition |

The preferred set is a brief hero reveal, selected section reveals, subtle featured stagger, subtle image hover, navigation/mobile-menu transition, and a short filtering transition. Reduce that set where useful; it is not a requirement to animate everything. Exclude dramatic parallax, scroll hijacking, character-by-character heading reveals, and 3D effects. CSS handles simple hover/focus effects; Framer Motion handles coordinated motion. Respect prefers-reduced-motion, removing unnecessary translation, scale, stagger, and smooth scrolling, and explicitly deciding whether fades should remain. Critical content must never depend on animation completion.

Reference: [Motion reduced-motion support](https://motion.dev/docs/react-use-reduced-motion).
