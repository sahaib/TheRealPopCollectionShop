"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900" />
              <Image 
                src="/images/dvd-logo.gif"
                alt="TRP Shop"
                width={32}
                height={32}
                className="object-contain relative z-10 mix-blend-multiply dark:mix-blend-difference"
                unoptimized
              />
            </div> */}
            <span className="text-2xl font-bold">The Real Pop Collection Shop</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="hover:text-blue-500 transition-colors">
              Collections
            </Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">
              Contact
            </Link>
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

