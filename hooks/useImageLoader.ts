import { useState, useEffect } from 'react'
import { PLACEHOLDER_IMAGE } from '@/lib/imageLoader'

export function useImageLoader(src: string) {
  const [imageSrc, setImageSrc] = useState(PLACEHOLDER_IMAGE)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
    }

    img.onerror = () => {
      setError(new Error('Failed to load image'))
      setIsLoading(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { imageSrc, isLoading, error }
} 