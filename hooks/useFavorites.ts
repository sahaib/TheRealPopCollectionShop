"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Favorite {
  id: string
  movieTitle: string
  createdAt: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const { data: session } = useSession()

  // Load favorites from localStorage
  useEffect(() => {
    if (session?.user?.email) {
      const userFavKey = `favorites_${session.user.email}`
      const savedFavorites = localStorage.getItem(userFavKey)
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      }
    }
  }, [session])

  // Save favorites to localStorage
  useEffect(() => {
    if (session?.user?.email) {
      localStorage.setItem(`favorites_${session.user.email}`, JSON.stringify(favorites))
    }
  }, [favorites, session])

  const addFavorite = async (favorite: Favorite) => {
    setFavorites(prev => [...prev, favorite])
  }

  const removeFavorite = async (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id))
  }

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id)
  }

  return { 
    favorites, 
    addFavorite, 
    removeFavorite,
    isFavorite,
    setFavorites 
  }
} 