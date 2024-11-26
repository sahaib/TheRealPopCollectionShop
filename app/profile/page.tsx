"use client"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/hooks/useCart'

interface Favorite {
  id: string
  movieTitle: string
  createdAt: string
}

interface CartItem {
  movieTitle: string
  quantity: number
}

export default function ProfilePage() {
  const { data: session } = useSession()
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<string[]>([])
  const { addToCart, state } = useCart()

  useEffect(() => {
    if (session?.user?.email) {
      // Fetch favorites
      fetch('/api/favorites')
        .then(res => res.json())
        .then(data => {
          if (data.favorites) {
            setFavorites(data.favorites)
          }
        })
        .catch(error => console.error('Error fetching favorites:', error))

      // Fetch cart items
      fetch('/api/cart')
        .then(res => res.json())
        .then(data => {
          if (data.items) {
            setCartItems(data.items)
          }
        })
        .catch(error => console.error('Error fetching cart:', error))

      // Fetch orders
      fetch('/api/orders')
        .then(res => res.json())
        .then(data => {
          if (data.orders) {
            setOrders(data.orders)
          }
        })
        .catch(error => console.error('Error fetching orders:', error))
    }
  }, [session])

  const handleRemoveFavorite = async (favoriteId: string, movieTitle: string) => {
    try {
      const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to remove from favorites')

      setFavorites(favorites.filter(fav => fav.id !== favoriteId))
      toast.success(`Removed ${movieTitle} from favorites`)
    } catch (error) {
      toast.error('Failed to remove from favorites')
      console.error('Error removing favorite:', error)
    }
  }

  const handleAddToCart = (movieTitle: string) => {
    try {
      addToCart({
        id: movieTitle,
        title: movieTitle,
        price: 29.99,
        quantity: 1
      })
      toast.success(`Added ${movieTitle} to cart`)
    } catch (error) {
      toast.error('Failed to add item to cart')
      console.error('Error adding to cart:', error)
    }
  }

  const isInCart = (movieTitle: string) => {
    return state.items.some(item => item.id === movieTitle)
  }

  const isOrdered = (movieTitle: string) => {
    return orders.includes(movieTitle)
  }

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <p className="mb-8">Welcome back, {session.user?.name}!</p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <p className="text-gray-600">No orders yet.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Favorites</h2>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <div 
                key={favorite.id} 
                className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <Link 
                    href={`/collections/all/series/${favorite.movieTitle.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-semibold hover:text-blue-600"
                  >
                    {favorite.movieTitle}
                  </Link>
                  <button
                    onClick={() => handleRemoveFavorite(favorite.id, favorite.movieTitle)}
                    className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                    aria-label="Remove from favorites"
                  >
                    <Heart className="h-5 w-5 text-red-500 fill-current" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  Added on {new Date(favorite.createdAt).toLocaleDateString()}
                </p>
                {!isOrdered(favorite.movieTitle) && !isInCart(favorite.movieTitle) ? (
                  <button 
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => handleAddToCart(favorite.movieTitle)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                ) : isInCart(favorite.movieTitle) ? (
                  <div className="text-green-600 text-sm font-medium">
                    ✓ In Cart
                  </div>
                ) : (
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Buy Again
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No favorites yet.</p>
        )}
      </div>
    </div>
  )
}