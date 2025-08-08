import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ContactHero from '@/components/contact-hero'
import ContactInfo from '@/components/contact-info'
import ContactForm from '@/components/contact-form'
import ContactMap from '@/components/contact-map'

export const metadata: Metadata = {
  title: 'Contact Focus Insurance Services | FCA Regulated Insurance Brokers in Peterborough',
  description:
    'Contact Focus Insurance Services for clear, fair and not misleading information. Call 01733 263311, email info@focusinsurance.co.uk or visit 29 Ivatt Way, Peterborough PE3 7PH. Authorised and regulated by the Financial Conduct Authority.',
  keywords: [
    'contact insurance broker Peterborough',
    'Focus Insurance Services',
    'FCA regulated insurance broker UK',
    'insurance enquiry',
    'speak to an adviser',
  ],
  openGraph: {
    title: 'Contact Focus Insurance Services',
    description:
      'Speak with our team for clear, fair and not misleading insurance information. FCA regulated. Peterborough office.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  )
}
