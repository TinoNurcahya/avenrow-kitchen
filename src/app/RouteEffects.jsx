import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const titles = {
  '/': 'Avenrow Kitchen — Fictional Restaurant Concept',
  '/menu': 'Sample Menu | Avenrow Kitchen Concept',
  '/about': 'Our Story | Avenrow Kitchen Concept',
  '/contact': 'Contact Demo | Avenrow Kitchen Concept',
}

export default function RouteEffects() {
  const location = useLocation()
  const previousKey = useRef(location.key)

  useEffect(() => {
    document.title = titles[location.pathname] || 'Page Not Found | Avenrow Kitchen'
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', location.pathname === '/'
      ? 'Explore Avenrow Kitchen, a fictional contemporary American restaurant concept in Brooklyn. A frontend portfolio project.'
      : location.pathname === '/menu'
        ? 'Browse sample dishes and USD prices created for the fictional Avenrow Kitchen restaurant website concept.'
        : location.pathname === '/about'
          ? 'Discover the story, seasonal cooking philosophy, and fictional chef behind the Avenrow Kitchen portfolio concept.'
          : location.pathname === '/contact'
            ? 'View sample restaurant details and try a contact form demonstration that does not send or store messages.'
            : 'Avenrow Kitchen is a fictional frontend portfolio project.')
    // Preserve initial browser focus. The router handles scroll restoration separately.
    if (previousKey.current !== location.key) {
      document.querySelector('main h1')?.focus({ preventScroll: true })
    }
    previousKey.current = location.key
  }, [location.key, location.pathname])

  return null
}
