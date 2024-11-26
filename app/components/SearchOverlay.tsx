"use client"
import { Search, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { collections } from '@/lib/collections'
import Link from 'next/link'
import { useTheme } from 'next-themes'

interface SearchResult {
  title: string
  url: string
  category: string
}

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const { theme } = useTheme()

  // Add/remove blur class on main content when search is opened/closed
  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    if (isOpen) {
      mainContent?.classList.add('blur-xl')
    } else {
      mainContent?.classList.remove('blur-xl')
    }
    return () => mainContent?.classList.remove('blur-xl')
  }, [isOpen])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (!searchQuery) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []
    
    Object.entries(collections).forEach(([categoryKey, collection]) => {
      Object.entries(collection.categories).forEach(([subcategoryName, items]) => {
        const movieList = Array.isArray(items) 
          ? items 
          : Object.values(items).flat()

        movieList.forEach(item => {
          if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
            searchResults.push({
              title: item,
              category: collection.name,
              url: `/collections/${categoryKey}/${item.toLowerCase().replace(/\s+/g, '-')}`
            })
          }
        })
      })
    })

    setResults(searchResults)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Semi-transparent overlay */}
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />
      
      {/* Search Container */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search movies..."
            className={`search-input search-input-glow ${theme === 'dark' ? 'search-input-dark' : ''} 
              text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              pl-12 pr-12`}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-2 bg-white/10 dark:bg-black/20 rounded-xl shadow-2xl backdrop-blur-xl">
            <div className="max-h-[60vh] overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={onClose}
                  className="block p-4 hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white">{result.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{result.category}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 