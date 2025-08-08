'use client'

import { Shield, Building2, Award, ArrowRight, CheckCircle, Users, TrendingUp, Star, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const productCategories = [
  {
    id: 'personal',
    title: 'Personal Insurance',
    subtitle: 'Protect what matters most to you',
    description: 'Protect your home, belongings, and lifestyle with tailored personal insurance that fits your budget.',
    icon: Shield,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    products: [
      { name: 'Household Insurance', description: 'Complete home and contents protection' },
      { name: 'Caravan Insurance', description: 'Specialist caravan and motorhome cover' },
      { name: 'Travel Insurance', description: 'Worldwide travel protection plans' },
    ],
    href: '/personal-insurance'
  },
  {
    id: 'commercial',
    title: 'Commercial Insurance',
    subtitle: 'Comprehensive business protection',
    description: 'Safeguard your business with comprehensive commercial insurance designed for modern enterprises.',
    icon: Building2,
    color: 'from-[#F61F41] to-[#e91e63]',
    hoverColor: 'hover:from-[#d91736] hover:to-[#c2185b]',
    products: [
      { name: 'Commercial Vehicle', description: 'Fleet and vehicle protection' },
      { name: 'Professional Indemnity', description: 'Professional liability cover' },
      { name: 'Commercial Property', description: 'Business premises protection' },
      { name: 'Public Liability', description: 'Third party protection' },
    ],
    href: '/commercial-insurance'
  },
  {
    id: 'specialist',
    title: 'Specialist Insurance',
    subtitle: 'Expert solutions for unique needs',
    description: 'Expert cover for unique risks that standard policies can\'t handle.',
    icon: Award,
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'hover:from-purple-700 hover:to-purple-800',
    products: [
      { name: 'Cyber Cover', description: 'Digital security and data protection' },
      { name: 'Unoccupied Property', description: 'Empty property protection' },
      { name: 'Medical Malpractice', description: 'Healthcare professional cover' },
    ],
    href: '/specialist-insurance'
  }
]

const features = [
  {
    icon: CheckCircle,
    title: 'FCA Regulated',
    description: 'Fully authorised and regulated by the Financial Conduct Authority'
  },
  {
    icon: Users,
    title: 'Expert Advisors',
    description: 'Experienced insurance professionals providing personalised guidance'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Rates',
    description: 'Access to leading insurers ensuring the best value for money'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock claims support and customer service'
  }
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-6">
            <Shield className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm">Our Insurance Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Cover for
            <span className="block text-[#F61F41] mt-2">Every Need</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From personal protection to complex commercial risks, we provide expert insurance solutions tailored to your unique requirements.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#F61F41]/20 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <IconComponent className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.subtitle}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Product List */}
                  <div className="space-y-3 mb-8">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                          <p className="text-gray-600 text-xs">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={category.href}>
                    <Button className={`w-full bg-gradient-to-r ${category.color} ${category.hoverColor} text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Focus Insurance?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine industry expertise with personalised service to deliver exceptional insurance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F61F41] to-[#e91e63] rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F61F41] transition-colors duration-200">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-lg p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Protected?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a personalised quote in minutes from our expert team
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Your Quote
                </Button>
                
                <Link href="/contact">
                  <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
