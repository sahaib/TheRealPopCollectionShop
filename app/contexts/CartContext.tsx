"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

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
  cartCount: number
  setCartCount: (count: number) => void
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
}

export const CartContext = createContext<CartContextType>({
  state: { items: [], total: 0 },
  cartCount: 0,
  setCartCount: () => {},
  addToCart: () => {},
  removeFromCart: () => {}
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [cartCount, setCartCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [state, setState] = useState<{items: CartItem[], total: number}>({
    items: [],
    total: 0
  })

  // Load cart state from localStorage with user-specific key
  useEffect(() => {
    setIsClient(true)
    if (session?.user?.email) {
      const userCartKey = `cart_${session.user.email}`
      const savedCart = localStorage.getItem(userCartKey)
      if (savedCart) {
        const { items, total } = JSON.parse(savedCart)
        setState({ items, total })
        setCartCount(items.length)
      }
    }
  }, [session])

  // Save cart state to localStorage with user-specific key
  useEffect(() => {
    if (isClient && session?.user?.email) {
      const userCartKey = `cart_${session.user.email}`
      localStorage.setItem(userCartKey, JSON.stringify(state))
      localStorage.setItem(`${userCartKey}_count`, state.items.length.toString())
    }
  }, [state, isClient, session])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartCount(prev => prev + 1)
    setState(prev => ({
      items: [...prev.items, { ...item, quantity: 1 }],
      total: prev.total + item.price
    }))
  }

  const removeFromCart = (id: string) => {
    setState(prev => {
      const item = prev.items.find(item => item.id === id)
      if (!item) return prev
      
      return {
        items: prev.items.filter(item => item.id !== id),
        total: prev.total - (item.price * item.quantity)
      }
    })
    setCartCount(prev => prev - 1)
  }

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, state, addToCart, removeFromCart }}>
      {isClient ? children : null}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)