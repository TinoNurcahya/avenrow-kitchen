import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ImageSlot from '../ui/ImageSlot.jsx'
import ActionLink from '../ui/ActionLink.jsx'
import Reveal from '../ui/Reveal.jsx'
import { featuredDishes } from '../../data/menuData.js'
import { formatCurrency } from '../../utils/formatCurrency.js'

export default function FeaturedDishes() {
  return (
    <section aria-labelledby="featured-heading" className="section-space featured-section">
      <Container>
        <SectionHeading id="featured-heading">From Our Kitchen</SectionHeading>
        <div className="featured-grid">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.06}>
              <article className="featured-dish">
                <p className="dish-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
                <ImageSlot {...dish.image} />
                <div className="dish-copy">
                  <div className="dish-title">
                    <h3>{dish.name}</h3>
                    <span className="dish-price"><span className="sr-only">Price: </span>{formatCurrency(dish.price)}<span className="sr-only"> USD</span></span>
                  </div>
                  <p>{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="featured-action"><ActionLink to="/menu">View Full Menu</ActionLink></div>
      </Container>
    </section>
  )
}
