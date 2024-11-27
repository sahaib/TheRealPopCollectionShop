"use client"

import Link from 'next/link'

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
  'default': 'from-slate-600 via-slate-700 to-slate-800'
}

export default function CollectionCard({ title, href, gradient }: CollectionCardProps) {
  const collectionType = title?.split(/[\s&]+/)[0];
  const gradientClass = gradientClasses[collectionType as keyof typeof gradientClasses] || gradientClasses.default;

  return (
    <Link href={href} className="group">
      <div className="relative h-full rounded-lg overflow-hidden transition-all duration-500 
                    shadow-lg group-hover:shadow-2xl group-hover:scale-105">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-90`} />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid" />
        
        {/* Content */}
        <div className="relative p-8 h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="w-16 h-1 bg-white/50 rounded-full mb-4" />
            <p className="text-white/80">
              Explore our curated selection of {title?.toLowerCase?.() || ''} films
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
                          text-sm text-white font-medium group-hover:bg-white/30 transition-all">
              Explore collection →
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 
                        bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
        </div>
      </div>
    </Link>
  )
} 