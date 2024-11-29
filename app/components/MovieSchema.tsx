import { MovieDetails } from '@/lib/collections'

export default function MovieSchema({ movie }: { movie: MovieDetails }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    description: movie.description,
    director: {
      '@type': 'Person',
      name: movie.director
    },
    actor: movie.cast.map(actor => ({
      '@type': 'Person',
      name: actor
    })),
    genre: movie.genre,
    datePublished: movie.releaseYear,
    duration: movie.duration,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: movie.rating,
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 