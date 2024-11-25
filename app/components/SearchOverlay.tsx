"use client"
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { collections } from '@/lib/collections'
import Link from 'next/link'

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

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (!searchQuery) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []
    
    // Use Object.entries to iterate over the collections object
    Object.entries(collections).forEach(([categoryKey, collection]) => {
      Object.entries(collection.categories).forEach(([subcategoryName, items]) => {
        // Handle both array and nested object cases
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
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="container mx-auto px-4 pt-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full p-2 border rounded"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
          
          <div className="mt-4 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                onClick={onClose}
                className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <div className="font-medium">{result.title}</div>
                <div className="text-sm text-gray-500">{result.category}</div>
              </Link>
            ))}
          </div>
          
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
} 