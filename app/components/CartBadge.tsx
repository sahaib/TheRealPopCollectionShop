'use client'
import { useCart } from '@/app/contexts/CartContext'

export default function CartBadge() {
  const { cartCount } = useCart()
  
  if (cartCount === 0) return null
  
  return (
    <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {cartCount}
    </div>
  )
} 