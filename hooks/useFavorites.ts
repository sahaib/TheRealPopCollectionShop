"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoriteItem {
  id: string
  movieTitle: string
  createdAt: string
}

interface FavoriteStore {
  items: FavoriteItem[]
  addFavorite: (item: FavoriteItem) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  setFavorites: (favorites: FavoriteItem[]) => void
}

export const useFavorites = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      items: [],
      addFavorite: (item) => {
        if (!get().isFavorite(item.id)) {
          set((state) => ({
            items: [...state.items, item]
          }))
          // Update server in background with error handling
          if (typeof window !== 'undefined') {
            fetch('/api/favorites', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ title: item.movieTitle })
            }).catch((error) => {
              console.error('Failed to sync favorite:', error)
            })
          }
        }
      },
      removeFavorite: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        }))
        // Update server in background with error handling
        if (typeof window !== 'undefined') {
          fetch(`/api/favorites/${id}`, {
            method: 'DELETE'
          }).catch((error) => {
            console.error('Failed to remove favorite:', error)
          })
        }
      },
      isFavorite: (id) => {
        return get().items.some((item) => item.id === id)
      },
      setFavorites: (favorites) => {
        set({ items: favorites })
      }
    }),
    {
      name: 'favorites-storage'
    }
  )
) 