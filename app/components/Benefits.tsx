import { Film, TrendingUp, Zap, Key, Gift, Wifi, Users } from 'lucide-react'

const benefits = [
  { icon: Film, title: 'Tangible Memories', description: 'Physical media creates lasting, touchable memories' },
  { icon: TrendingUp, title: 'Collectible Value', description: 'DVDs can appreciate in value over time' },
  { icon: Zap, title: 'Higher Quality', description: 'Superior audio and video quality compared to streaming' },
  { icon: Key, title: 'True Ownership', description: 'You own the content, not just a license to stream' },
  { icon: Gift, title: 'Special Features', description: 'Enjoy exclusive extras and behind-the-scenes content' },
  { icon: Wifi, title: 'No Internet Needed', description: 'Watch your favorite movies anytime, anywhere' },
  { icon: Users, title: 'Family Legacy', description: 'Pass down your collection to future generations' },
]

export default function Benefits() {
  return (
    <section className="my-16 bg-gray-100 py-16 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
Why Choose Physical Media?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <benefit.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

