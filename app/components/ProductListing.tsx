"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'

const products = [
  { id: 1, name: 'Back to the Future Trilogy', price: 29.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 2, name: 'Jurassic Park Collection', price: 39.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 3, name: 'The Matrix Trilogy', price: 34.99, image: '/placeholder.svg?height=300&width=200' },
  { id: 4, name: 'Star Wars: The Original Trilogy', price: 49.99, image: '/placeholder.svg?height=300&width=200' },
]

export default function ProductListing() {
  const { addToCart } = useCart()

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Popular DVDs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm flex flex-col h-full">
            <div className="relative aspect-[2/3] w-full">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</p>
              <div className="mt-auto pt-4">
                <Button 
                  onClick={() => addToCart({ 
                    id: product.id, 
                    title: product.name, 
                    price: product.price,
                    quantity: 1
                  })}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

