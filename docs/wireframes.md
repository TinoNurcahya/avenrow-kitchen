# Home Wireframe

**Current status update:** The user has now confirmed that the implemented Home page is complete and visually approved. The Home specification and unchecked draft checklist below are retained as historical planning records, not current blockers. The implemented Home is the visual reference for subsequent pages. The [Menu Wireframe](#menu-wireframe) below is a new, unapproved documentation-only proposal; it does not authorize Menu implementation.

Status: All four page wireframes were approved and implemented. The diagrams and rationale below preserve historical design decisions. Current implementation/QA status is in production-report.md; earlier pending-review wording is historical, not a new approval gate.

## Purpose and source of truth

Validate hierarchy, section order, layout relationships, CTA placement, image roles, editorial rhythm, content density, and approximate proportions for Home only. Menu, About, and Contact appear only as navigation destinations; their layouts are not designed here.

Source documents: [brief](brief.md), [requirements](requirements.md), [brand](brand.md), [canonical content](content.md), and [asset inventory](assets.md). Exact copy, prices, and hours below are deliberate excerpts to review their fit; content.md remains the editorial source of truth. All visitor-facing wording is English (US), and prices are USD. Keep the existing brand direction without selecting final colors, photography, effects, or exact pixel values in this pass.

Diagram conventions:

- Boxes outline page regions or image slots for discussion; they do not prescribe visible borders, cards, or containers.
- [Primary action] indicates an action's relative emphasis, not its final visual styling.
- Arrow labels indicate navigation links, not interactive behavior inside this document.
- Asset H1 means the hero photograph; it is distinct from the page's single semantic H1 heading.
- Diagrams are approximate and not to scale. Line breaks demonstrate hierarchy, not mandatory browser wrapping.
- This is a design evaluation, not browser evidence: above-the-fold placement, final page height, typography fit, and crops require later rendered verification.

## Desktop

Use a capped content region, approximately the existing 1,240px working maximum, centered within wider screens. Align header, major section headings, visit information, and footer to consistent edges. Use content-driven transitions rather than five different designs.

The proposed reading sequence remains:

1. Header.
2. Editorial split hero.
3. Featured dishes.
4. Story introduction.
5. Philosophy.
6. Dining gallery.
7. Visit information.
8. Footer.

### Desktop overview

The [complete desktop sheet](#home-desktop-complete-page) follows the section and interaction notes below. It shows all eight sections with canonical copy, prices, hours, and disclosure; the notes define the relationships that its approximate proportions represent.

### 1. Header

| Aspect | Specification |
| --- | --- |
| Purpose | Establish identity and direct access to the four pages, with Menu most prominent. |
| Approximate composition | One compact horizontal row: AVENROW left; navigation and View Menu right. Use a modest gap between the ordinary Menu link and the emphasized View Menu action, without a utility bar or dropdowns. |
| Content hierarchy | Wordmark first, readable primary navigation second, View Menu as the primary action. Home receives a quiet active-page cue. |
| Image slot | None. AVENROW is a typography-led identity, not a new illustrated logo. |
| CTA placement | View Menu at the row's right edge, linking to /menu; the ordinary Menu link remains in the navigation set. |
| Relative visual weight | Low-height opening band. The header is prominent enough to orient visitors but gives the largest visual weight to the hero. |
| Relationship to adjacent section | Share the hero's outer alignment. Use a compact separation so visitors reach the message immediately. |
| Responsive considerations | Switch the complete navigation group to the mobile disclosure before labels or controls become crowded. Do not truncate labels or progressively hide individual destinations. Review a normal-flow, non-sticky header for this first wireframe; sticky behavior is not required. |

### 2. Editorial split hero

| Aspect | Specification |
| --- | --- |
| Purpose | Communicate the cuisine, social dining character, and primary menu action immediately. |
| Approximate composition | Start near a 45/55 copy-to-image balance after allowing a generous gutter. Permit movement toward 40/60 only if the headline and controls retain comfortable width. Align the image near the headline's upper edge; place context beneath the copy/actions near the bottom of the left region. |
| Content hierarchy | One large page H1, short supporting paragraph, Explore the Menu, then a quieter Our Story text link. Brooklyn/dinner context is subordinate. |
| Image slot | H1, a standalone shared-meal photograph on the right. Start by testing a rectangular crop around 6:5 to 3:2; preserve a flexible 3:2 source. No overlaid text or required text-safe area. |
| CTA placement | Explore the Menu directly after the supporting copy, with Our Story beneath it as a separate text link. Both precede the image in the underlying reading sequence. |
| Relative visual weight | Highest combined typography/photography moment. The photograph gets slightly more horizontal space, while the headline and primary action remain the entry point. |
| Relationship to adjacent sections | Continues directly from the header. Brooklyn/dinner context closes the introduction; a clear section heading then resets attention for Featured Dishes rather than running immediately into another unlabeled image band. |
| Responsive considerations | Widen the copy share or stack the hero before the headline becomes a narrow word column. Use natural content height, with no forced screen-height block, overlap, or clipped text. Context moves after the image in the narrow layout. |

Canonical hero wording:

> Seasonal American Dining, Made to Be Shared.

> Thoughtful ingredients, familiar flavors, and contemporary cooking in the heart of Brooklyn.

Actions: **Explore the Menu** → /menu; **Our Story** → /about.

Context: **Brooklyn, New York** / **Dinner daily from 5 PM**.

The proposed 45/55 split is a review starting point, not an approved fixed ratio. At wide desktop widths, aim for roughly three to four headline lines, a short two-to-three-line supporting paragraph, and immediately discoverable actions. Do not shorten the copy or impose fixed line counts to make a chosen ratio work.

### 3. Featured dishes

| Aspect | Specification |
| --- | --- |
| Purpose | Make the food and price range tangible and offer a direct next step to the full menu. |
| Approximate composition | Three open editorial columns beneath From Our Kitchen. Give 01 a slightly broader measure at roomy desktop widths, approximately 38/31/31 as a starting relationship, with 02 and 03 balanced beside it. Use numbers, generous image-to-text spacing, and fine separators; no enclosing rounded panels, shadows, or per-dish buttons. |
| Content hierarchy | Section H2, sequence number, large image, dish name as H3 with aligned price, then description. Dish names and prices must work without the photos. |
| Image slot | F1, F2, F3 in matching 4:3 image treatments. Different column widths can vary image size without changing the photography family. |
| CTA placement | One View Full Menu link at the end of the whole section, aligned to the right on roomy desktop. Do not make the entire dish presentation clickable without a dish destination. |
| Relative visual weight | Strong secondary food moment; lower than the hero. Limit this to three items so it stays an introduction rather than a second complete menu. |
| Relationship to adjacent sections | The heading and number line interrupt the hero-to-food image sequence. End with a clear rule/action and whitespace before the interior/story section. |
| Responsive considerations | Relax the wider-first-item bias toward even widths if necessary. Switch to a single vertical sequence when three complete name/price/description groups become cramped; avoid an accidental two-plus-one orphan layout. |

**Composition choice:** recommend the three-column editorial spread with a slightly wider first dish. It keeps all three choices and prices easy to compare, while the unequal widths avoid a uniform card grid. A staggered spread would add vertical gaps and complicate the transition to mobile without improving this short menu preview. Three full-width desktop rows would make Featured disproportionately long before Story and Gallery. Reserve those rows for tablet, where readability benefits from them; use a simple vertical sequence on mobile.

Use these exact records from content.md:

| Number / asset | Dish | Price | Description |
| --- | --- | --- | --- |
| 01 / F1 | Braised Short Rib | $36 | Red wine jus, potato purée, roasted shallots |
| 02 / F2 | Seared Atlantic Salmon | $31 | Charred greens, lemon beurre blanc, crispy potatoes |
| 03 / F3 | Wild Mushroom Rigatoni | $26 | Parmesan, thyme, roasted mushrooms, brown butter |

**View Full Menu →** links to /menu. Keep the price right-aligned within its text group where space allows. A long dish name may wrap to two lines; price alignment must never squeeze the name into isolated words.

### 4. Story introduction

| Aspect | Specification |
| --- | --- |
| Purpose | Explain why the concept exists beyond cuisine and pricing: neighborhood character, thoughtful preparation, and shared meals. |
| Approximate composition | Reverse the hero's emphasis: I1 on the left and the narrative on the right, near a 55/45 image-to-copy relationship. Keep the paragraph compact and align the text around the image's upper-middle region without excessive empty space. |
| Content hierarchy | Good Food. Thoughtfully Made. as the section H2, one paragraph, then Our Story. Avoid another oversized display statement or extra biography. |
| Image slot | I1, warm interior, initially in a 3:2 treatment. It introduces place after the food-focused sections. |
| CTA placement | Our Story immediately after the paragraph, linking to /about. |
| Relative visual weight | Medium editorial interlude, shorter and calmer than the hero or full featured spread. |
| Relationship to adjacent sections | Changes subject from plated food to the room and brand narrative. Leads naturally into the three principles as a compact continuation. |
| Responsive considerations | Stack heading, paragraph, story link, then image, keeping the rationale readable before a potentially tall photograph. Preserve this logical reading order when placing the image left on desktop; the image has no separate interactive target. |

Canonical story copy:

> Avenrow Kitchen is a neighborhood restaurant inspired by seasonal ingredients, honest cooking, and the belief that great meals are meant to be shared.

Do not expand this into the About page. The goal is one idea and one onward link.

### 5. Philosophy

| Aspect | Specification |
| --- | --- |
| Purpose | Summarize the restaurant's principles in a quick scan. |
| Approximate composition | A compact three-column typographic strip with a shared top rule and ample internal spacing. No icon illustrations or oversized cards. Treat it as a continuation of Story, not another major hero-sized block. |
| Content hierarchy | Three peer principle headings, each followed by one sentence. They can sit under the Story section's semantic H2 as subordinate headings while retaining this fifth visual block; no new display headline is needed. |
| Image slot | None. This is the deliberate typographic pause between interior storytelling and the gallery. |
| CTA placement | None. Story already supplies the onward link; repeating a CTA would add noise. |
| Relative visual weight | Low to medium, the shortest main-content block. |
| Relationship to adjacent sections | A tighter Story-to-Philosophy gap makes the narrative feel connected. Leave a clearer boundary before the gallery's next photographic moment. |
| Responsive considerations | Stack the three principles with compact gaps and optional fine separators. Avoid large numbers, rigid equal heights, or screen-height panels. |

| Principle | Supporting copy |
| --- | --- |
| Seasonal Ingredients | Our menu evolves with ingredients at their best. |
| Thoughtful Cooking | Familiar flavors refined through modern techniques. |
| Warm Hospitality | Relaxed service designed to make every visit feel effortless. |

All three principles remain present. Visually connecting them to Story is a recommendation for spacing and hierarchy, not silent removal of a section.

### 6. Dining gallery

| Aspect | Specification |
| --- | --- |
| Purpose | Add atmosphere and a sequence of place, craft, drink, and table detail that the menu photos cannot supply. |
| Approximate composition | Two asymmetric image pairs rather than an equal 2×2 grid: G1 narrow/tall on the left with a wider G2 to its right; a smaller, inset second pair places G3 left and wider G4 right. Vary the seam and width of the second pair, preserve open space, and avoid overlaps or masonry reordering. |
| Content hierarchy | Dining at Avenrow as a modest H2, then four images in order G1, G2, G3, G4. No sales copy, extra buttons, or decorative captions unless a real content need appears. |
| Image slot | G1 dining corner; G2 hands plating; G3 cocktail; G4 table setting. Start from 4:5, 3:2, 4:5, and 3:2 respectively, adjusting occupied width instead of forcing every image to equal height. |
| CTA placement | None. Images are static, with no lightbox or hidden click behavior. |
| Relative visual weight | One controlled atmospheric spread. Keep the second pair smaller than the first so four images do not become four competing hero moments. |
| Relationship to adjacent sections | Comes after the text-only principles and before the practical visit information. This creates a deliberate text/image/information alternation. |
| Responsive considerations | Flatten to G1 → G2 → G3 → G4, with no horizontal carousel. Test 4:3 display crops for the mobile sequence, particularly G1/G3, while preserving their focal subjects. Do not force that crop when it destroys the image. |

See the gallery region in the [complete desktop sheet](#home-desktop-complete-page) for the two unequal pairs and their relative weight.

This is a proposed controlled composition, not an instruction to fabricate crops. Keep reading order and mobile order identical. If the layout needs extreme cropping or excessive empty height, simplify the pair offsets before adding images or resorting to masonry.

### 7. Visit information

| Aspect | Specification |
| --- | --- |
| Purpose | Make practical information easy to scan and connect to Contact without implying a real venue. |
| Approximate composition | Two columns: Visit Avenrow and Brooklyn context on the left; a three-row hours list on the right. Keep Contact Us beneath the location text. |
| Content hierarchy | Section H2, location, readable day/time pairs, then the secondary contact action. Do not add reservation language or a map-shaped decorative block. |
| Image slot | None. Textual Brooklyn context is the default. |
| CTA placement | Contact Us beneath the location text, linking to /contact. No map-related action in this proposal. |
| Relative visual weight | Medium informational block with clear alignment rather than display typography. |
| Relationship to adjacent sections | A purposeful text reset after the gallery. Keep it visually distinct from the footer so hours are not mistaken for low-priority legal details. |
| Responsive considerations | Stack heading and location, then hours, then Contact Us. Keep complete day/time pairs associated; allow each row to stack its time beneath the day at narrow widths or enlarged text. |

Canonical detailed hours, repeated here only to evaluate fit:

| Days | Hours |
| --- | --- |
| Monday–Thursday | 5:00 PM–10:30 PM |
| Friday–Saturday | 5:00 PM–11:30 PM |
| Sunday | 5:00 PM–10:00 PM |

Use the content.md schedule and later restaurantInfo.js as the source for all displays. There is no street address, restaurant map pin, Google Business profile, or directions link. Any later proposal for a generic city map must be labeled Explore Brooklyn and reviewed separately.

### 8. Footer

| Aspect | Specification |
| --- | --- |
| Purpose | Close the page, repeat basic wayfinding, and disclose the portfolio concept concisely. |
| Approximate composition | A modest top row with AVENROW left and the four links right. Below, use compact lines for Brooklyn context, the disclosure, and copyright. A fine top rule can separate it from Visit. |
| Content hierarchy | Identity and navigation, then location and readable disclosure, then copyright. The disclaimer must not be visually hidden or styled as a large warning. |
| Image slot | None. No social logos or new brand illustration. |
| CTA placement | Ordinary Home, Menu, About, Contact links; no additional large conversion button. |
| Relative visual weight | Low, compact finish; avoid a multi-column corporate sitemap or large empty brand billboard. |
| Relationship to adjacent sections | Follows practical details without repeating the hours or adding another visit block. |
| Responsive considerations | Stack identity, a simple wrapped link list, Brooklyn context, disclosure, and copyright. Keep links visible, with no accordion. Let disclosure wrap naturally without shrinking it. |

Footer wording:

- AVENROW.
- Home / Menu / About / Contact.
- Brooklyn, New York.
- A fictional restaurant concept created as a frontend portfolio project.
- © 2026 Avenrow Kitchen.

The shared disclosure is sufficient for Home; do not add fiction banners to each visual section. No fake social accounts, usernames, or placeholder links.

## Mobile

### Structure at approximately 375–430px

Use one intentional reading column. The hero image follows the primary message and both actions. Other sections retain the same eight-part order; each adapts in place without producing a separate page design.

The [complete mobile sheet](#home-mobile-complete-page) below shows all eight sections with full copy. Stacked day/time pairs are the robust narrow case, not a requirement when each pair comfortably fits on one line.

### Per-section mobile behavior

| Section | Stacking and image placement | Hierarchy, spacing, controls, and wrapping |
| --- | --- | --- |
| Header | AVENROW and one navigation toggle on the same row; expanded links appear below in normal flow. | Avoid squeezing four links into the closed header. Keep the toggle's touch target comfortable. No fixed overlay is needed. |
| Hero | Headline → supporting copy → Explore the Menu → Our Story → H1 → Brooklyn/dinner context. Test a 4:5 image derivative; permit a shallower rectangular crop if it preserves the meal and reduces length. | Keep related text/action gaps compact, followed by a clearer image break. Button can fill the available column for comfortable touch; Our Story stays a separate link. Never place text on the image. Natural heading wraps may occupy several lines without fixed heights or tiny type. |
| Featured | 01/F1/text → 02/F2/text → 03/F3/text → one View Full Menu link. Use 4:3 dish images. | Consistent gaps and fine rules distinguish items. Names wrap while prices retain a clear association; at 320px or large text, a price may move below the name before the description. No horizontal scrolling or dish-card actions. |
| Story | H2 → paragraph → Our Story → I1, around a 4:3 display crop. | One paragraph only. Avoid decorative extra space before the text or after the image. Allow the two-part heading to wrap without forced desktop breaks. |
| Philosophy | Three compact heading/sentence groups in canonical order. No images. | Keep each sentence close to its heading; use modest gaps between groups. A reduced top gap connects it to Story while a larger bottom boundary prepares the gallery. |
| Gallery | G1 → G2 → G3 → G4 in a vertical sequence, preferably with reviewed 4:3 display crops. | No swipe-only access or full-screen images. Use smaller internal gaps than between major sections. Preserve subjects over strict crop uniformity; reassess length if portrait fallbacks add too much height. |
| Visit | H2 → Brooklyn context → three day/time pairs → Contact Us. No image/map. | Start with aligned day/time rows only where readable. Stack each pair at narrow widths or zoom, keeping both values together. Do not shorten day labels simply to force columns. |
| Footer | AVENROW → visible navigation → location → disclosure → copyright. | Let links wrap into short rows without tiny targets. Allow the disclosure to use multiple readable lines. No social strip, accordion, or oversized logo. |

### Mobile navigation and control states

Default closed state: AVENROW links home; a button named Open navigation exposes its expanded state and controls a small navigation region. Show a skip-to-content link on keyboard focus.

~~~text
Closed:
  AVENROW                         [Menu]

Expanded, in normal page flow:
  AVENROW                        [Close]
  Home
  Menu
  About
  Contact
  -------------------------------------
  Hero follows below
~~~

The ordinary Menu navigation link is enough in the expanded mobile list; the hero supplies Explore the Menu. A second View Menu button inside the small disclosure would repeat the same destination without adding clarity. The desktop header still retains its requested View Menu CTA.

Opening moves the hero down rather than covering it. Focus can stay on the toggle so the next Tab reaches the links. Closed links must not remain focusable. Escape closes and returns focus to the toggle; choosing a destination closes the disclosure and then follows the planned route-focus behavior. A nonmodal disclosure needs neither a focus trap nor background inertness.

Home is the active link. Use proper links for route destinations and a button for the toggle. Preserve visible focus and the existing approximately 44px touch-target guidance. These are future interaction requirements, not working controls in this document.

### Mobile density and overflow risks

- Do not impose fixed heights on headlines, descriptions, navigation, hours, or disclosure text.
- Keep the first message and menu action before the photograph; do not reserve image-sized space above them.
- Preserve complete dish names, descriptions, and prices. Wrapping is preferable to truncation or smaller text.
- Images must fit the content column; intrinsic master dimensions do not set page width.
- Prevent gallery offsets, transforms, or desktop gutters from carrying into the mobile sequence.
- Day labels and times must reflow together without horizontal overflow.
- Do not force a copyright, address-context line, or footer navigation row to remain unbroken.
- At enlarged text, vertical scrolling and a later image position are acceptable. Do not sacrifice reading comfort to preserve an above-the-fold composition.

## Complete page wireframes

These sheets follow the planning and behavior notes above. Section numbers, ratio notes, image labels, and outlines are review annotations, not additional website copy. Both sheets show the same eight sections; their character dimensions are schematic and do not set pixels, image heights, final line breaks, or viewport boundaries. The desktop sheet depicts roughly 45/55 hero columns with a generous gutter; the mobile sheet represents the same structure at approximately 375–430px.

### Home desktop: complete page

~~~text
+--------------------------------------------------------------------------------------------------------------+
| 01  HEADER                                                                                                   |
|                                                                                                              |
| AVENROW                                                  Home   Menu   About   Contact   [ View Menu ]       |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 02  EDITORIAL SPLIT HERO  /  copy about 45% : photograph about 55% after gutter                              |
|                                                                                                              |
| Seasonal American                                   +------------------------------------------------------+ |
| Dining, Made to Be Shared.                          | H1 / shared meal                                     | |
|                                                     | Standalone food photograph                           | |
| Thoughtful ingredients, familiar                    | Rectangular display; no text overlay                 | |
| flavors, and contemporary cooking in the            |                                                      | |
| heart of Brooklyn.                                  |                                                      | |
|                                                     |                                                      | |
| [ Explore the Menu ]                                |                                                      | |
| Our Story ->                                        |                                                      | |
|                                                     |                                                      | |
| Brooklyn, New York                                  |                                                      | |
| Dinner daily from 5 PM                              +------------------------------------------------------+ |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 03  FEATURED DISHES                                                                                          |
|                                                                                                              |
| From Our Kitchen                                                                                             |
|                                                                                                              |
| 01                                        02                                 03                              |
| +------------------------------------+    +-----------------------------+    +-----------------------------+ |
| | F1 / short rib                     |    | F2 / salmon                 |    | F3 / rigatoni               | |
| | 4:3 photograph                     |    | 4:3 photograph              |    | 4:3 photograph              | |
| |                                    |    |                             |    |                             | |
| |                                    |    |                             |    |                             | |
| |                                    |    |                             |    |                             | |
| |                                    |    +-----------------------------+    +-----------------------------+ |
| |                                    |                                                                       |
| +------------------------------------+                                                                       |
|                                                                                                              |
| Braised Short Rib                  $36    Seared Atlantic Salmon      $31    Wild Mushroom Rigatoni      $26 |
| Red wine jus, potato purée, roasted       Charred greens, lemon beurre       Parmesan, thyme, roasted        |
| shallots                                  blanc, crispy potatoes             mushrooms, brown butter         |
| --------------------------------------    -------------------------------    ------------------------------- |
|                                                                                            View Full Menu -> |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 04  STORY INTRODUCTION  /  reversed relationship: image left, narrative right                                |
|                                                                                                              |
| +--------------------------------------------------------+                                                   |
| | I1 / warm interior                                     |      Good Food. Thoughtfully Made.                |
| | 3:2 photograph                                         |                                                   |
| | Room view distinct from G1                             |      Avenrow Kitchen is a neighborhood restaurant |
| |                                                        |      inspired by seasonal ingredients, honest     |
| |                                                        |      cooking, and the belief that great meals are |
| |                                                        |      meant to be shared.                          |
| |                                                        |                                                   |
| +--------------------------------------------------------+      Our Story ->                                 |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 05  PHILOSOPHY  /  compact continuation of Story                                                             |
|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| Seasonal Ingredients                  Thoughtful Cooking                    Warm Hospitality                 |
| Our menu evolves with                 Familiar flavors refined through      Relaxed service designed to make |
| ingredients at their best.            modern techniques.                    every visit feel effortless.     |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 06  DINING GALLERY                                                                                           |
|                                                                                                              |
| Dining at Avenrow                                                                                            |
|                                                                                                              |
| +------------------------------+      +--------------------------------------------------------------+       |
| | G1 / dining corner           |      | G2 / hands plating                                           |       |
| | Narrow portrait / 4:5        |      | Wider landscape / 3:2                                        |       |
| |                              |      |                                                              |       |
| |                              |      |                                                              |       |
| |                              |      |                                                              |       |
| |                              |      |                                                              |       |
| |                              |      +--------------------------------------------------------------+       |
| |                              |                                                                             |
| +------------------------------+                                                                             |
|                                                                                                              |
|             +------------------------+      +----------------------------------------------------+           |
|             | G3 / cocktail          |      | G4 / table setting                                 |           |
|             | Portrait / 4:5         |      | Landscape / 3:2                                    |           |
|             |                        |      |                                                    |           |
|             |                        |      |                                                    |           |
|             |                        |      +----------------------------------------------------+           |
|             |                        |                                                                       |
|             +------------------------+                                                                       |
|                                                                                                              |
| Second pair is smaller and inset; preserve G1 > G2 > G3 > G4 reading order.                                  |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 07  VISIT INFORMATION                                                                                        |
|                                                                                                              |
| Visit Avenrow                                         Monday–Thursday         5:00 PM–10:30 PM               |
|                                                       Friday–Saturday         5:00 PM–11:30 PM               |
| Brooklyn, New York                                    Sunday                  5:00 PM–10:00 PM               |
|                                                                                                              |
| Contact Us ->                                                                                                |
|                                                                                                              |
+--------------------------------------------------------------------------------------------------------------+
| 08  FOOTER                                                                                                   |
|                                                                                                              |
| AVENROW                                                  Home   Menu   About   Contact                       |
| Brooklyn, New York                                                                                           |
| A fictional restaurant concept created as a frontend portfolio project.                                      |
| © 2026 Avenrow Kitchen                                                                                       |
+--------------------------------------------------------------------------------------------------------------+
~~~

The food preview uses open columns: image rectangles are the only per-item boxes, with names/prices and descriptions outside them. Image heights vary with column width while all three retain a 4:3 treatment. Story reverses the hero's image/text positions. Gallery uses two unequal pairs with a smaller inset second pair; the diagram's line heights illustrate relative weight, not exact aspect ratios.

### Home mobile: complete page

~~~text
+----------------------------------------+
| 01  HEADER / closed                    |
|                                        |
| AVENROW                       [ Menu ] |
|                                        |
+----------------------------------------+
| 02  HERO                               |
|                                        |
| Seasonal American Dining,              |
| Made to Be Shared.                     |
|                                        |
| Thoughtful ingredients, familiar       |
| flavors, and contemporary cooking in   |
| the heart of Brooklyn.                 |
|                                        |
| [ Explore the Menu ]                   |
| Our Story ->                           |
|                                        |
| +------------------------------------+ |
| | H1 / shared meal                   | |
| | Standalone photograph              | |
| | Candidate 4:5 display crop         | |
| |                                    | |
| |                                    | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| Brooklyn, New York                     |
| Dinner daily from 5 PM                 |
|                                        |
+----------------------------------------+
| 03  FEATURED DISHES                    |
|                                        |
| From Our Kitchen                       |
|                                        |
| 01                                     |
| +------------------------------------+ |
| | F1 / short rib                     | |
| | 4:3 photograph                     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| Braised Short Rib                  $36 |
| Red wine jus, potato purée, roasted    |
| shallots                               |
| -------------------------------------- |
|                                        |
| 02                                     |
| +------------------------------------+ |
| | F2 / salmon                        | |
| | 4:3 photograph                     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| Seared Atlantic Salmon             $31 |
| Charred greens, lemon beurre blanc,    |
| crispy potatoes                        |
| -------------------------------------- |
|                                        |
| 03                                     |
| +------------------------------------+ |
| | F3 / rigatoni                      | |
| | 4:3 photograph                     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| Wild Mushroom Rigatoni             $26 |
| Parmesan, thyme, roasted mushrooms,    |
| brown butter                           |
| -------------------------------------- |
|                                        |
| View Full Menu ->                      |
|                                        |
+----------------------------------------+
| 04  STORY INTRODUCTION                 |
|                                        |
| Good Food.                             |
| Thoughtfully Made.                     |
|                                        |
| Avenrow Kitchen is a neighborhood      |
| restaurant inspired by seasonal        |
| ingredients, honest cooking, and the   |
| belief that great meals are meant to   |
| be shared.                             |
|                                        |
| Our Story ->                           |
|                                        |
| +------------------------------------+ |
| | I1 / warm interior                 | |
| | Candidate 4:3 display crop         | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
+----------------------------------------+
| 05  PHILOSOPHY                         |
|                                        |
| Seasonal Ingredients                   |
| Our menu evolves with ingredients at   |
| their best.                            |
|                                        |
| Thoughtful Cooking                     |
| Familiar flavors refined through       |
| modern techniques.                     |
|                                        |
| Warm Hospitality                       |
| Relaxed service designed to make every |
| visit feel effortless.                 |
|                                        |
+----------------------------------------+
| 06  DINING GALLERY                     |
|                                        |
| Dining at Avenrow                      |
|                                        |
| +------------------------------------+ |
| | G1 / intimate dining corner        | |
| | Review 4:3 mobile display crop     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| +------------------------------------+ |
| | G2 / hands plating                 | |
| | Review 4:3 mobile display crop     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| +------------------------------------+ |
| | G3 / cocktail                      | |
| | Review 4:3 mobile display crop     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
| +------------------------------------+ |
| | G4 / table setting                 | |
| | Review 4:3 mobile display crop     | |
| |                                    | |
| |                                    | |
| +------------------------------------+ |
|                                        |
+----------------------------------------+
| 07  VISIT INFORMATION                  |
|                                        |
| Visit Avenrow                          |
|                                        |
| Brooklyn, New York                     |
|                                        |
| Monday–Thursday                        |
| 5:00 PM–10:30 PM                       |
|                                        |
| Friday–Saturday                        |
| 5:00 PM–11:30 PM                       |
|                                        |
| Sunday                                 |
| 5:00 PM–10:00 PM                       |
|                                        |
| Contact Us ->                          |
|                                        |
+----------------------------------------+
| 08  FOOTER                             |
|                                        |
| AVENROW                                |
|                                        |
| Home    Menu    About    Contact       |
|                                        |
| Brooklyn, New York                     |
|                                        |
| A fictional restaurant concept created |
| as a frontend portfolio project.       |
|                                        |
| © 2026 Avenrow Kitchen                 |
+----------------------------------------+
~~~

The closed header is shown in this full-page sheet; its opened in-flow state is specified under [Mobile navigation and control states](#mobile-navigation-and-control-states). The primary menu action and Our Story remain before H1. Gallery crop labels are review candidates: keep focal subjects intact, and use a taller crop when necessary rather than cutting off a glass, hands, or other essential detail. All navigation stays visible in the footer.

### Section-by-section comparison

| Section | Desktop composition | Mobile composition | Primary content | Image asset | Main UX risk |
| --- | --- | --- | --- | --- | --- |
| Header | Wordmark left, navigation and View Menu right; normal flow. | Wordmark and toggle; links expand below in flow. | AVENROW; Home, Menu, About, Contact; desktop View Menu. | None | Crowded navigation or hidden links remaining keyboard-focusable. |
| Editorial split hero | Roughly 45/55 copy/image split after gutter; context at lower left. | Headline, supporting copy, primary CTA, story link, image, then context. | Cuisine/sharing headline, Brooklyn context, dinner summary, two actions. | H1 | A narrow text column or oversized image obscuring the CTA hierarchy. |
| Featured dishes | Three unboxed editorial columns, wider first item; shared end action. | Three sequential image/text groups with separators and one end action. | Three canonical names, descriptions, USD prices; View Full Menu. | F1–F3 | Name/price collisions, card-like framing, or excessive image height. |
| Story introduction | Interior left, concise narrative right; reverses the hero. | Heading, paragraph, Our Story, then interior. | Good Food. Thoughtfully Made.; canonical paragraph. | I1 | Repeating the hero's composition or expanding the About teaser. |
| Philosophy | Compact three-column text strip adjoining Story. | Three short heading/sentence groups. | Seasonal Ingredients; Thoughtful Cooking; Warm Hospitality. | None | Repeating Story at excessive length or becoming three large panels. |
| Dining gallery | Two unequal image pairs; second pair smaller and inset. | Four ordered images with consistent gaps and reviewed crops. | Dining at Avenrow; atmosphere and craft. | G1–G4 | Repetitive subjects, destructive crops, or pushing practical information too far down. |
| Visit information | Heading/location/action left; aligned hours right. | Heading, location, three day/time groups, Contact Us. | Visit Avenrow; Brooklyn; complete canonical hours. | None | Hours arriving late or failing to reflow without an invented address/map. |
| Footer | Compact identity/navigation row, then context, disclosure, copyright. | Same content in visible, wrapping rows; no accordion. | AVENROW; four links; Brooklyn; concept disclosure; copyright. | None | Tiny disclosure text or hidden destinations. |

## Section rhythm and approximate proportions

Use a rhythm of introduction → food detail → place/story → concise principles → atmosphere → practical details → quiet close. Headings, menu text, and separators are part of that rhythm; a wall of photographs is not the goal.

For proportion review, treat the desktop hero's occupied content height as roughly one unit. The bands below are approximate comparison ranges, excluding shared section gaps, not CSS heights or measured page length. Reassess them with actual typography and crops.

| Section | Approximate desktop content weight | Mobile length concern |
| --- | --- | --- |
| Header | About 0.1–0.15 hero unit | One compact closed row; navigation expansion grows naturally |
| Hero | 1 reference unit | Text/actions plus one image; no viewport-height constraint |
| Featured dishes | About 0.65–0.9 unit | Three image/text groups; one of the two longest sections |
| Story | About 0.5–0.7 unit | One paragraph and one image; keep its framing compact |
| Philosophy | About 0.2–0.35 unit | Three short groups, not three panels |
| Gallery | About 0.9–1.4 units | Four consecutive images; the largest page-length risk |
| Visit | About 0.3–0.45 unit | Three scan-friendly hours rows with location and one action |
| Footer | About 0.2–0.3 unit | Readable links/disclosure with no large decorative block |

The image-heavy hero, featured dishes, and story are separated by meaningful titles and copy. The Story-to-Philosophy relationship supplies an extended but compact text pause before the gallery. Visit and Footer then end with practical information rather than another promotional image.

Use the existing broad desktop/mobile section-spacing guidance, but do not apply maximum top and bottom spacing to every block. The smallest major-section separation belongs between Story and Philosophy; gallery image gaps are smaller than the section boundary around the gallery.

## Page-length evaluation and recommendations

The desktop layout is plausible within the eight-section brief. The mobile layout is intentionally longer because it shows three dishes and four gallery images without hiding content. The nine Home image slots make length a real risk; there is no rendered evidence yet to call the final page too long or to quote an actual scroll depth.

**Recommended adjustment:** keep Story and Philosophy as distinct visual blocks, but treat Philosophy as a compact typographic continuation of the Story narrative. Reduce their separating space and omit a redundant oversized Philosophy title. This preserves every principle and the eight-block order while reducing repetition.

**Gallery recommendation:** retain four images for this draft and keep G5/G6 out. Use moderate mobile display crops and a smaller second desktop pair. G1 should show a different, more intimate moment than I1, while G4 should show place-setting detail rather than repeat H1's meal.

If a later review still finds the page too long, simplify gallery offsets/gaps and the H1 mobile crop first. Only then consider reducing the gallery from four images to three by dropping G1 if it duplicates I1. That is a conditional recommendation requiring explicit approval, not a removal made in this specification. Do not silently hide a gallery image on mobile.

**Visit placement:** seventh position is the main practical-information risk, especially after four gallery images on mobile. Keep the approved order for review: the hero already states Brooklyn and Dinner daily from 5 PM, while Contact is available through navigation. That summary does not replace the detailed schedule. If the gallery still delays hours excessively after crop/spacing simplification, request approval to move Visit ahead of Gallery; this draft does not make that change or add another repeated hours block.

**Food preview and menu access:** three dishes are sufficient to show short rib, fish, and pasta with a $26–$36 range. Adding more would lengthen the page without replacing the full menu. Header View Menu, early Explore the Menu, and View Full Menu at the end of Featured provide clear access at three useful points; the mobile navigation also retains Menu. These are hierarchy judgments, not verified above-the-fold results.

No section has been added, deleted, or reordered. No new homepage CTA, map, reservation block, social feed, carousel, or lightbox is proposed.

### Tablet transition

Use the intermediate space to simplify each section independently; approximately 768–1024px is a review range, not a set of mandatory breakpoints. No third full-page layout is required.

| Area | Transition recommendation |
| --- | --- |
| Hero | Keep the mobile message/actions/image/context order until both text and image have comfortable width. Then introduce the asymmetric split, allowing the copy share to grow before adopting the roomy desktop balance. |
| Featured dishes | Prefer three full-width editorial rows with each image beside its text when that fits. Fall back to the mobile stack at narrower widths; introduce three columns only when all names, prices, and descriptions fit. Avoid a two-plus-one arrangement. |
| Story | Move from text-first stacking to a shallow image-left/text-right split when the paragraph retains a comfortable measure. Preserve text-first logical reading order. |
| Gallery | Introduce two unequal pairs only when subjects survive their crops. Reduce or remove the second pair's inset before reducing usable image width; otherwise retain the four-image sequence. |
| Philosophy | Keep the short stacked groups while three readable text columns do not fit. Switch the three groups together into a compact strip rather than leaving a stranded third panel. |
| Visit | Use two columns only when the full day labels and times fit without squeezing. Otherwise keep location, complete hours, and Contact Us in the mobile order, allowing each day/time pair to align as space permits. |
| Navigation | Retain the compact disclosure until AVENROW, all four links, and View Menu fit comfortably. On resize, avoid duplicate navigation or focus stranded in hidden content; no full-screen overlay is required. |

## Responsive validation

Use three conceptual modes: mobile, tablet transition, and desktop. The listed widths are checkpoints, not separate layout systems or guaranteed breakpoints.

| Checkpoint | Layout proposal and review focus |
| --- | --- |
| 375px | Single-column structure; hero actions before H1; three dishes and four gallery images in sequence. Check headline length, name/price wrapping, and hours reflow. |
| 430px | Same mobile composition with breathing room. Do not add a second column merely because the viewport is wider. |
| 768px | Tablet transition: retain compact navigation and a stacked hero if two columns would cramp the headline. Featured dishes can remain stacked with image and text side by side within each row when comfortable. Story may become a shallow split; gallery can use its two unequal pairs if subjects remain readable. |
| 1024px | Candidate compact desktop: try the hero near 45/55, three open dish columns, Story split, and two-column Visit. Keep compact navigation or stacked sections wherever content fails to fit. Do not force every section to switch together. |
| 1440px+ | Full editorial desktop composition within the capped content width. Grow outer whitespace, not limitless text measures, hero height, or gallery widths. |
| 320px reflow | Same single-column reading order; allow name/price and day/time pairs to stack, footer links to wrap, and navigation to remain in flow. No page-level horizontal scrolling. |
| 200% text zoom | Let content expand naturally and trigger simpler arrangements when needed. No clipping, fixed-height cards, hidden prices, or forced single-line controls. The CTA need not remain above the fold at enlarged text. |
| Mobile landscape | Maintain reading order and natural height; no sticky obstruction or screen-height panel. Choose columns only where the content fits, not solely because orientation changed. |

At the tablet transition, preserve document order when changing the gallery and Story arrangements. If the featured spread cannot fit three readable columns, the full-width row treatment is preferred over two narrow dishes with a stranded third item.

Menu access above the fold is a design intention supported by the desktop header CTA and the early mobile hero CTA. Viewport height, loaded fonts, and text settings determine actual visibility; later verification must include representative heights, not widths alone.

## Review status and approval boundary

This written Home desktop/mobile wireframe is now ready for review. The approved brand/hero concept is unchanged; the proposed ratios, gallery arrangement, and compact Story/Philosophy treatment are layout recommendations awaiting that review.

Layout decisions for approval:

1. Use the roughly 45/55 desktop hero as the starting balance, with content-driven flexibility.
2. Use the wider-first-item featured spread on roomy desktop, simplifying before readability suffers.
3. Use two unequal gallery pairs on desktop and a simple four-image mobile sequence, with subject-preserving crop flexibility.
4. Treat Philosophy as a compact continuation of Story without removing its content or visual place.
5. Retain the first-pass normal-flow header; no sticky header or additional mobile duplicate CTA is needed.

These are concrete review choices, not blockers that require restarting the blueprint. Keep four gallery images unless the conditional three-image recommendation is explicitly approved.

Do not begin final asset sourcing/generation or React implementation from this draft alone. Human review of Home desktop/mobile direction is still pending, followed by the roadmap's asset-slot validation and visual refinement. The slot assessment below is a preliminary design recommendation, not production approval. Project setup remains Phase 7. No Menu/About/Contact wireframes are produced here.

# Asset Slot Validation

Status meanings: KEEP retains the role; REVISE retains the role but changes or tightens its composition/crop brief; OPTIONAL reserves a role only if a later review finds it useful; REMOVE excludes the role. These are preliminary dispositions for the current Home wireframe, not approval to acquire images.

| Asset | Status | Rationale and slot guidance |
| --- | --- | --- |
| H1 | REVISE | Retain the shared meal, but validate it against the actual split slot: standalone right-side photograph, flexible 6:5–3:2 desktop test crops and possible 4:5 mobile derivative. No required text-overlay space; meal must remain readable in every retained crop. |
| F1 | KEEP | Establishes the first featured dish and $36 reference price. A 4:3 image supports the broad first editorial column and the mobile sequence without a card shell. |
| F2 | KEEP | Adds fish and a distinct featured option at $31. Keep the same photographic family and 4:3 treatment while preserving the salmon and accompaniments. |
| F3 | KEEP | Adds pasta variety at $26 and completes a concise three-item preview. Keep 4:3 treatment and enough ingredient detail to distinguish it from F1/F2. |
| I1 | KEEP | Gives Story a sense of place after the food sections. Use a wider room composition with a reviewable 4:3 mobile crop; do not duplicate G1's intimate framing. |
| G1 | REVISE | Keep within the four-image gallery, but require an intimate seating/light detail distinct from I1. Test the narrow/tall desktop placement and mobile crop. It is the first conditional removal candidate only if later evidence shows duplication or excessive length. |
| G2 | KEEP | Shows craft rather than another finished dish. Preserve hands and plate, avoid recognizable identity, and keep future C1 reuse possible without creating another portrait. |
| G3 | REVISE | Keep the cocktail role, but validate a compact portrait desktop treatment and a shallower mobile crop. Protect the glass and focal detail; no ingredient claims beyond what is visible. |
| G4 | KEEP | Closes the gallery with table-setting detail and leads toward Visit. Keep the wider composition, avoid repeating H1's meal, and review a mobile 4:3 crop. |

Summary: six KEEP, three REVISE, zero OPTIONAL, zero REMOVE among the nine reviewed Home slots. All nine remain in this draft. G5/G6 stay optional P2 additions outside this Home proposal; A1 and C1 are not newly designed here. Reuse G2 for future C1 where possible, retaining the site-wide target of approximately 8–10 unique core photographs.

P0 means approving subject, composition, aspect ratio, and role before final visual lock; it does not require a final photograph before this low-fidelity review. Chef C1 is not part of Home, and its planned reuse of G2 does not add a tenth Home image.

No image has been sourced, generated, downloaded, or inspected for final crop suitability. Final subject/crop acceptance and rights review remain future work.

## Final review questions

These answers evaluate the written layout, not a rendered implementation.

| # | Question | Answer |
| --- | --- | --- |
| 1 | Is menu access obvious above the fold? | Intended yes: View Menu is in the desktop header, and Explore the Menu precedes the mobile image. Actual above-the-fold visibility still needs representative viewport-height and font checks. |
| 2 | Does the hero communicate restaurant character immediately? | Yes at the hierarchy level: the cuisine-led headline, sharing message, meal image, and Brooklyn/dinner context establish the concept without extra copy. |
| 3 | Does photography support rather than dominate information? | The proposed balance does: copy and actions lead the reading sequence and prices remain text. Confirm this when real images replace slots, especially in the gallery. |
| 4 | Are three featured dishes enough? | Yes. Short rib, salmon, and pasta give variety and a $26–$36 preview; the full menu is a direct link away. |
| 5 | Does Featured Dishes avoid generic card UI? | Yes. Open columns/rows, numbering, large images, aligned prices, and separators replace enclosing panels and repeated buttons. |
| 6 | Does Story add information beyond Hero? | Yes. Hero explains the dining offer; Story adds the neighborhood, ingredient, and shared-meal philosophy. Keep it to the canonical paragraph. |
| 7 | Is Philosophy concise enough? | Yes if it remains three headings with one sentence each and a compact continuation of Story, rather than three large panels. |
| 8 | Does Gallery genuinely add atmosphere? | It can: place, preparation, drink, and table-setting roles differ from the featured food. G1 must be differentiated from I1, and every final image must justify its place. |
| 9 | Are hours and Brooklyn context easy to find? | The hero provides early context, and Visit groups the detailed schedule before the footer. Contact remains in navigation for another direct route to practical details; no address or map is fabricated. |
| 10 | Is the Home page too long? | Not demonstrably at this stage, but the mobile dish/gallery sequences are the main risk. Tighten Story/Philosophy spacing and image presentation first; a three-image gallery remains a conditional approval choice. |
| 11 | Does the layout still make sense without motion? | Yes. All hierarchy, section order, prices, navigation, and CTAs are static and visible without animation. |
| 12 | Does mobile feel intentionally designed? | Yes at specification level: message-first hero, natural stacking, clear name/price and day/time reflow, simple navigation, and no squeezed desktop mosaic. Rendering remains unverified. |
| 13 | Are any image slots unnecessary? | None is removed in this draft. G1 has the greatest duplication risk; G3 needs crop review. Optional G5/G6 are not needed, and no unique chef portrait is added. |
| 14 | Are any important content requirements missing? | No required Home content is omitted: identity, navigation, hero copy/actions/context, three priced dishes, Story, three principles, four gallery roles, canonical hours, Contact link, disclosure, and copyright are accounted for. Final assets and supporting-page menu gaps remain separate future work. |

## Wireframe approval checklist

All items remain pending human review. Drafting the sheets and recommending slot dispositions does not mark them approved or authorize asset production or implementation.

- [ ] Desktop hierarchy approved
- [ ] Mobile hierarchy approved
- [ ] Hero composition approved
- [ ] Featured dishes composition approved
- [ ] Story composition approved
- [ ] Philosophy length approved
- [ ] Gallery composition approved
- [ ] Visit information placement approved
- [ ] Footer treatment approved
- [ ] Asset slots validated
- [ ] Page length approved
- [ ] Mobile CTA hierarchy approved

# Menu Wireframe

**Implementation update:** The user has approved this Menu direction and authorized its implementation. `/menu` now implements the text-only layout, all 18 records, wrapped filters, static result replacement, and shared chrome. The proposal and checklist below are retained as the design-stage record; their earlier authorization restrictions are superseded for Menu only. See [Menu QA](qa.md#menu-implementation-verification) for executed checks and remaining coverage. About and Contact are not authorized by this update.

Status: Low-fidelity specification for review. Home is visually approved by the user and establishes the visual reference. All Menu choices below remain proposals. This is documentation only, not a rendered prototype or authorization to implement Menu. About and Contact remain outside this task.

## Purpose and source of truth

Help visitors understand the menu, compare names/descriptions/USD prices, filter by category, and find Contact. Menu information takes priority over imagery. Preserve Avenrow's editorial character without ecommerce cards, delivery controls, or dashboard patterns.

Sources inspected: [brief](brief.md), [requirements](requirements.md), [brand](brand.md), [canonical content](content.md#menu), [assets](assets.md), [architecture](architecture.md), the Home specification above, and the implemented Home, shared Header/Footer, data, routing, and styles. Canonical content owns wording; this section owns proposed layout and interactions. Earlier planning statements about unimplemented Home or unavailable assets are historical and do not override current user approval.

### Inherit the implemented Home

- Keep the approximately 1,240px capped container and current responsive 20/32/48px side-padding progression. Align intro, controls, menu, closing context, and shared chrome.
- Retain ivory background, ink text, olive actions/focus, restrained clay accents, and fine decorative taupe rules. Taupe must not carry body text or essential active/focus states.
- Inherit serif headings, sans-serif body/UI, unboxed dish presentation, readable 16px body text, approximately 15px controls, and comfortable 44px targets. Do not repeat Home's dish numbering or large featured photographs.
- The current font stacks name Instrument Serif/Manrope but render Georgia/system sans fallbacks because font files are absent. Do not introduce another font or claim custom fonts are loaded.
- Reuse the existing Header, normal-flow mobile disclosure, Footer, skip link, route focus, and reduced-motion behavior without redesigning them.

Diagrams are approximate and not pixel specifications. Region outlines do not prescribe visible boxes. Asterisks denote active states; square-bracket annotations identify controls or diagram notes. Diagram annotations are for review only and must not ship as visitor-facing copy.

## Page hierarchy and copy

| Order | Region | Content and responsibility |
| --- | --- | --- |
| 1 | Shared Header | AVENROW; Home, Menu, About, Contact; desktop View Menu. Menu is active. |
| 2 | Compact intro | H1 **Our Menu**; **Seasonal ingredients, familiar flavors, and thoughtful cooking.**; **Prices are shown in USD.** |
| 3 | Category controls | **All, Starters, Mains, Sides, Desserts, Drinks**, in canonical order; All initially selected. |
| 4 | Menu content | Category H2; dish H3, description, and whole-dollar USD price. Preserve source order inside categories. |
| 5 | Optional photography | Omitted in the recommended draft; no reserved blank image band. |
| 6 | Closing context | **Visit Avenrow**; **Brooklyn, New York**; **Dinner daily from 5 PM**; **Contact Us** → `/contact`. Reuse existing canonical copy. |
| 7 | Shared Footer | Existing identity, four links, Brooklyn context, fictional-project disclosure, and copyright. |

The intro is shorter than Home's hero: one heading, one sentence, one price note, no photograph or extra CTA. Use the canonical Our Menu instead of the suggested alternative headline. Omit THE MENU above Our Menu because it repeats the heading. Do not invent a closing slogan, reservation action, ordering/delivery CTA, address, map, directions link, or another detailed-hours schedule.

### Header recommendation on Menu

Retain **View Menu** as the existing ordinary link to `/menu`, with unchanged appearance and destination. Keep the ordinary Menu navigation link visibly active with the existing current-page semantics. Do not disable the CTA, replace it with booking/contact copy, or turn it into a category-reset button. This limited redundancy preserves the shared header instead of creating a Menu-specific variant.

View Menu remains route navigation under existing router behavior and may return to the route start; it does not select a category or trigger custom smooth scrolling. The no-scroll rule below applies to category filters, not route links. Mobile retains the existing four-link disclosure without an additional View Menu button.

## Desktop

### Recommended All-state composition

Use a row-major two-column grid of **complete category sections** when each column has a comfortable reading width:

1. Starters left, Mains right.
2. Sides left, Desserts right.
3. Drinks alone on the next row, aligned with the left column and retaining the same text measure.

Read all of one category before moving to the next; category headings and spacing make the grouping clear. Document order remains Starters, Mains, Sides, Desserts, Drinks. Do not use newspaper columns, masonry, dense backfilling, or separate left/right streams that change mobile or assistive-technology order.

Five Mains against three Starters creates some intentional space below Starters. Do not stretch item heights, add imagery, or pull Sides into that gap. Start the next row below the longer category. If final descriptions make this imbalance excessive, use sequential full-width category sections containing readable single lists instead. Full-width sections do not require 1,240px-wide descriptions. Drinks retains the normal list measure with deliberate open space to its right; no sixth category is invented.

### Complete desktop diagram

~~~text
+----------------------------------------------------------------------------------+
| SHARED HEADER                                                                    |
| AVENROW                  Home   Menu*   About   Contact           [View Menu]     |
+----------------------------------------------------------------------------------+
| Our Menu                                                                         |
| Seasonal ingredients, familiar flavors, and thoughtful cooking.                   |
| Prices are shown in USD.                                                         |
|                                                                                  |
| [All*]   [Starters]   [Mains]   [Sides]   [Desserts]   [Drinks]                      |
| -------------------------------------------------------------------------------- |
|                                                                                  |
| STARTERS                                 MAINS                                   |
|                                                                                  |
| Burrata & Heirloom Tomato       $17       Braised Short Rib                 $36    |
| Basil oil, sourdough, sea salt            Red wine jus, potato purée,             |
| ----------------------------------      roasted shallots                        |
| Charred Corn Croquettes         $14      ----------------------------------      |
| Smoked paprika aioli, scallions           Seared Atlantic Salmon           $31    |
| ----------------------------------      Charred greens, lemon beurre blanc,     |
| Crispy Calamari                 $16      crispy potatoes                         |
| Lemon, parsley, chili aioli              ----------------------------------      |
| ----------------------------------      Wild Mushroom Rigatoni           $26    |
|                                         Parmesan, thyme, roasted mushrooms,     |
|                                         brown butter                            |
|                                         ----------------------------------      |
|                                         Herb Roasted Chicken             $28    |
|                                         Fingerling potatoes, chicken jus        |
|                                         ----------------------------------      |
|                                         New York Strip                   $39    |
|                                         12 oz steak, peppercorn sauce, fries    |
|                                         ----------------------------------      |
|                                                                                  |
| SIDES                                    DESSERTS                                |
|                                                                                  |
| Crispy Potatoes                   $9    Burnt Honey Cheesecake           $12    |
| Rosemary, roasted garlic, sea salt      Sea salt caramel                        |
| ----------------------------------      ----------------------------------      |
| Seasonal Greens                 $10     Dark Chocolate Tart              $13    |
| Charred lemon, olive oil,                Espresso cream, cocoa nib               |
| toasted garlic                                                                   |
| ----------------------------------      ----------------------------------      |
| Sourdough with Cultured Butter   $8     Vanilla Bean Panna Cotta          $11   |
| Warm sourdough, cultured butter,        Seasonal berries                        |
| flaky sea salt                          ----------------------------------      |
| ----------------------------------                                              |
|                                                                                  |
| DRINKS                                                                           |
| Avenrow Old Fashioned        $15                                                 |
| Bourbon, maple, aromatic bitters,                                                |
| orange                                                                           |
| ----------------------------------                                               |
| Wine by the Glass            $13                                                 |
| Rotating red or white selection, 5 oz                                            |
| pour                                                                             |
| ----------------------------------                                               |
| Seasonal Citrus Spritz       $10                                                 |
| Nonalcoholic                                                                     |
| Citrus, rosemary, sparkling water                                                |
| ----------------------------------                                               |
| Sparkling Mineral Water      $6                                                  |
| Chilled sparkling mineral water, 750                                             |
| ml                                                                               |
| ----------------------------------                                               |
|                                                                                  |
| -------------------------------------------------------------------------------- |
| Visit Avenrow                                                                    |
| Brooklyn, New York             Dinner daily from 5 PM          Contact Us ->       |
+----------------------------------------------------------------------------------+
| SHARED FOOTER                                                                    |
| AVENROW                                          Home   Menu*   About   Contact   |
| Brooklyn, New York                                                               |
| A fictional restaurant concept created as a frontend portfolio project.           |
| © 2026 Avenrow Kitchen                                                            |
+----------------------------------------------------------------------------------+
~~~

Sides and Drinks now show the approved records, including the explicit Nonalcoholic label for Seasonal Citrus Spritz. Decorative rules and approximate line lengths do not set browser wrapping.

### Filtered desktop state

Keep the intro and controls in their document positions. Replace the All grid with the selected category heading and one complete list, left-aligned at the first-column edge and capped around 560–640px. Do not split five Mains across two columns just to occupy space. Prices align within that list, not the overall page's far edge.

~~~text
[All]  [Starters]  [Mains*]  [Sides]  [Desserts]  [Drinks]
-------------------------------------------------------
Mains
Braised Short Rib                              $36
Red wine jus, potato purée, roasted shallots
-------------------------------------------------------
Seared Atlantic Salmon                         $31
Charred greens, lemon beurre blanc, crispy potatoes
-------------------------------------------------------
[Remaining three canonical mains follow in order.]

Visit Avenrow
Brooklyn, New York / Dinner daily from 5 PM
Contact Us ->
~~~

Closing context follows the resulting list naturally. No fixed-height empty results area, height animation, fake loading, or scroll-to-results. Controls remain mounted above the changing content, with focus on the selected button.

## Mobile

### Category controls: comparison and recommendation

| Approach | Benefit | Risk | Recommendation |
| --- | --- | --- | --- |
| Horizontal scroll row | Compact single line | Off-screen categories can be missed; requires swipe cues and keyboard visibility management | Unnecessary for six short controls. |
| Wrapped buttons | Every category discoverable without swiping; natural reflow | Uses multiple rows and needs comfortable gaps | Recommended; also matches requirements.md. |

Use text-led buttons with approximately 44px targets and enough horizontal/row spacing to distinguish targets. Preserve source order and allow natural wrapping rather than fixing three controls per row. The diagram's two rows are illustrative; actual font metrics or enlarged text may require more. No select dropdown, pill group, segmented shell, or page-level horizontal scroller.

### Complete mobile diagram, approximately 375–430px

~~~text
+------------------------------------------+
| AVENROW                         [Menu]   |
+------------------------------------------+
|                                          |
| Our Menu                                 |
| Seasonal ingredients, familiar flavors,   |
| and thoughtful cooking.                  |
|                                          |
| Prices are shown in USD.                 |
|                                          |
| [All*]      [Starters]      [Mains]       |
| [Sides]     [Desserts]      [Drinks]      |
| ---------------------------------------- |
|                                          |
| Starters                                 |
| Burrata & Heirloom Tomato          $17    |
| Basil oil, sourdough, sea salt            |
| ---------------------------------------- |
| Charred Corn Croquettes            $14    |
| Smoked paprika aioli, scallions           |
| ---------------------------------------- |
| Crispy Calamari                    $16    |
| Lemon, parsley, chili aioli               |
| ---------------------------------------- |
|                                          |
| Mains                                    |
| Braised Short Rib                 $36    |
| Red wine jus, potato purée,               |
| roasted shallots                         |
| ---------------------------------------- |
| Seared Atlantic Salmon            $31    |
| Charred greens, lemon beurre blanc,       |
| crispy potatoes                          |
| ---------------------------------------- |
| Wild Mushroom Rigatoni            $26    |
| Parmesan, thyme, roasted mushrooms,       |
| brown butter                             |
| ---------------------------------------- |
| [Herb Roasted Chicken and New York Strip  |
| follow with full canonical copy/prices;  |
| omitted only to shorten this diagram.]   |
|                                          |
| Sides                                    |
| Crispy Potatoes                          |
| $9                                       |
| Rosemary, roasted garlic, sea salt       |
| ---------------------------------------- |
| Seasonal Greens                          |
| $10                                      |
| Charred lemon, olive oil, toasted        |
| garlic                                   |
| ---------------------------------------- |
| Sourdough with Cultured Butter           |
| $8                                       |
| Warm sourdough, cultured butter, flaky   |
| sea salt                                 |
| ---------------------------------------- |
|                                          |
| Desserts                                 |
| Burnt Honey Cheesecake            $12    |
| Sea salt caramel                         |
| ---------------------------------------- |
| Dark Chocolate Tart               $13    |
| Espresso cream, cocoa nib                 |
| ---------------------------------------- |
| Vanilla Bean Panna Cotta           $11    |
| Seasonal berries                         |
| ---------------------------------------- |
|                                          |
| Drinks                                   |
| Avenrow Old Fashioned                    |
| $15                                      |
| Bourbon, maple, aromatic bitters,        |
| orange                                   |
| ---------------------------------------- |
| Wine by the Glass                        |
| $13                                      |
| Rotating red or white selection, 5 oz    |
| pour                                     |
| ---------------------------------------- |
| Seasonal Citrus Spritz                   |
| $10                                      |
| Nonalcoholic                             |
| Citrus, rosemary, sparkling water        |
| ---------------------------------------- |
| Sparkling Mineral Water                  |
| $6                                       |
| Chilled sparkling mineral water, 750     |
| ml                                       |
| ---------------------------------------- |
|                                          |
| ---------------------------------------- |
| Visit Avenrow                            |
| Brooklyn, New York                       |
| Dinner daily from 5 PM                   |
| Contact Us ->                            |
+------------------------------------------+
| AVENROW                                  |
| Home     Menu*     About     Contact      |
| Brooklyn, New York                       |
| A fictional restaurant concept created   |
| as a frontend portfolio project.         |
| © 2026 Avenrow Kitchen                    |
+------------------------------------------+
~~~

The opened header remains the existing in-flow Home/Menu/About/Contact disclosure with Menu active; it pushes content down rather than covering filters. Header Menu is a navigation toggle, distinct from category controls.

Use one menu-text column. Long dish names wrap naturally, with price at the first-line edge where it fits. If cramped, place price on its own line immediately after the name and before the description. Never truncate, squeeze a name into isolated words, or shrink body text just to preserve a row. At 320px and enlarged text, greater height is acceptable; horizontal page overflow is not.

Filtered mobile uses the same anatomy with one category. Keep the activated button focused; do not jump to the heading or first dish. No sticky category bar or hidden content is proposed.

## Tablet transition

Approximately 768–1024px is a review range, not a separate third layout.

| Area | Transition |
| --- | --- |
| Header | Inherit the existing compact disclosure below its current 64rem desktop breakpoint; no Menu-specific header variant. |
| Controls | Same wrapping buttons become one horizontal row when they fit; semantics/order remain unchanged. |
| All content | Prefer sequential category sections around 768px. Introduce paired columns when each supports roughly 400px of readable text plus a 40–64px gutter, usually near 1024px. Validate actual long names and enlarged text first. |
| Uneven groups | Keep whole categories in ordinary row-major order. Never backfill gaps or split a category across rows. Retain the sequential fallback if balance fails. |
| Filtered content | One capped list at every width, without stretching descriptions across the viewport. |
| Photography | None in this proposal; no hidden slot or image-driven breakpoint. |
| Typography | Scale the compact serif intro gently. Keep body near 16px and controls near 15px; reduce major gaps before shrinking readable type. |

Future rendered validation: 320, 375, 430, 768, 1024, 1280, 1440px and wider; 200% text enlargement; landscape; All and each filtered state; long names; wrapped controls; keyboard and reduced motion. This specification does not claim browser validation of an unimplemented Menu.

## Item anatomy and page rhythm

| Part | Proposed treatment |
| --- | --- |
| Category | H2, modest serif hierarchy, approximately 30–36px desktop and 28–32px mobile; stronger separation than individual rows. |
| Dish | H3, approximately 24–28px desktop and 22–26px mobile; smaller than category/intro headings. |
| Price | Whole-dollar USD, approximately 16px, stable numeral alignment, right edge within its list and top-aligned with name. No leader dots. |
| Description | Exact canonical copy, approximately 16px with 1.55–1.7 line height, immediately below name/price. Natural wrapping. |
| Spacing | Start with 8–12px between name group and description; roughly 20–24px before a separator and before the next item. No fixed equal heights. |
| Separator | Fine decorative rule between items; no enclosing border, shadow, background panel, or vertical divider. Grouping also works through headings/spacing. |
| Dietary metadata | No dietary tags are approved. The separately approved Nonalcoholic beverage label appears as readable text with Seasonal Citrus Spritz; do not infer other claims. |
| Interaction | Rows are ordinary text, not links/buttons. No cart, quantities, details modal, hover-only information, or per-item CTA. |

Keep name, price, and description in one semantic item group and that reading order. The USD note and accessible price formatting establish currency. Do not place prices in a separate unrelated list or replace the item's full accessible content with an abbreviated label.

Working rhythm: intro to controls 24–32px; controls to content 32–48px; category heading to first item about 24px; category rows 48–64px; final content to closing context 64–80px desktop and 48–64px mobile. Retain shared footer spacing. These ranges are review guidance, not approved CSS values.

Eighteen short dishes are plausible without photographs. Category headings, ingredient lines, price alignment, fine rules, and varied gaps prevent monotony. Filtering provides a shortcut while All stays complete. Do not hide descriptions, collapse categories, paginate, or add icons/gradients to fill space. Final page length remains uncertain until the complete approved content is rendered with the final font metrics.

## Photography recommendation

Recommend **no Menu photography** in this first wireframe. Home establishes the atmosphere; Menu offers a useful typographic contrast and direct access to prices. Omit the optional image region entirely.

F1–F3 remain available for later selective reuse if a rendered review identifies a real rhythm problem. A separately approved option could use one modest image after the complete menu and before closing context. It must not duplicate Home Featured, add a promotion/card/button, require a new asset, or interrupt category reading. No photo is selected or required by this proposal.

## Filter UX and accessibility

| State/action | Planned behavior |
| --- | --- |
| Initial visit | All selected, categories in canonical order. No redundant initial live announcement. |
| Selected state | Exactly one pressed button; visible underline and weight emphasis as well as color, plus a separate focus outline. |
| Semantics | Ordinary buttons in a labeled group; proposed accessible label **Filter menu by category**. Expose pressed state. No ARIA tabs/tab panels or mandatory arrow-key model. This accessibility label is proposed UI wording for review. |
| Keyboard | Tab/Shift+Tab visits controls in source order; Enter/Space activates. Controls remain mounted, with focus on the activated button. |
| Results | Derive records from one local selected-category ID and canonical data. Immediate update without request, spinner, fake loading, automatic scrolling, or height animation. |
| Announcement | After a changed selection, one polite atomic status announces canonical **{count} items shown.** Use **1 item shown.** for singular. Count actual dishes, not categories, non-item labels, or image slots. Do not make the entire list live. |
| Repeat selection | No duplicate announcement, content reset, scroll reset, or focus reset. |
| Mobile | Wrap all controls visibly with approximately 44px targets; no swipe requirement or hidden selected control. |
| Empty category | Retain controls and category H2; show **No items in this category. Choose another category or view All.** Announce **0 items shown.** The existing All control supplies recovery. |
| History | Follow planned local state: no query parameters, storage, or history entry per filter. Fresh mount defaults to All. Existing route focus/scroll behavior remains separate. |
| Motion | Recommend immediate static replacement. Reduced motion retains all information with no translation, stagger, smooth scroll, or structural animation. |

The empty state remains a defensive runtime case; all five categories now contain approved records.

Use one H1 Our Menu, category H2s, dish H3s, and H2 Visit Avenrow. Preserve shared landmarks, skip link, active-route semantics, mobile disclosure keyboard behavior, and readable footer disclosure. Target existing contrast requirements: 4.5:1 ordinary text and applicable 3:1 large-text/meaningful-state targets. Essential information never depends on hover, color alone, or animation. Screen-reader announcements, contrast, native zoom, and browser behavior require implementation-time testing; this document does not certify conformance.

## Content validation against content.md

Canonical heading, introduction, USD note, filter order, and closing-context excerpts above preserve the source. All 18 menu items now have approved names, descriptions, and numeric USD prices in the runtime dataset.

| Category | Complete records | Unresolved records | Final target | Readiness |
| --- | --- | --- | --- | --- |
| Starters | 3 | 0 | 3 | Established sample records |
| Mains | 5 | 0 | 5 | Established sample records |
| Sides | 3 | 0 | 3 | Approved complete records |
| Desserts | 3 | 0 | 3 | Established sample records |
| Drinks | 4 | 0 | 4 | Approved complete records |
| Total | 18 | 0 | 18 | Complete canonical menu content |

### Established record cross-check

Full descriptions remain in [the canonical table](content.md#established-sample-dishes); this is a compact validation record, not a second editable menu dataset.

| Category | Canonical names and USD prices |
| --- | --- |
| Starters | Burrata & Heirloom Tomato $17; Charred Corn Croquettes $14; Crispy Calamari $16 |
| Mains | Braised Short Rib $36; Seared Atlantic Salmon $31; Wild Mushroom Rigatoni $26; Herb Roasted Chicken $28; New York Strip $39 |
| Desserts | Burnt Honey Cheesecake $12; Dark Chocolate Tart $13; Vanilla Bean Panna Cotta $11 |

No conflicting prices or exact duplicate descriptions were found among the 18 records. The established 11 dishes remain unchanged. `menuData.js` now contains all 18 records in canonical category order, with numeric prices and stable IDs. Home still derives exactly its original three featured dishes from this dataset, retaining F1/F2/F3 image references.

### Content completeness resolved

The seven former gaps are resolved by the approved Sides and Drinks records in [content.md](content.md#approved-sides-and-drinks). House Cocktail is now Avenrow Old Fashioned; Seasonal Spritz (Nonalcoholic) is now Seasonal Citrus Spritz; Sparkling Water is now Sparkling Mineral Water. Wine by the Glass includes a 5 oz pour; Sparkling Mineral Water specifies 750 ml.

Seasonal Citrus Spritz has `nonalcoholic: true` and must display the full textual label **Nonalcoholic** in the future Menu UI. This explicit beverage fact does not imply vegetarian, vegan, gluten-free, allergy-safe, or other dietary/allergen metadata. No generalized dietary system is introduced.

No unresolved menu-record content issues remain. The introduction and visual/interaction recommendations still await design approval. Content completion does not authorize Menu implementation or approve its visual layout.

## Menu wireframe review questions

| # | Question | Assessment of this written proposal |
| --- | --- | --- |
| 1 | Can visitors understand the structure immediately? | Compact title, USD note, visible controls, and category headings establish it. First-viewport fit needs rendered verification. |
| 2 | Are prices easy to scan? | Stable right edges within each list and direct name association support scanning; narrow layouts may stack prices without truncation. |
| 3 | Is filtering useful with about 18 items? | Yes as an optional shortcut, especially for Drinks/Desserts. All remains complete; search/advanced filtering are unnecessary. |
| 4 | Does All avoid excessive length? | Eighteen concise rows grouped into five categories are plausible. The complete copy is now available; final page length still requires rendered review. |
| 5 | One or two desktop columns? | Paired complete categories in row-major order when widths fit; single lists for filtered states and a sequential fallback if imbalance becomes excessive. |
| 6 | Are mobile controls usable? | Wrapping exposes every category without swiping. Verify targets, focus, and reflow later at 320px and enlarged text. |
| 7 | Is photography necessary? | No. Recommend none; a separately reviewed single-image reuse remains optional. |
| 8 | Editorial without heavy imagery? | Serif/sans hierarchy, alignment, fine rules, and open spacing supply the editorial character. |
| 9 | Same visual system as Home? | Uses actual shared container, palette, typography stacks, chrome, focus treatment, and unboxed dish presentation. |
| 10 | Content gaps blocking implementation? | No menu-record content gaps remain: all 18 records are complete and synchronized. Design approval and separate implementation authorization are still required. |

## Approval boundary and checklist

Review the compact canonical intro, paired All layout with intentional short-column space, single-list filtered state, wrapped controls, unchanged header CTA, image-free direction, and canonical closing context. Reassess row balance and page length using the complete approved records during the next authorized design review. Photography is optional, not a prerequisite.

Only content completeness is approved below. All Menu design approvals remain unchecked; content approval does not approve this visual proposal. Do not begin final Menu implementation, edit Home, acquire assets, install packages, or design About/Contact from this document alone.

- [ ] Menu desktop hierarchy approved
- [ ] Menu mobile hierarchy approved
- [ ] Menu intro approved
- [ ] Category navigation approved
- [ ] All-state layout approved
- [ ] Filtered-state layout approved
- [ ] Menu item anatomy approved
- [ ] Price alignment approved
- [ ] Photography usage approved
- [ ] Closing CTA approved
- [ ] Mobile filter behavior approved
- [x] Content completeness approved

# About Wireframe

**Implementation update:** The user approved this About direction and exact copy. `/about` is now implemented with the three approved reused assets, scoped responsive layouts, and nearby chef disclosure. All design-stage restrictions below are retained as historical planning context; they do not describe the current implementation authorization. Contact remains unimplemented. See [About QA](qa.md#about-implementation-verification).


Status: Documentation-only proposal for review. The user confirms Home and Menu are completed and visually approved; their implemented visual language is the reference. About remains a placeholder route. No application code, image conversion, new asset, package, or deployment is part of this task. All About approvals below remain pending.

## Purpose and sources

Explain the neighborhood/shared-table concept, seasonal cooking, hospitality, and fictional Executive Chef Ethan Cole through concise narrative and images of place and craft. Avoid an invented history, corporate profile, luxury-hotel presentation, or chef résumé.

Sources reviewed: [brief](brief.md), [requirements](requirements.md), [architecture](architecture.md), [brand](brand.md), [canonical content](content.md#about), [assets](assets.md), [roadmap](roadmap.md), [QA](qa.md), README, preceding wireframes, and the actual Home/Menu, shared Header/Footer, data, typography, and responsive styles. Some earlier planning statements are historical. In particular, the finished Menu now reuses hands-plating imagery beside Drinks; this proposal acknowledges that reuse without changing Menu documentation or implementation.

The desktop/mobile diagrams are schematic, not rendered designs or measured browser evidence. Boxes identify regions and image roles; they do not prescribe card shells or visible borders. Labels marked WORKING are proposed section headings, not silently approved canonical copy. Copy excerpts below are for fit; content.md remains the source of truth.

## Visual continuity and deliberate differences

Retain the current approximately 1,240px capped container, responsive 20/32/48px side padding, ivory/ink/olive palette, restrained fine rules, serif headings, sans-serif body, visible focus treatment, and understated links. The font stacks name Instrument Serif and Manrope but currently use Georgia/system sans fallbacks; no new fonts are proposed. Body measure should stay around 55–68 characters when space permits, with short paragraphs and approximately 16px text. Do not stretch paragraphs across the full container.

Home opens with a large food image in a roughly 45/55 split. About instead uses broad text/negative space and a smaller, right-aligned portrait of the room: roughly seven grid columns for text/gutter against four for the image, with one column of flexibility. Start near 60/40 occupied width, not a new rigid ratio. Cap the portrait around 360–400px wide on roomy desktop so the short introduction does not become an oversized empty hero. H1 is the canonical **Our Story**, at the calmer interior-page scale, not Home's long display statement. Omit a redundant ABOUT eyebrow and an early repeated CTA.

The page sequence is: shared Header → introductory text/portrait → Story text and landscape → typography-led Approach → Chef & Craft → concise Visit → shared Footer. A separate hospitality section is deliberately omitted. This gives three photographs, compared with Home's nine and Menu's one, without another gallery or food preview.

## Content and section responsibilities

| Region | Content and hierarchy | Composition and visual weight |
| --- | --- | --- |
| Shared Header | Existing AVENROW, four destinations, View Menu → `/menu`; About active. | Unchanged compact shared row; mobile uses the existing normal-flow disclosure. |
| Intro | H1 **Our Story**. Canonical working About sentence: “Avenrow Kitchen is a neighborhood restaurant concept built around the idea that elevated food can still feel familiar and welcoming.” | Broad left text region, narrow right G1 portrait. Primary opening moment, smaller than Home hero; text precedes image in reading order. |
| Avenrow Story | Proposed H2 **At the shared table** (WORKING COPY). Required canonical paragraph: “Avenrow Kitchen is a neighborhood restaurant inspired by seasonal ingredients, honest cooking, and the belief that great meals are meant to be shared.” Then canonical working About sentence: “The concept brings together seasonal ingredients, thoughtful preparation, modern American cooking, and relaxed hospitality.” | Narrow editorial text block first, followed by an inset landscape I1. This is not Home's image-left/text-right Story split. Keep the second paragraph close to the first, not a separate promotional section. |
| Our Approach | Proposed H2 **Our Approach** (WORKING COPY), with the three existing principle headings and their exact one-sentence descriptions. | Text-only pause. Desktop heading rail left; three compact, vertically ordered principle rows right, separated by fine rules. No cards, icons, numbering, or duplicate philosophy section. |
| Chef & Craft | **Executive Chef** as a small role label; H2 **Ethan Cole**. Canonical working sentence: “Ethan Cole's approach centers on seasonal ingredients and thoughtful cooking.” Exact disclosure: “Fictional chef profile created for this concept.” | Restrained copy left, wider G2 landscape right; approximately 40/60 with adequate gutter. The image demonstrates anonymous craft, never identity. One sentence is enough for the draft; no space reserved for invented credentials. |
| Visit | H2 **Visit Avenrow**, **Brooklyn, New York**, **Dinner daily from 5 PM**. **View Menu** → `/menu` primary; **Contact Us** → `/contact` secondary. | Quiet practical close with a fine top rule and clear footer separation. No detailed hours table, map, address, open-status calculation, booking, or ordering. |
| Shared Footer | Existing identity, Home/Menu/About/Contact, Brooklyn context, disclosure, copyright. | Reuse exactly; About active. No new social links or oversized brand panel. |

Principle copy, unchanged from content.md:

| Heading | Copy |
| --- | --- |
| Seasonal Ingredients | Our menu evolves with ingredients at their best. |
| Thoughtful Cooking | Familiar flavors refined through modern techniques. |
| Warm Hospitality | Relaxed service designed to make every visit feel effortless. |

### Story repetition and editorial limits

The requested neighborhood/shared-meals paragraph is also Home's Story teaser. Repeat it **once** here because this brief explicitly requires it; do not repeat Home's “Good Food. Thoughtfully Made.” heading, Our Story self-link, or image-left composition. The About-specific concept sentences and fictional chef introduction add context, but the current canonical material offers only modest narrative depth. Do not claim a richer history that has not been written.

The three principles are intentional cross-page continuity, consolidated into one section. No expanded principle paragraphs are approved. If review finds the narrative repetitive, request an approved replacement paragraph in content.md rather than paraphrasing facts or adding unsupported claims during implementation.

## Desktop

### Complete desktop wireframe

~~~text
+----------------------------------------------------------------------------------+
| SHARED HEADER                                                                    |
| AVENROW                  Home   Menu   About*   Contact            [View Menu]    |
+----------------------------------------------------------------------------------+
| INTRO: broad text region / smaller right-aligned portrait                         |
|                                                                                  |
| Our Story                                         +----------------------------+ |
|                                                   | G1 / dining-corner.png     | |
| Avenrow Kitchen is a neighborhood restaurant       | Portrait around 4:5        | |
| concept built around the idea that elevated food   | Table, seating, light      | |
| can still feel familiar and welcoming.             | No text overlay            | |
|                                                   |                            | |
|                                                   +----------------------------+ |
|                                                                                  |
| STORY                                                                            |
| At the shared table [WORKING heading]                                             |
|                                                                                  |
| Avenrow Kitchen is a neighborhood restaurant inspired by seasonal                 |
| ingredients, honest cooking, and the belief that great meals are                  |
| meant to be shared.                                                              |
|                                                                                  |
| The concept brings together seasonal ingredients, thoughtful                     |
| preparation, modern American cooking, and relaxed hospitality.                   |
|                                                                                  |
|              +---------------------------------------------------------------+   |
|              | I1 / restaurant-interior.png                                  |   |
|              | Inset landscape, approximately 3:2                            |   |
|              | Wider room perspective; no edge-to-edge cinematic banner      |   |
|              +---------------------------------------------------------------+   |
|                                                                                  |
| APPROACH: typography pause                                                       |
| -------------------------------------------------------------------------------- |
| Our Approach              Seasonal Ingredients                                   |
| [WORKING heading]         Our menu evolves with ingredients at their best.        |
|                           ------------------------------------------------------ |
|                           Thoughtful Cooking                                     |
|                           Familiar flavors refined through modern techniques.    |
|                           ------------------------------------------------------ |
|                           Warm Hospitality                                       |
|                           Relaxed service designed to make every visit feel      |
|                           effortless.                                            |
|                                                                                  |
| CHEF & CRAFT                                                                     |
| Executive Chef                    +--------------------------------------------+ |
| Ethan Cole                        | G2 / hands-plating.png                     | |
|                                   | Landscape around 3:2                       | |
| Ethan Cole's approach centers     | Anonymous hands and plate; no portrait     | |
| on seasonal ingredients and       | Not a photograph of Ethan Cole             | |
| thoughtful cooking.               |                                            | |
|                                   +--------------------------------------------+ |
| Fictional chef profile created for this concept.                                 |
|                                                                                  |
| VISIT                                                                            |
| -------------------------------------------------------------------------------- |
| Visit Avenrow                                                                    |
| Brooklyn, New York                        [View Menu]      Contact Us ->          |
| Dinner daily from 5 PM                                                           |
+----------------------------------------------------------------------------------+
| SHARED FOOTER                                                                    |
| AVENROW                                          Home   Menu   About*   Contact   |
| Brooklyn, New York                                                               |
| A fictional restaurant concept created as a frontend portfolio project.           |
| © 2026 Avenrow Kitchen                                                            |
+----------------------------------------------------------------------------------+
~~~

Image labels and the nonidentity note inside G2 are review annotations, not captions. The chef disclosure is actual visible copy outside the image and belongs to the complete chef section. Start the chef text/image at a common top edge; place the disclosure in a short row immediately beneath the combined region, without a large gap. It must remain clearly associated with the profile rather than drifting toward Visit.

The Story landscape can occupy roughly 8–9 of the 12 conceptual columns, aligned toward the right after the narrower text block. At the full container, cap its occupied width around 800–880px so it is a meaningful scene rather than a full-width photo wall. Its modest inset differs from Home's reversed split. No overlap, negative-margin collage, or masonry is needed.

## Mobile

### Complete mobile wireframe, approximately 375–430px

~~~text
+------------------------------------------+
| AVENROW                         [Menu]   |
+------------------------------------------+
| Our Story                                |
|                                          |
| Avenrow Kitchen is a neighborhood         |
| restaurant concept built around the      |
| idea that elevated food can still feel   |
| familiar and welcoming.                  |
|                                          |
|     +--------------------------------+   |
|     | G1 / dining-corner.png         |   |
|     | One restrained portrait       |   |
|     | Around 4:5, capped width      |   |
|     +--------------------------------+   |
|                                          |
| At the shared table [WORKING heading]     |
|                                          |
| Avenrow Kitchen is a neighborhood         |
| restaurant inspired by seasonal          |
| ingredients, honest cooking, and the      |
| belief that great meals are meant to     |
| be shared.                               |
|                                          |
| The concept brings together seasonal     |
| ingredients, thoughtful preparation,     |
| modern American cooking, and relaxed     |
| hospitality.                             |
|                                          |
| +--------------------------------------+ |
| | I1 / restaurant-interior.png          | |
| | Shallow landscape, around 3:2         | |
| +--------------------------------------+ |
|                                          |
| Our Approach [WORKING heading]            |
| ---------------------------------------- |
| Seasonal Ingredients                     |
| Our menu evolves with ingredients at     |
| their best.                              |
| ---------------------------------------- |
| Thoughtful Cooking                       |
| Familiar flavors refined through         |
| modern techniques.                       |
| ---------------------------------------- |
| Warm Hospitality                         |
| Relaxed service designed to make every   |
| visit feel effortless.                   |
|                                          |
| Executive Chef                           |
| Ethan Cole                               |
| Ethan Cole's approach centers on         |
| seasonal ingredients and thoughtful      |
| cooking.                                 |
|                                          |
| +--------------------------------------+ |
| | G2 / hands-plating.png                | |
| | Shallow landscape, around 3:2         | |
| +--------------------------------------+ |
| Fictional chef profile created for       |
| this concept.                            |
|                                          |
| ---------------------------------------- |
| Visit Avenrow                            |
| Brooklyn, New York                       |
| Dinner daily from 5 PM                   |
| [View Menu]                              |
| Contact Us ->                            |
+------------------------------------------+
| AVENROW                                  |
| Home     Menu     About*     Contact      |
| Brooklyn, New York                       |
| A fictional restaurant concept created   |
| as a frontend portfolio project.         |
| © 2026 Avenrow Kitchen                    |
+------------------------------------------+
~~~

Reading order is intro text → G1 → Story text → I1 → Approach → chef role/name/copy → G2 → chef disclosure → Visit/actions → Footer. Preserve that DOM order at every width. The disclosure immediately follows the single shallow chef image and remains part of the same semantic section; never turn it into a figure caption that identifies the hands as Ethan Cole. If rendered spacing makes the association unclear, move the disclosure directly after chef copy in both DOM and visual order, subject to review.

Use G1 as the only portrait emphasis. Start with a mobile width cap around 280–300px inside the content column, aligned toward the right rather than imposing full-screen height. Native 4:5 keeps the foreground chair and table intact while keeping occupied height around 350–375px at that cap. At 320px, fit within available width. I1 and G2 remain approximately 3:2 and span the usable column; do not force all three into tall portrait treatments. No horizontal image strip, carousel, overlay, or hidden image on mobile.

## Tablet transition

| Region | Approximately 768–1024px behavior |
| --- | --- |
| Header | Use existing shared disclosure until its current 64rem desktop transition; About does not introduce a special threshold. |
| Intro | Split only when the paragraph retains a comfortable measure beside a roughly 280–340px portrait plus gutter. At narrower tablet widths, keep text then a modest right-aligned portrait. Do not stretch it to tablet width. |
| Story | Intentionally remains text followed by landscape, not a side-by-side split. Increase the landscape measure and introduce its inset as space permits; collapse inset before crowding text. |
| Approach | Start stacked. When the heading rail and principle descriptions fit, place heading left and the three stacked rows right. Do not switch the principles themselves into Home's three peer columns; this preserves distinction and readable sentences. |
| Chef | Introduce copy-left/image-right only with adequate width for a roughly 55-character paragraph and recognizable hands/plate. Otherwise keep text, shallow image, disclosure. No tiny two-column mobile arrangement. |
| Images | Preserve G1 portrait and I1/G2 landscape; change occupied width rather than blindly increasing height. No separate source copies or destructive crops required. |
| Gaps/actions | Grow major boundaries gradually from roughly 48–64px toward 80–96px. Let Visit actions share a row when comfortable, otherwise stack in the same order. |

Breakpoints are content-driven review decisions. Future checks must include 320, 375, 430, 768, 1024, 1280, and 1440px+, enlarged text, landscape, and representative viewport heights. No actual About responsive/browser test is claimed by these diagrams.

## Photography selection and reuse

All paths below identify existing PNG masters under `src/assets/images/home/`. The four candidates were visually inspected. Existing optimized delivery derivatives are already present elsewhere in the repository; this planning pass creates, converts, copies, or downloads nothing. Future delivery decisions must preserve the approved source and avoid unnecessary duplication.

| Asset / exact PNG path | Disposition and observed role | Proposed crop and alt intent |
| --- | --- | --- |
| G1: `gallery/dining-corner.png` | SELECT for intro. Visible foreground wooden chair/table, upholstered banquette, glassware, candlelight and flowers create a more intimate opening than Home's food hero. Native 1122 × 1402. | Keep native near-4:5 portrait; scale it down rather than cutting away the chair. Informative alt candidate: “Dining corner with a wooden table, upholstered seating, candles, and flowers.” No claim this is an operating Avenrow venue. |
| I1: `story/restaurant-interior.png` | SELECT for Story. Visible foreground table/chairs, occupied room and kitchen depth provide a wider perspective distinct from G1. Native 1536 × 1024. | Start near native 3:2 at all widths; preserve foreground table and background room. Alt candidate: “Warm dining room with wooden tables, seated diners, and an open kitchen.” Do not identify diners or staff. |
| G2/C1 reuse: `gallery/hands-plating.png` | SELECT for Chef & Craft. Both hands, a bowl, garnish and plate are visible; no recognizable face. Native 1536 × 1024. Already used in Home Gallery and Menu alongside Drinks. | Retain landscape near 3:2 and both hands; no face crop or invented portrait. Alt candidate: “Hands adding a garnish to a plated dish.” Never name Ethan Cole or assert an exact dish identity in About alt text. |
| G4: `gallery/table-setting.png` | OMIT. Visible plate/linen/cutlery, glassware and candles would add another atmosphere image without enough distinct approved hospitality copy. Native 1536 × 1024. | No About slot or alt required. If later approved, describe the visible setting only; do not invent service claims or crop the glass to force a shape. |

Reuse is deliberate: G1 becomes a small introductory portrait instead of a gallery tile; I1 follows narrative instead of sitting left of Home's teaser; G2 supports a disclosed fictional profile rather than a gallery or Drinks-adjacent filler. Preserve photographic warmth without heavy filters, text overlays, decorative captions, or invented identity. Do not force a new crop solely to disguise reuse. Each selected photo occurs once on About; F1–F3 food images and the shared-meal hero are excluded.

Source/license provenance remains unresolved as recorded in assets.md; this selection does not invent ownership, authorship, releases, or attribution. No new A1 or recognizable chef portrait is needed for this proposal.

## Hospitality decision and page rhythm

**Recommend omitting the separate Hospitality / Dining Experience section.** Warm Hospitality already provides approved service wording, and the intro/Story photography establishes the room and table. Adding G4 would increase the image count to four, duplicate atmosphere, and require another paragraph not currently approved. This omission is a proposal for review, not removal of required hospitality meaning.

Rhythm: strong but contained introduction → short narrative and wider room view → text-only principles → one craft image with a brief fictional profile → practical close. The Story text separates the first two photographs; Approach separates interior and craft. Keep internal paragraph gaps small (about 16–24px) and text-to-image gaps moderate (24–32px mobile, 32–48px desktop), with larger major boundaries only where subjects change. Do not apply maximum spacing to both sides of every section.

Story and Approach should connect more closely than unrelated sections. Chef should be visually quieter than the opening, and its image must not dwarf its one-sentence profile. Three images are sufficient; the main mobile-length risks are an oversized G1 portrait and unnecessarily tall I1/G2 crops, not missing content. Rendering must establish actual page length before declaring it acceptable or quoting scroll depth.

## Accessibility plan

- One H1 Our Story. H2s for Story, Our Approach, Ethan Cole, and Visit Avenrow; H3s for the three principles. Executive Chef is a readable role label, not a competing page heading.
- Keep DOM/reading order identical to the mobile sequence. Desktop grid placement must not reverse the narrative or detach disclosure from chef content.
- Selected images add visible scene information beyond adjacent abstract copy, so informative contextual alt is recommended as above. Decorative empty alt is acceptable only after a placement-level review establishes redundancy; do not automatically copy Menu's decorative G2 decision into About.
- Keep the chef disclosure ordinary visible text, approximately 14–16px with comfortable contrast. No tooltip, tiny caption, warning banner, low-contrast legal treatment, or screen-reader-only disclaimer.
- Preserve shared skip link, active About navigation, mobile disclosure keyboard/Escape behavior, route-heading focus, visible link focus, and comfortable targets. Use links for View Menu and Contact Us.
- No text embedded in images, hover-only information, motion-dependent reading, parallax, or forced viewport-height regions. Static content remains complete with reduced motion.
- Future implementation should reserve image dimensions, review initial-image loading priority, lazy-load later images appropriately, and use existing responsive delivery practices. No performance result or new pipeline is claimed here.
- Later QA must verify contrast, keyboard flow, screen-reader order, alt/disclosure clarity, image loading stability, native zoom and 320px reflow. The specification is not accessibility-conformance evidence.

## Content validation and unresolved editorial choices

| Content | Source/status | Decision needed |
| --- | --- | --- |
| Our Story H1 | Canonical About heading | No new headline required. |
| Intro and second Story paragraph | Existing About working narrative in content.md | Approve their final use/placement; preserve wording meanwhile. |
| Required neighborhood/shared-meals paragraph | Canonical Home story and explicitly requested for About | Retained once. Accept its deliberate repetition or approve replacement copy separately. |
| At the shared table; Our Approach | New WORKING section headings | Approve these two labels before promoting them into canonical content. No new factual narrative accompanies them. |
| Three principles/sentences | Existing Home copy; About reuse subject to editorial approval | Approve compact reuse rather than fabricate expansions. |
| Ethan Cole / Executive Chef | Established fictional name/title | No identity or credential gap to fill. |
| Chef sentence | One existing working philosophy sentence | Approve this concise profile as sufficient, or supply additional approved philosophy copy. There is no approved biography. |
| Fictional chef profile created for this concept. | Exact canonical disclosure | Review visible placement and association, not an invented alternative warning. |
| Visit/context/actions/footer | Canonical shared wording; View Menu already specified for About | Approve secondary Contact action alongside primary View Menu. No contact functionality is added here. |
| Separate hospitality copy | No distinct additional paragraph established | Omit the section rather than manufacture service/history claims. |

No culinary school, prior restaurant, mentor, award, Michelin experience, tenure, founding date, supplier, farm, milestone, press claim, or affiliation is supported. These are intentionally absent, not prompts to invent credentials. Do not identify any pictured hands or person as Ethan Cole.

Content is sufficient for a concise wireframe, but final About wording/section labels, principle reuse, chef-profile sufficiency, and hospitality omission need approval before final implementation. The new page's added factual depth is limited to the supplied concept narrative and explicitly fictional chef; richer storytelling would require approved copy, not longer fabricated paragraphs. This pass does not edit content.md or overwrite the Home/Menu specifications.

## About review questions

| # | Question | Assessment of this proposal |
| --- | --- | --- |
| 1 | Meaningful information beyond Home? | Adds the About concept framing and fictional chef philosophy. Depth remains modest; the required shared-meals paragraph and principles intentionally repeat established ideas. |
| 2 | Intro distinct from Home Hero? | Yes: shorter Our Story heading, broad text space and a smaller atmospheric portrait, no large food image, no 45/55 replay or opening CTA stack. |
| 3 | Story concise enough? | Two short canonical paragraphs, capped measure, one landscape; no invented long history. |
| 4 | Do principles add value? | They organize the approach in one text-only pause. Keep existing one-sentence treatments rather than another full philosophy section. |
| 5 | Chef credible without portrait? | A clearly fictional profile can communicate cooking philosophy with anonymous craft imagery. It makes no résumé claim. |
| 6 | Disclosure appropriate? | Visible within the chef section immediately after its copy/image group, and directly after the shallow mobile image. Confirm association at render time. |
| 7 | Are 2–3 images enough? | Three selected: intimate place, wider room, craft. No additional food or table-setting gallery is needed. |
| 8 | Unnecessary Home repetition? | All sources are reused, but with distinct roles/scale; I1/G1 overlap in atmosphere and G2 also appears on Menu. Each must justify its role in later review; no image is added just to fill space. |
| 9 | Too long on mobile? | Not measurable yet. One width-capped portrait plus two shallow landscapes and short copy is a reasonable starting point; no fourth hospitality image. |
| 10 | Useful closing Visit? | Yes: returns from narrative to location/dinner context, menu browsing and Contact without fake business actions. |
| 11 | Consistent with Home/Menu? | Uses their actual shared chrome, capped grid, typography stacks, colors, rules, and restrained actions, with a distinct narrative composition. |
| 12 | What blocks final implementation? | Approval of About layout/copy placements, two working headings, principle reuse, concise chef content, disclosure placement, and hospitality omission. No missing credentials should be invented. Separate implementation authorization remains required. |

## About approval checklist

The user explicitly approved the About wireframe and authorized implementation. These checks record that design approval, not a claim of full accessibility or cross-browser certification.

- [x] About desktop hierarchy approved
- [x] About mobile hierarchy approved
- [x] Intro composition approved
- [x] Story composition approved
- [x] Principles treatment approved
- [x] Chef section approved
- [x] Chef disclosure approved
- [x] Photography selection approved
- [x] Optional hospitality section decision approved
- [x] Closing CTA approved
- [x] Mobile page length approved
- [x] About content completeness approved

# Contact Wireframe

Status: Contact wireframe and listed copy approved by the user; Contact is now implemented. The diagrams and planning rationale below are the historical design specification, not browser evidence. The implementation uses required text Subject, no enforced character limits, and clear-after-success behavior. See qa.md for scoped verification; shared Home/Menu/About and Header/Footer were preserved.

## Purpose and sources

Provide sample contact details, Brooklyn context, canonical hours, and an accessible local form demonstration. Contact is the functional, restrained close to the site: compact editorial typography, useful information, and clearly interactive fields. It does not represent a real receiving restaurant or reservation service.

Sources reviewed: [brief](brief.md), [requirements](requirements.md), [architecture](architecture.md), [brand](brand.md), [content](content.md#contact-and-hours), [assets](assets.md), [roadmap](roadmap.md), [QA](qa.md), README, preceding wireframes, and the actual pages, shared Header/Footer, UI components, restaurantInfo data, and responsive/typography styles. Earlier placeholder and future-phase statements in some documents are historical; the current implementation and latest user instruction establish this pass's scope. No existing Contact form or validation utility is implemented; architecture.md lists future possibilities.

The diagrams below are schematic, not rendered browser evidence. Outlines identify regions and fields, not enclosing cards. WORKING labels identify proposed website wording awaiting approval; the annotation itself is not website copy. Canonical content remains in content.md; excerpts here exist to assess layout and interaction.

Two source decisions are explicit:

- Retain the canonical H1 **Contact & Visit**, rather than silently replacing it with the suggested Contact. No approved supporting sentence exists; the proposed sentence below is WORKING COPY and makes no private-dining or response promise.
- The latest brief explicitly specifies a required **Subject text input**. This supersedes the earlier select direction for this proposal. The old Choose a subject placeholder, select error, and pending options are not used here. The authorized implementation pass synchronized the older statements in content.md, architecture.md, roadmap.md, and qa.md.

## Composition and content responsibilities

| Region | Content | Relationship and priority |
| --- | --- | --- |
| Shared Header | Existing AVENROW, Home, Menu, About, Contact, View Menu. | Contact active; shared desktop navigation and normal-flow mobile disclosure unchanged. |
| Intro | H1 Contact & Visit. WORKING support: “View our sample contact details and opening hours, or try the demonstration form.” | Compact interior-page opening, no oversized hero or introductory action. |
| Demonstration context | Portfolio demonstration — messages are not sent or stored. | One readable notice directly above the information/form composition, close to the form and before input. On mobile it precedes the sample details, framing both details and form without repeated notices. |
| Information | Proposed H2 Get in touch; labeled Email, Phone, Location; canonical examples below. | Left desktop column, first in mobile reading order. Ordinary text, no panel or icons needed. |
| Form | Proposed H2 Send a message; required-field helper, five vertically ordered fields, Send Message, status region. | Wider right column; primary interaction, without a dashboard shell. All fields remain one column within the form. |
| Hours / Visit | H2 Visit Avenrow; Brooklyn, New York; canonical three day/time pairs; View Menu → /menu. | Secondary region after the form, separated by whitespace and a fine rule. No repeated contact details or extra hours summary. |
| Shared Footer | Existing wordmark, four links, Brooklyn context, concept disclosure, copyright. | Existing compact close, unchanged. |

Canonical sample details are **hello@avenrow.example**, **(718) 555-0148**, and **Brooklyn, New York**. Keep email and phone noninteractive, consistent with content.md and restaurantInfo.js: neither is a working contact channel. Do not add mailto/tel links, a street address, ZIP code, map, business pin, directions, social accounts, booking, or live opening status. The latest brief's shorter Brooklyn wording is sufficient for this layout; no additional geographical detail is needed.

## Desktop

Use the existing approximately 1,240px capped container with shared content edges. Begin around 38/62 information-to-form occupied width after a comfortable gutter, permitting 35/65–40/60 as content requires. Top-align the two section headings. Leave the information column naturally shorter than the form; do not stretch it with filler or a photograph.

~~~text
+----------------------------------------------------------------------------------+
| SHARED HEADER                                                                    |
| AVENROW                 Home   Menu   About   Contact*             [View Menu]   |
+----------------------------------------------------------------------------------+
| INTRO                                                                            |
| Contact & Visit                                                                  |
| View our sample contact details and opening hours, or try the                    |
| demonstration form. [WORKING COPY]                                                |
|                                                                                  |
| Portfolio demonstration — messages are not sent or stored.                        |
|                                                                                  |
| INFORMATION / approximately 38%         FORM / approximately 62% after gutter      |
| Get in touch [proposed H2]              Send a message [proposed H2]               |
|                                        Fields marked required must be completed. |
| Email                                                                            |
| hello@avenrow.example                   Full Name (required)                      |
|                                        [_______________________________________] |
| Phone                                                                            |
| (718) 555-0148                          Email Address (required)                  |
|                                        [_______________________________________] |
| Location                                                                         |
| Brooklyn, New York                     Phone Number (optional)                   |
|                                        [_______________________________________] |
|                                                                                  |
|                                        Subject (required)                        |
|                                        [_______________________________________] |
|                                                                                  |
|                                        Message (required)                        |
|                                        [                                       ] |
|                                        [                                       ] |
|                                        [_______________________________________] |
|                                                                                  |
|                                        [ Send Message ]                          |
|                                        (status region: initially empty)          |
|                                                                                  |
| HOURS / VISIT                                                                    |
| -------------------------------------------------------------------------------- |
| Visit Avenrow                          Monday–Thursday       5:00 PM–10:30 PM     |
| Brooklyn, New York                     Friday–Saturday       5:00 PM–11:30 PM     |
| View Menu ->                           Sunday                5:00 PM–10:00 PM     |
|                                                                                  |
+----------------------------------------------------------------------------------+
| SHARED FOOTER                                                                    |
| AVENROW                                          Home   Menu   About   Contact*  |
| Brooklyn, New York                                                               |
| A fictional restaurant concept created as a frontend portfolio project.           |
| © 2026 Avenrow Kitchen                                                            |
+----------------------------------------------------------------------------------+
~~~

The empty lower portion of the information column is a consequence of the useful form length, not an asset slot. Avoid artificially matching both column heights. The initially empty status region may have a modest minimum line allowance, but must grow for wrapped messages; it is not a large reserved blank block.

Use approximately 32–48px between intro and the main composition, 24–32px between the notice and its columns, and 20–24px between field groups as review starting points. Separate the completed form region from Visit by roughly 64–80px plus restrained top-rule padding. Retain about 64–96px of clear page-ending space before the shared Footer. These are flexible relationships, not cumulative mandatory margins or implementation pixels.

## Mobile

At approximately 375–430px, use one column with the established side padding. Preserve the same DOM order at all widths: intro → notice → information → form → Visit → Footer. The notice is deliberately before the form, rather than beneath it; it must be understood before any entry or submission.

~~~text
+------------------------------------------+
| AVENROW                         [Menu]   |
+------------------------------------------+
| Contact & Visit                          |
| View our sample contact details and      |
| opening hours, or try the demonstration  |
| form. [WORKING COPY]                     |
|                                          |
| Portfolio demonstration — messages are   |
| not sent or stored.                      |
|                                          |
| Get in touch [proposed H2]               |
| Email                                    |
| hello@avenrow.example                    |
| Phone                                    |
| (718) 555-0148                            |
| Location                                 |
| Brooklyn, New York                       |
|                                          |
| Send a message [proposed H2]             |
| Fields marked required must be           |
| completed.                               |
|                                          |
| Full Name (required)                     |
| [____________________________________]   |
|                                          |
| Email Address (required)                 |
| [____________________________________]   |
|                                          |
| Phone Number (optional)                  |
| [____________________________________]   |
|                                          |
| Subject (required)                       |
| [____________________________________]   |
|                                          |
| Message (required)                       |
| [                                    ]   |
| [                                    ]   |
| [                                    ]   |
| [____________________________________]   |
|                                          |
| [ Send Message ]                         |
| (status region: initially empty)         |
|                                          |
| ---------------------------------------- |
| Visit Avenrow                            |
| Brooklyn, New York                       |
|                                          |
| Monday–Thursday                          |
| 5:00 PM–10:30 PM                          |
| Friday–Saturday                          |
| 5:00 PM–11:30 PM                          |
| Sunday                                   |
| 5:00 PM–10:00 PM                          |
|                                          |
| View Menu ->                             |
|                                          |
+------------------------------------------+
| AVENROW                                  |
| Home     Menu     About     Contact*     |
| Brooklyn, New York                       |
| A fictional restaurant concept created   |
| as a frontend portfolio project.         |
| © 2026 Avenrow Kitchen                    |
+------------------------------------------+
~~~

Fields fill the available column; no side-by-side name/email grouping. Recommend a content-width submit button matching the site's current action sizing, with at least a comfortable 44px interaction height. Allow its label to wrap at enlarged text. Message begins around four to six text rows and can be resized vertically; no fixed-height constraint clips user text. Keep labels and errors close to their fields and allow error text to increase page height naturally.

Use roughly 32–40px between information and form and 48–64px before Visit as mobile starting points. Keep enough bottom breathing room to distinguish Visit from Footer. Mobile length comes from the five necessary fields and useful hours, not oversized typography, imagery, or filler. Do not hide content to shorten the page.

## Tablet transition and responsive review

| Area | Approximately 768–1024px recommendation |
| --- | --- |
| Information / form | Keep stacked at narrower tablet widths. Introduce two columns only when the details fit beside a comfortably usable form around 360–400px or wider plus gutter. Around 1024px is a candidate, not a compulsory breakpoint. |
| Fields | Remain one vertical sequence, full width within their own column; never create narrow paired inputs merely to shorten the page. |
| Hours | Permit heading/context beside the day/time list when both fit. Day and time may align on one row or stack as a pair without truncation. |
| Actions | Preserve content-width submit and View Menu treatments. Neither floats, sticks to the screen, or requires an extra mobile duplicate. |
| Navigation | Reuse the current shared 64rem transition; no Contact-specific navigation threshold or overlay. |

Later rendered QA must include 320, 375, 430, 768, 1024, 1280, and 1440px+, mobile landscape, enlarged text, and zoom/reflow. Check long email values, multi-line errors, focus scrolling with a virtual keyboard, textarea resizing, natural heading wrapping, and associated day/time pairs. Inputs and grid children must shrink within the content width; never suppress page overflow merely to conceal a sizing bug. These are future checks, not browser results from this documentation pass.

## Form specification and visual treatment

| Label | Conceptual control | Rule | Autocomplete | Error wording |
| --- | --- | --- | --- | --- |
| Full Name (required) | Text input | Nonempty after trimming; accept international names, punctuation, and single names. | name | Please enter your full name. |
| Email Address (required) | Email input | Nonempty and ordinary email-format validity; no domain whitelist or delivery lookup. | email | Please enter a valid email address. |
| Phone Number (optional) | Telephone input | Empty allowed; no rigid country-specific formatting rule. | tel | No required-field error. |
| Subject (required) | Text input, per latest brief | Nonempty after trimming; no select options. | No special token needed | WORKING: Please enter a subject. |
| Message (required) | Textarea | Nonempty after trimming. | No special token needed | Please enter a message. |

Keep native autocomplete available. Use explicit visible labels above controls, with programmatic label/control associations and required semantics on the four required fields. Do not use placeholders as labels; empty controls are sufficient. The helper is exactly **Fields marked required must be completed.**

Match existing ivory backgrounds, ink text, olive action/focus, serif headings, and sans-serif controls. The current font stacks still use Georgia/system fallbacks; this proposal introduces no new font. Start near the current 44–64px interior H1 scale, calmer section headings, 16px input/body text, and 14–16px labels, helper, notice, errors, and status. Preserve the hierarchy without shrinking functional text into editorial labels.

Recommend fine full field borders, around 4px radius consistent with existing buttons, modest padding, and 44–48px minimum single-line control heights. Use an existing ink/olive tone with sufficient contrast for essential field boundaries and focus; the decorative taupe rule alone must not establish a field's only visible boundary. Keep the current visible focus language. No floating labels, glass, pills, enclosing form panel, heavy shadow, bright error banner, decorative icons, or hover-dependent information.

Exact field limits remain unresolved. content.md's 2,000-character Message limit/helper is explicitly a proposal, not an approved constraint. Do not add a counter or silently enforce that limit in this wireframe. If approved later, associate the helper with Message and provide the canonical length error without silently truncating pasted text.

## Validation and interaction strategy

Validate locally on submit, not on every initial keystroke. Missing whitespace-only required values fail; preserve all entered values when validation fails. Show the canonical summary **Please review the highlighted fields.** above the fields and a concise text error directly below each invalid control. Associate helper/error text through aria-describedby and apply aria-invalid only when invalid. Text and focus must explain the error without relying on color, icons, or a browser tooltip alone.

On a failed submit, focus the first invalid field in document order. This is the simplest approach for five fields and lets the associated label/error explain the correction immediately. The visual summary need not also be an assertive live announcement; avoid reading every error twice. Recheck previously invalid fields as corrected, clearing a resolved error without moving focus. Do not introduce new errors in untouched fields while the visitor is typing. Revalidate the entire form on the next submit.

Support ordinary keyboard submission, including Enter in single-line fields; Enter in Message inserts a newline. Keep tab order natural, with no positive tabindex or custom keyboard replacement. Retain the shared skip link, active navigation, mobile disclosure/Escape behavior, route-heading focus, and visible focus. A native submit button is distinct from the site's navigation ActionLink.

Lifecycle: idle → immediate validating → editable errors or submitting → demo success. Use the architecture's approximately **700ms** local simulation, within the requested 400–800ms range. The button/status wording is canonical **Simulating submission…**, more accurate than Sending. Prevent duplicate pointer and keyboard submissions with a submission guard. Recommend aria-disabled on the submit button during this short period so it retains focus, with the guard actually blocking activation; the attribute alone is insufficient. Briefly make field values read-only during simulation so edits cannot be silently lost during completion/reset. Restore normal editing afterward.

Use one initially empty polite status region for submitting and success, with atomic concise updates. Do not make the entire form a live region. Announce each state transition once; changing the button label must not trigger a second live announcement. Keep focus on the initiating control during progress/completion, unless the user deliberately moves elsewhere. Do not autofocus the success notice or navigate away. No spinner or motion is required, so reduced motion preserves the complete behavior.

**Recommend clearing fields after successful simulation**, while retaining the visible success message. It leaves no entered values in the component after completion, makes the no-storage demonstration straightforward, and allows another attempt immediately. Clear only after valid completion, never after failed validation. Restore Send Message and usable fields; keep success visible until the user starts a new entry, then return to idle and clear stale status. This reset choice is a recommendation awaiting approval, not an implemented behavior.

The exact success message is **Demo complete. Your message was not sent or stored.** No reply promise, delivery claim, confirmation number, redirect, fake server failure, or extra confirmation page is appropriate.

## Compact form state wireframes

These show only the changing component regions; the single pre-input notice remains visible in every state. Annotations in parentheses are not UI copy.

### Default

~~~text
Send a message
Fields marked required must be completed.
Full Name (required)       [______________________]
Email Address (required)   [______________________]
Phone Number (optional)    [______________________]
Subject (required)         [______________________]
Message (required)         [______________________]
[ Send Message ]
(polite status empty; no errors)
~~~

### Validation error

~~~text
Please review the highlighted fields.
Full Name (required)       [______________________] <- focus, if first invalid
Please enter your full name.
Email Address (required)   [example               ]
Please enter a valid email address.
(other values preserved; other invalid fields get their own inline errors)
[ Send Message ]
~~~

### Submitting

~~~text
(valid values retained, briefly read-only)
[ Simulating submission… ]  (activation blocked; focus retained)
Simulating submission…     (one polite status update)
~~~

The repeated progress wording identifies button and status roles in this diagram, not two live announcements. Keep the status visually modest and do not add a third progress message or artificial network indicator.

### Demo success

~~~text
(fields cleared and editable again; labels remain)
[ Send Message ]
Demo complete. Your message was not sent or stored.
(one polite announcement; message stays until new entry)
~~~

## Local-only boundary

Future React JavaScript/JSX implementation must intercept native form submission and perform only local validation/state changes. No fetch(), axios, server action, API endpoint, Formspree, EmailJS, database, email service, localStorage submission history, session storage, URL parameters containing field values, or analytics/console logging of entered content. Values exist only in temporary component memory during interaction. Clear that state after completion or unmount and cancel the simulation timer on unmount. No simulated server error or backend dependency is required.

Native browser autocomplete is retained as requested; the app does not deliberately persist entries or implement submission history. The no-storage notice describes the site's behavior, not control over a visitor's browser autofill settings. None of these behaviors is created or tested in this documentation pass.

## Hours, disclosure, and photography

Use restaurantInfo.js as the future runtime source for the same canonical schedule already rendered on Home, in America/New_York:

| Days | Hours |
| --- | --- |
| Monday–Thursday | 5:00 PM–10:30 PM |
| Friday–Saturday | 5:00 PM–11:30 PM |
| Sunday | 5:00 PM–10:00 PM |

Represent complete day/time associations using the established hours pattern; desktop alignment must not become a rigid overflow-prone table on mobile. View Menu links to /menu. The footer keeps **A fictional restaurant concept created as a frontend portfolio project.** It explains the site, while the one form notice explains interaction; both are necessary and neither substitutes for the other.

**Recommend no Contact photography and no reserved image slot.** This intentionally closes the sequence from Home's food/atmosphere, Menu's restrained editorial image, and About's narrative imagery with useful typography and controls. The older optional G4 Contact accent in assets.md is not selected for this proposal. No asset is generated, acquired, converted, or reused here.

## Contact review questions

| # | Question | Assessment of this proposal |
| --- | --- | --- |
| 1 | Is the page clearly functional without feeling corporate? | Yes at specification level: compact intro, open information/form columns, simple fields, and hours; no dashboard panel or lead-generation fields. |
| 2 | Is the form the appropriate visual priority? | Its wider column and single primary submit action establish priority without an oversized hero or controls. Rendering must confirm balance. |
| 3 | Is contact information easy to find before the form? | It is the first column in reading order and appears before the mobile form, clearly labeled within the demonstration context. |
| 4 | Is the demo-only nature clear before submission? | The exact notice precedes both the sample details and form, with readable text and no hidden disclaimer. |
| 5 | Is validation understandable and accessible? | The plan uses submit-first validation, retained invalid values, inline associated errors, and first-invalid-field focus; browser/assistive-technology verification remains future work. |
| 6 | Does success avoid implying a real message was sent? | The exact completion explicitly says not sent or stored; no delivery claim, reply promise, or redirect is proposed. |
| 7 | Are hours useful without a fake address/map? | The complete schedule and Brooklyn context provide the required sample information, with a practical menu link. |
| 8 | Does mobile form usage feel comfortable? | The proposed full-width inputs, 16px entry text, visible labels, natural error wrapping, and shallow resizable textarea support it; real keyboard/zoom checks are still required. |
| 9 | Is photography actually unnecessary? | Yes: no task depends on imagery, and adding an atmosphere photo would lengthen the functional page without new information. |
| 10 | Does Contact complete the visual rhythm of the site? | It keeps the established typography, colors, content edges, and quiet Footer while giving photographs a deliberate pause. |
| 11 | What content decisions still need approval? | Working intro and section labels, new text-Subject error wording, final field limits, clear-after-success/reset presentation, and final layout/notice/Hours treatment. The latest brief already directs Subject to be text; no select-option approval is needed for this proposal. |

## Approval boundary and content decisions

Review the compact desktop/mobile hierarchy, notice placement, no-photography direction, field treatment, and proposed reset behavior before implementation. Approve the WORKING supporting sentence, proposed Get in touch / Send a message headings, and **Please enter a subject.** error before promoting them to canonical copy. Approve or discard the existing proposed Message limit and establish any final field limits without inventing strict name/phone rules. The required field set, canonical sample details/hours, exact notice/success wording, and local-only boundary are preserved.

The single-file append preserves the earlier Home/Menu/About specifications and all application files. No rendered prototype, responsive test, build result, or accessibility-conformance claim follows from these text diagrams. Later implementation needs separate authorization and then real keyboard, status-announcement, validation, reflow, console/network, and route QA under [qa.md](qa.md).

## Contact approval checklist

The user approved this wireframe and separately authorized implementation. These checks record design approval, not full browser or accessibility certification.

- [x] Contact desktop hierarchy approved
- [x] Contact mobile hierarchy approved
- [x] Contact intro approved
- [x] Contact information approved
- [x] Form fields approved
- [x] Form visual treatment approved
- [x] Validation behavior approved
- [x] Demo notice approved
- [x] Success behavior approved
- [x] Hours layout approved
- [x] Mobile form behavior approved
- [x] Photography omission approved
- [x] Contact content completeness approved
