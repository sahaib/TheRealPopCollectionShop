"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const opacity = useTransform(scrollY, 
    [0, 200, 400, 600], 
    [1, 0.8, 0.9, 1]
  )
  
  const scale = useTransform(scrollY,
    [0, 200, 400, 600],
    [1, 0.98, 0.99, 1]
  )

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="w-full transition-all"
      whileHover="hover"
      whileTap="tap"
      variants={hoverVariants}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}