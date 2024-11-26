const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export async function getMovieDetails(title: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`
    )
    const data = await response.json()
    return data.results && data.results.length > 0 ? data.results[0] : null
  } catch (error) {
    console.error('Error fetching movie details:', error)
    return null
  }
}

export async function getMoviePoster(title: string) {
  try {
    const movie = await getMovieDetails(title)
    return movie?.poster_path 
      ? `${IMAGE_BASE_URL}${movie.poster_path}` 
      : '/images/dvd-placeholder.jpg'
  } catch (error) {
    console.error('Error fetching movie poster:', error)
    return '/images/dvd-placeholder.jpg'
  }
} 