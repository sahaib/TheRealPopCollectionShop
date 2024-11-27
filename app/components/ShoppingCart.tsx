import { useContext } from 'react'
import { X, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/CartContext'
import { title } from 'process';

export default function ShoppingCartPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const cart = useContext(CartContext)
  if (!cart) throw new Error('useCart must be used within CartProvider')

  const collectionMap: { [key: string]: string } = {
    'bollywood-action': 'bollywood-action',
    'hollywood-action': 'hollywood-action',
    'scifi-fantasy': 'scifi-fantasy',
    'international-cinema': 'international-cinema',
    'animation': 'animation',
    'classic-cinema': 'classic-cinema',
    'modern-classics': 'modern-classics',
    'documentary': 'documentary',
    'cult-underground': 'cult-underground',
    'filmnoir': 'filmnoir',
    'genre-horror': 'genre-horror',
    'genre-romance': 'genre-romance',
    'director-showcase': 'director-showcase',
    'award-winners': 'award-winners',
    'family-children': 'family-children',
    'sports-adventure': 'sports-adventure',
    'war-films': 'war-films',
    'comedy-classics': 'comedy-classics',
    'thriller': 'thriller',
    'musicals': 'musicals',
    'experimental': 'experimental',
    'asian-action': 'asian-action',
    'crime-gangster': 'crime-gangster',
    'fantasy': 'fantasy',
    'historical-epics': 'historical-epics',
    'biographical': 'biographical',
    'teen-coming-age': 'teen-coming-age',
    'political-thriller': 'political-thriller',
    'bollywood-comedy': 'bollywood-comedy',
    'bollywood-horror': 'bollywood-horror',
    'bollywood-romance': 'bollywood-romance'
  }

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          onClick={onClose}
        />
      )}
      
      <aside 
        className={`fixed top-0 bottom-0 right-0 w-[90%] md:w-[400px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-[101] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-[100vh] bg-white dark:bg-gray-900">
          <header className="p-4 border-b dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold dark:text-white">Shopping Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-5 w-5 dark:text-white" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
            {cart.state.items.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cart.state.items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div>
                      <h3 className="font-medium dark:text-white">
                        {item.category && item.subcategory ? (
                          <a 
                            // href={`/collections/${item.mainCategory}/${item.category}/${item.subcategory}`} 
                            className="hover:underline"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => cart.removeFromCart(item.id)}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
            <div className="mb-4 text-right">
              <p className="text-lg font-semibold dark:text-white">
                Total: ${cart.state.total.toFixed(2)}
              </p>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/80 hover:shadow-lg transition-all 
                         text-primary-foreground dark:bg-blue-600 dark:hover:bg-blue-700"
              disabled={cart.state.items.length === 0}
              onClick={() => {/* checkout logic */}}
            >
              Checkout
            </Button>
          </footer>
        </div>
      </aside>
    </>
  )
}