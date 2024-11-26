"use client"

import Link from 'next/link'

interface CollectionCardProps {
  title: string
  href: string
  gradient: string
}

export default function CollectionCard({ title, href, gradient }: CollectionCardProps) {
  return (
<Link 
      href={href} 
      className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:scale-105 group-hover:opacity-90`} />
      
      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-white mb-12 transition-transform duration-300 group-hover:translate-x-2">
          {title}
        </h3>
        <p className="mt-4 text-sm text-white/90 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
          Explore collection 
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </p>
      </div>
    </Link>
  )
} 