import { notFound } from 'next/navigation'
import CollectionPage from '@/components/CollectionPage'
import { collections } from '@/lib/collections'

export function generateStaticParams() {
  return collections.map((collection) => ({
    id: collection.id,
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const collection = collections.find((c) => c.id === params.id)

  if (!collection) {
    notFound()
  }

  return <CollectionPage collection={collection} />
}

