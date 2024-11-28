"use client"
import { createContext, useContext, useEffect, useState } from 'react'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  category: string
  subcategory: string
  mainCategory: string
}

interface CartContextType {
  state: {
    items: CartItem[]
    total: number
  }
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string, quantity: number) => void
}

export const CartContext = createContext<CartContextType>({
  state: { items: [], total: 0 },
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {}
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Get initial state from localStorage
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cart')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => [...prev, { ...item, quantity: 1 }])
  }

  const removeItem = (id: string | number) => {
    setItems(prev => prev.filter(item => item.id !== id.toString()))
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      state: { 
        items, 
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
      addToCart: addItem,
      removeFromCart: removeItem,
      updateQuantity: (id, qty) => {
        setItems(prev => prev.map(item => 
          item.id === id ? {...item, quantity: qty} : item
        ))
      }
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)