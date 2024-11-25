import Link from 'next/link'
import { Collection } from '@/lib/collections'

export default function CollectionPage({ collection }: { collection: Collection }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{collection.name}</h1>
      {collection.subcategories.map((subcategory) => (
        <div key={subcategory.name} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{subcategory.name}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategory.items.map((item) => (
              <li key={item} className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow">
                <Link href={`/movies/${encodeURIComponent(item)}`} className="hover:text-blue-600 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

