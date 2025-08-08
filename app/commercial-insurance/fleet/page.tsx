import Navigation from '@/components/navigation'
import FleetInsuranceHero from '@/components/fleet-insurance-hero'
import FleetInsuranceProducts from '@/components/fleet-insurance-products'
import FleetInsuranceFeatures from '@/components/fleet-insurance-features'
import FleetInsuranceFAQ from '@/components/fleet-insurance-faq'
import FleetInsuranceCTA from '@/components/fleet-insurance-cta'
import Footer from '@/components/footer'

export default function FleetInsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <FleetInsuranceHero />
      <FleetInsuranceProducts />
      <FleetInsuranceFeatures />
      <FleetInsuranceFAQ />
      <FleetInsuranceCTA />
      <Footer />
    </main>
  )
}
