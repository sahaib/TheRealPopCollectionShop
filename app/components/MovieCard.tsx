"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import { useCart } from '@/hooks/useCart'

interface MovieCardProps {
  title: string
  href: string
  gradient: string
}

export default function MovieCard({ title, href, gradient }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart, state } = useCart()
  const { data: session } = useSession()

  const handleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (!session) {
      toast.error('Please sign in to add favorites')
      return
    }

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })

      if (!response.ok) throw new Error('Failed to update favorites')

      setIsFavorite(!isFavorite)
      toast.success(
        isFavorite ? 
        `Removed ${title} from favorites` : 
        `Added ${title} to favorites`
      )
    } catch (error) {
      toast.error('Failed to update favorites')
      console.error('Error updating favorites:', error)
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      addToCart({
        id: title,
        title: title,
        price: 29.99,
        quantity: 1
      })
      toast.success(`Added ${title} to cart`)
    } catch (error) {
      toast.error('Failed to add to cart')
      console.error('Error adding to cart:', error)
    }
  }

  const isInCart = state.items.some(item => item.id === title)

  return (
    <div className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:scale-105 group-hover:opacity-90`} />
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-2">{title}</h3>
        
        <div className="mt-4 flex items-center justify-between">
          <Link 
            href={href} 
            className="text-sm text-white/90 hover:text-white flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2"
          >
            Explore collection 
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
          
          <div className="flex gap-2">
            <button
              onClick={handleFavorite}
              className={`p-2 rounded-full transition-all duration-300 
                ${isFavorite ? 'bg-red-500' : 'bg-white/20'} 
                hover:bg-red-500 hover:shadow-lg hover:scale-110`}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? 'text-white fill-current' : 'text-white'}`} 
              />
            </button>
            
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-110 ${
                isInCart 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              disabled={isInCart}
            >
              {isInCart ? '✓ In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 