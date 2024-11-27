"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { collections } from '@/lib/collections'
import { motion } from 'framer-motion'
import { Star, Clock, Film, Share2 } from 'lucide-react'
import { toast } from 'sonner'

// Helper function to find movie in collections
const findCollectionMovie = (id: string) => {
  for (const collection of Object.values(collections)) {
    for (const category of Object.values(collection.categories)) {
      for (const movie of Object.values(category)) {
        if (movie.id === id) {
          return movie
        }
      }
    }
  }
  return null
}

export default function CollectionMoviePage({ params }: { params: { id: string } }) {
  const movieData = findCollectionMovie(params.id)
  const { addToCart, state } = useCart()
  const isInCart = state.items.some(item => item.id === params.id)

  // Same styles as original MoviePage
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

  const handleAddToCart = () => {
    if (!isInCart && movieData) {
      addToCart({
        id: movieData.id,
        title: movieData.title,
        price: movieData.price,
        quantity: 1
      })
      toast.success(`Added ${movieData.title} to cart`)
    }
  }

  const handleShare = async () => {
    if (!movieData) return

    try {
      if (navigator.share) {
        await navigator.share({
          title: movieData.title,
          text: movieData.description,
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

  if (!movieData) return null

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
            {movieData?.image ? (
              <Image
                src={movieData.image}
                alt={movieData.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            ) : (
              <div className="w-full h-full bg-[#1F2937] flex flex-col items-center justify-center rounded-lg">
                <span className="text-gray-400 text-lg">No Image Available</span>
                <span className="text-gray-500 text-sm mt-2">{movieData?.title}</span>
              </div>
            )}
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
          <h1 className="text-4xl font-bold">{movieData.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {movieData.rating}/5
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {movieData.duration}
            </span>
            <span className="flex items-center gap-1">
              <Film className="w-4 h-4" />
              {movieData.releaseYear}
            </span>
          </div>

          <p className="text-2xl font-semibold">${movieData.price.toFixed(2)}</p>
          
          <p className="text-gray-600 dark:text-gray-400">{movieData.description}</p>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Director:</span> {movieData.director}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Cast:</span> {movieData.cast.join(', ')}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {movieData.genre.map(g => (
              <span key={g} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                {g}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart ? '✓ In Cart' : 'Add to Cart'}
            </Button>
            <Button size="lg" variant="outline" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}