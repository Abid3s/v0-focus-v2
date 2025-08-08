'use client'

import { Shield, Users, Clock, Award, CheckCircle, Star, Phone, ArrowRight, Car, Crown, Briefcase, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated',
    description: 'Authorised and regulated by the Financial Conduct Authority for your protection and peace of mind.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Expert Advisors',
    description: 'Specialist taxi insurance advisors with deep knowledge of the industry and regulatory requirements.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Clock,
    title: 'Quick Quotes',
    description: 'Fast, competitive quotes with same-day cover available for urgent requirements.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Award-winning service with high customer satisfaction ratings and industry accreditations.',
    color: 'bg-orange-100 text-orange-600'
  }
]

const advantages = [
  {
    title: 'Comprehensive Cover Options',
    description: 'From basic third-party to comprehensive policies with additional benefits tailored to taxi operations.',
    benefits: ['Public liability up to £6 million', 'Vehicle comprehensive cover', 'Personal accident benefits']
  },
  {
    title: 'Regulatory Compliance',
    description: 'Policies designed to meet local authority licensing requirements across the UK.',
    benefits: ['Local authority approved', 'Certificate provision', 'Compliance support']
  },
  {
    title: 'Claims Support',
    description: '24/7 claims reporting with dedicated taxi insurance claims specialists.',
    benefits: ['24/7 claims line', 'Specialist handlers', 'Fast settlement']
  }
]

const coverageTypes = [
  {
    icon: Car,
    title: 'Hackney Carriage',
    description: 'Licensed black cabs with plying for hire rights',
    features: ['Street hailing permitted', 'Taxi rank access', 'Metropolitan licensing']
  },
  {
    icon: Users,
    title: 'Private Hire',
    description: 'Pre-booked minicabs and PHVs',
    features: ['Operator licensing', 'Pre-booking required', 'Local authority regulation']
  },
  {
    icon: Crown,
    title: 'Executive Cars',
    description: 'Premium chauffeur services',
    features: ['Luxury vehicles', 'Enhanced service', 'Corporate clients']
  },
  {
    icon: Briefcase,
    title: 'Fleet Operations',
    description: 'Multi-vehicle taxi businesses',
    features: ['Volume discounts', 'Fleet management', 'Consolidated billing']
  }
]

export default function TaxiInsuranceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why Choose Focus Insurance for
            <span className="block text-[#F61F41] mt-2">Taxi Insurance?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional taxi insurance services with specialist knowledge, competitive rates, and comprehensive cover options designed for the UK taxi industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#F61F41]/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Focus Insurance Advantages
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of choosing Focus Insurance Services for your taxi insurance needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                <ul className="space-y-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Taxi Insurance Coverage Types
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different types of taxi operations and their specific insurance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#F61F41]/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#F61F41]" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F61F41] rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* FCA Compliance Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  FCA Regulated Taxi Insurance Services
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
                  We are committed to treating customers fairly and providing clear, accurate information about our taxi insurance products. 
                  All policies are subject to underwriting criteria, terms, conditions, and exclusions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Our Regulatory Commitments</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Clear and fair product information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Transparent pricing and terms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Professional advice and guidance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Complaints handling procedures</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Customer Protection</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Professional indemnity insurance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Client money protection</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Financial Services Compensation Scheme</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Data protection compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Important:</strong> The information provided on this website is for guidance purposes only and does not constitute advice or recommendation. 
                    Taxi insurance policies vary between insurers and individual circumstances. Terms, conditions, exclusions, and cover limits apply to all policies. 
                    We recommend that you read all policy documentation carefully and ensure that any policy meets your specific requirements and local authority licensing conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
