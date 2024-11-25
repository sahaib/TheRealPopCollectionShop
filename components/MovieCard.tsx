import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

interface MovieCardProps {
  title: string
  image: string
  price: number
  category: string
  isFavorite?: boolean
}

export default function MovieCard({ title, image, price, category, isFavorite = false }: MovieCardProps) {
  const { data: session } = useSession()

  const handleFavoriteClick = async () => {
    if (!session) {
      toast.error('Please sign in to add favorites')
      return
    }

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })

      if (!response.ok) throw new Error('Failed to update favorites')

      toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites')
    } catch (error) {
      toast.error('Failed to update favorites')
    }
  }

  return (
    <div className="group relative">
      <Link href={`/collections/${category}/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 dark:text-gray-200">{title}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">${price}</p>
          </div>
        </div>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black"
      >
        <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-400'}`} />
      </button>
    </div>
  )
} 