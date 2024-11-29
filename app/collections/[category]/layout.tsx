import { Metadata } from 'next'
import { collections } from '@/lib/collections'

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const collection = collections[params.category]
  
  return {
    title: `${collection.name} | The Real Pop Collection Shop`,
    description: `Explore our ${collection.name}. Find premium physical media, reviews, and recommendations for ${collection.name.toLowerCase()}.`,
    openGraph: {
      title: collection.name,
      description: `Browse our curated collection of ${collection.name.toLowerCase()}`,
      images: ['/images/collections/${params.category}.jpg']
    }
  }
}

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 