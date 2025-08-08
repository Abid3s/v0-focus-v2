import Navigation from '@/components/navigation'
import CommercialVehicleHero from '@/components/commercial-vehicle-hero'
import CommercialVehicleProducts from '@/components/commercial-vehicle-products'
import CommercialVehicleFeatures from '@/components/commercial-vehicle-features'
import CommercialVehicleCTA from '@/components/commercial-vehicle-cta'
import Footer from '@/components/footer'

export default function CommercialVehiclePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CommercialVehicleHero />
      <CommercialVehicleProducts />
      <CommercialVehicleFeatures />
      <CommercialVehicleCTA />
      <Footer />
    </main>
  )
}
