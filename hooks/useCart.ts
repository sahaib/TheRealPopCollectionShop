"use client"
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

type CartItem = {
  movieTitle: string;
  quantity: number;
}

type CartState = {
  items: CartItem[];
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: string }
  | { type: 'REMOVE_FROM_CART'; payload: string }

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 