import Image from 'next/image'
import Link from 'next/link'
import { Collection } from '@/lib/collections'

interface FeaturedCollectionsProps {
  collections: Collection[]
}

// Predefined gradient classes for different collection types
const gradientClasses = {
  'Bollywood': 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500',
  'Hollywood': 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600',
  'Science Fiction': 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500',
  'default': 'bg-gradient-to-br from-gray-500 via-slate-500 to-zinc-500'
}

export default function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link key={collection.id} href={`/collections/${collection.id}`} className="group">
            <div className="relative h-full rounded-lg overflow-hidden transition-all duration-500 
                          shadow-lg group-hover:shadow-2xl group-hover:scale-105">
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${
                gradientClasses[collection.name.split(' ')[0] as keyof typeof gradientClasses] || gradientClasses.default
              } opacity-90`} />
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid" />
              
              {/* Content */}
              <div className="relative p-8 h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                  <div className="w-16 h-1 bg-white/50 rounded-full mb-4" />
                  <p className="text-white/80">
                    Explore our curated selection of {collection.name.toLowerCase()} films
                  </p>
                </div>
                
                {/* Categories Count */}
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
                                text-sm text-white font-medium">
                    {Object.keys(collection.categories).length} categories
                  </div>
                </div>
                
                {/* Decorative Circle */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 
                              bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

