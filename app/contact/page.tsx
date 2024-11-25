import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our collection? We're here to help! Fill out the form 
            and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@realpopshop.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
          
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  )
} 