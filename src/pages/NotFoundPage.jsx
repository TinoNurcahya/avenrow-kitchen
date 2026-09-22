import Container from '../components/ui/Container.jsx'
import ActionLink from '../components/ui/ActionLink.jsx'

export default function NotFoundPage() {
  return (
    <Container className="route-placeholder">
      <h1 tabIndex={-1}>Page not found</h1>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <ActionLink to="/" primary>Return Home</ActionLink>
        <ActionLink to="/menu">View Menu</ActionLink>
      </div>
    </Container>
  )
}
