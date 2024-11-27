"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Star, Clock, Film, Heart, ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import { useFavorites } from '@/hooks/useFavorites'
import { getMovieImage } from '@/utils/imageHandler'

interface MovieCardProps {
  id: string
  title: string
  image: string
  price: number
  releaseYear: number
  duration: string
  rating: number
  collectionId: string
  categoryName: string
  category: string
  subcategory: string
  tmdb_id?: string
}

export function MovieCard(props: MovieCardProps) {
  const { addFavorite, removeFavorite, isFavorite, setFavorites } = useFavorites()
  const { addToCart, state } = useCart()
  const { data: session } = useSession()
  const isInCart = state.items.some(item => item.id === props.id)
  const favorited = isFavorite(props.id)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  // Fetch initial favorites from server
  useEffect(() => {
    if (session?.user) {
      fetch('/api/favorites')
        .then(res => res.json())
        .then(data => {
          if (data.favorites) {
            setFavorites(data.favorites)
          }
        })
        .catch(console.error)
    }
  }, [session, setFavorites])

  useEffect(() => {
    getMovieImage(props.title, props.image)
      .then(setImageSrc)
      .catch(() => setImageSrc(null))
  }, [props.title, props.image])

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!session) {
      toast.error('Please sign in to add favorites')
      return
    }

    if (favorited) {
      removeFavorite(props.id)
      toast.success('Removed from favorites')
    } else {
      addFavorite({
        id: props.id,
        movieTitle: props.title,
        createdAt: new Date().toISOString()
      })
      toast.success('Added to favorites')
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isInCart) {
      addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        category: props.category,
        subcategory: props.subcategory,
        mainCategory: props.categoryName
      })
      toast.success(`Added ${props.title} to cart`)
    }
  }

  const movieId = props.title
    .toLowerCase()
    .replace(/[\s:]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  return (
    <Link 
      href={`/collections/${props.collectionId}/${props.categoryName}/${movieId}`}
      className="group block"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={props.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            priority
            onError={() => setImageSrc(null)}
          />
        ) : (
          <div className="w-full h-full bg-[#1F2937] flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg">No Image Available</span>
            <span className="text-sm mt-2">{props.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full backdrop-blur-sm ${
                favorited 
                  ? 'bg-red-500 text-white' 
                  : 'bg-black/20 hover:bg-red-500 text-white transition-colors'
              }`}
            >
              <Heart className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-full backdrop-blur-sm ${
                isInCart 
                  ? 'bg-green-500 text-white' 
                  : 'bg-black/20 hover:bg-green-500 text-white transition-colors'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-xl font-bold">${props.price.toFixed(2)}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {props.rating}/5
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {props.duration}
              </span>
              <span className="flex items-center gap-1">
                <Film className="w-4 h-4" />
                {props.releaseYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 