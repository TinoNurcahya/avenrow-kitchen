import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { pageMetadata, notFoundMetadata, siteOrigin, socialImage } from '../data/pageMetadata.js'

export default function RouteEffects() {
  const location = useLocation()
  const previousKey = useRef(location.key)

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, '') || '/'
    const metadata = pageMetadata[path] || notFoundMetadata
    const known = Object.hasOwn(pageMetadata, path)
    document.title = metadata.title
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)
    setMeta('meta[name="description"]', metadata.description)
    setMeta('meta[name="robots"]', known ? 'index, follow' : 'noindex, follow')
    for (const [key, value] of Object.entries({ title: metadata.title, description: metadata.description, image: socialImage })) {
      setMeta(`meta[property="og:${key}"]`, value)
      setMeta(`meta[name="twitter:${key}"]`, value)
    }
    const url = `${siteOrigin}${path === '/' ? '/' : path}`
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:url"]', url)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (known) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = url
    } else canonical?.remove()
    // Preserve initial browser focus. The router handles scroll restoration separately.
    if (previousKey.current !== location.key) {
      document.querySelector('main h1')?.focus({ preventScroll: true })
    }
    previousKey.current = location.key
  }, [location.key, location.pathname])

  return null
}
