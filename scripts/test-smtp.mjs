import nodemailer from 'nodemailer'

function parseSecure(val) {
  if (!val) return false
  const s = String(val).toLowerCase()
  return s === '1' || s === 'true' || s === 'yes'
}

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
  TO_EMAIL,
  FROM_EMAIL,
  NEXT_PUBLIC_SITE_URL,
} = process.env

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  console.error('Missing SMTP env vars. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: parseSecure(SMTP_SECURE),
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

const to = TO_EMAIL || 'info@focusinsurance.co.uk'
const from = FROM_EMAIL || 'no-reply@focusinsurance.co.uk'
const site = NEXT_PUBLIC_SITE_URL || 'https://example.com'

const now = new Date().toISOString()

const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:15px;color:#111">
    <h2 style="margin:0 0 12px">SMTP Test — Focus Insurance</h2>
    <p style="margin:0 0 16px">This is a test message sent by scripts/test-smtp.mjs.</p>
    <table style="border-collapse:collapse" cellpadding="6">
      <tbody>
        <tr><td><strong>Environment</strong></td><td>Manual SMTP test</td></tr>
        <tr><td><strong>URL</strong></td><td>${site}</td></tr>
        <tr><td><strong>Time</strong></td><td>${now}</td></tr>
      </tbody>
    </table>
  </div>
`

const text =
  `SMTP Test — Focus Insurance\n` +
  `Environment: Manual SMTP test\n` +
  `URL: ${site}\n` +
  `Time: ${now}\n`

try {
  console.log('Sending test email...')
  const info = await transporter.sendMail({
    from,
    to,
    subject: 'SMTP Test — Focus Insurance',
    text,
    html,
  })
  console.log('Sent. Message ID:', info.messageId)
} catch (err) {
  console.error('Failed to send test email:', err)
  process.exit(1)
}
