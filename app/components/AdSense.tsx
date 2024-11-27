"use client"
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdSenseProps {
  slot: string
  style?: React.CSSProperties
}

export default function AdSense({ slot, style = { display: 'block' } }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-4473243229406280"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
} 