"use client"
import { useContext } from 'react'
import { CartContext } from '@/app/contexts/CartContext'

interface CartItem {
  id: string | number
  title: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

interface CartContextType {
  state: CartState
  addToCart: (item: { 
    id: string; 
    title: string; 
    price: number;
    category: string;
    subcategory: string;
    mainCategory: string;
  }) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 