'use client'

import { Shield, Clock, Users, Award, Phone, CheckCircle, Star, TrendingUp, Home, FileText, Target, Umbrella } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated Service',
    description: 'Fully authorised and regulated by the Financial Conduct Authority, ensuring professional standards and client protection for all household insurance services.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Users,
    title: 'Expert Home Insurance Advisors',
    description: 'Experienced household insurance specialists providing personalised guidance to help you choose the right buildings and contents cover for your needs.',
    color: 'from-[#F61F41] to-[#e91e63]'
  },
  {
    icon: Target,
    title: 'Tailored Cover Solutions',
    description: 'Bespoke household insurance policies designed to match your property type, location, and personal circumstances, subject to underwriting assessment.',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Recognised expertise in household insurance with established relationships with leading UK home insurance providers and competitive market access.',
    color: 'from-purple-600 to-purple-700'
  }
]

const householdAdvantages = [
  {
    title: 'Independent Broker Status',
    description: 'As an independent insurance broker, we work in your best interests, providing impartial advice and access to competitive household insurance rates from multiple insurers.',
    icon: CheckCircle
  },
  {
    title: 'Competitive Premium Rates',
    description: 'Access to leading home insurance providers enables us to secure competitive premium rates for buildings and contents cover, subject to underwriting criteria.',
    icon: TrendingUp
  },
  {
    title: 'Personal Service Approach',
    description: 'Every household insurance client receives individual attention with personalised service and ongoing support throughout the policy term.',
    icon: Users
  },
  {
    title: 'Claims Support Excellence',
    description: 'Professional claims handling support to guide you through the household insurance claims process when you need assistance most.',
    icon: Star
  },
  {
    title: 'Risk Assessment Expertise',
    description: 'Expert property risk assessment to ensure appropriate cover levels and help identify potential areas for premium savings where possible.',
    icon: Target
  },
  {
    title: 'Policy Review Service',
    description: 'Regular policy reviews to ensure your household insurance remains appropriate for your changing circumstances and property requirements.',
    icon: FileText
  }
]

const coverageTypes = [
  {
    title: 'Buildings Insurance',
    description: 'Essential protection for property owners covering the structure, permanent fixtures, and rebuilding costs.',
    icon: Home,
    features: ['Structural damage cover', 'Storm and flood protection*', 'Subsidence cover*', 'Alternative accommodation*']
  },
  {
    title: 'Contents Insurance',
    description: 'Comprehensive protection for personal belongings, furniture, and household items for owners and tenants.',
    icon: Umbrella,
    features: ['Personal belongings cover', 'Theft protection', 'Accidental damage*', 'Temporary removal cover']
  },
  {
    title: 'Personal Possessions',
    description: 'Extended cover for valuable items and personal effects both at home and away from the property.',
    icon: Shield,
    features: ['High-value items cover*', 'Worldwide protection*', 'New for old replacement*', 'No excess options*']
  },
  {
    title: 'Additional Protections',
    description: 'Enhanced cover options including legal expenses, home emergency assistance, and family protection.',
    icon: Star,
    features: ['Legal expenses cover*', 'Home emergency service*', 'Family legal protection*', 'Personal liability*']
  }
]

export default function HouseholdInsuranceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Focus Insurance for
              <span className="block text-[#F61F41] mt-2">Household Insurance?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine household insurance expertise with personalised service to deliver exceptional home protection solutions for UK property owners and tenants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group text-center"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F61F41] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Household Insurance Advantages */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 lg:p-16 border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Focus Insurance Household Advantage
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with independent household insurance specialists who understand UK property protection needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {householdAdvantages.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F61F41] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#F61F41] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#F61F41] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Coverage Types */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Household Insurance Coverage Options
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the different types of household insurance coverage available to protect your home and belongings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageTypes.map((coverage, index) => {
              const IconComponent = coverage.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#F61F41]/20 hover:shadow-lg transition-all duration-300 text-center group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F61F41] to-[#e91e63] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F61F41] transition-colors duration-200">
                    {coverage.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {coverage.description}
                  </p>
                  
                  <div className="space-y-2">
                    {coverage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FCA Compliance and Professional Standards */}
        <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-yellow-400 mr-4" />
                <h3 className="text-3xl lg:text-4xl font-bold">Professional Standards & Client Protection</h3>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
                  Our household insurance services adhere to the highest professional standards and regulatory requirements to ensure fair treatment of customers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Client Protection Measures
                    </h4>
                    <ul className="text-sm text-blue-100 space-y-2">
                      <li>• Professional indemnity insurance in place</li>
                      <li>• Client money protection scheme coverage</li>
                      <li>• FCA complaints procedure available</li>
                      <li>• Financial Services Compensation Scheme protection</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-3 flex items-center">
                      <FileText className="w-5 h-5 text-blue-400 mr-2" />
                      Regulatory Compliance
                    </h4>
                    <ul className="text-sm text-blue-100 space-y-2">
                      <li>• Clear, fair and not misleading communications</li>
                      <li>• Treating Customers Fairly principles</li>
                      <li>• Transparent fee and commission disclosure</li>
                      <li>• Regular regulatory monitoring and reporting</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-sm text-blue-200 bg-white/5 rounded-lg p-6">
                  <p className="leading-relaxed">
                    <strong>Important:</strong> Household insurance policies vary between insurers and may not be suitable for all properties or circumstances. 
                    We recommend carefully reviewing policy terms, conditions, and exclusions before making a decision. 
                    All household insurance products are subject to underwriting criteria and acceptance by insurers. 
                    This information does not constitute advice or a personal recommendation - we can provide guidance to help you make an informed choice.
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
