"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { collections } from '@/lib/collections'
import { motion } from 'framer-motion'
import { Star, Clock, Film, Share2 } from 'lucide-react'
import { toast } from 'sonner'

interface PageProps {
  params: {
    category: string
    subcategory: string
    movieId: string
  }
}

export default function MoviePage({ params }: PageProps) {
  const { addToCart, state } = useCart()
  
  // Decode and clean up the movieId
  const cleanMovieId = decodeURIComponent(params.movieId)
    .toLowerCase()
    .replace(/[\s:]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
  
  const collection = collections[params.category]
  console.log('Collection:', collection?.name)
  
  const categoryMovies = collection?.categories[params.subcategory] || {}
  console.log('Category Movies:', Object.keys(categoryMovies))
  
  // Case-insensitive movie lookup with cleaned ID
  const movie = Object.values(categoryMovies).find(m => {
    const urlFriendlyTitle = m.title
      .toLowerCase()
      .replace(/[\s:]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
    return urlFriendlyTitle === cleanMovieId
  })
  
  console.log('Found Movie:', movie?.title)
  
  const isInCart = state.items.some(item => item.id === movie?.id)

  if (!collection || !movie) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Movie not found</h2>
        <p className="text-gray-600">
          The movie you're looking for could not be found. Please check the URL and try again.
        </p>
      </div>
    )
  }

  // Rest of your component code remains the same
  const styles = {
    dvdContainer: `relative w-full aspect-[2/3] group overflow-visible`,
    poster: `relative w-full h-full rounded-lg shadow-2xl transition-transform duration-500 
            group-hover:translate-x-[-50px] group-hover:rotate-y-[-10deg]
            ${isInCart ? 'translate-x-[-100px] rotate-y-[-20deg]' : ''}`,
    disc: `absolute w-[500px] h-[500px] left-[60%] top-1/2 -translate-y-1/2
           rounded-full bg-gradient-to-br from-blue-600/90 to-blue-400/90
           opacity-0 group-hover:opacity-100 transition-all duration-500
           shadow-[0_0_30px_rgba(37,99,235,0.3)] z-50 transform cursor-pointer
           backdrop-blur-sm
           group-hover:translate-x-[-50%] 
           ${isInCart ? 'translate-x-[0%] !opacity-100' : ''}`,
    discInner: `absolute w-[150px] h-[150px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                rounded-full bg-gradient-to-br from-white/30 to-white/10 
                border border-white/40 backdrop-blur-md`,
    discRing: `absolute w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               rounded-full border-2 border-white/30
               before:content-[''] before:absolute before:inset-0 
               before:rounded-full before:bg-gradient-to-tr 
               before:from-white/20 before:to-transparent`,
    discLabel: `absolute w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                rounded-full flex items-center justify-center text-white text-lg font-medium
                bg-gradient-to-tr from-white/10 to-transparent
                shadow-inner backdrop-blur-sm`,
    discShine: `absolute inset-0 rounded-full bg-gradient-to-tr 
                from-transparent via-white/20 to-transparent 
                animate-shine pointer-events-none`
  }
  
  const handleShare = async () => {
    if (!movie) return
  
    try {
      if (navigator.share) {
        await navigator.share({
          title: movie.title,
          text: movie.description,
          url: window.location.href
        })
        toast.success('Shared successfully!')
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Link copied to clipboard!', {
          description: 'Share URL has been copied to your clipboard'
        })
      }
    } catch (error) {
      console.error('Error sharing:', error)
      toast.error('Failed to share')
    }
  }

  const handleAddToCart = () => {
    if (!isInCart && movie) {
      addToCart({
        id: movie.id,
        title: movie.title,
        price: movie.price,
        mainCategory: params.category,
        category: params.subcategory,
        subcategory: movie.subcategory
      })
      toast.success(`Added ${movie.title} to cart`)
    }
  }


  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className={styles.dvdContainer}>
          <motion.div 
            className={styles.poster}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            className={styles.disc}
            animate={{ 
              rotate: 360,
              scale: isInCart ? 1 : 0.9
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 0.5
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (!isInCart) {
                handleAddToCart();
              }
            }}
          >
            <div className={styles.discRing} />
            <div className={styles.discInner} />
            <div className={styles.discLabel}>
              {isInCart ? '✓ Added to Cart' : 'Click to Add to Cart'}
            </div>
            <div className={styles.discShine} />
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </motion.div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {movie.rating}/5
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {movie.duration}
            </span>
            <span className="flex items-center gap-1">
              <Film className="w-4 h-4" />
              {movie.releaseYear}
            </span>
          </div>

          <p className="text-2xl font-semibold">${movie.price.toFixed(2)}</p>
          
          <p className="text-gray-600 dark:text-gray-400">{movie.description}</p>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Director:</span> {movie.director}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Cast:</span> {movie.cast.join(', ')}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genre.map(g => (
              <span key={g} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                {g}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1 bg-primary hover:bg-primary/80 hover:shadow-lg transition-all 
                         text-primary-foreground dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart ? '✓ In Cart' : 'Add to Cart'}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleShare}
              className="hover:bg-gray-100 hover:shadow-md transition-all
                         dark:border-gray-600 dark:hover:bg-gray-800"
            >
              <Share2 className="w-4 h-4" />
              <span className="ml-2">Share</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}