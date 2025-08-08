import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import CommercialPropertyHero from '@/components/commercial-property-hero'
import CommercialPropertyProducts from '@/components/commercial-property-products'
import CommercialPropertyFeatures from '@/components/commercial-property-features'
import CommercialPropertyCTA from '@/components/commercial-property-cta'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Commercial Property Insurance | Focus Insurance Services',
  description: 'Comprehensive commercial property insurance for UK businesses. Buildings, contents, business interruption and liability cover. Get expert advice and competitive quotes.',
  keywords: 'commercial property insurance, business buildings insurance, commercial contents insurance, property owners liability, business interruption insurance, UK commercial property cover',
}

export default function CommercialPropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CommercialPropertyHero />
      <CommercialPropertyProducts />
      <CommercialPropertyFeatures />
      <CommercialPropertyCTA />
      <Footer />
    </div>
  )
}
