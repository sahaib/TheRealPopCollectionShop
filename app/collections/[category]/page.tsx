import MovieCard from '../../components/MovieCard'
import { collections } from '@/lib/collections'

const gradients = {
  superhero: [
    "from-red-500 to-orange-500",
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-red-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-blue-500"
  ],
  action: [
    "from-orange-500 to-red-500",
    "from-yellow-500 to-orange-500",
    "from-red-500 to-pink-500",
    "from-blue-500 to-indigo-500"
  ]
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryData = collections[params.category as keyof typeof collections]
  
  if (!categoryData) return <div>Category not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{categoryData.name}</h1>
      
      {Object.entries(categoryData.categories).map(([category, items], categoryIndex) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <MovieCard
                key={item}
                title={item}
                href={`/collections/${params.category}/series/${item.toLowerCase().replace(/\s+/g, '-')}`}
                gradient={gradients[category === "Superhero Universe" ? "superhero" : "action"][index % gradients[category === "Superhero Universe" ? "superhero" : "action"].length]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 