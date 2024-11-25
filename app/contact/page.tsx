"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      
      <div className="max-w-6xl mx-auto bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Have questions about our collection? We're here to help! Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">support@realpopshop.com</p>
              </div>

              <div className="bg-white/5 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>

              <div className="bg-white/5 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/5 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Your message..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 