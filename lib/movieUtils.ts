interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: { id: number; name: string }[];
  credits?: {
    cast: { name: string }[];
    crew: { job: string; name: string }[];
  }
}

export async function getTMDBDetails(title: string, year: number): Promise<TMDBMovie | null> {
  try {
    // First, search for the movie
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
    );
    const searchData = await searchResponse.json();
    const movieId = searchData.results?.[0]?.id;

    if (!movieId) return null;

    // Then get full movie details including credits
    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`
    );
    const movieData = await detailsResponse.json();
    
    return movieData;
  } catch (error) {
    console.error('Error fetching TMDB data:', error);
    return null;
  }
}

export function determineCollectionAndCategory(movie: TMDBMovie) {
  if (!movie?.genres) return { collection: 'other', category: 'General' };
  
  const genres = movie.genres.map(g => g.name.toLowerCase());
  const year = new Date(movie.release_date).getFullYear();
  
  if (year >= 2000 && year < 2010) {
    return { collection: '2000s', category: '2000s-Masterworks' };
  }
  
  if (genres.includes('drama')) {
    return { collection: 'drama', category: 'Drama-Classics' };
  }
  
  return { collection: 'other', category: 'General' };
}

export function generateMovieEntry(movieData: TMDBMovie, collection: string, category: string) {
  const director = movieData.credits?.crew.find(c => c.job === 'Director')?.name || 'Unknown';
  const cast = movieData.credits?.cast.slice(0, 3).map(c => c.name) || [];
  const movieId = movieData.title.replace(/[^a-zA-Z0-9]/g, '-');

  return {
    id: movieId,
    title: movieData.title,
    price: 49.99,
    image: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
    releaseYear: new Date(movieData.release_date).getFullYear(),
    duration: `${Math.floor(movieData.runtime / 60)}h ${movieData.runtime % 60}m`,
    rating: Math.round(movieData.vote_average * 10) / 20,
    description: movieData.overview,
    director,
    cast,
    genre: movieData.genres.map(g => g.name),
    tmdb_id: movieData.id,
    category,
    subcategory: movieId
  };
} 