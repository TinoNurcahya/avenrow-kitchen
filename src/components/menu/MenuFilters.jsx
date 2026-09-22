export default function MenuFilters({ categories, selected, onSelect }) {
  return (
    <div className="menu-filters" role="group" aria-label="Filter menu by category">
      {['all', ...categories].map(category => (
        <button key={category} type="button" aria-pressed={selected === category}
          onClick={() => onSelect(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}
