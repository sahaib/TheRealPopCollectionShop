"use client"
import { createContext, useReducer, ReactNode } from 'react'

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
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
}

const initialState: CartState = {
  items: [],
  total: 0
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', item })
  }

  const removeFromCart = (id: string | number) => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }

  const updateQuantity = (id: string | number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity })
  }

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.item.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.item.price
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
        total: state.total + action.item.price
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.id)
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0)
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id
            ? { ...item, quantity: action.quantity }
            : item
        ),
        total: state.items.reduce((total, item) => 
          total + (item.id === action.id 
            ? item.price * action.quantity 
            : item.price * item.quantity), 0)
      }
    default:
      return state
  }
} 