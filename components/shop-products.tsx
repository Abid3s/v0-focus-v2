'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Users, Package, Zap, Building, Laptop, AlertTriangle, CheckCircle } from 'lucide-react'

const products = [
  {
    icon: Users,
    title: "Public Liability Insurance",
    description: "Essential protection against claims from customers and members of the public",
    features: [
      "Customer injury claims",
      "Property damage cover",
      "Legal defence costs",
      "Up to £10 million cover"
    ],
    benefits: [
      "Protects against customer accidents",
      "Covers legal representation",
      "Peace of mind for daily operations"
    ],
    considerations: [
      "Cover limits vary by business type",
      "Exclusions may apply to certain activities",
      "Premium based on risk assessment"
    ],
    popular: true
  },
  {
    icon: Package,
    title: "Stock & Contents Insurance",
    description: "Comprehensive protection for your shop's stock, fixtures, and equipment",
    features: [
      "Stock protection",
      "Fixtures and fittings",
      "Equipment cover",
      "Theft and damage protection"
    ],
    benefits: [
      "Protects your investment",
      "Quick replacement of stolen items",
      "Business continuity support"
    ],
    considerations: [
      "Accurate valuation required",
      "Security requirements may apply",
      "Seasonal stock variations considered"
    ]
  },
  {
    icon: Shield,
    title: "Product Liability Insurance",
    description: "Protection against claims arising from products sold in your shop",
    features: [
      "Defective product claims",
      "Consumer injury protection",
      "Recall cost cover",
      "Legal defence included"
    ],
    benefits: [
      "Protects against product-related claims",
      "Covers recall expenses",
      "Maintains customer confidence"
    ],
    considerations: [
      "Product types affect premiums",
      "Manufacturing origin matters",
      "Documentation requirements apply"
    ]
  },
  {
    icon: Zap,
    title: "Business Interruption Insurance",
    description: "Financial protection when your shop cannot operate due to covered incidents",
    features: [
      "Lost revenue cover",
      "Fixed cost protection",
      "Alternative premises costs",
      "Professional fees included"
    ],
    benefits: [
      "Maintains cash flow during closure",
      "Covers ongoing expenses",
      "Supports business recovery"
    ],
    considerations: [
      "Indemnity period limits apply",
      "Accurate financial records required",
      "Some causes may be excluded"
    ]
  },
  {
    icon: Building,
    title: "Shop Front Insurance",
    description: "Specialist cover for your shop's frontage, signage, and external features",
    features: [
      "Window and door protection",
      "Signage cover",
      "Awning protection",
      "Vandalism cover"
    ],
    benefits: [
      "Protects your shop's appearance",
      "Quick repair arrangements",
      "Maintains professional image"
    ],
    considerations: [
      "Location affects risk assessment",
      "Security measures may be required",
      "Age and condition considered"
    ]
  },
  {
    icon: Laptop,
    title: "Cyber Liability Insurance",
    description: "Modern protection against cyber threats and data breaches affecting your shop",
    features: [
      "Data breach response",
      "Cyber attack recovery",
      "Customer notification costs",
      "Regulatory fine protection"
    ],
    benefits: [
      "Protects customer data",
      "Covers recovery costs",
      "Regulatory compliance support"
    ],
    considerations: [
      "IT security measures required",
      "Staff training may be mandated",
      "Regular updates needed"
    ]
  }
]

export default function ShopProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Shop Insurance Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Protect every aspect of your retail business with our specialist shop insurance products, designed specifically for UK retailers and high street businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="relative h-full hover:shadow-lg transition-shadow duration-300">
              {product.popular && (
                <Badge className="absolute -top-2 left-4 bg-red-600 text-white">
                  Essential Cover
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <product.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Considerations */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Considerations
                  </h4>
                  <ul className="space-y-2">
                    {product.considerations.map((consideration, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            *All insurance products are subject to underwriting criteria, terms and conditions. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </section>
  )
}
