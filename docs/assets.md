# Asset Inventory

Status: Nine user-approved Home photographs integrated and exported as responsive WebP assets. Supporting-page assets remain planned. Provenance and licensing have not been supplied and remain unresolved.

This inventory preserves the blueprint with the approved revision decisions. IDs H1, F1–F3, I1, G1–G4, and A1 identify the ten core photography candidates; C1 is a reuse slot. Asset IDs identify content, while P0/P1/P2 identify priority. Portfolio screenshots use SS1, never a priority label as their asset ID.

## Priority and delivery rules

- **P0 — Directionally critical:** Approve the subject, composition, aspect-ratio requirement, and role before final visual design is locked. The final image does not need to exist before low-fidelity wireframing.
- **P1 — Page completion:** Required before the corresponding page reaches final implementation/polish.
- **P2 — Optional or later:** Optional enhancement or post-implementation portfolio asset.

Priority does not authorize acquisition. Dimensions are approximate master/export targets; serve smaller responsive variants instead of every full-resolution master. Follow the transfer budgets in [requirements.md](requirements.md#performance-requirements).

All photography must follow the [Photography Master Direction](brand.md#photography-master-direction). Prepare responsive AVIF/WebP variants with an appropriate fallback, intrinsic dimensions, and reviewed focal points. Preserve consistent warmth and realistic food detail. Do not stretch images, obscure food with excessive darkness, or use incompatible color treatments.

## Asset workflow

Planning → Low-fidelity wireframe → Asset slot validation → Visual direction refinement → Asset sourcing / generation → High-fidelity implementation → Responsive crop QA.

Start with Home desktop and mobile only, as planned in [wireframes.md](wireframes.md). After their review, validate each proposed slot, approve P0 composition/ratio/role requirements, and remove or merge unnecessary images. Refine the slot-level direction before producing assets; do not generate all images first and design around them.

Source or generate only approved assets after wireframe review and slot validation. The [roadmap](roadmap.md) places production in Phase 4, then uses approved assets to validate the high-level Home visual in Phase 5 before application setup. This later visual check does not replace the earlier slot-level refinement. Validate responsive crops during and after implementation. The subsequent user authorization permits integration and responsive QA of the supplied Home photographs only; it does not authorize new asset acquisition or final supporting-page implementation.

## Integrated Home assets - September 22, 2026

This factual implementation record supersedes the provisional Home crop/master targets in the planning inventory below. All nine placements are implemented. Supplied originals are PNG, not the JPG extensions also mentioned in the request. Paths below are relative to `src/assets/images/home/`; originals remain intact. No stock, remote, or generated replacement was introduced.

| ID | Approved original | Source dimensions | PNG kB | WebP kB (small / large) | Placement and crop decision |
| --- | --- | --- | --- | --- | --- |
| H1 | `hero/avenrow-hero.png` | 1536 x 1024 | 2594.6 | 131.0 / 247.1 | Hero, standalone right-side image. Mobile 4:3, tablet 3:2, desktop square; 52% 65% preserves the central meal. |
| F1 | `featured/braised-short-rib.png` | 1448 x 1086 | 2239.4 | 56.6 / 153.9 | Featured short rib. Native 4:3; centered, complete plate. |
| F2 | `featured/atlantic-salmon.png` | 1448 x 1086 | 2274.4 | 58.4 / 156.0 | Featured salmon. Native 4:3; centered, complete plate. |
| F3 | `featured/mushroom-rigatoni.png` | 1448 x 1086 | 2257.6 | 59.2 / 154.8 | Featured rigatoni. Native 4:3; centered, complete plate. |
| I1 | `story/restaurant-interior.png` | 1536 x 1024 | 2138.4 | 49.5 / 120.0 | Story image left; mobile text first. Desktop 3:2; mobile 4:3 at 58% 50% retains table and kitchen. |
| G1 | `gallery/dining-corner.png` | 1122 x 1402 | 2095.4 | 73.8 / 158.5 | Gallery first, narrow portrait. Native portrait on mobile and desktop to retain chair and tables. |
| G2 | `gallery/hands-plating.png` | 1536 x 1024 | 2228.9 | 49.0 / 124.7 | Gallery second, wide landscape. Native landscape at all widths protects both hands and plate. |
| G3 | `gallery/cocktail.png` | 1122 x 1402 | 2111.8 | 74.6 / 157.0 | Gallery third, smaller portrait. Desktop native portrait; mobile square at 50% 65% retains glass rim and base. |
| G4 | `gallery/table-setting.png` | 1536 x 1024 | 2299.0 | 49.8 / 132.9 | Gallery fourth, wide landscape. Native landscape at all widths avoids additional glass/cutlery cropping. |

Sizes use decimal kB. H1 exports are 960w and 1536w; other landscape exports are 640w and 1280w; G1/G3 exports are 640w and 1122w. WebP filenames append `-<width>.webp` to each original stem. Exporting preserves framing and applies no filters or upscaling. `scripts/optimize_home_images.py` is an optional, repeatable Pillow helper, outside the Vite build; no application package was added.

Explicit Vite imports in `src/data/homeImages.js` provide `srcSet`, `sizes`, intrinsic dimensions, and contextual alt text. Existing menu records reference F1-F3 without duplicating dishes; gallery data references G1-G4. The large WebP is the default `src`, with a smaller responsive candidate. WebP is supported by the planned modern browsers; no additional AVIF/JPEG pipeline was added. PNG masters are not imported or shipped in the production build.

H1 is eager with high fetch priority; eight remaining images are lazy with automatic priority. CSS aspect ratios reserve each display crop before decoding. The originals total about 20.24 MB; the nine large WebP exports total about 1.40 MB. H1 drops from 2.59 MB to 131/247 kB. Actual transfer depends on viewport and device pixel ratio, not the combined size of all export candidates.

Alt decisions: H1 describes the visible shared meal; I1 describes the dining room; G1 describes the table/banquette; G2 describes anonymous hands plating, with no chef identity; G3 describes an amber drink, ice, and visible orange peel without claiming ingredients; G4 describes the setting. F1-F3 use empty alt because adjacent names/descriptions already communicate their useful meaning. No development labels remain in Home.

**Provenance unresolved for every supplied master:** creator, source, license terms, acquisition/generation method, and any required releases or attribution were not provided. User approval establishes selection, not verified ownership or licensing. Keep these fields open rather than inventing a source. Future C1 reuse of G2 remains a plan only.

## Photography inventory (planning targets)

| ID / group / priority | Subject and purpose | Preferred aspect ratio / master resolution | Desktop use | Mobile use | Reuse strategy | Alt-text intention and crop guidance |
| --- | --- | --- | --- | --- | --- | --- |
| H1 / Hero / P0 | Shared contemporary American meal on a warm table; establish cuisine and atmosphere | Flexible 3:2 source, 2400×1600; validate vertical/rectangular crops | Standalone right-side editorial photograph complementing left-side type | Below text/actions; possible art-directed 4:5 derivative | Hero only | Describe the visible meal. Keep plates readable independently; no large text-safe overlay area required. Avoid panoramic-only framing; preserve the focal meal across crops. |
| F1 / Featured / P0 | Braised short rib; support featured menu content | 4:3, 1200×900 | Featured dish image | Full-width dish image | Optional Menu reuse | Describe useful visible plating. Preserve plate edges and main ingredient; image must agree with the dish. |
| F2 / Featured / P0 | Seared salmon; support featured menu content | 4:3, 1200×900 | Featured dish image | Full-width dish image | Optional Menu reuse | Describe salmon and visible accompaniments. Preserve the fish and relevant sides; align with approved description. |
| F3 / Featured / P0 | Mushroom rigatoni; support featured menu content | 4:3, 1200×900 | Featured dish image | Full-width dish image | Optional Menu reuse | Describe pasta and mushrooms when informative. Avoid cropping away the recognizable ingredients. |
| I1 / Interior / P0 | Warm dining room; establish hospitality and story | 3:2, approximately 2000×1333 | Home story split | Stacked 4:3 crop | About introduction reuse | Describe dining space as concept imagery. Keep the visual depth and focal seating; avoid misleading venue labels. |
| G1 / Gallery / P1 | Intimate dining corner | 4:5, 1200×1500 | Tall gallery image | Portrait or 4:3 crop | Gallery only | Describe seating and light. Preserve the principal table/chairs in both crops. |
| G2 / Gallery / P1 | Hands plating food; show craft | 3:2, approximately 1600×1067 | Wide gallery image | 4:3 crop | About process; may satisfy C1 | Describe the action, not an invented identity. Keep hands and plate intact; favor nonidentifying framing. |
| G3 / Gallery / P1 | Cocktail detail | 4:5, 1200×1500 | Tall gallery image | Portrait crop | Optional Drinks accent | Describe the visible drink without inventing ingredients. Preserve glass rim/base as composition permits. |
| G4 / Gallery / P1 | Warm table setting | 3:2, approximately 1600×1067 | Wide gallery image | 4:3 crop | Optional Contact accent | Describe the arrangement. Keep essential setting details and avoid awkwardly clipped glassware. |
| A1 / About / P1 | Kitchen preparation scene; large editorial break | 16:9, approximately 2000×1125 | Wide About image | 4:3 crop or native ratio | About only | Describe kitchen activity. Select a central action that survives the narrow crop. |
| C1 / Chef reuse slot / P1 | Anonymous kitchen activity beside the fictional profile | Use G2 master; validate a 4:5 crop or retain a suitable rectangular ratio without upscaling | Kitchen activity beside profile | Smaller stacked reuse of G2 | Prefer G2; no unique chef portrait required | Describe hands plating or other visible activity, never identify Ethan Cole. Keep hands/food intact and avoid recognizable identity. |

Target approximately **8–10 unique core photographs**. H1, F1, F2, F3, I1, G1, G2, G3, G4, and A1 are ten candidates, not ten mandatory new acquisitions. Wireframe/slot review can merge compatible uses to reach eight or nine. C1 preferably reuses G2 and adds no unique-photo requirement; if its crop fails, revise the slot or use other approved anonymous kitchen imagery within the target instead of commissioning a portrait.

F1–F3 must feel like one photography family through lighting, tableware, grading, realism, and atmosphere. Give each dish a distinct composition rather than producing three clones.

### Optional fifth and sixth gallery images

The default remains four gallery images. Add these only if approved and if they improve the narrative rather than lengthening the page unnecessarily.

| ID / priority | Subject | Proposed aspect ratio / resolution | Desktop / mobile | Reuse | Alt and crop intent |
| --- | --- | --- | --- | --- | --- |
| G5 / P2 | Seasonal ingredient detail | 4:3, 1200×900 | Small editorial placement / stacked image | Optional philosophy accent | Identify visible ingredients; keep texture and subject recognizable |
| G6 / P2 | Second plated-food composition | 3:2, approximately 1600×1067 | Wide gallery placement / 4:3 crop | Prefer suitable existing F1–F3 imagery before adding a source | Describe the visible dish; preserve plating and avoid unsupported ingredient claims |

## Menu and location assets

- Menu: do not require photography for all 18 items. Reuse F1–F3 selectively. Names, descriptions, category hierarchy, and prices must remain understandable with all dish imagery removed.
- Location: default to textual Brooklyn context; no map asset is required. Do not invent a street address, restaurant pin, Google Business profile, or directions. A later approved generic map action uses Explore Brooklyn.
- Chef: do not source or generate a recognizable portrait and present the real-looking person as Ethan Cole. Use hands, a partial body, a cook from behind, or cropped activity. Alt text describes the action, and a concise profile disclosure provides context.

## Brand, interface, social, and portfolio assets

| ID / group / priority | Asset and purpose | Ratio / target size | Desktop and mobile use | Reuse / accessible treatment |
| --- | --- | --- | --- | --- |
| B1 / Logo / P0 | AVENROW, the finalized primary wordmark; Kitchen is a secondary descriptor | Scalable, roughly 5:1; no complex illustration | Primary header/navigation identity and footer; smaller mobile width | Shared; home link named Avenrow Kitchen home |
| B2 / Compact mark / P1 | A monogram | 1:1, scalable master | Small identity contexts | Basis for favicon system; accessible name if used as a link |
| B3 / Favicon / P1 | Simplified monogram exports | 16, 32, 48px; touch icon 180px | Browser/device surfaces | Reuse B2; no on-page alt text |
| U1 / Icons / P1 | Menu, close, arrow, chevron, status | 1:1, typically 20–24px | Shared controls | Lucide React; decorative beside equivalent text; icon-only buttons need names |
| S1 / Social preview / P1 | Wordmark, concept label, selected photo | 1200×630 | External link previews on desktop/mobile | Reuse H1 or I1; preserve key wording within safe margins |
| T1 / Fonts / P0 | Instrument Serif and Manrope | Licensed WOFF2, minimal needed styles | All layouts | Shared; retain licenses and readable fallback choices |
| SS1 / Portfolio Screenshots / P2 | Actual finished pages and interactions | Desktop and mobile viewport captures; no fixed art ratio | README and case study | Capture after implementation; alt text describes the actual page/state |

Social-profile links and their icon assets are omitted until valid destinations exist. Do not create fake Instagram, Facebook, TikTok, or X profiles, usernames, or links using `#` or `javascript:void(0)`. S1 is a share-preview image, not a social account. The former S2 placeholder is not an asset requirement.

No custom illustration, texture, video, or complex logo asset is needed for the initial scope.

## Alt text and reuse

Alt text describes what is visible and useful in context, not an invented location or person. If a nearby dish label already communicates everything an image adds, consider an empty alternative instead of repeating text. Decorative images receive empty alt text. Final alt wording can only be completed after the image is selected and inspected.

Keep one original and organized responsive derivatives. Reuse a file where appropriate without forcing the same crop or alt text on every placement. Verify each crop at the target widths; do not rely on a single default center crop.

## Provenance and licensing record

For every acquired or generated visual, later record:

- Asset ID and approved placements.
- Original source URL or generation provenance.
- Creator, license, and evidence of allowed use.
- Required attribution and permitted modifications.
- Any relevant identity or usage restrictions.
- Original and derivative filenames, formats, dimensions, and byte sizes.
- Desktop/mobile focal points and crop decisions.
- Contextual alt text or decorative designation.
- Review date and approval status.

Store font licenses and icon-license information as well. No image may be treated as proof of a real Avenrow venue, dish service, or chef affiliation.


## About implementation reuse

About uses three existing sources without conversion or duplication: `src/assets/images/home/gallery/dining-corner.png` (G1, 2,095,417 bytes), `src/assets/images/home/story/restaurant-interior.png` (I1, 2,138,430 bytes), and `src/assets/images/home/gallery/hands-plating.png` (G2/C1, 2,228,909 bytes). Existing explicit imports in homeImages.js supply responsive WebP delivery: G1 approximately 74/159 kB, I1 49/120 kB, G2 49/125 kB. The PNG masters are not directly delivered by About.

G1 retains its portrait framing, capped at 300px on mobile and 400px on desktop; I1 and G2 retain 3:2 landscapes. About supplies placement-specific sizes/alt text without changing Home/Menu references. G1 is eager/high-priority; I1/G2 are lazy. Intrinsic dimensions and reserved display ratios stabilize loading. G2 alt describes anonymous hands garnishing a dish, never Ethan Cole. No G4, new A1, or portrait was added. Provenance/license information remains unresolved.
