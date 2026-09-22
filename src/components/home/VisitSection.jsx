import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ActionLink from '../ui/ActionLink.jsx'
import { restaurantInfo } from '../../data/restaurantInfo.js'

export default function VisitSection() {
  return (
    <section aria-labelledby="visit-heading" className="section-space visit-section">
      <Container className="visit-grid">
        <div className="visit-intro">
          <SectionHeading id="visit-heading">Visit Avenrow</SectionHeading>
          <p>{restaurantInfo.location}</p>
        </div>
        <dl className="opening-hours">
          {restaurantInfo.hours.map(({ days, hours }) => (
            <div key={days}><dt>{days}</dt><dd>{hours}</dd></div>
          ))}
        </dl>
        <ActionLink to="/contact" className="visit-action">Contact Us</ActionLink>
      </Container>
    </section>
  )
}
