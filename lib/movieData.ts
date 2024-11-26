import { collections, MovieDetails } from './collections'

export async function getMovieBySlug(category: string, slug: string): Promise<MovieDetails | null> {
  try {
    const collection = collections[category]
    if (!collection) return null

    for (const [_, categoryContent] of Object.entries(collection.categories)) {
      if (categoryContent[slug]) {
        return categoryContent[slug]
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching movie:', error)
    return null
  }
}

export async function getMoviesByCategory(category: string, subcategory: string): Promise<MovieDetails[]> {
  try {
    const collection = collections[category]
    if (!collection || !collection.categories[subcategory]) return []

    return Object.values(collection.categories[subcategory])
  } catch (error) {
    console.error('Error fetching movies:', error)
    return []
  }
} 