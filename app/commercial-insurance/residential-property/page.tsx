import Navigation from '@/components/navigation'
import ResidentialPropertyHero from '@/components/residential-property-hero'
import ResidentialPropertyProducts from '@/components/residential-property-products'
import ResidentialPropertyFeatures from '@/components/residential-property-features'
import ResidentialPropertyCTA from '@/components/residential-property-cta'
import Footer from '@/components/footer'

export default function ResidentialPropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ResidentialPropertyHero />
      <ResidentialPropertyProducts />
      <ResidentialPropertyFeatures />
      <ResidentialPropertyCTA />
      <Footer />
    </div>
  )
}
