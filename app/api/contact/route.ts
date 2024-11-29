import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sendgrid'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Verify reCAPTCHA first
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()
    if (!recaptchaData.success) {
      return NextResponse.json({ error: 'Invalid reCAPTCHA' }, { status: 400 })
    }

    // Send email using SendGrid with verified sender
    const msg = {
      to: 'support@trpc.shop',
      from: {
        email: 'support@trpc.shop',
        name: 'TRPC Shop'
      },
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 