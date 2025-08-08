'use client'

import { Home, Car, Plane, Heart, Umbrella, Shield, CheckCircle, ArrowRight, Star, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const personalInsuranceProducts = [
  {
    id: 'household',
    title: 'Household Insurance',
    subtitle: 'Complete home protection',
    description: 'Comprehensive cover for your home, contents, and personal belongings. Protect your most valuable asset with our tailored household insurance policies.',
    icon: Home,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    features: [
      'Buildings insurance from £15/month',
      'Contents cover up to £100,000',
      'Personal possessions worldwide',
      'Alternative accommodation',
      'Legal expenses included',
      '24/7 emergency helpline'
    ],
    benefits: [
      'New for old replacement',
      'No excess on certain claims',
      'Family legal protection',
      'Home emergency cover'
    ],
    href: '/personal-insurance/household',
    popular: true
  },
  {
    id: 'caravan',
    title: 'Caravan Insurance',
    subtitle: 'Adventure with peace of mind',
    description: 'Specialist caravan and motorhome insurance for touring and static caravans. Comprehensive cover for your home away from home.',
    icon: Umbrella,
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    features: [
      'Touring caravan cover from £12/month',
      'Static caravan protection',
      'Contents and equipment cover',
      'European touring cover',
      'Personal effects protection',
      'Awning and equipment cover'
    ],
    benefits: [
      'New for old replacement',
      'Emergency accommodation',
      'Recovery and repatriation',
      'Personal liability cover'
    ],
    href: '/personal-insurance/caravan',
    popular: false
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    subtitle: 'Explore the world safely',
    description: 'Comprehensive travel insurance for single trips, annual multi-trip, and specialist cover. Don\'t let unexpected events ruin your holiday.',
    icon: Plane,
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'hover:from-purple-700 hover:to-purple-800',
    features: [
      'Single trip from £8',
      'Annual multi-trip cover',
      'Medical expenses up to £10m',
      'Cancellation protection',
      'Baggage and personal effects',
      'Winter sports cover available'
    ],
    benefits: [
      'Pre-existing medical conditions',
      'Business travel cover',
      'Adventure sports options',
      '24/7 emergency assistance'
    ],
    href: '/personal-insurance/travel',
    popular: false
  },
]

function ProductCard({ product, index }) {
  const IconComponent = product.icon

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#F61F41]/20 transform hover:-translate-y-2 relative"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#F61F41] shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Most Popular
          </span>
        </div>
      )}

      {/* Card Header */}
      <div className={`bg-gradient-to-r ${product.color} p-8 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <IconComponent className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
          <p className="text-white/90 text-sm">{product.subtitle}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            Key Features
          </h4>
          <div className="space-y-2">
            {product.features.slice(0, 4).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 text-[#F61F41] mr-2" />
            Additional Benefits
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {product.benefits.slice(0, 2).map((benefit, benefitIndex) => (
              <div key={benefitIndex} className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-[#F61F41] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link href={product.href}>
            <Button className={`w-full bg-gradient-to-r ${product.color} ${product.hoverColor} text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105`}>
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
          
          <Button className="w-full bg-transparent border-2 border-gray-200 hover:border-[#F61F41] hover:text-[#F61F41] text-gray-700 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function PersonalInsuranceProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">Personal Insurance Products</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Complete Protection for
            <span className="block text-[#F61F41] mt-2">Your Personal Life</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of personal insurance products designed to protect you, your family, and your possessions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInsuranceProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Help Choosing the Right Cover?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our expert advisors are here to help you find the perfect personal insurance solution
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Expert Advice
                </Button>
                
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Multiple Quotes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
