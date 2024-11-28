"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Disc, Film, Archive, Star, Clock, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  
  // Use state to store window dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Set dimensions after mount
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Generate random positions based on dimensions
  const generateRandomPosition = () => ({
    x: Math.random() * (dimensions.width || 1000),
    y: Math.random() * (dimensions.height || 800)
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section with DVD Collection Animation */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-blue-600/20" />
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating DVDs Background */}
        {dimensions.width > 0 && [...Array(20)].map((_, i) => {
          const pos1 = generateRandomPosition()
          const pos2 = generateRandomPosition()
          
          return (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: [pos1.x, pos2.x],
                y: [pos1.y, pos2.y],
                rotate: [0, 360]
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Disc className="w-8 h-8 text-purple-400/30" />
            </motion.div>
          )
        })}

        <div className="text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About The Real Pop Collection Shop
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Preserving Cinema's Legacy, One DVD at a Time
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Our Story Section */}
        <motion.section 
          className="relative bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 
                     border border-gray-200/20 dark:border-gray-700/30 shadow-lg
                     hover:bg-gradient-to-br hover:from-purple-100/50 hover:to-blue-100/50
                     dark:hover:from-purple-900/50 dark:hover:to-blue-900/50
                     transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute -left-8 -top-8 w-16 h-16 text-purple-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Film className="w-full h-full" />
          </motion.div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            What started as a personal passion during the pandemic has evolved into something much bigger. As a film enthusiast, I (Sahaib) began meticulously cataloging my movie collection in a humble Google Sheet during the COVID lockdown. This simple act of documentation sparked something unexpected – a realization that physical media isn't just about ownership, it's about preserving stories, memories, and the authentic movie-watching experience that streaming services can't quite replicate.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="relative bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 
                     border border-gray-200/20 dark:border-gray-700/30 shadow-lg
                     hover:bg-gradient-to-br hover:from-blue-100/50 hover:to-purple-100/50
                     dark:hover:from-blue-900/50 dark:hover:to-purple-900/50
                     transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px] rounded-xl" />
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: [
                "radial-gradient(600px circle at 0% 0%, rgba(139, 92, 246, 0.1), transparent)",
                "radial-gradient(600px circle at 100% 100%, rgba(59, 130, 246, 0.1), transparent)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission transcends mere movie sales – we're here to rekindle the joy of tangible movie collections. In an age where content disappears from streaming platforms without warning, we believe in the permanence and pride of owning physical copies. Each DVD in our collection is more than just a disc; it's a piece of cinema history, a conversation starter, and an investment that appreciates in both value and sentiment over time.
            </p>
          </div>
        </motion.section>

        {/* Quality Section */}
        <motion.section 
          className="relative bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 
                     border border-gray-200/20 dark:border-gray-700/30 shadow-lg
                     hover:bg-gradient-to-br hover:from-purple-100/50 hover:to-blue-100/50
                     dark:hover:from-purple-900/50 dark:hover:to-blue-900/50
                     transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute inset-0 rounded-xl"
            animate={{
              background: [
                "linear-gradient(45deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
                "linear-gradient(45deg, transparent 100%, rgba(59, 130, 246, 0.1) 50%, transparent 0%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Quality Guarantee</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Every DVD in our collection is carefully sourced and verified for quality. We understand that each addition to your collection is an investment, which is why we personally ensure that each item meets our rigorous standards before it reaches your hands. From classic masterpieces to contemporary gems, every piece in our inventory is guaranteed to provide the premium viewing experience you deserve.
            </p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Archive, value: "1000+", label: "DVDs in Collection" },
            { icon: Clock, value: "24/7", label: "Customer Support" },
            { icon: CheckCircle, value: "100%", label: "Satisfaction Guaranteed" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/20 dark:border-gray-700/30 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-blue-500 dark:text-blue-400 w-12 h-12 mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {<stat.icon className="w-full h-full" />}
              </motion.div>
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 