import Image from 'next/image'
import { Button } from "@/components/ui/button"

const newReleases = [
  {
    id: 1,
    title: "Dune",
    releaseDate: "2024",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    id: 2,
    title: "Oppenheimer",
    releaseDate: "2024",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    id: 3,
    title: "Mission: Impossible - Dead Reckoning",
    releaseDate: "2024",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    id: 4,
    title: "The Marvels",
    releaseDate: "2024",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=200"
  }
]

export const metadata = {
  title: 'New Releases - TRPC Shop',
  description: 'Check out our latest movie releases'
}

export default function NewReleasesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">New Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newReleases.map((release) => (
          <div key={release.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={release.image} 
              alt={release.title} 
              width={200} 
              height={300} 
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{release.title}</h2>
              <p className="text-gray-600 mb-2">Release: {release.releaseDate}</p>
              <p className="text-blue-600 font-bold mb-4">${release.price}</p>
              <Button className="w-full">Pre-order Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 