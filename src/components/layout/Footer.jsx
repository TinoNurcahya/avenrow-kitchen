import { NavLink, Link } from 'react-router'
import Container from '../ui/Container.jsx'
import { navigationItems } from '../../data/navigationData.js'
import { restaurantInfo } from '../../data/restaurantInfo.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <Link to="/" className="wordmark" aria-label="Avenrow Kitchen — Home">{restaurantInfo.wordmark}</Link>
          <nav aria-label="Footer" className="footer-navigation">
            {navigationItems.map(({ path, label }) => (
              <NavLink key={path} to={path} end={path === '/'} className="navigation-link">{label}</NavLink>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-sm">{restaurantInfo.location}</p>
        <p className="footer-disclosure">{restaurantInfo.disclosure}</p>
        <p className="mt-3 text-sm">{restaurantInfo.copyright}</p>
      </Container>
    </footer>
  )
}
