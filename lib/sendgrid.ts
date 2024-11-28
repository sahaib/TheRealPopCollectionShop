import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = async (options: sgMail.MailDataRequired) => {
  try {
    await sgMail.send(options)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid error:', error.response?.body)
    throw new Error('Failed to send email')
  }
} 