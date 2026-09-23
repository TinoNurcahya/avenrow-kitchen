# Avenrow Kitchen

## Project Summary

Avenrow Kitchen is a self-directed frontend portfolio project for a fictional contemporary American restaurant. I built a responsive, multi-page React experience that combines editorial layouts, a filterable sample menu, accessible interactions, and optimized image delivery.

## The Concept

The concept imagines a Brooklyn neighborhood restaurant shaped by seasonal ingredients, familiar flavors, thoughtful cooking, and shared meals. It is intentionally fictional: the restaurant, chef profile, contact details, and menu are concept content rather than a real business launch.

## Goals

- Create a believable premium-casual restaurant experience without generic template patterns.
- Preserve editorial character while keeping navigation, menu scanning, and practical information easy to use.
- Make layouts work naturally from narrow mobile widths to large desktop screens.
- Keep the fictional concept transparent and avoid misleading business interactions.

## Design Direction

The visual language is warm, contemporary, refined, crafted, approachable, and editorial. It uses Warm Ivory (`#F3EFE7`), Ink (`#181816`), Olive (`#3B4536`), Clay (`#9B5A3C`), and Warm Taupe (`#B5A58E`).

Typography, whitespace, fine rules, selective photography, and open editorial compositions carry the hierarchy. The interface avoids SaaS card grids, heavy shadows, excessive rounding, generic restaurant templates, oversized motion, and false luxury signals.

## User Experience Decisions

- Use a compact shared header, visible active route, and accessible in-flow mobile disclosure.
- Give Home an asymmetric split hero, then alternate food, narrative, atmosphere, and practical information.
- Keep Menu typography-first, with clear price/name association and category filtering instead of card-heavy browsing.
- Make About a short editorial story with an explicitly fictional chef disclosure beside anonymous craft imagery.
- Make Contact functional but honest: sample details, canonical hours, and a form that clearly does not send or store messages.

## Page Breakdown

### Home

An asymmetric editorial hero leads into Featured Dishes, Story, a compact Philosophy treatment, Dining Gallery, and Visit information. Responsive image crops support the composition without placing text over photography.

![Home desktop editorial split hero](screenshots/avenrow-home-desktop.png)

### Menu

The Menu uses a canonical 18-item dataset across Starters, Mains, Sides, Desserts, and Drinks. Accessible category controls update the visible list while typography and separators keep prices and descriptions scannable. One restrained craft image keeps the page from becoming image-heavy.

![Menu desktop with accessible category filters](screenshots/avenrow-menu-desktop.png)

### About

About expands the concept through room photography, a concise story, an approach section, and the fictional Executive Chef Ethan Cole. Anonymous hands plating a dish support the Chef & Craft section; a visible disclosure avoids implying the image identifies a real person.

![About desktop editorial story and interior photography](screenshots/avenrow-about-desktop.png)

### Contact

Contact is deliberately minimal: sample contact details, canonical hours, and a local-only demonstration form. It validates required fields, focuses the first invalid control, prevents duplicate submits, clears a valid submission, and states that no message was sent or stored.

![Contact desktop with sample details and local-only form](screenshots/avenrow-contact-desktop.png)

## Responsive Strategy

Content drives breakpoints and reflow. Mobile prioritizes a single reading column, full-width controls, and simple image sequences. Tablet layouts introduce columns only when the content remains readable. Desktop uses a capped container and editorial asymmetry without creating isolated layouts for every width.

![Home mobile showing message-first responsive stacking](screenshots/avenrow-home-mobile.png)

## Accessibility Considerations

The implementation includes semantic landmarks, one primary heading per route, visible focus, a skip link, keyboard-operable navigation and filters, reduced-motion support, responsive reflow, meaningful image alternatives, and form labels/error associations with a polite status region. Scoped browser checks are recorded in [QA](qa.md); screen-reader and physical-device review remain manual follow-up.

## Technical Architecture

React Router provides the route structure. Reusable layout, UI, image, menu, and form components keep shared behavior separate from page composition. Data modules centralize restaurant information, menu records, navigation, and responsive image delivery. Vercel rewrites support direct SPA routes.

## Image and Performance Strategy

Approved PNG masters are retained with responsive WebP sources and PNG fallbacks. `srcSet`, `sizes`, intrinsic dimensions, lazy loading for lower imagery, and a prioritized Home hero reduce avoidable payload and layout shift. Route metadata, a social preview, icons, and a manifest support portfolio presentation without claiming a real business.

## Challenges

| Challenge | Solution |
| --- | --- |
| Preserving editorial compositions across screen sizes | Used content-driven responsive transitions instead of compressing desktop grids into mobile. |
| Keeping menu categories and prices easy to scan | Used semantic, typography-led sections with accessible filtering rather than repeated cards. |
| Delivering large photography responsibly | Added responsive WebP delivery while retaining PNG masters and fallbacks. |
| Demonstrating a form without pretending a backend exists | Used local React state, concise validation, simulated progress, and explicit no-delivery/no-storage copy. |
| Presenting a fictional business truthfully | Used portfolio-focused metadata and disclosures; no Restaurant/LocalBusiness schema, fake social accounts, or real-service claims. |

## Final Result

The result is a complete frontend restaurant concept that demonstrates responsive UI implementation, interaction detail, image delivery, and truthful portfolio presentation without inventing commercial outcomes.

## Tech Stack

React, JavaScript, JSX, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React, and Vercel.

## Live Demo

https://avenrow-kitchen.vercel.app/

## Portfolio Card Copy

| Field | Copy |
| --- | --- |
| Title | Avenrow Kitchen |
| Category | Frontend Development / Responsive Web Design |
| One line | Responsive editorial restaurant experience built with React. |
| Short description | A self-directed fictional restaurant concept featuring responsive editorial layouts, an 18-item filtered menu, accessible navigation, a local-only contact form, and optimized image delivery. |
| Tech | React, JavaScript, Vite, Tailwind CSS, React Router, Framer Motion |
| Live link | https://avenrow-kitchen.vercel.app/ |
| GitHub link | Add repository URL when available. |

## Project Disclaimer

Avenrow Kitchen is a fictional restaurant concept created as a frontend portfolio project. It is not client work, a live restaurant, or a commercial booking/contact system.
