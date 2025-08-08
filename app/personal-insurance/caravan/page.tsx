import Navigation from '@/components/navigation'
import CaravanInsuranceHero from '@/components/caravan-insurance-hero'
import CaravanInsuranceProducts from '@/components/caravan-insurance-products'
import CaravanInsuranceFeatures from '@/components/caravan-insurance-features'
import CaravanInsuranceCTA from '@/components/caravan-insurance-cta'
import Footer from '@/components/footer'

export default function CaravanInsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CaravanInsuranceHero />
      <CaravanInsuranceProducts />
      <CaravanInsuranceFeatures />
      <CaravanInsuranceCTA />
      <Footer />
    </main>
  )
}
