import { collections } from '../lib/collections';
import * as fs from 'fs/promises';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface MovieItem {
  title: string;
  releaseYear: number;
}

interface CategoryContent {
  [key: string]: MovieItem;
}

async function getMovieDetails(title: string, year: number) {
  if (!process.env.TMDB_API_KEY) {
    throw new Error('TMDB_API_KEY not found in environment variables');
  }

  console.log(`🔍 Fetching details for: ${title} (${year})`);
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
  );
  
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }
  
  const data = await response.json();
  return data.results?.[0] || null;
}

async function main() {
  console.log('🚀 Updating movie details...');
  
  let collectionsFile = await fs.readFile(
    path.join(process.cwd(), 'lib', 'collections.ts'), 
    'utf-8'
  );

  for (const [collectionKey, collection] of Object.entries(collections)) {
    console.log(`📁 Processing collection: ${collectionKey}`);
    
    for (const [categoryKey, category] of Object.entries(collection.categories)) {
      console.log(`📂 Processing category: ${categoryKey}`);
      
      for (const [movieKey, movie] of Object.entries(category)) {
        if (!movie.releaseYear) continue;

        try {
          const details = await getMovieDetails(movie.title, movie.releaseYear);
          
          if (details) {
            console.log(`✅ Found TMDB data for: ${movie.title}`);
            const newTmdbId = details.id;
            const newImage = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
            
            // First update tmdb_id
            const tmdbPattern = new RegExp(`("${movieKey}":\\s*{[^}]*?tmdb_id:\\s*)\\d+`, 'g');
            collectionsFile = collectionsFile.replace(tmdbPattern, `$1${newTmdbId}`);
            
            // Then update image
            const imagePattern = new RegExp(`("${movieKey}":\\s*{[^}]*?image:\\s*")[^"]*"`, 'g');
            collectionsFile = collectionsFile.replace(imagePattern, `$1${newImage}"`);
            
            console.log(`💾 Updated: ${movie.title} (ID: ${newTmdbId}, Image: ${newImage})`);
          }
        } catch (error) {
          console.error(`❌ Error processing ${movie.title}:`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 250));
      }
    }
  }

  await fs.writeFile(
    path.join(process.cwd(), 'lib', 'collections.ts'),
    collectionsFile,
    'utf-8'
  );
  
  console.log('✨ Done!');
}

main().catch(console.error); 