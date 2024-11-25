"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'
import AuthButton from './AuthButton'
import SearchOverlay from './SearchOverlay'
import ShoppingCartPanel from './ShoppingCart'
import { useCart } from '@/hooks/useCart'

function CartBadge() {
  const { state } = useCart()
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0)

  if (itemCount === 0) return null

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {itemCount}
    </span>
  )
}

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            TRP Collection
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collections">Collections</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full glass-button"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <DarkModeToggle />
            <AuthButton />
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full glass-button relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <CartBadge />
            </button>
          </div>
        </div>
      </div>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ShoppingCartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

