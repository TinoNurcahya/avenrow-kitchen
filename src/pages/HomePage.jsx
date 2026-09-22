import HomeHero from '../components/home/HomeHero.jsx'
import FeaturedDishes from '../components/home/FeaturedDishes.jsx'
import StorySection from '../components/home/StorySection.jsx'
import PhilosophySection from '../components/home/PhilosophySection.jsx'
import DiningGallery from '../components/home/DiningGallery.jsx'
import VisitSection from '../components/home/VisitSection.jsx'

export default function HomePage() {
  return <><HomeHero /><FeaturedDishes /><StorySection /><PhilosophySection /><DiningGallery /><VisitSection /></>
}
