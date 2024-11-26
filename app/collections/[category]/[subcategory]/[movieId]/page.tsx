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
import { getMoviePoster } from '@/lib/tmdb'
import { useImageLoader } from '@/hooks/useImageLoader'

interface PageProps {
  params: {
    category: string
    id: string
  }
}

export default function MoviePage({ params }: PageProps) {
  const { category, id } = params
  const movie = collections[category]?.[id]
  const { data: session } = useSession()
  const isFavorite = session?.user?.favorites?.includes(id)
  const { imageSrc, isLoading: imageLoading } = useImageLoader(getMoviePoster(movie.id))
}
  params: { 
    category: string
    subcategory: string
    movieId: string
  }
}) {
  const [movieDetails, setMovieDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  const movieTitle = params.movieId.split('-').join(' ')

  useEffect(() => {
    async function fetchData() {
      try {
        const tmdbData = await getMovieDetails(movieTitle)
        setMovieDetails({
          ...tmdbData,
          price: 29.99, // Set default price or get from your data
        })
      } catch (error) {
        console.error('Error fetching movie details:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [movieTitle])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
      </div>
    )
  }

  if (!movieDetails) return <div>Movie not found</div>

  const handleAddToCart = () => {
    addToCart({
      id: movieDetails.id,
      name: movieDetails.title,
      price: movieDetails.price,
      image: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    })
    toast.success('Added to cart!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative min-h-[60vh] rounded-xl overflow-hidden mb-8">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-64 aspect-[2/3] rounded-lg overflow-hidden shrink-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {movieDetails.vote_average.toFixed(1)}/10
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movieDetails.runtime} min
                </span>
                <span>{new Date(movieDetails.release_date).getFullYear()}</span>
              </div>
              <p className="text-lg">{movieDetails.overview}</p>
              <div className="flex gap-4">
                <Button size="lg" onClick={handleAddToCart}>
                  Add to Cart - ${movieDetails.price}
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 