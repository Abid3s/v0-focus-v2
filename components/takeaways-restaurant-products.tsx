'use client'

import { Shield, Utensils, Zap, Building, Users, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
  {
    icon: Shield,
    title: 'Public Liability Insurance',
    description: 'Essential protection against third-party injury or property damage claims in your restaurant or takeaway premises.',
    features: [
      'Customer injury protection',
      'Property damage cover',
      'Legal defence costs',
      'Up to £10 million cover available'
    ],
    benefits: [
      'Peace of mind for daily operations',
      'Protection against costly claims',
      'Professional legal support'
    ],
    considerations: [
      'Cover levels vary by business size',
      'Exclusions may apply to certain activities',
      'Premium based on risk assessment'
    ]
  },
  {
    icon: Utensils,
    title: 'Product Liability Insurance',
    description: 'Specialist cover for food poisoning claims and product-related incidents affecting your customers.',
    features: [
      'Food poisoning protection',
      'Contamination cover',
      'Product recall expenses',
      'Legal defence and compensation'
    ],
    benefits: [
      'Protects your business reputation',
      'Covers investigation costs',
      'Supports business continuity'
    ],
    considerations: [
      'Food safety standards must be maintained',
      'Cover subject to hygiene compliance',
      'Waiting periods may apply'
    ]
  },
  {
    icon: Zap,
    title: 'Equipment Breakdown Cover',
    description: 'Protection for essential kitchen equipment including refrigeration, cooking appliances, and electrical systems.',
    features: [
      'Kitchen equipment protection',
      'Refrigeration breakdown cover',
      'Emergency repair costs',
      'Temporary replacement equipment'
    ],
    benefits: [
      'Minimises business disruption',
      'Covers repair and replacement costs',
      '24/7 emergency support available'
    ],
    considerations: [
      'Equipment age restrictions may apply',
      'Regular maintenance required',
      'Excess payments apply to claims'
    ]
  },
  {
    icon: Building,
    title: 'Business Interruption Insurance',
    description: 'Financial protection when your restaurant or takeaway cannot operate due to covered incidents.',
    features: [
      'Lost revenue protection',
      'Fixed cost coverage',
      'Alternative premises costs',
      'Staff wage protection'
    ],
    benefits: [
      'Maintains cash flow during closure',
      'Covers ongoing business expenses',
      'Supports business recovery'
    ],
    considerations: [
      'Indemnity period limits apply',
      'Proof of loss required',
      'Some causes may be excluded'
    ]
  },
  {
    icon: Users,
    title: 'Employers Liability Insurance',
    description: 'Legally required protection for businesses with employees, covering workplace injury and illness claims.',
    features: [
      'Employee injury protection',
      'Occupational illness cover',
      'Legal defence costs',
      'Minimum £5 million cover'
    ],
    benefits: [
      'Legal compliance assured',
      'Employee welfare protection',
      'Comprehensive legal support'
    ],
    considerations: [
      'Mandatory for most employers',
      'Health and safety compliance required',
      'Certificate must be displayed'
    ]
  },
  {
    icon: FileText,
    title: 'Contents Insurance',
    description: 'Protection for your restaurant fixtures, fittings, stock, and equipment against theft, fire, and damage.',
    features: [
      'Stock and inventory cover',
      'Fixtures and fittings protection',
      'Theft and burglary cover',
      'Fire and flood protection'
    ],
    benefits: [
      'Protects business assets',
      'Covers replacement costs',
      'Supports rapid recovery'
    ],
    considerations: [
      'Accurate valuations required',
      'Security requirements may apply',
      'Excess payments on claims'
    ]
  }
]

export default function TakeawaysRestaurantProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001d3d] mb-4">
            Restaurant & Takeaway Insurance Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions designed specifically for the hospitality industry. 
            Protect your restaurant or takeaway business with our specialist cover options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#F61F41]">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-[#F61F41]" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#001d3d] mb-1">{product.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#001d3d] mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-[#F61F41]" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#F61F41] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-700 mb-2">Important Considerations</h4>
                    <ul className="space-y-1">
                      {product.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            All insurance products are subject to underwriting criteria, terms, conditions, and exclusions. 
            Cover details and premiums will vary based on your specific business requirements and risk profile. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </section>
  )
}
