import Hero from '@/app/components/Hero'
import Benefits from '@/app/components/Benefits'
import FeaturedCollections from '@/app/components/FeaturedCollections'
import ProductListing from '@/app/components/ProductListing'
import { collections, Collection } from '@/lib/collections'

export default function Home() {
  const featuredCollections: Collection[] = Object.values(collections).slice(0, 3)

  return (
    <div>
      <Hero />
      <Benefits />
      <FeaturedCollections collections={featuredCollections} />
      <ProductListing />
    </div>
  )
}

