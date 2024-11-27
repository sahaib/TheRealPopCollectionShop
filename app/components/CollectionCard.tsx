"use client"

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { MouseEvent } from 'react'
import { 
  Clapperboard, Film, Rocket, Globe, 
  CatIcon, History, VideoIcon, Camera, 
  Skull, Music, FlaskConical, Mountain,
  BadgeAlert, Landmark, User, Heart,
  Shield, Trophy, HelpCircle
} from 'lucide-react'

interface CollectionCardProps {
  title: string
  href: string
  gradient: string
}
const gradientClasses = {
  'Bollywood': 'from-orange-500 via-pink-500 to-purple-500',
  'Hollywood': 'from-blue-500 via-indigo-500 to-purple-600',
  'Science': 'from-cyan-500 via-blue-500 to-purple-500',
  'International': 'from-green-500 via-teal-500 to-blue-500',
  'Animation': 'from-yellow-500 via-orange-500 to-red-500',
  'Classic': 'from-purple-500 via-violet-500 to-indigo-500',
  'Modern': 'from-blue-500 via-cyan-500 to-teal-500',
  'Documentary': 'from-amber-500 via-orange-500 to-red-500',
  'Horror': 'from-gray-900 via-purple-900 to-violet-800',
  'Musical': 'from-pink-500 via-rose-500 to-red-500',
  'Experimental': 'from-violet-600 via-purple-600 to-indigo-700',
  'Asian': 'from-red-500 via-rose-500 to-pink-600',
  'Crime': 'from-slate-800 via-gray-900 to-zinc-900',
  'Historical': 'from-amber-700 via-orange-700 to-red-800',
  'Biographical': 'from-emerald-600 via-green-600 to-teal-700',
  'Teen': 'from-fuchsia-500 via-pink-500 to-rose-500',
  'Political': 'from-red-700 via-rose-700 to-orange-800',
  'Sports': 'from-green-500 via-emerald-500 to-teal-600',
  'Bollywood Comedy': 'from-orange-400 via-pink-400 to-red-400',
  'Bollywood Horror': 'from-red-900 via-purple-800 to-pink-900',
  'Bollywood Romance': 'from-pink-400 via-rose-300 to-red-400',
  'default': 'from-slate-600 via-slate-700 to-slate-800'
}

// Icon mapping
const collectionIcons = {
  'Bollywood': Clapperboard,
  'Hollywood': Film,
  'Science': Rocket,
  'International': Globe,
  'Animation': CatIcon,
  'Classic': History,
  'Modern': VideoIcon,
  'Documentary': Camera,
  'Horror': Skull,
  'Musical': Music,
  'Experimental': FlaskConical,
  'Asian': Mountain,
  'Crime': BadgeAlert,
  'Historical': Landmark,
  'Biographical': User,
  'Teen': Heart,
  'Political': Shield,
  'Sports': Trophy,
  'default': HelpCircle,
  'Bollywood Horror': Skull,
  'Bollywood Romance': Heart,
  'Bollywood Comedy': Clapperboard
}

export default function CollectionCard({ title, href, gradient }: CollectionCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const gradientClass = gradientClasses[title as keyof typeof gradientClasses] || 
                         gradientClasses[title?.split(/[\s&]+/)[0] as keyof typeof gradientClasses] || 
                         gradientClasses.default

  const collectionType = title?.split(/[\s&]+/)[0]
  const Icon = collectionIcons[collectionType as keyof typeof collectionIcons] || collectionIcons.default

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      className="h-full rounded-lg overflow-hidden relative group perspective-1000"
    >
      <Link href={href} className="block h-full">
        {/* Main gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-90 
                      transition-all duration-300 group-hover:opacity-100`} />
        
        {/* 3D rotation effect */}
        <motion.div
          className="relative h-full"
          style={{
            rotateX: useMotionTemplate`${mouseY.get() / 40 - 10}deg`,
            rotateY: useMotionTemplate`${mouseX.get() / 40 - 10}deg`,
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.2),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Content container */}
          <div className="relative p-8 h-[300px] flex flex-col justify-between z-10">
            {/* Title Group with floating effect */}
            <motion.div
              variants={{
                hover: { y: -5, transition: { duration: 0.3 } }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 360 }
                  }}
                  transition={{ duration: 0.7 }}
                  className="p-2 bg-white/10 rounded-full backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  variants={{
                    hover: { scale: 1.05, transition: { duration: 0.3 } }
                  }}
                >
                  {title}
                </motion.h3>
              </div>
              <motion.div 
                className="w-16 h-1 bg-white/50 rounded-full mb-4"
                variants={{
                  hover: { width: "33%", transition: { duration: 0.3 } }
                }}
              />
              <p className="text-white/80">
                Explore our curated selection of {title?.toLowerCase?.() || ''} films
              </p>
            </motion.div>
            
            {/* Animated button */}
            <motion.div 
              className="inline-flex px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm
                       text-sm text-white font-medium items-center gap-2 relative overflow-hidden"
              variants={{
                hover: { 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <span className="relative z-10">Explore collection</span>
              <motion.span
                className="relative z-10"
                variants={{
                  hover: { x: 5, transition: { repeat: Infinity, duration: 0.6 } }
                }}
              >
                →
              </motion.span>
              
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/40"
                variants={{
                  initial: { scale: 0, x: "-100%" },
                  hover: { 
                    scale: 1.5, 
                    x: "100%",
                    transition: { 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "linear"
                    }
                  }
                }}
              />
            </motion.div>
          </div>

          {/* Particle effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={{
              hover: { opacity: 1, transition: { duration: 0.3 } }
            }}
            initial={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                variants={{
                  hover: {
                    y: [-20, 20],
                    x: [-20, 20],
                    opacity: [0, 1, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.3,
                      ease: "linear"
                    }
                  }
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:30px_30px] opacity-50" />
      </Link>
    </motion.div>
  )
}