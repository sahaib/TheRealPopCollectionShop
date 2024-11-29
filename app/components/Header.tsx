"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'
import AuthButton from './AuthButton'
import SearchOverlay from './SearchOverlay'
import ShoppingCartPanel from './ShoppingCart'
import { useCart } from '@/hooks/useCart'
import { useSession } from 'next-auth/react'

const CartBadge = ({ count }: { count: number }) => (
  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    {count}
  </div>
);

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { data: session } = useSession()
  const { state } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 relative">
              <Image 
                src="/images/trpc-logo.png"
                alt="TRP Shop"
                width={32}
                height={32}
                className="object-contain dark:invert"
              />
            </div>
            <span className="text-xl font-bold hidden sm:inline">TRPC Shop</span>
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
            {session?.user?.email === 'sahaibsingh001.ss@gmail.com' && (
              <Link href="/admin/movies" className="hover:text-blue-500 transition-colors">
                🎬 Add Movies
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 rounded-full glass-button"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <DarkModeToggle className="p-1.5 sm:p-2" />
            <AuthButton className="p-1.5 sm:p-2" />
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 sm:p-2 rounded-full glass-button relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <CartBadge count={state.items.reduce((acc, item) => acc + item.quantity, 0)} />
            </button>
          </div>
        </div>
      </div>
      <SearchOverlay isOpen={isSearchOpen} onCloseAction={() => setIsSearchOpen(false)} />
      <ShoppingCartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

