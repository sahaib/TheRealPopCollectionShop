import { moviePosters } from './moviePosters'

export const PLACEHOLDER_IMAGE = 'https://placehold.co/600x900/1a1a1a/ffffff?text=Movie+Poster'

export const getMoviePoster = (movieId: string): string => {
  return moviePosters[movieId] || PLACEHOLDER_IMAGE
}

// Optional: Preload important images
export const preloadMoviePosters = () => {
  Object.values(moviePosters).forEach(url => {
    const img = new Image()
    img.src = url
  })
} 