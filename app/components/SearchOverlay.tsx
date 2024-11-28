"use client"
import { Search, X, Loader2, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { collections } from '@/lib/collections'
import Link from 'next/link'
import { useTheme } from 'next-themes'

interface SearchResult {
  title: string
  url: string
  category: string
}

interface AiRecommendation {
  title: string
  reason: string
  category: string
  subcategory: string
}

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [aiRecommendations, setAiRecommendations] = useState<AiRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(false)
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

  // Prevent background scrolling when overlay is open
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

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    if (!searchQuery) {
      setResults([])
      setAiRecommendations([])
      return
    }

    // Regular search results first
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

    // Only trigger AI for queries that look like questions or preferences
    if (searchQuery.includes('?') || 
        searchQuery.toLowerCase().includes('recommend') ||
        searchQuery.toLowerCase().includes('feel') ||
        searchQuery.toLowerCase().includes('watch')) {
      try {
        setIsLoading(true)
        const response = await fetch('/api/ai-recommendations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: searchQuery })
        })
        
        if (!response.ok) throw new Error('AI request failed');
        
        const data = await response.json()
        if (data.recommendations?.length > 0) {
          setAiRecommendations(data.recommendations)
        }
      } catch (error) {
        console.error('Failed to get AI recommendations:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999]">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      />
      
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
           style={{ pointerEvents: 'auto' }}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search movies or ask for recommendations..."
            className={`search-input search-input-glow ${theme === 'dark' ? 'search-input-dark' : ''} 
              w-full text-lg py-3
              text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              pl-12 pr-12 bg-white/90 dark:bg-black/90`}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="mt-2 bg-white/95 dark:bg-black/95 rounded-xl shadow-2xl backdrop-blur-xl">
          <div className="max-h-[60vh] overflow-y-auto">
            {/* AI Recommendations */}
            {isLoading && (
              <div className="p-4 text-center">
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-blue-500" />
              </div>
            )}
            
            {aiRecommendations.length > 0 && (
              <div className="border-b border-gray-200 dark:border-gray-800">
                <div className="p-4 flex items-center gap-2 text-sm font-medium text-blue-500">
                  <Sparkles className="w-4 h-4" />
                  AI Recommendations
                </div>
                {aiRecommendations.map((rec, index) => (
                  <Link
                    key={`ai-${index}`}
                    href={`/collections/${rec.category}/${rec.subcategory}`}
                    onClick={onClose}
                    className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white text-lg">
                      {rec.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {rec.reason}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Regular Search Results with improved visibility */}
            {results.length > 0 && (
              <div>
                <div className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Search Results
                </div>
                {results.map((result, index) => (
                  <Link
                    key={`search-${index}`}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {result.category}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 