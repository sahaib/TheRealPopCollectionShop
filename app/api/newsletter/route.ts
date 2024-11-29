import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sendgrid'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    await sendEmail({
      to: email,
      from: {
        email: 'your_email@example.com',
        name: 'Your Name'
      },
      templateId: 'your_sendgrid_template_id',
      dynamicTemplateData: {
        email: email
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
} 