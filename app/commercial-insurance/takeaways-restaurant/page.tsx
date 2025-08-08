import { Metadata } from 'next'
import TakeawaysRestaurantHero from '@/components/takeaways-restaurant-hero'
import TakeawaysRestaurantProducts from '@/components/takeaways-restaurant-products'
import TakeawaysRestaurantFeatures from '@/components/takeaways-restaurant-features'
import TakeawaysRestaurantCTA from '@/components/takeaways-restaurant-cta'

export const metadata: Metadata = {
  title: 'Takeaway & Restaurant Insurance | Commercial Cover | Focus Insurance Services',
  description: 'Specialist takeaway and restaurant insurance covering public liability, product liability, equipment breakdown, and business interruption. FCA regulated broker with competitive rates.',
  keywords: 'takeaway insurance, restaurant insurance, hospitality insurance, food business insurance, public liability, product liability, equipment breakdown, business interruption, UK commercial insurance',
  openGraph: {
    title: 'Takeaway & Restaurant Insurance | Focus Insurance Services',
    description: 'Comprehensive insurance solutions for takeaways, restaurants, and food service businesses. Expert advice from FCA regulated brokers.',
    type: 'website',
  },
}

export default function TakeawaysRestaurantPage() {
  return (
    <main className="min-h-screen">
      <TakeawaysRestaurantHero />
      <TakeawaysRestaurantProducts />
      <TakeawaysRestaurantFeatures />
      <TakeawaysRestaurantCTA />
    </main>
  )
}
