import Navigation from '@/components/navigation'
import HouseholdInsuranceHero from '@/components/household-insurance-hero'
import HouseholdInsuranceProducts from '@/components/household-insurance-products'
import HouseholdInsuranceFeatures from '@/components/household-insurance-features'
import HouseholdInsuranceCTA from '@/components/household-insurance-cta'
import Footer from '@/components/footer'

export default function HouseholdInsurancePage() {
  return (
    <main>
      <Navigation />
      <HouseholdInsuranceHero />
      <HouseholdInsuranceProducts />
      <HouseholdInsuranceFeatures />
      <HouseholdInsuranceCTA />
      <Footer />
    </main>
  )
}
