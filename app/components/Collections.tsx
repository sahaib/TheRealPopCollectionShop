import Link from 'next/link'
import { collections } from '@/lib/collections'
import CollectionCard from './CollectionCard'

export default function Collections() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(collections).map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.name}
            href={`/collections/${collection.id}`}
            gradient="from-blue-500 to-purple-500"
          />
        ))}
      </div>
    </section>
  )
}

