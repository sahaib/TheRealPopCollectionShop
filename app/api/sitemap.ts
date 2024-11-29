import { collections } from '@/lib/collections'

export default function generateSitemap() {
  const baseUrl = 'https://yourdomain.com'
  
  const movieUrls = Object.values(collections).flatMap(collection =>
    Object.values(collection.categories).flatMap(category =>
      Object.values(category).map(movie => ({
        url: `${baseUrl}/movies/${movie.id}`,
        lastModified: new Date().toISOString()
      }))
    )
  )

  const categoryUrls = Object.keys(collections).map(category => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date().toISOString()
  }))

  return [...movieUrls, ...categoryUrls]
} 