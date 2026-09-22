import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

export default function ActionLink({ to, children, primary = false, className = '' }) {
  return (
    <Link to={to} className={`${primary ? 'button-link' : 'text-link'} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  )
}
