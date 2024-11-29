import { collections } from '@/lib/collections';

interface MovieSearchResult {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieUpdate {
  tmdb_id: number;
  image: string;
}

interface MovieItem {
  title: string;
  releaseYear: number;
  // Add other properties as needed
}

async function getMovieDetails(title: string, year: number): Promise<MovieUpdate | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`,
      {
        headers: { 'Accept': 'application/json' }
      }
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }

    const data = await response.json();
    const results: MovieSearchResult[] = data.results;

    if (!results.length) {
      console.log(`❌ No results found for: ${title} (${year})`);
      return null;
    }

    // Find the best match considering year
    const bestMatch = results.find(movie => {
      const movieYear = new Date(movie.release_date).getFullYear();
      return Math.abs(movieYear - year) <= 1;
    }) || results[0];

    return {
      tmdb_id: bestMatch.id,
      image: `https://image.tmdb.org/t/p/w500${bestMatch.poster_path}`
    };
  } catch (error) {
    console.error(`❌ Error searching for ${title}:`, error);
    return null;
  }
}

export async function updateCollectionMovieDetails() {
  const updates: { [key: string]: MovieUpdate } = {};
  const errors: { [key: string]: string } = {};

  for (const category of Object.values(collections.categories)) {
    for (const [id, movie] of Object.entries(category.items) as [string, MovieItem][]) {
      if (!movie.releaseYear) {
        errors[id] = 'Missing release year';
        continue;
      }

      console.log(`🔍 Processing: ${movie.title} (${movie.releaseYear})`);
      const details = await getMovieDetails(movie.title, movie.releaseYear);

      if (details) {
        console.log(`✅ Found details for ${movie.title}:`);
        console.log(`   TMDB ID: ${details.tmdb_id}`);
        console.log(`   Poster: ${details.image}`);
        updates[id] = details;
      } else {
        errors[id] = 'No TMDB details found';
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }

  // Generate update script
  const updateScript = Object.entries(updates)
    .map(([id, details]) => (
      `// ${id}\n` +
      `collections.categories['${id.split('-')[0]}'].items['${id}'].tmdb_id = ${details.tmdb_id};\n` +
      `collections.categories['${id.split('-')[0]}'].items['${id}'].image = '${details.image}';\n`
    )).join('\n');

  return { updates, errors, updateScript };
} 