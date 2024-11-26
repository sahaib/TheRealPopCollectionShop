"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface MovieCardProps {
  id: string
  title: string
  image: string
  price: number
  releaseYear: number
  duration: string
  rating: number
  collectionId: string
}

export function MovieCard({
  id,
  title,
  image,
  price,
  releaseYear,
  duration,
  rating,
  collectionId
}: MovieCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg"
    >
      <Link href={`/movies/${collectionId}/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm">
              <span>{releaseYear}</span>
              <span>•</span>
              <span>{duration}</span>
              <span>•</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{rating}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-bold">${price}</span>
              <button className="px-4 py-2 bg-primary rounded-full text-sm font-medium hover:bg-primary/90">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 