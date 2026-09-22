import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router'
import { navigationItems } from '../../data/navigationData.js'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const regionRef = useRef(null)
  const focusedWithin = useRef(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    let focusFrame
    function onResize(event) {
      if (!event.matches) return
      // A display:none breakpoint can blur the link before this change event.
      const focusWasInside = focusedWithin.current || regionRef.current?.contains(document.activeElement)
      focusedWithin.current = false
      setOpen(false)
      if (focusWasInside) {
        focusFrame = requestAnimationFrame(() => {
          const target = document.querySelector('.desktop-navigation [aria-current="page"]')
            || document.querySelector('.header-wordmark')
          target?.focus({ preventScroll: true })
        })
      }
    }
    desktop.addEventListener('change', onResize)
    return () => {
      desktop.removeEventListener('change', onResize)
      cancelAnimationFrame(focusFrame)
    }
  }, [])

  function closeWithFocus() {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <div className="mobile-navigation" ref={regionRef}
      onFocusCapture={() => { focusedWithin.current = true }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)
          && !window.matchMedia('(min-width: 64rem)').matches) {
          focusedWithin.current = false
        }
      }}
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          event.preventDefault()
          closeWithFocus()
        }
      }}>
      <button ref={toggleRef} type="button" className="menu-toggle"
        aria-expanded={open} aria-controls="mobile-navigation-links"
        onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>
      <nav id="mobile-navigation-links" aria-label="Primary mobile" hidden={!open}>
        {navigationItems.map(({ path, label }) => (
          <NavLink key={path} to={path} end={path === '/'}
            className="navigation-link" onClick={closeWithFocus}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
