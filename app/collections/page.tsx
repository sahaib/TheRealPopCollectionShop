import CollectionCard from '../components/CollectionCard'
import { collections } from '@/lib/collections'

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(collections).map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.name}
            href={`/collections/${collection.id}`}
            gradient=""
          />
        ))}
      </div>
    </div>
  )
}

