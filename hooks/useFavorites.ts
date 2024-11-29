"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Favorite {
  id: string
  movieTitle: string
  createdAt: string
  userId: string
}

export const useFavorites = create<{
  favorites: Favorite[]
  setFavorites: (favorites: Favorite[]) => void
  addFavorite: (favorite: Omit<Favorite, 'userId'>) => void
  removeFavorite: (id: string) => void
  isFavorite: (title: string) => boolean
}>((set, get) => ({
  favorites: [],
  setFavorites: (favorites) => set({ favorites }),
  addFavorite: (favorite) =>
    set((state) => ({
      favorites: [...state.favorites, favorite as Favorite]
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f.id !== id)
    })),
  isFavorite: (title) =>
    get().favorites.some((f) => f.movieTitle === title)
})) 