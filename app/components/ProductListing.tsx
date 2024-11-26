"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  { id: 1, name: 'Back to the Future Trilogy', price: 29.99, image: '/images/dvd-covers/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg' },
  { id: 2, name: 'Jurassic Park Collection', price: 39.99, image: '/images/dvd-covers/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg' },
  { id: 3, name: 'The Matrix Trilogy', price: 34.99, image: '/images/dvd-covers/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
  { id: 4, name: 'Star Wars: The Original Trilogy', price: 49.99, image: '/images/dvd-covers/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg' },
]

export default function ProductListing() {
  const { addToCart, state } = useCart()

  const handleAddToCart = (product: typeof products[0]) => {
    try {
      addToCart({
        id: product.id,
        title: product.name,
        price: product.price,
        quantity: 1
      })
      toast.success(`Added ${product.name} to cart`)
    } catch (error) {
      toast.error('Failed to add item to cart')
      console.error('Error adding to cart:', error)
    }
  }

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Popular DVDs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            isInCart={state.items.some(item => item.id === product.id)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: typeof products[0]
  isInCart: boolean
  onAddToCart: () => void
}

function ProductCard({ product, isInCart, onAddToCart }: ProductCardProps) {
  console.log('Product in card:', product)
  
  const [isHovered, setIsHovered] = useState(false)

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the cart button
    onAddToCart()
  }

  return (
    <Link href={`/movies/${product.id}`} className="block">
      <motion.div
        className="relative w-full aspect-[2/3] perspective-1000 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500"
          animate={{
            rotateY: isHovered ? 15 : 0,
            rotateX: isHovered ? -15 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Poster */}
          <div className="absolute w-full h-full rounded-lg overflow-hidden shadow-2xl backface-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="relative w-full h-full group">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
              
              {/* Content Overlay - Now visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-gray-200 mb-4">${product.price.toFixed(2)}</p>
                
                <div className="flex gap-4 items-center">
                  <Button 
                    onClick={handleCartClick}
                    className={`flex-1 transition-all duration-300 transform hover:scale-105 
                      ${isInCart 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-blue-600 hover:bg-blue-700'} 
                      text-white shadow-lg hover:shadow-xl`}
                    disabled={isInCart}
                  >
                    {isInCart ? '✓ In Cart' : 'Add to Cart'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="px-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                  >
                    Details →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Reflection Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 0.2 : 0,
            }}
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}

