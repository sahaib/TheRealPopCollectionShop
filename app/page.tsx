import Hero from '@/app/components/Hero'
import Benefits from '@/app/components/Benefits'
import FeaturedCollections from '@/app/components/FeaturedCollections'
import ProductListing from '@/app/components/ProductListing'
import { collections, Collection } from '@/lib/collections'

export default function Home() {
  const featuredCollections: Collection[] = Object.values(collections).slice(0, 3)

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <Hero />
      <Benefits />
      <FeaturedCollections collections={featuredCollections} />
      <ProductListing />
    </div>
  )
}

