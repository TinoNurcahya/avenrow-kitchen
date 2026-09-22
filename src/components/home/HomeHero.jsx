import { homeImages } from '../../data/homeImages.js'
import Container from '../ui/Container.jsx'
import ActionLink from '../ui/ActionLink.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'
import Reveal from '../ui/Reveal.jsx'
import { restaurantInfo } from '../../data/restaurantInfo.js'

export default function HomeHero() {
  return (
    <section aria-labelledby="home-heading" className="home-hero">
      <Container className="hero-grid">
        <Reveal className="hero-copy">
          <h1 id="home-heading" tabIndex={-1}>Seasonal American Dining, Made to Be Shared.</h1>
          <p className="hero-description">Thoughtful ingredients, familiar flavors, and contemporary cooking in the heart of Brooklyn.</p>
          <div className="hero-actions">
            <ActionLink to="/menu" primary>Explore the Menu</ActionLink>
            <ActionLink to="/about">Our Story</ActionLink>
          </div>
        </Reveal>
        <ImageSlot {...homeImages.H1}
          priority className="hero-image" />
        <div className="hero-context">
          <p>{restaurantInfo.location}</p>
          <p>{restaurantInfo.heroHours}</p>
        </div>
      </Container>
    </section>
  )
}
