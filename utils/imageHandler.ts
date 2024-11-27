export async function getMovieImage(title: string, image?: string) {
  // Just return the image URL that's already in the movie data
  return image || null
} 
