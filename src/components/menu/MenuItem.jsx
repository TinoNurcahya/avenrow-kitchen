import { formatCurrency } from '../../utils/formatCurrency.js'

export default function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <div className="menu-item-heading">
        <h3>{item.name}</h3>
        <p className="menu-item-price"><span className="sr-only">Price: </span>{formatCurrency(item.price)}<span className="sr-only"> USD</span></p>
      </div>
      <p className="menu-item-description">{item.description}</p>
      {item.nonalcoholic && <p className="menu-item-note">Nonalcoholic</p>}
    </li>
  )
}
