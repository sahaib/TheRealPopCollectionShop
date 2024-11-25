import { collections } from '@/lib/collections'
import MovieCard from '@/components/MovieCard'

export default function SeriesPage({ 
  params 
}: { 
  params: { category: string; seriesId: string } 
}) {
  const collection = collections[params.category]
  const seriesName = decodeURIComponent(params.seriesId)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  if (!collection) return <div>Collection not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{seriesName}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <p className="text-gray-600 dark:text-gray-400 col-span-full">
          Coming soon: Individual movies in this series
        </p>
      </div>
    </div>
  )
} 