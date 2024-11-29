"use client"
import { Search, X, Film } from 'lucide-react'
import { useState, useEffect } from 'react'
import { collections } from '@/lib/collections'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

interface SearchResult {
  title: string
  url: string
  category: string
}

interface SearchOverlayProps {
  isOpen: boolean
  onCloseAction: () => void
}

export default function SearchOverlay({ isOpen, onCloseAction }: SearchOverlayProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [randomMovie, setRandomMovie] = useState<any>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    if (isOpen) {
      mainContent?.classList.add('blur-xl')
    } else {
      mainContent?.classList.remove('blur-xl')
    }
    return () => mainContent?.classList.remove('blur-xl')
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const getRandomMovie = () => {
    const allMovies = Object.values(collections)
      .flatMap(collection => 
        Object.values(collection.categories || {})
          .flatMap(category => Object.values(category))
      );
    
    const randomIndex = Math.floor(Math.random() * allMovies.length);
    setRandomMovie(allMovies[randomIndex]);
  }

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (!searchQuery) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []
    Object.entries(collections).forEach(([categoryKey, collection]) => {
      if (!collection?.categories) return

      Object.entries(collection.categories).forEach(([subcategoryKey, movies]) => {
        if (!movies) return

        Object.values(movies).forEach(movie => {
          if (movie && movie.title && 
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            searchResults.push({
              title: movie.title,
              category: collection.name,
              url: `/collections/${categoryKey}/${subcategoryKey}/${movie.id}`
            })
          }
        })
      })
    })
    setResults(searchResults)
  }

  const handleRandomMovieClick = async (movie: any) => {
    try {
      let targetCollection = '';
      let targetCategory = '';
      
      Object.entries(collections).forEach(([collectionKey, collection]) => {
        Object.entries(collection.categories || {}).forEach(([categoryKey, movies]) => {
          if (Object.values(movies).some(m => m.title === movie.title)) {
            targetCollection = collectionKey;
            targetCategory = categoryKey;
          }
        });
      });

      await router.push(`/collections/${targetCollection}`);
      onCloseAction();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const movieId = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      const listItem = document.getElementById(movieId);
      const movieCard = document.querySelector(`[data-movie-id="${movieId}"]`);
      
      if (movieCard) {
        movieCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        [listItem, movieCard].forEach(element => {
          if (element) {
            (element as HTMLElement).style.transition = 'all 0.3s ease';
            element.classList.add('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
            
            setTimeout(() => {
              element.classList.remove('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
            }, 2000);
          }
        });
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999]">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onCloseAction}
        style={{ pointerEvents: 'auto' }}
      />
      
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
           style={{ pointerEvents: 'auto' }}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search movies or click for random suggestion..."
            className={`search-input search-input-glow ${theme === 'dark' ? 'search-input-dark' : ''} 
              w-full text-lg py-3
              text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              pl-12 pr-12 bg-white/90 dark:bg-black/90`}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onClick={() => !query && getRandomMovie()}
            autoFocus
          />
          <button
            onClick={onCloseAction}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="mt-2 bg-white/95 dark:bg-black/95 rounded-xl shadow-2xl backdrop-blur-xl">
          <div className="max-h-[60vh] overflow-y-auto">
            {/* Random Movie Suggestion */}
            {randomMovie && !query && (
              <div className="border-b border-gray-200 dark:border-gray-800">
                <div className="p-4 flex items-center gap-2 text-sm font-medium text-purple-500">
                  <Film className="w-4 h-4" />
                  Random Suggestion
                </div>
                <div
                  onClick={() => handleRandomMovieClick(randomMovie)}
                  className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <div className="font-medium text-gray-900 dark:text-white text-lg">
                    {randomMovie.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {randomMovie.description}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <span>⭐ {randomMovie.rating}</span>
                    <span>📅 {randomMovie.releaseYear}</span>
                    <span>⏱️ {randomMovie.duration}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Search Results */}
            {results.length > 0 && (
              <div>
                <div className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Search Results
                </div>
                {results.map((result, index) => (
                  <div
                    key={`search-${index}`}
                    onClick={async () => {
                      try {
                        let targetCollection = '';
                        let targetCategory = '';
                        
                        Object.entries(collections).forEach(([collectionKey, collection]) => {
                          Object.entries(collection.categories || {}).forEach(([categoryKey, movies]) => {
                            if (Object.values(movies).some(m => m.title === result.title)) {
                              targetCollection = collectionKey;
                              targetCategory = categoryKey;
                            }
                          });
                        });

                        await router.push(`/collections/${targetCollection}`);
                        onCloseAction();
                        
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        
                        const movieId = result.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        const listItem = document.getElementById(movieId);
                        const movieCard = document.querySelector(`[data-movie-id="${movieId}"]`);
                        
                        if (movieCard) {
                          movieCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          [listItem, movieCard].forEach(element => {
                            if (element) {
                              (element as HTMLElement).style.transition = 'all 0.3s ease';
                              element.classList.add('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
                              setTimeout(() => {
                                element.classList.remove('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
                              }, 2000);
                            }
                          });
                        }
                      } catch (error) {
                        console.error('Navigation error:', error);
                      }
                    }}
                    className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {result.category}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 