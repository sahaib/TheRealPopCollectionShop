import Image from 'next/image'
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: 'Back to the Future Trilogy', price: 29.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 2, name: 'Jurassic Park Collection', price: 39.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 3, name: 'The Matrix Trilogy', price: 34.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 4, name: 'Star Wars: The Original Trilogy', price: 49.99, image: '/placeholder.svg?height=300&width=200' },
]

export default function ProductListing() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular DVDs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={product.image} alt={product.name} width={200} height={300} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

