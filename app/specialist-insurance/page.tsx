import Navigation from '@/components/navigation'
import SpecialistInsuranceHero from '@/components/specialist-insurance-hero'
import SpecialistInsuranceProducts from '@/components/specialist-insurance-products'
import SpecialistInsuranceFeatures from '@/components/specialist-insurance-features'
import SpecialistInsuranceCTA from '@/components/specialist-insurance-cta'
import Footer from '@/components/footer'

export default function SpecialistInsurancePage() {
  return (
    <main>
      <Navigation />
      <SpecialistInsuranceHero />
      <SpecialistInsuranceProducts />
      <SpecialistInsuranceFeatures />
      <SpecialistInsuranceCTA />
      <Footer />
    </main>
  )
}
