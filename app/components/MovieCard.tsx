"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'

interface MovieCardProps {
  title: string
  href: string
  gradient: string
}

export default function MovieCard({ title, href, gradient }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
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

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (!session) {
      toast.error('Please sign in to add to cart')
      return
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })

      if (!response.ok) throw new Error('Failed to update cart')

      setIsInCart(!isInCart)
      toast.success(
        isInCart ? 
        `Removed ${title} from cart` : 
        `Added ${title} to cart`
      )
    } catch (error) {
      toast.error('Failed to update cart')
      console.error('Error updating cart:', error)
    }
  }

  return (
    <div className="group relative block overflow-hidden rounded-xl">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-transform duration-200 group-hover:scale-105`} />
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        
        <div className="mt-4 flex items-center justify-between">
          <Link href={href} className="text-sm text-white/90 hover:text-white">
            Explore collection →
          </Link>
          
          <div className="flex gap-2">
            <button
              onClick={handleFavorite}
              className={`p-2 rounded-full ${isFavorite ? 'bg-red-500' : 'bg-white/20'} hover:bg-red-500 transition-colors`}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? 'text-white fill-current' : 'text-white'}`} 
              />
            </button>
            
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full ${isInCart ? 'bg-green-500' : 'bg-white/20'} hover:bg-green-500 transition-colors`}
            >
              <ShoppingCart 
                className={`h-5 w-5 ${isInCart ? 'text-white fill-current' : 'text-white'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 