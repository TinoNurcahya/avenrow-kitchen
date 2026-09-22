import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const titles = {
  '/': 'Avenrow Kitchen — Fictional Restaurant Concept',
  '/menu': 'Menu — Coming Next | Avenrow Kitchen',
  '/about': 'About — Coming Next | Avenrow Kitchen',
  '/contact': 'Contact — Coming Next | Avenrow Kitchen',
}

export default function RouteEffects() {
  const location = useLocation()
  const previousKey = useRef(location.key)

  useEffect(() => {
    document.title = titles[location.pathname] || 'Page Not Found | Avenrow Kitchen'
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', location.pathname === '/'
      ? 'Explore Avenrow Kitchen, a fictional contemporary American restaurant concept in Brooklyn. A frontend portfolio project.'
      : 'Avenrow Kitchen is a fictional frontend portfolio project. Supporting pages are not implemented yet.')
    // Preserve initial browser focus. The router handles scroll restoration separately.
    if (previousKey.current !== location.key) {
      document.querySelector('main h1')?.focus({ preventScroll: true })
    }
    previousKey.current = location.key
  }, [location.key, location.pathname])

  return null
}
