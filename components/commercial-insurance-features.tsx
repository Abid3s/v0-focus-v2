'use client'

import { Shield, Clock, Users, Award, Phone, CheckCircle, Star, TrendingUp, Building2, FileText, Briefcase, Target } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated Service',
    description: 'Fully authorised and regulated by the Financial Conduct Authority, ensuring professional standards and client protection.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Users,
    title: 'Expert Commercial Team',
    description: 'Dedicated commercial insurance specialists with extensive industry knowledge and business sector expertise.',
    color: 'from-[#F61F41] to-[#e91e63]'
  },
  {
    icon: Building2,
    title: 'Business Risk Assessment',
    description: 'Comprehensive risk evaluation and tailored insurance solutions designed to protect your specific business operations.',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Recognised for excellence in commercial insurance services and commitment to client satisfaction and support.',
    color: 'from-purple-600 to-purple-700'
  }
]

const whyChooseUs = [
  {
    title: 'Independent Broker Status',
    description: 'As an independent broker, we work in your best interests, providing impartial advice and access to competitive market rates.',
    icon: CheckCircle
  },
  {
    title: 'Competitive Premium Rates',
    description: 'Access to leading commercial insurers enables us to secure competitive premium rates subject to underwriting criteria.',
    icon: TrendingUp
  },
  {
    title: 'Dedicated Account Management',
    description: 'Every commercial client receives dedicated account management with personalised service and ongoing support.',
    icon: Users
  },
  {
    title: 'Claims Support Excellence',
    description: 'Professional claims handling service to support you through every step of the claims process when you need it most.',
    icon: Star
  },
  {
    title: 'Risk Management Advice',
    description: 'Proactive risk management guidance to help reduce your business exposure and potentially lower insurance costs.',
    icon: Target
  },
  {
    title: 'Regulatory Compliance',
    description: 'Expert guidance on insurance requirements and regulatory compliance across different business sectors and industries.',
    icon: FileText
  }
]

const businessSectors = [
  {
    title: 'Manufacturing & Industrial',
    description: 'Specialist cover for manufacturing operations, industrial processes, and production facilities.',
    icon: Building2
  },
  {
    title: 'Professional Services',
    description: 'Tailored insurance solutions for consultants, advisors, and professional service providers.',
    icon: Briefcase
  },
  {
    title: 'Retail & Hospitality',
    description: 'Comprehensive cover for shops, restaurants, hotels, and customer-facing businesses.',
    icon: Users
  },
  {
    title: 'Transport & Logistics',
    description: 'Specialist insurance for haulage, courier services, and logistics operations.',
    icon: TrendingUp
  }
]

export default function CommercialInsuranceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Focus Insurance for
              <span className="block text-[#F61F41] mt-2">Commercial Cover?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine commercial insurance expertise with personalised service to deliver exceptional business protection solutions
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

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 lg:p-16 border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Focus Insurance Commercial Advantage
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with a trusted independent commercial insurance broker
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
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

        {/* Business Sectors */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Business Sectors We Serve
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our commercial insurance expertise spans across multiple business sectors and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {businessSectors.map((sector, index) => {
            const IconComponent = sector.icon
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
                  {sector.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* FCA Compliance Notice */}
        <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-yellow-400 mr-3" />
            <h4 className="text-2xl font-bold">FCA Regulated & Compliant</h4>
          </div>
          <p className="text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
            All commercial insurance products are subject to underwriting criteria, terms and conditions. 
            We are committed to treating customers fairly and providing clear, transparent information to help you make informed decisions about your business insurance needs.
          </p>
          <div className="mt-6 text-sm text-blue-200">
            <p>Professional indemnity insurance and client money protection in place. Complaints procedure available on request.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
