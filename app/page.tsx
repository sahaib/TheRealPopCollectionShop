import Hero from './components/Hero'
import FeaturedCollections from './components/FeaturedCollections'
import Benefits from './components/Benefits'
import ProductListing from './components/ProductListing'
import { collections } from '@/lib/collections'

export default function Home() {
  const featuredCollections = Object.values(collections).slice(0, 4)

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Benefits />
      <FeaturedCollections collections={featuredCollections} />
      <ProductListing />
    </div>
  )
}

