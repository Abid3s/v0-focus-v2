'use client'

import { Shield, Home, Stethoscope, CheckCircle, ArrowRight, Star, Phone, AlertTriangle, Lock, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const specialistInsuranceProducts = [
  {
    id: 'cyber-cover',
    title: 'Cyber Cover',
    subtitle: 'Digital security and data protection',
    description: 'Comprehensive cyber liability insurance protecting against data breaches, cyber attacks, and digital risks. Cover options subject to business type, data handling practices, and security measures in place.',
    icon: Shield,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    features: [
      'Data breach response cover',
      'Cyber extortion protection',
      'Business interruption from cyber events*',
      'Regulatory investigation costs',
      'Third party liability cover',
      'Crisis management support'
    ],
    benefits: [
      'GDPR compliance support',
      '24/7 cyber incident helpline',
      'Forensic investigation services',
      'Reputation management assistance'
    ],
    riskFactors: [
      'Cover subject to security assessment',
      'Exclusions may apply for known vulnerabilities',
      'Regular security updates may be required'
    ],
    href: '/specialist-insurance/cyber-cover'
  },
  {
    id: 'unoccupied-property',
    title: 'Unoccupied Property',
    subtitle: 'Empty property protection',
    description: 'Specialist insurance for vacant, unoccupied, or renovation properties where standard home insurance may not provide adequate cover. Subject to property condition and security arrangements.',
    icon: Home,
    color: 'from-orange-600 to-orange-700',
    hoverColor: 'hover:from-orange-700 hover:to-orange-800',
    features: [
      'Buildings insurance for vacant properties',
      'Malicious damage cover',
      'Theft and vandalism protection',
      'Escape of water cover*',
      'Public liability insurance',
      'Alternative accommodation*'
    ],
    benefits: [
      'Flexible occupancy periods',
      'Renovation work cover options*',
      'Competitive rates for vacant properties*',
      'Risk management advice'
    ],
    riskFactors: [
      'Regular property inspections required',
      'Security measures must be maintained',
      'Utilities disconnection may be required'
    ],
    href: '/specialist-insurance/unoccupied-property'
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice Insurance',
    subtitle: 'Healthcare professional cover',
    description: 'Professional indemnity and medical malpractice insurance for healthcare practitioners, medical professionals, and healthcare facilities. Cover subject to professional qualifications and practice type.',
    icon: Stethoscope,
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    features: [
      'Professional indemnity cover',
      'Clinical negligence protection',
      'Regulatory investigation costs',
      'Legal defence expenses',
      'Disciplinary hearing cover',
      'Locum cover options*'
    ],
    benefits: [
      'Healthcare sector expertise',
      'Regulatory body approved cover',
      'Worldwide territorial cover*',
      'Retroactive cover options*'
    ],
    riskFactors: [
      'Subject to professional registration',
      'Practice type restrictions may apply',
      'Claims history affects premiums'
    ],
    href: '/specialist-insurance/medical-malpractice'
  }
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
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 text-[#F61F41] mr-2" />
            Benefits
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

        {/* Risk Factors */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
            Important Considerations
          </h4>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="space-y-2">
              {product.riskFactors.slice(0, 2).map((factor, factorIndex) => (
                <div key={factorIndex} className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-xs text-orange-700">{factor}</span>
                </div>
              ))}
            </div>
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
            Get Specialist Quote
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
          <p>*Subject to underwriting criteria and terms and conditions. Cover availability depends on risk assessment.</p>
        </div>
      </div>
    </div>
  )
}

export default function SpecialistInsuranceProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">Specialist Insurance Products</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Expert Solutions for
            <span className="block text-[#F61F41] mt-2">Complex Risks</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            When standard insurance policies cannot provide adequate protection, our specialist insurance solutions offer expert cover for unique and complex risks. Each product is carefully underwritten to meet specific requirements.
          </p>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="font-bold text-yellow-800 mb-2">Important Information</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  Specialist insurance products are subject to detailed underwriting assessment and may have specific terms, conditions, and exclusions. 
                  Cover availability and premium rates depend on individual risk factors and circumstances. 
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialistInsuranceProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Understanding Specialist Insurance
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialist insurance products are designed for unique risks that require expert underwriting and tailored coverage solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Underwriting</h4>
              <p className="text-gray-600 leading-relaxed">
                Each specialist policy undergoes detailed risk assessment by expert underwriters who understand complex and unique risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Bespoke Solutions</h4>
              <p className="text-gray-600 leading-relaxed">
                Tailored cover options designed to meet specific requirements that standard insurance policies cannot address adequately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Specialist Support</h4>
              <p className="text-gray-600 leading-relaxed">
                Dedicated specialist insurance advisors provide expert guidance throughout the application and claims process.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Specialist Insurance Advice?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our specialist insurance experts will assess your unique requirements and provide tailored solutions. 
                All quotes subject to detailed underwriting assessment and terms and conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Specialist Team
                </Button>
                
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Request Assessment
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-blue-200 space-y-2">
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All specialist insurance products subject to underwriting criteria, terms and conditions</p>
                <p>Professional indemnity insurance and client money protection in place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
