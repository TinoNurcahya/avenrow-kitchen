export default function Container({ children, className = '' }) {
  return <div className={`site-container ${className}`}>{children}</div>
}
