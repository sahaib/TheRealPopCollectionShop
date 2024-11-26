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
        email: 'support@trpc.shop',
        name: 'TRPC Shop'
      },
      templateId: 'd-da39da8659a241278d1a6f98d839ada7',
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