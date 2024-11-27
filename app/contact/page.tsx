"use client"

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'sonner'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const token = await recaptchaRef.current?.executeAsync()
      if (!token) {
        throw new Error('reCAPTCHA verification failed')
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          recaptchaToken: token,
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')

      toast.success('Message sent successfully!')
      form.reset()
      recaptchaRef.current?.reset()

    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
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
                <p className="text-gray-600 dark:text-gray-300">support@trpc.shop</p>
              </div>

              <div className="bg-white/5 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 7021XXXXXX</p>
              </div>

              <div className="bg-white/5 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
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
                name="email"
                required
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
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <div className="absolute bottom-0 right-0 transform translate-y-full">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="h-20" />
    </div>
  )
} 