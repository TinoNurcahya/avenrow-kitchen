import Container from '../ui/Container.jsx'
import { principles } from '../../data/restaurantInfo.js'

export default function PhilosophySection() {
  return (
    <section aria-labelledby="philosophy-heading" className="philosophy-section">
      <Container>
        <h2 id="philosophy-heading" className="sr-only">Our philosophy</h2>
        <div className="philosophy-grid">
          {principles.map(({ title, description }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
