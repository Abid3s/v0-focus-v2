'use client'

import { Shield, Clock, Globe, Phone, Award, Users, CheckCircle, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated Service',
    description: 'Focus Insurance Services is authorised and regulated by the Financial Conduct Authority, ensuring you receive professional, compliant advice and service.',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: Globe,
    title: 'Comprehensive Worldwide Cover',
    description: 'Travel with confidence knowing you have access to worldwide cover options, including Europe, USA, and worldwide destinations.',
    color: 'bg-green-50 border-green-200'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Assistance',
    description: 'Round-the-clock emergency assistance and claims support, ensuring help is available whenever and wherever you need it.',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    icon: Users,
    title: 'Expert Personal Service',
    description: 'Our experienced team provides personalised advice to help you choose the right travel insurance for your specific needs and circumstances.',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    icon: Award,
    title: 'Trusted Insurance Partners',
    description: 'We work with leading UK insurers and Sunworld Travel to provide competitive rates and comprehensive cover options.',
    color: 'bg-red-50 border-red-200'
  },
  {
    icon: Phone,
    title: 'Local Peterborough Service',
    description: 'Based in Peterborough, we provide local, accessible service with the expertise of a specialist insurance broker.',
    color: 'bg-teal-50 border-teal-200'
  }
]

const stats = [
  { number: '25+', label: 'Years Experience', icon: Award },
  { number: '10,000+', label: 'Customers Protected', icon: Users },
  { number: '24/7', label: 'Emergency Support', icon: Clock },
  { number: '100%', label: 'FCA Compliant', icon: Shield }
]

export default function TravelInsuranceFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F61F41]/10 rounded-lg px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#F61F41] mr-2" />
            <span className="text-sm font-medium text-[#F61F41]">Why Choose Focus Insurance</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Travel Insurance Partner
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 25 years of experience, Focus Insurance Services provides expert travel insurance advice and comprehensive cover options through our partnership with leading UK insurers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-[#F61F41]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#F61F41]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={feature.title} className={`${feature.color} border-2 rounded-lg hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#F61F41]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                FCA Regulated & Professional Standards
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Authorised and regulated by the Financial Conduct Authority</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Professional indemnity insurance in place</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Client money protection scheme member</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Comprehensive complaints procedure available</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm">
                <div className="mr-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">Trusted by thousands of customers</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-sm text-gray-300">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
