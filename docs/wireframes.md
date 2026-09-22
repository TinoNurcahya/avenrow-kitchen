# Home Wireframe

Status: Planning / Pre-development — low-fidelity Home specification drafted for review. This document now contains the authorized desktop/mobile wireframe specification and text diagrams, replacing the earlier wireframe plan. It is not a rendered prototype or an approved final design. No HTML, JSX, CSS, package installation, image production, logo generation, or deployment is part of this work.

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
