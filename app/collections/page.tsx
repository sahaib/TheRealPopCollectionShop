"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { collections } from '@/lib/collections'
import CollectionCard from '@/app/components/CollectionCard'
import { useRef } from 'react'

export default function CollectionsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Main scroll progress
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  })

  // Smoother scroll animations
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    mass: 0.5
  })

  // Parallax transformations with reduced dimming
  const headerY = useTransform(smoothY, [0, 1], [0, -200])
  const bgY = useTransform(smoothY, [0, 1], [0, 150])
  const scale = useTransform(smoothY, [0, 0.5], [1, 0.95])

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
      />

      {/* Header section with parallax */}
      <motion.div 
        style={{ y: headerY }}
        className="sticky top-0 z-10 pt-16 pb-8 px-4"
      >
        <motion.h1 
          style={{ scale }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground"
        >
          Our Collections
        </motion.h1>
      </motion.div>

      {/* Cards grid with scroll animations */}
      <div className="container mx-auto px-4 pb-32">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.values(collections).map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.05, 0.9]
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="will-change-transform"
            >
              <CollectionCard
                title={collection.name}
                href={`/collections/${collection.id}`}
                gradient={`from-${collection.name.toLowerCase().split(' ')[0]}-500 to-blue-600`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle scroll-based overlay - reduced opacity */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--background) 95%)",
          opacity: useTransform(smoothY, [0, 0.5, 1], [0, 0.2, 0.3])
        }}
      />
    </motion.div>
  )
}

