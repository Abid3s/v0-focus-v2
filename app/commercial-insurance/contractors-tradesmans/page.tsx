import { Navigation } from '@/components/navigation'
import { ContractorsTradesmansHero } from '@/components/contractors-tradesmans-hero'
import { ContractorsTradesmansProducts } from '@/components/contractors-tradesmans-products'
import { ContractorsTradesmansFeatures } from '@/components/contractors-tradesmans-features'
import { ContractorsTradesmansCta } from '@/components/contractors-tradesmans-cta'
import { Footer } from '@/components/footer'

export default function ContractorsTradesmansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContractorsTradesmansHero />
      <ContractorsTradesmansProducts />
      <ContractorsTradesmansFeatures />
      <ContractorsTradesmansCta />
      <Footer />
    </div>
  )
}
