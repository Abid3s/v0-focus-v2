'use client'

import { Shield, Users, Zap, Building, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    icon: Shield,
    title: 'Professional Indemnity Insurance',
    description: 'Essential protection against claims of professional negligence, errors, or omissions in your professional services.',
    features: [
      'Legal defence costs covered',
      'Compensation claims protection',
      'Regulatory investigation support',
      'Retroactive cover available'
    ],
    benefits: [
      'Peace of mind for professional practice',
      'Client confidence enhancement',
      'Regulatory compliance support',
      'Business reputation protection'
    ],
    considerations: [
      'Policy limits vary by profession',
      'Excess levels apply to claims',
      'Some exclusions may apply'
    ],
    href: '/quote?product=professional-indemnity'
  },
  {
    icon: Users,
    title: 'Medical Malpractice Insurance',
    description: 'Specialist cover for healthcare professionals against claims of medical negligence or malpractice.',
    features: [
      'Clinical negligence protection',
      'Legal representation included',
      'Disciplinary hearing support',
      'Worldwide emergency cover'
    ],
    benefits: [
      'Comprehensive healthcare protection',
      'Expert legal support',
      'Career protection',
      'Patient safety assurance'
    ],
    considerations: [
      'Specialty-specific underwriting',
      'Claims history affects premiums',
      'Notification requirements apply'
    ],
    href: '/quote?product=medical-malpractice'
  },
  {
    icon: Zap,
    title: 'Cyber Liability Insurance',
    description: 'Protection against cyber attacks, data breaches, and digital security incidents affecting your practice.',
    features: [
      'Data breach response cover',
      'Cyber extortion protection',
      'Business interruption cover',
      'Regulatory fine coverage'
    ],
    benefits: [
      'Digital risk mitigation',
      'GDPR compliance support',
      'Business continuity protection',
      'Reputation management'
    ],
    considerations: [
      'Security measures required',
      'Notification timeframes critical',
      'Coverage limits apply'
    ],
    href: '/quote?product=cyber-liability'
  },
  {
    icon: Building,
    title: 'Equipment Breakdown Cover',
    description: 'Protection for essential medical and office equipment against mechanical and electrical breakdown.',
    features: [
      'Repair and replacement costs',
      'Temporary equipment hire',
      'Loss of income cover',
      '24/7 emergency response'
    ],
    benefits: [
      'Minimised business disruption',
      'Cost-effective equipment protection',
      'Rapid response service',
      'Income protection'
    ],
    considerations: [
      'Equipment age restrictions',
      'Maintenance requirements',
      'Excess payments apply'
    ],
    href: '/quote?product=equipment-breakdown'
  },
  {
    icon: AlertTriangle,
    title: 'Public Liability Insurance',
    description: 'Essential cover against claims from patients, visitors, or third parties for injury or property damage.',
    features: [
      'Third party injury claims',
      'Property damage protection',
      'Legal defence costs',
      'Worldwide cover available'
    ],
    benefits: [
      'Patient and visitor protection',
      'Legal cost coverage',
      'Business continuity',
      'Regulatory compliance'
    ],
    considerations: [
      'Policy limits selection important',
      'Some activities excluded',
      'Excess levels vary'
    ],
    href: '/quote?product=public-liability'
  },
  {
    icon: Shield,
    title: 'Business Interruption Insurance',
    description: 'Financial protection when your practice cannot operate due to insured events or circumstances.',
    features: [
      'Lost income compensation',
      'Increased cost of working',
      'Alternative premises costs',
      'Professional fees cover'
    ],
    benefits: [
      'Financial stability maintenance',
      'Business recovery support',
      'Staff salary protection',
      'Overhead cost coverage'
    ],
    considerations: [
      'Indemnity period limits',
      'Proof of loss required',
      'Some causes excluded'
    ],
    href: '/quote?product=business-interruption'
  }
]

export default function OfficeSurgeryProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001d3d] mb-6">
            Office & Surgery Insurance Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive insurance solutions designed specifically for healthcare professionals, 
            medical practices, and office-based businesses across the UK.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#F61F41]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#001d3d]">{product.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#001d3d] mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#001d3d] mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Considerations */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#001d3d] mb-3">Considerations:</h4>
                    <ul className="space-y-2">
                      {product.considerations.map((consideration, considerationIndex) => (
                        <li key={considerationIndex} className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center w-full bg-[#F61F41] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#d91635] transition-colors duration-200 group"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
            *All insurance products are subject to underwriting criteria, terms and conditions. 
            Cover availability and premiums depend on individual circumstances and risk assessment. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </section>
  )
}
