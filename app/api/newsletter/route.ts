import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Send confirmation email using template
    const msg = {
      to: email,
      from: {
        email: 'your_email@example.com',
        name: 'Your Name'
      },
      templateId: 'your_sendgrid_template_id',
      dynamicTemplateData: {
        email: email,
        // Add any other variables your template uses
        // subject: 'Welcome to TRPC Shop Newsletter!',
        // name: email.split('@')[0], // Optional: Extract name from email
      }
    }

    try {
      await sgMail.send(msg)
      return NextResponse.json({ success: true })
    } catch (sendError: any) {
      console.error('SendGrid error:', sendError.response?.body)
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
} 