import Navigation from '@/components/navigation'
import ShopHero from '@/components/shop-hero'
import ShopProducts from '@/components/shop-products'
import ShopFeatures from '@/components/shop-features'
import ShopCTA from '@/components/shop-cta'
import Footer from '@/components/footer'

export default function ShopInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ShopHero />
      <ShopProducts />
      <ShopFeatures />
      <ShopCTA />
      <Footer />
    </div>
  )
}
