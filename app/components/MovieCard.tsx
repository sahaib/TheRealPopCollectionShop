"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { useState } from 'react'
import { toast } from 'sonner'
import { MovieDetails } from '@/lib/collections'
import { useSession } from 'next-auth/react'
import { getMoviePoster } from '@/lib/imageLoader'
import { useImageLoader } from '@/hooks/useImageLoader'

interface MovieCardProps {
  movie: MovieDetails;
  category: string;
}

export default function MovieCard({ movie, category }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart, state } = useCart()
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isInCart = state.items.some(item => item.id === movie.id)
  const { imageSrc, isLoading: imageLoading } = useImageLoader(getMoviePoster(movie.id))

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (isLoading) return

    if (!session) {
      toast.error('Please sign in to add favorites')
      return
    }
    
    setIsFavorite(!isFavorite)
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites')
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isInCart) {
      addToCart({
        id: movie.id,
        title: movie.title,
        price: movie.price,
        category: movie.category,
        subcategory: movie.subcategory,
        mainCategory: category
      })
      toast.success(`Added ${movie.title} to cart`)
    }
  }

  return (
    <div className="group relative">
      <Link href={`/collections/${category}/${movie.id}`}>
        <div className="relative h-[300px] rounded-lg overflow-hidden transition-all duration-500 
                      shadow-lg group-hover:shadow-2xl group-hover:scale-105">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={movie.title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Loading Skeleton */}
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}
          </div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid" />
          
          {/* Content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
              <div className="w-16 h-1 bg-white/50 rounded-full mb-4" />
              <div className="flex items-center gap-2 text-white/80">
                <span>{movie.releaseYear}</span>
                <span>•</span>
                <span>{movie.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFavoriteClick}
                  className={`p-2 rounded-full transition-all duration-300 
                    ${isFavorite ? 'bg-red-500' : 'bg-white/20'} 
                    hover:bg-red-500 hover:shadow-lg hover:scale-110`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'text-white fill-current' : 'text-white'}`} />
                </button>
                
                <button
                  onClick={handleAddToCart}
                  className={`p-2 rounded-full transition-all duration-300 
                    ${isInCart ? 'bg-green-500' : 'bg-white/20'} 
                    hover:shadow-lg hover:scale-110`}
                >
                  <span className="text-white">{isInCart ? '✓' : '+'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
} 