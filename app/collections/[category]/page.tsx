"use client"

import { useEffect, useState } from 'react'
import { collections } from '@/lib/collections'
import { MovieCard } from '@/components/MovieCard'
import { motion } from 'framer-motion'
import { Metadata } from 'next'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import CollectionSchema from '@/app/components/CollectionSchema'

interface PageProps {
  params: {
    category: string
  }
}

export default function CollectionPage({ params }: PageProps) {
  // Map URL-friendly names to collection IDs
  const collectionMap: { [key: string]: string } = {
    'bollywood-action': 'bollywood-action',
    'hollywood-action': 'hollywood-action',
    'scifi-fantasy': 'scifi-fantasy',
    'international-cinema': 'international-cinema',
    'animation': 'animation',
    'classic-cinema': 'classic-cinema',
    'modern-classics': 'modern-classics',
    'documentary': 'documentary',
    'cult-underground': 'cult-underground',
    'filmnoir': 'filmnoir',
    'genre-horror': 'genre-horror',
    'genre-romance': 'genre-romance',
    'director-showcase': 'director-showcase',
    'award-winners': 'award-winners',
    'family-children': 'family-children',
    'sports-adventure': 'sports-adventure',
    'war-films': 'war-films',
    'comedy-classics': 'comedy-classics',
    'thriller': 'thriller',
    'musicals': 'musicals',
    'experimental': 'experimental',
    'asian-action': 'asian-action',
    'crime-gangster': 'crime-gangster',
    'fantasy': 'fantasy',
    'historical-epics': 'historical-epics',
    'biographical': 'biographical',
    'teen-coming-age': 'teen-coming-age',
    'political-thriller': 'political-thriller',
    'bollywood-comedy': 'bollywood-comedy',
    'bollywood-horror': 'bollywood-horror',
    'bollywood-romance': 'bollywood-romance'
  }

  const collectionId = collectionMap[params.category]
  const collection = collections[collectionId]

  // Debug logging
  console.log('URL Category:', params.category)
  console.log('Collection ID:', collectionId)
  console.log('Found Collection:', collection)

  if (!collection) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl">Collection not found: {params.category}</h1>
        <p>Available collections: {Object.keys(collections).join(', ')}</p>
      </div>
    )
  }

  const breadcrumbItems = [
    {
      label: 'Collections',
      href: '/collections'
    },
    {
      label: collection.name
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <CollectionSchema collection={collection} />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        {collection.name}
      </motion.h1>

      {Object.entries(collection.categories).map(([categoryName, movies]) => (
        <div key={categoryName} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{categoryName.replace(/-/g, ' ')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(movies).map(([movieId, movie]) => (
              <MovieCard
                key={movieId}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                price={movie.price}
                releaseYear={movie.releaseYear}
                duration={movie.duration}
                rating={movie.rating}
                collectionId={collectionId}
                categoryName={categoryName}
                category={movie.category}
                subcategory={movie.subcategory}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 