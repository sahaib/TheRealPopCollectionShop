import Image from 'next/image'
import Link from 'next/link'
import { Collection } from '@/lib/collections'

interface FeaturedCollectionsProps {
  collections: Collection[]
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection) => (
          <Link key={collection.id} href={`/collections/${collection.id}`} className="group">
            <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
              <Image 
                src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(collection.name)}`} 
                alt={collection.name} 
                width={200} 
                height={200} 
                className="w-full" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{collection.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {Object.keys(collection.categories).length} categories
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

