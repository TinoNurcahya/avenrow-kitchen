import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'
import { galleryItems } from '../../data/galleryData.js'

export default function DiningGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="section-space gallery-section">
      <Container>
        <SectionHeading id="gallery-heading">Dining at Avenrow</SectionHeading>
        <div className="gallery-grid">
          {galleryItems.map((image) => <ImageSlot key={image.id} {...image} />)}
        </div>
      </Container>
    </section>
  )
}
