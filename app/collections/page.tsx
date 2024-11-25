import { collections } from '@/lib/collections'
import Link from 'next/link'

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link 
            key={collection.id} 
            href={`/collections/${collection.id}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{collection.name}</h2>
            <p className="text-gray-600">
              {collection.subcategories.length} subcategories
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

