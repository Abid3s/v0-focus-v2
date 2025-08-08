import Navigation from '@/components/navigation'
import PersonalInsuranceHero from '@/components/personal-insurance-hero'
import PersonalInsuranceProducts from '@/components/personal-insurance-products'
import PersonalInsuranceFeatures from '@/components/personal-insurance-features'
import PersonalInsuranceCTA from '@/components/personal-insurance-cta'
import Footer from '@/components/footer'

export default function PersonalInsurancePage() {
  return (
    <main>
      <Navigation />
      <PersonalInsuranceHero />
      <PersonalInsuranceProducts />
      <PersonalInsuranceFeatures />
      <PersonalInsuranceCTA />
      <Footer />
    </main>
  )
}
