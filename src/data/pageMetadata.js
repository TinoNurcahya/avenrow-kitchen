// Existing public hostname from index.html, robots.txt, and sitemap.xml.
// Update all three deployment files if the production hostname changes.
export const siteOrigin = 'https://avenrow-kitchen.vercel.app'
export const socialImage = `${siteOrigin}/social/og-preview.png`
export const pageMetadata = {
  '/': {
    title: 'Avenrow Kitchen — Contemporary American Dining',
    description: 'Explore Avenrow Kitchen, a fictional contemporary American restaurant concept in Brooklyn. A frontend portfolio project.',
  },
  '/menu': {
    title: 'Menu — Avenrow Kitchen',
    description: 'Browse 18 sample dishes and drinks with USD prices from the fictional Avenrow Kitchen restaurant concept.',
  },
  '/about': {
    title: 'Our Story — Avenrow Kitchen',
    description: 'Discover the story, seasonal cooking philosophy, and fictional chef behind the Avenrow Kitchen portfolio concept.',
  },
  '/contact': {
    title: 'Contact & Visit — Avenrow Kitchen',
    description: 'View sample restaurant details and try a contact form demonstration that does not send or store messages.',
  },
}
export const notFoundMetadata = {
  title: 'Page Not Found | Avenrow Kitchen',
  description: 'This page could not be found. Explore the menu or return to the Avenrow Kitchen fictional restaurant portfolio concept.',
}
