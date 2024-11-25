"use client"

import Link from 'next/link'

interface CollectionCardProps {
  title: string
  href: string
  gradient: string
}

export default function CollectionCard({ title, href, gradient }: CollectionCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-xl">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-transform duration-200 group-hover:scale-105`} />
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white mb-12">{title}</h3>
        <p className="mt-4 text-sm text-white/90">Explore collection →</p>
      </div>
    </Link>
  )
} 