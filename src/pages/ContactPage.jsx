import Container from '../components/ui/Container.jsx'
import ActionLink from '../components/ui/ActionLink.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import { restaurantInfo } from '../data/restaurantInfo.js'

export default function ContactPage() {
  return (
    <Container className="contact-page">
      <header className="contact-intro">
        <h1 tabIndex={-1}>Contact &amp; Visit</h1>
        <p>View our sample contact details and opening hours, or try the demonstration form.</p>
      </header>
      <p className="contact-notice" id="contact-notice">Portfolio demonstration — messages are not sent or stored.</p>
      <div className="contact-grid">
        <section aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading">Get in touch</h2>
          <dl className="contact-details">
            <div><dt>Email</dt><dd>{restaurantInfo.contactDemo.email}</dd></div>
            <div><dt>Phone</dt><dd>{restaurantInfo.contactDemo.phone}</dd></div>
            <div><dt>Location</dt><dd>{restaurantInfo.location}</dd></div>
          </dl>
        </section>
        <ContactForm />
      </div>
      <section className="contact-visit" aria-labelledby="contact-visit-heading">
        <div className="contact-visit-copy">
          <h2 id="contact-visit-heading">Visit Avenrow</h2>
          <p>{restaurantInfo.location}</p>
        </div>
        <dl className="opening-hours contact-hours">
          {restaurantInfo.hours.map(({ days, hours }) => (
            <div key={days}><dt>{days}</dt><dd>{hours}</dd></div>
          ))}
        </dl>
        <ActionLink to="/menu" className="contact-menu-link">View Menu</ActionLink>
      </section>
    </Container>
  )
}
