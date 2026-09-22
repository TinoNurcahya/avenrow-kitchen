import Container from '../components/ui/Container.jsx'
import ActionLink from '../components/ui/ActionLink.jsx'

export default function MenuPage() {
  return (
    <Container className="route-placeholder">
      <h1 tabIndex={-1}>Menu</h1>
      <p>This page will be implemented in the next design phase.</p>
      <ActionLink to="/">Return Home</ActionLink>
    </Container>
  )
}
