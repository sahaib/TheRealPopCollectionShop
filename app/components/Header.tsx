"use client"
import Link from 'next/link'
import { ShoppingCart, Search } from 'lucide-react'
import { useState } from 'react'
import SearchOverlay from './SearchOverlay'
import ShoppingCartPanel from './ShoppingCart'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">The Real Pop Collection</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/collections" className="hover:text-gray-300 transition-colors">Collections</Link></li>
              <li><Link href="/new-releases" className="hover:text-gray-300 transition-colors">New Releases</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <button 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-6 h-6" />
            </button>
            <button 
              aria-label="Shopping Cart"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      
      <ShoppingCartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
}

