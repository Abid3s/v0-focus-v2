import { Metadata } from 'next'
import { CommercialCombinedHero } from '@/components/commercial-combined-hero'
import { CommercialCombinedProducts } from '@/components/commercial-combined-products'
import { CommercialCombinedFeatures } from '@/components/commercial-combined-features'
import { CommercialCombinedCta } from '@/components/commercial-combined-cta'

export const metadata: Metadata = {
  title: 'Commercial Combined Insurance | Comprehensive Business Protection | Focus Insurance',
  description: 'Protect your business with comprehensive commercial combined insurance. Property, liability, and business interruption cover in one policy. Get a quote today.',
  keywords: 'commercial combined insurance, business insurance, commercial property insurance, public liability, business interruption, UK business cover',
}

export default function CommercialCombinedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <CommercialCombinedHero />
      <CommercialCombinedProducts />
      <CommercialCombinedFeatures />
      <CommercialCombinedCta />
    </div>
  )
}
