import Navigation from '@/components/navigation'
import TaxiInsuranceHero from '@/components/taxi-insurance-hero'
import TaxiInsuranceProducts from '@/components/taxi-insurance-products'
import TaxiInsuranceFeatures from '@/components/taxi-insurance-features'
import TaxiInsuranceCTA from '@/components/taxi-insurance-cta'
import Footer from '@/components/footer'

export default function TaxiInsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <TaxiInsuranceHero />
      <TaxiInsuranceProducts />
      <TaxiInsuranceFeatures />
      <TaxiInsuranceCTA />
      <Footer />
    </main>
  )
}
