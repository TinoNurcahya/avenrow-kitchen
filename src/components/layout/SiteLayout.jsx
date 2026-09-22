import { Outlet, ScrollRestoration } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import RouteEffects from '../../app/RouteEffects.jsx'

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <Footer />
      <RouteEffects />
      <ScrollRestoration />
    </>
  )
}
