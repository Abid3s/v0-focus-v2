'use server'

import nodemailer from 'nodemailer'

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message' | 'consent', string>>
type Result = { ok: boolean; message: string; errors?: Errors }

function sanitise(value: unknown, max = 1000) {
  if (typeof value !== 'string') return ''
  return value.replace(/\s+/g, ' ').trim().slice(0, max)
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getTransport() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure =
    typeof process.env.SMTP_SECURE === 'string'
      ? ['1', 'true', 'yes'].includes(process.env.SMTP_SECURE.toLowerCase())
      : false

  if (!host || !port || !user || !pass) return null

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

export async function sendContact(formData: FormData): Promise<Result> {
  await new Promise((r) => setTimeout(r, 300))

  const name = sanitise(formData.get('name'), 120)
  const phone = sanitise(formData.get('phone'), 40)
  const email = sanitise(formData.get('email'), 120)
  const enquiryType = sanitise(formData.get('enquiryType'), 80) || 'General enquiry'
  const message = sanitise(formData.get('message'), 4000)
  const consent = sanitise(formData.get('consent'), 5) === 'yes'

  const errors: Errors = {}
  if (!name) errors.name = 'Please enter your full name.'
  if (phone && !/^[0-9+\-\s()]+$/.test(phone)) errors.phone = 'Please enter a valid telephone number.'
  if (!email || !isEmail(email)) errors.email = 'Please enter a valid email address.'
  if (!message) errors.message = 'Please provide details of your enquiry.'
  if (!consent) errors.consent = 'Please confirm you have read the privacy information.'

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: 'Please correct the highlighted fields.', errors }
  }

  const toAddress = process.env.TO_EMAIL || 'info@focusinsurance.co.uk'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.focusinsurance.co.uk'

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 12px">New website enquiry</h2>
      <p style="margin:0 0 16px">A new enquiry has been submitted via the contact form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px" cellpadding="6">
        <tbody>
          <tr><td style="background:#f8fafc;border:1px solid #e5e7eb;width:180px"><strong>Name</strong></td><td style="border:1px solid #e5e7eb">${name}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e5e7eb"><strong>Email</strong></td><td style="border:1px solid #e5e7eb">${email}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e5e7eb"><strong>Telephone</strong></td><td style="border:1px solid #e5e7eb">${phone || '—'}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e5e7eb"><strong>Enquiry type</strong></td><td style="border:1px solid #e5e7eb">${enquiryType}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e5e7eb"><strong>Message</strong></td><td style="border:1px solid #e5e7eb;white-space:pre-wrap">${message}</td></tr>
        </tbody>
      </table>
      <p style="margin:16px 0 0;color:#374151;font-size:13px">
        Submitted from: ${siteUrl}
      </p>
    </div>
  `

  const text =
    `New website enquiry\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Telephone: ${phone || '-'}\n` +
    `Enquiry type: ${enquiryType}\n\n` +
    `Message:\n${message}\n`

  const transport = getTransport()

  try {
    if (!transport) {
      console.warn('SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and optional SMTP_SECURE).')
      return {
        ok: false,
        message:
          'We could not send your message right now. Please try again later or contact us directly at info@focusinsurance.co.uk.',
      }
    }

    await transport.sendMail({
      from: process.env.FROM_EMAIL || `"Website Enquiries" <no-reply@focusinsurance.co.uk>`,
      to: toAddress,
      replyTo: email || undefined,
      subject: `New enquiry from ${name} — ${enquiryType}`,
      text,
      html,
    })

    return {
      ok: true,
      message:
        'Thank you for your enquiry. We have received your message and will respond within one working day (Mon–Fri).',
    }
  } catch (err) {
    console.error('Email send failed:', err)
    return {
      ok: false,
      message:
        'We could not send your message right now. Please try again later or contact us directly at info@focusinsurance.co.uk.',
    }
  }
}
