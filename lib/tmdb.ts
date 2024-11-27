const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

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
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.results?.[0]?.poster_path) {
      return `${IMAGE_BASE_URL}${data.results[0].poster_path}`
    }
    return null
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('TMDB API request timed out for:', title)
    } else {
      console.error('TMDB API Error:', error)
    }
    return null
  }
} 