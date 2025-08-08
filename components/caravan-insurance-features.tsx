'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Clock, Award, Phone, CheckCircle, Star, Headphones } from 'lucide-react'

export default function CaravanInsuranceFeatures() {
  const features = [
    {
      icon: Shield,
      title: "FCA Regulated Service",
      description: "Authorised and regulated by the Financial Conduct Authority, ensuring professional standards and consumer protection."
    },
    {
      icon: Users,
      title: "Caravan Specialists",
      description: "Dedicated team of caravan insurance specialists with extensive knowledge of touring and static caravan cover."
    },
    {
      icon: Clock,
      title: "24/7 Claims Support",
      description: "Round-the-clock claims helpline and emergency assistance for when you need support most during your travels."
    },
    {
      icon: Award,
      title: "Competitive Premiums",
      description: "Access to competitive caravan insurance rates from leading UK insurers, with flexible payment options available."
    },
    {
      icon: Phone,
      title: "Personal Service",
      description: "Direct access to experienced advisers who understand your caravan insurance needs and provide tailored solutions."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Comprehensive support throughout your policy term, including mid-term adjustments and renewal assistance."
    }
  ]

  const stats = [
    { number: "8,000+", label: "Caravans Protected", icon: Shield },
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "4.7/5", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "Claims Support", icon: Clock }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Focus Insurance for Caravan Cover?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialist caravan insurance expertise with professional service standards and comprehensive support for UK caravan owners.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#F61F41] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#F61F41]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regulatory Information */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Professional Standards & Regulatory Compliance
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  FCA Authorisation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                  We adhere to strict professional standards and regulatory requirements to ensure fair treatment of customers.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Consumer Protection
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All customers benefit from Financial Services Compensation Scheme protection and access to the 
                  Financial Ombudsman Service for complaint resolution, providing additional peace of mind.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                This information is for general guidance only and does not constitute advice or a personal recommendation. 
                Terms and conditions apply to all insurance products. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
