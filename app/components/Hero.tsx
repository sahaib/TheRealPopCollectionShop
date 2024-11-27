"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 rounded-lg my-8 overflow-hidden">
      {/* DVD-like circular reflections - now faster and more visible */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -right-40 -top-40 rounded-full 
                      bg-gradient-to-br from-white/20 to-transparent blur-2xl animate-spin-faster" />
        <div className="absolute w-[600px] h-[600px] -left-40 -bottom-40 rounded-full 
                      bg-gradient-to-br from-white/20 to-transparent blur-2xl animate-spin-reverse-faster" />
      </div>

      {/* Enhanced glowing gradients */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 
                      animate-pulse-slow blur-3xl" />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent 
                      animate-wave blur-xl" />
      </div>

      {/* Grid overlay with enhanced visibility */}
      <div className="absolute inset-0 bg-grid-white/[0.15] bg-[length:50px_50px] bg-grid" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          Revive the Magic of Physical Media
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          Experience movies like never before with our curated DVD collection
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/collections">
            <Button 
              size="lg" 
              className="glass-button relative group overflow-hidden transform transition-all duration-300
                         hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Explore Collections
              </span>
              {/* DVD shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              {/* Circular glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl" />
              </div>
              {/* DVD-like ring effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 animate-spin-faster">
                <div className="absolute inset-2 border-2 border-white/20 rounded-full" />
                <div className="absolute inset-4 border border-white/10 rounded-full" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

