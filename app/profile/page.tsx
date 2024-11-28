"use client"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Heart, ShoppingCart, User, Mail, Calendar } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/hooks/useFavorites'
import { motion, useMotionValue } from 'framer-motion'
import { ProfileAvatar } from '@/app/components/ProfileAvatar'

interface Favorite {
  id: string
  movieTitle: string
  createdAt: string
}

interface CartItem {
  movieTitle: string
  quantity: number
}

const ProfileCard = ({ user, favorites, orders }: { 
  user: any; 
  favorites: any[]; 
  orders: any[];
}) => {
  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto mb-8 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-xl shadow-xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid animate-grid-fade" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
        </div>

        {/* Profile content */}
        <div className="relative z-10">
          <motion.div 
            className="w-24 h-24 mx-auto mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            {user?.name ? (
              <ProfileAvatar name={user.name} size="md" />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </motion.div>

          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-2"
            whileHover={{ scale: 1.1 }}
          >
            {user?.name || 'Guest User'}
          </motion.h2>

          <div className="space-y-2">
            <motion.div 
              className="flex items-center gap-2 text-white/80"
              whileHover={{ x: 10 }}
            >
              <Mail className="w-4 h-4" />
              <span>{user?.email || 'No email provided'}</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 text-white/80"
              whileHover={{ x: 10 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Member since {new Date().getFullYear()}</span>
            </motion.div>
          </div>
        </div>

        {/* Interactive elements */}
        <motion.div 
          className="mt-6 grid grid-cols-2 gap-4"
          whileHover={{ y: -5 }}
        >
          <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">{favorites.length}</div>
            <div className="text-sm text-white/80">Favorites</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white">{orders.length}</div>
            <div className="text-sm text-white/80">Orders</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Collection3DCard = ({ collection }: { collection: any }) => {
  const [rotateX] = useState(useMotionValue(0))
  const [rotateY] = useState(useMotionValue(0))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = ((e.clientY - centerY) / rect.height) * 20
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 20

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  return (
    <motion.div
      className="relative h-[400px] rounded-xl perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      
      {/* Content with depth */}
      <motion.div className="relative z-10 p-6 transform translate-z-30">
        {/* Your existing collection content */}
      </motion.div>
    </motion.div>
  )
}

export default function ProfilePage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const { items: favorites, removeFavorite } = useFavorites()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<string[]>([])
  const { addToCart, state } = useCart()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.email) {
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
      await removeFavorite(favoriteId)
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
        category: 'sci-fi',
        subcategory: 'action',
        mainCategory: 'sci-fi'
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

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Profile</h1>
      
      <ProfileCard 
        user={session?.user} 
        favorites={favorites} 
        orders={orders}
      />

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