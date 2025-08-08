import Navigation from '@/components/navigation'
import OfficeSurgeryHero from '@/components/office-surgery-hero'
import OfficeSurgeryProducts from '@/components/office-surgery-products'
import OfficeSurgeryFeatures from '@/components/office-surgery-features'
import OfficeSurgeryCTA from '@/components/office-surgery-cta'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Office & Surgery Insurance | Professional Healthcare Cover | Focus Insurance',
  description: 'Comprehensive office and surgery insurance for healthcare professionals. Professional indemnity, medical malpractice, and business protection. Get expert advice from FCA regulated brokers.',
  keywords: 'office insurance, surgery insurance, medical practice insurance, professional indemnity, medical malpractice, healthcare insurance, GP surgery insurance',
}

export default function OfficeSurgeryPage() {
  return (
    <main>
      <Navigation />
      <OfficeSurgeryHero />
      <OfficeSurgeryProducts />
      <OfficeSurgeryFeatures />
      <OfficeSurgeryCTA />
      <Footer />
    </main>
  )
}
