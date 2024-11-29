import { Collection } from '@/lib/collections'

export default function CollectionSchema({ collection }: { collection: Collection }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: `Browse our curated collection of ${collection.name.toLowerCase()}`,
    numberOfItems: Object.values(collection.categories)
      .reduce((acc, category) => acc + Object.keys(category).length, 0),
    itemListElement: Object.entries(collection.categories).map(([categoryName, movies]) => ({
      '@type': 'ItemList',
      name: categoryName.replace(/-/g, ' '),
      numberOfItems: Object.keys(movies).length,
      itemListElement: Object.values(movies).map(movie => ({
        '@type': 'Movie',
        name: movie.title,
        datePublished: movie.releaseYear,
        director: movie.director
      }))
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 