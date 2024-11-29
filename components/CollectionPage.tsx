"use client"

import Link from 'next/link'
import { Collection } from '@/lib/collections'
import { motion } from 'framer-motion'
import { Film } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function CollectionPage({ collection }: { collection: Collection }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-600 to-blue-600"
      >
        {collection.name}
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(collection.categories).map(([categoryName, items]) => {
          const movieList = Array.isArray(items) ? items : Object.values(items).flat()
          
          return (
            <motion.div
              key={categoryName}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-lg 
                         hover:shadow-xl transition-all duration-300 
                         hover:scale-105 hover:rotate-1"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Film className="w-6 h-6 text-purple-500" />
                {categoryName}
              </h2>
              
              <ul className="space-y-3">
                {movieList.map((movie: any) => (
                  <motion.li
                    key={movie.id}
                    id={movie.title.toLowerCase().replace(/\s+/g, '-')}
                    whileHover={{ x: 10 }}
                    className="group transition-colors duration-300"
                  >
                    <div 
                      className="flex items-center justify-between p-2 rounded-lg
                                hover:bg-purple-50 dark:hover:bg-purple-900/20
                                transition-all duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const movieElement = document.getElementById(movie.title.toLowerCase().replace(/\s+/g, '-'));
                        if (movieElement) {
                          movieElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          movieElement.classList.add('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
                          
                          setTimeout(() => {
                            movieElement.classList.remove('bg-purple-100', 'dark:bg-purple-900/30', 'scale-105', 'ring-2', 'ring-purple-500', 'z-10');
                          }, 2000);
                        }
                      }}
                    >
                      <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {movie.title}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600 dark:text-purple-400">
                        →
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              {/* DVD-inspired decorative element */}
              <div className="absolute -right-3 -bottom-3 w-24 h-24 rounded-full 
                            bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                            blur-xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

