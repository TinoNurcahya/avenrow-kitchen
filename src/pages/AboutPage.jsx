import Container from '../components/ui/Container.jsx'
import ActionLink from '../components/ui/ActionLink.jsx'
import ImageSlot from '../components/ui/ImageSlot.jsx'
import { homeImages } from '../data/homeImages.js'
import { principles, restaurantInfo } from '../data/restaurantInfo.js'

export default function AboutPage() {
  return (
    <Container className="about-page">
      <section className="about-intro" aria-labelledby="about-heading">
        <div className="about-copy">
          <h1 id="about-heading" tabIndex={-1}>Our Story</h1>
          <p>Avenrow Kitchen is a neighborhood restaurant concept built around the idea that elevated food can still feel familiar and welcoming.</p>
        </div>
        <ImageSlot {...homeImages.G1} className="about-portrait" priority
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, (min-width: 340px) 300px, calc(100vw - 40px)"
          alt="Dining corner with a wooden table, upholstered seating, candles, and flowers." />
      </section>
      <section className="about-story" aria-labelledby="about-story-heading">
        <div className="about-copy">
          <h2 id="about-story-heading">At the shared table</h2>
          <p>Avenrow Kitchen is a neighborhood restaurant inspired by seasonal ingredients, honest cooking, and the belief that great meals are meant to be shared.</p>
          <p>The concept brings together seasonal ingredients, thoughtful preparation, modern American cooking, and relaxed hospitality.</p>
        </div>
        <ImageSlot {...homeImages.I1} className="about-interior"
          sizes="(min-width: 976px) 880px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          alt="Warm dining room with wooden tables, seated diners, and an open kitchen." />
      </section>
      <section className="about-approach" aria-labelledby="about-approach-heading">
        <h2 id="about-approach-heading">Our Approach</h2>
        <div className="about-principles">
          {principles.map(({ title, description }) => (
            <div className="about-principle" key={title}>
              <h3>{title}</h3><p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-chef" aria-labelledby="about-chef-heading">
        <div className="about-chef-grid">
          <div className="about-copy">
            <p className="about-role">Executive Chef</p>
            <h2 id="about-chef-heading">Ethan Cole</h2>
            <p>Ethan Cole's approach centers on seasonal ingredients and thoughtful cooking.</p>
            <p className="about-chef-disclosure">Fictional chef profile created for this concept.</p>
          </div>
          <ImageSlot {...homeImages.G2} className="about-craft"
            sizes="(min-width: 1340px) 706px, (min-width: 1024px) calc(60vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            alt="Hands adding a garnish to a plated dish." />
        </div>
      </section>
      <section className="about-visit" aria-labelledby="about-visit-heading">
        <div>
          <h2 id="about-visit-heading">Visit Avenrow</h2>
          <p>{restaurantInfo.location}</p>
          <p>{restaurantInfo.heroHours}</p>
        </div>
        <div className="about-actions">
          <ActionLink to="/menu" primary>View Menu</ActionLink>
          <ActionLink to="/contact">Contact Us</ActionLink>
        </div>
      </section>
    </Container>
  )
}
