import { homeImages } from '../../data/homeImages.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ActionLink from '../ui/ActionLink.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function StorySection() {
  return (
    <section aria-labelledby="story-heading" className="section-space story-section">
      <Container>
        <Reveal className="story-grid">
          <div className="story-copy">
            <SectionHeading id="story-heading">Good Food. Thoughtfully Made.</SectionHeading>
            <p>Avenrow Kitchen is a neighborhood restaurant inspired by seasonal ingredients, honest cooking, and the belief that great meals are meant to be shared.</p>
            <ActionLink to="/about">Our Story</ActionLink>
          </div>
          <ImageSlot {...homeImages.I1} className="story-image" />
        </Reveal>
      </Container>
    </section>
  )
}
