import { useState } from 'react'
import Container from '../components/ui/Container.jsx'
import ActionLink from '../components/ui/ActionLink.jsx'
import MenuFilters from '../components/menu/MenuFilters.jsx'
import MenuCategorySection from '../components/menu/MenuCategorySection.jsx'
import { menuCategories, menuItems } from '../data/menuData.js'
import { restaurantInfo } from '../data/restaurantInfo.js'
import { homeImages } from '../data/homeImages.js'

export default function MenuPage() {
  const [category, setCategory] = useState('all')
  const [announcement, setAnnouncement] = useState('')
  const categories = category === 'all' ? menuCategories : [category]

  function selectCategory(next) {
    if (next === category) return
    setCategory(next)
    const count = menuItems.filter(item => next === 'all' || item.category === next).length
    setAnnouncement(`${count} ${count === 1 ? 'item' : 'items'} shown.`)
  }

  return (
    <Container className="menu-page">
      <div className="menu-intro">
        <h1 tabIndex={-1}>Our Menu</h1>
        <p>Seasonal ingredients, familiar flavors, and thoughtful cooking.</p>
        <p className="menu-price-note">Prices are shown in USD.</p>
      </div>
      <MenuFilters categories={menuCategories} selected={category} onSelect={selectCategory} />
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        <span key={category}>{announcement}</span>
      </p>
      <div className={`menu-results ${category === 'all' ? 'menu-results-all' : 'menu-results-filtered'}`}>
        {categories.map(id => (
          <MenuCategorySection key={id} category={id}
            items={menuItems.filter(item => item.category === id)} />
        ))}
        {(category === 'all' || category === 'drinks') && (
          <picture className="menu-editorial-picture">
            <source type="image/webp" srcSet={homeImages.G2.srcSet}
              sizes={category === 'all'
                ? '(min-width: 1340px) 588px, (min-width: 1024px) calc(50vw - 80px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)'
                : '(min-width: 704px) 640px, calc(100vw - 40px)'} />
            <img className="menu-editorial-image" src={homeImages.G2.fallback}
              width={homeImages.G2.width} height={homeImages.G2.height}
              alt="" loading="lazy" decoding="async" />
          </picture>
        )}
      </div>
      <section className="menu-visit" aria-labelledby="menu-visit-heading">
        <h2 id="menu-visit-heading">Visit Avenrow</h2>
        <div className="menu-visit-details">
          <p>{restaurantInfo.location}</p>
          <p>{restaurantInfo.heroHours}</p>
          <ActionLink to="/contact">Contact Us</ActionLink>
        </div>
      </section>
    </Container>
  )
}
