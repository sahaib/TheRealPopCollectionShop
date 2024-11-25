import Link from 'next/link'

const collections = [
  { id: 'bollywood', name: 'Bollywood Action & Thriller' },
  { id: 'hollywood-action', name: 'Hollywood Action & Adventure' },
  { id: 'hollywood-scifi', name: 'Hollywood Sci-Fi & Fantasy' },
  { id: 'international', name: 'International Cinema' },
  { id: 'animation', name: 'Animation' },
  { id: 'classics', name: 'Classics (1920s-1980s)' },
  { id: 'modern-classics', name: 'Modern Classics (1990s-2020s)' },
]

export default function Collections() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link 
            key={collection.id} 
            href={`/collections/${collection.id}`}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
            <p className="text-gray-600">Explore our curated selection</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

