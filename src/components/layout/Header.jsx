import { Link, NavLink, useLocation } from 'react-router'
import Container from '../ui/Container.jsx'
import ActionLink from '../ui/ActionLink.jsx'
import MobileNavigation from './MobileNavigation.jsx'
import { navigationItems } from '../../data/navigationData.js'
import { restaurantInfo } from '../../data/restaurantInfo.js'

export default function Header() {
  const location = useLocation()
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link to="/" className="wordmark header-wordmark" aria-label="Avenrow Kitchen — Home">
          {restaurantInfo.wordmark}
        </Link>
        <nav className="desktop-navigation" aria-label="Primary"
          onBlurCapture={(event) => {
            if (!event.relatedTarget && !window.matchMedia('(min-width: 64rem)').matches) {
              document.querySelector('.menu-toggle')?.focus({ preventScroll: true })
            }
          }}>
          {navigationItems.map(({ path, label }) => (
            <NavLink key={path} to={path} end={path === '/'} className="navigation-link">
              {label}
            </NavLink>
          ))}
          <ActionLink to="/menu" primary>View Menu</ActionLink>
        </nav>
        <MobileNavigation key={location.key} />
      </Container>
    </header>
  )
}
