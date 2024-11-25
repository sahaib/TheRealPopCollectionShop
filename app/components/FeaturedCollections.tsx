import Image from 'next/image'
import Link from 'next/link'
import { Collection } from '@/lib/collections'

interface FeaturedCollectionsProps {
  collections: Collection[]
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link key={collection.id} href={`/collections/${collection.id}`} className="group">
            <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden transition-transform transform group-hover:scale-105 shadow-md flex flex-col h-full">
              <div className="relative aspect-[16/9] w-full">
                <Image 
                  src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(collection.name)}`} 
                  alt={collection.name} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{collection.name}</h3>
                <div className="mt-auto">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {Object.keys(collection.categories).length} categories
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

