import Navigation from '@/components/navigation'
import TravelInsuranceHero from '@/components/travel-insurance-hero'
import TravelInsuranceProducts from '@/components/travel-insurance-products'
import TravelInsuranceFeatures from '@/components/travel-insurance-features'
import TravelInsuranceCTA from '@/components/travel-insurance-cta'
import Footer from '@/components/footer'

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <TravelInsuranceHero />
      <TravelInsuranceProducts />
      <TravelInsuranceFeatures />
      <TravelInsuranceCTA />
      <Footer />
    </div>
  )
}
