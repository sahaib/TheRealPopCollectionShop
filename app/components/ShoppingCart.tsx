"use client"
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingCartPanel({ isOpen, onClose }: ShoppingCartProps) {
  // This would typically be managed by a state management solution like Redux or Zustand
  const cartItems = [] 

  return (
    <div
      className={`fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {/* Cart items would go here */}
            </div>
          )}
        </div>

        <div className="border-t p-4 space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>$0.00</span>
          </div>
          <Button className="w-full" size="lg">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
} 