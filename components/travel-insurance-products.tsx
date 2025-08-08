'use client'

import { Plane, Calendar, Mountain, Ship, MountainSnowIcon as Ski, Camera, Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const products = [
  {
    title: 'Single Trip Insurance',
    icon: Plane,
    description: 'Comprehensive cover for individual trips up to 365 days',
    features: [
      'Medical expenses up to £10 million',
      'Trip cancellation and curtailment',
      'Personal belongings and baggage',
      'Travel delay compensation',
      '24/7 emergency assistance',
      'Personal liability cover'
    ],
    considerations: [
      'Cover levels vary by destination',
      'Pre-existing medical conditions may require declaration',
      'Age restrictions may apply for certain activities'
    ],
    suitableFor: 'Ideal for occasional travellers taking one-off trips',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Annual Multi-Trip Insurance',
    icon: Calendar,
    description: 'Year-round protection for frequent travellers with unlimited trips',
    features: [
      'Unlimited trips throughout the year',
      'Worldwide or European cover options',
      'Business and leisure travel included',
      'Family policies available',
      'Automatic renewal options',
      'Enhanced baggage limits'
    ],
    considerations: [
      'Individual trip duration limits apply',
      'May not be cost-effective for infrequent travellers',
      'Certain high-risk activities may be excluded'
    ],
    suitableFor: 'Perfect for regular travellers taking multiple trips per year',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Specialist Travel Insurance',
    icon: Mountain,
    description: 'Tailored cover for adventure, winter sports, cruise, and specialist travel',
    features: [
      'Winter sports and skiing cover',
      'Adventure activities protection',
      'Cruise-specific benefits',
      'Golf and equipment cover',
      'Wedding and event travel',
      'Extended age cover available'
    ],
    considerations: [
      'Activity-specific terms and conditions apply',
      'Higher premiums for increased risk activities',
      'Equipment cover limits may apply'
    ],
    suitableFor: 'Designed for travellers with specific activity or coverage needs',
    color: 'bg-purple-50 border-purple-200'
  }
]

export default function TravelInsuranceProducts() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F61F41]/10 rounded-lg px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-[#F61F41] mr-2" />
            <span className="text-sm font-medium text-[#F61F41]">Travel Insurance Products</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the Right Travel Cover for Your Journey
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of travel insurance products to suit different travel patterns and requirements. All policies are subject to terms, conditions, and exclusions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card key={product.title} className={`${product.color} border-2 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-[#F61F41]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important Considerations */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                      Important Considerations
                    </h4>
                    <ul className="space-y-2">
                      {product.considerations.map((consideration, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Suitable For:</h4>
                    <p className="text-sm text-gray-700">{product.suitableFor}</p>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="https://focusinsurance.b2ctravel.co.uk/quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#F61F41] hover:bg-[#d91736] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Plane className="mr-2 w-4 h-4" />
                      Get Quote & Buy Online
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-[#F61F41] mr-2" />
                Important Information
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  All policies are subject to terms, conditions, and exclusions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Pre-existing medical conditions must be declared
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Cover levels and premiums vary by destination and age
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  24/7 emergency assistance included with all policies
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                Before You Buy
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  Read the policy wording and key facts document carefully
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  Ensure the cover meets your specific travel needs
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  Check if your activities are covered under the policy
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  Consider if you need additional cover for valuable items
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
