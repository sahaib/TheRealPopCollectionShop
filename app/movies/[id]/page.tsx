"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { Movie, getMovie, getRelatedMovies } from '@/app/lib/movieData'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Clock, Film, Award, Share2 } from 'lucide-react'
import { toast } from 'sonner'

// Movies data
const movies = [
  {
    id: 1,
    name: 'Back to the Future Trilogy',
    price: 29.99,
    image: '/images/dvd-covers/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
    releaseYear: 1985,
    duration: '1h 56m',
    rating: 4.8,
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    director: 'Robert Zemeckis',
    cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
    genre: ['Adventure', 'Comedy', 'Sci-Fi']
  },
  {
    id: 2,
    name: 'Jurassic Park Collection',
    price: 39.99,
    image: '/images/dvd-covers/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',
    releaseYear: 1993,
    duration: '2h 7m',
    rating: 4.7,
    description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
    director: 'Steven Spielberg',
    cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
    genre: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    id: 3,
    name: 'The Matrix Trilogy',
    price: 34.99,
    image: '/images/dvd-covers/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    releaseYear: 1999,
    duration: '2h 16m',
    rating: 4.9,
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    genre: ['Action', 'Sci-Fi']
  },
  {
    id: 4,
    name: 'Star Wars: The Original Trilogy',
    price: 49.99,
    image: '/images/dvd-covers/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    releaseYear: 1977,
    duration: '2h 1m',
    rating: 4.9,
    description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station.',
    director: 'George Lucas',
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    genre: ['Action', 'Adventure', 'Fantasy']
  }
]

// Main component
export default function MoviePage({ params }: { params: { id: string } }) {
  const movieData = movies.find(m => m.id === Number(params.id)) || null
  const { addToCart, state } = useCart()
  const isInCart = state.items.some(item => item.id === Number(params.id))

  // Styles definition
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
        title: movieData.name,
        price: movieData.price,
        quantity: 1
      })
      toast.success(`Added ${movieData.name} to cart`)
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
            {movieData && (
              <Image
                src={movieData.image}
                alt={movieData.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
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
              if (!isInCart && movieData) {
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
          {movieData && (
            <>
              <h1 className="text-4xl font-bold">{movieData.name}</h1>
              
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
                  {isInCart ? ' In Cart' : 'Add to Cart'}
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
} 