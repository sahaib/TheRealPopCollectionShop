'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { collections } from '@/lib/collections';

export default function RandomMovieSuggestion() {
  const router = useRouter();
  const [suggestion, setSuggestion] = useState<any>(null);

  const getRandomMovie = () => {
    const horrorCollection = collections['genre-horror'];
    const allMovies = Object.values(horrorCollection.categories)
      .flatMap(category => Object.values(category));
    
    const randomIndex = Math.floor(Math.random() * allMovies.length);
    setSuggestion(allMovies[randomIndex]);
  };

  const handleMovieClick = async (movie: any) => {
    try {
      await router.push('/collections/genre-horror');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const movieId = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const movieElement = document.getElementById(movieId);
      
      if (movieElement) {
        movieElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        movieElement.classList.add('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
        
        setTimeout(() => {
          movieElement.classList.remove('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
        }, 2000);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Button 
        onClick={getRandomMovie}
        className="w-full mb-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
      >
        🎲 Suggest Random Horror Movie
      </Button>

      {suggestion && (
        <Card 
          className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleMovieClick(suggestion)}
        >
          <h3 className="font-bold text-lg">{suggestion.title}</h3>
          <p className="text-muted-foreground mt-2">{suggestion.description}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <span>⭐ {suggestion.rating}</span>
            <span>📅 {suggestion.releaseYear}</span>
            <span>⏱️ {suggestion.duration}</span>
          </div>
        </Card>
      )}
    </div>
  );
} 