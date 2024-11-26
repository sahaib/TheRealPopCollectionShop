"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { motion } from 'framer-motion'
import { Star, Clock, Film, Award, Share2, Heart } from 'lucide-react'
import { toast } from 'sonner'
import { collections } from '@/lib/collections'
import { useSession } from 'next-auth/react'
import { getMovieDetails } from '@/lib/tmdb'

interface PageProps {
  params: { 
    category: string
    subcategory: string
    movieId: string
  }
}

export default function MoviePage({ params }: PageProps) {
  const [movieDetails, setMovieDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { addToCart, state } = useCart()
  const { data: session } = useSession()
  const [isFavorite, setIsFavorite] = useState(false)

  // Find movie in collections
  const collection = collections[params.category]
  const categoryMovies = collection?.categories[params.subcategory]
  const movie = categoryMovies?.[params.movieId]

  const isInCart = state.items.some(item => item.id === movie?.id)

  useEffect(() => {
    async function fetchData() {
      if (!movie) {
        setLoading(false)
        return
      }

      try {
        const tmdbData = await getMovieDetails(movie.title)
        setMovieDetails({
          ...tmdbData,
          ...movie, // Merge with our existing movie data
        })
      } catch (error) {
        console.error('Error fetching movie details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [movie])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
      </div>
    )
  }

  if (!movie || !movieDetails) {
    return <div className="container mx-auto px-4 py-8">Movie not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: movie.id,
      title: movie.title,
      price: movie.price,
      quantity: 1
    })
    toast.success(`Added ${movie.title} to cart`)
  }

  const handleFavoriteClick = () => {
    if (!session) {
      toast.error('Please sign in to add favorites')
      return
    }
    setIsFavorite(!isFavorite)
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites')
  }

  // DVD animation styles from the reference code
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
    // ... copy the rest of the styles from the reference code
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Copy the DVD animation JSX structure from the reference code */}
        {/* Reference lines 123-170 from app/movies/[id]/page.tsx */}

        <div className="space-y-6">
          {/* Copy the content section from the reference code */}
          {/* Reference lines 172-215 from app/movies/[id]/page.tsx */}
        </div>
      </motion.div>
    </div>
  )
}