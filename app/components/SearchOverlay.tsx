"use client"
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { collections } from '@/lib/collections'
import Link from 'next/link'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Array<{ title: string; url: string }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length < 2) {
      setResults([])
      return
    }

    const searchResults: Array<{ title: string; url: string }> = []
    collections.forEach(collection => {
      collection.subcategories.forEach(subcategory => {
        subcategory.items.forEach(item => {
          if (item.toLowerCase().includes(query.toLowerCase())) {
            searchResults.push({
              title: item,
              url: `/movies/${encodeURIComponent(item)}`
            })
          }
        })
      })
    })
    setResults(searchResults.slice(0, 8)) // Limit to 8 results
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        <div className="p-4 border-b flex items-center">
          <Search className="w-5 h-5 text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search movies..."
            className="flex-1 outline-none text-lg"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        {results.length > 0 && (
          <div className="py-4 px-2 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                className="block px-4 py-2 hover:bg-gray-100 rounded"
                onClick={onClose}
              >
                {result.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 