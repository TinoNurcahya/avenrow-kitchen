import MenuItem from './MenuItem.jsx'

export default function MenuCategorySection({ category, items }) {
  return (
    <section className="menu-category" aria-labelledby={`menu-category-${category}`}>
      <h2 id={`menu-category-${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {items.length ? (
        <ul>{items.map(item => <MenuItem key={item.id} item={item} />)}</ul>
      ) : <p>No items in this category. Choose another category or view All.</p>}
    </section>
  )
}
