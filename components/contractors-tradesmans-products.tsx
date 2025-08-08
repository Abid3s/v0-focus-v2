'use client'

import { Shield, Wrench, FileText, Zap, Users, Building, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    icon: Shield,
    title: "Public Liability Insurance",
    description: "Essential protection against third-party claims for injury or property damage",
    badge: "Essential",
    badgeVariant: "destructive" as const,
    features: [
      "Cover from £1m to £10m available",
      "Accidental damage to third-party property",
      "Legal defence costs and expenses",
      "UK and worldwide territorial cover options"
    ],
    benefits: [
      "Protects against compensation claims",
      "Covers legal representation costs",
      "Maintains business reputation",
      "Required by most contracts"
    ],
    considerations: [
      "Coverage limits must match contract requirements",
      "Exclusions apply for deliberate acts",
      "Professional advice may require separate cover"
    ]
  },
  {
    icon: Wrench,
    title: "Tools & Equipment Cover",
    description: "Comprehensive protection for tools, equipment, and machinery used in your trade",
    badge: "Recommended",
    badgeVariant: "secondary" as const,
    features: [
      "All-risks cover for tools and equipment",
      "Theft from vehicles and premises",
      "Accidental damage protection",
      "Hired-in plant cover available"
    ],
    benefits: [
      "Rapid replacement of essential tools",
      "Minimises business interruption",
      "Covers personal and business equipment",
      "24/7 theft and damage protection"
    ],
    considerations: [
      "Security requirements and precautions apply",
      "Age limits typically 7-10 years for equipment",
      "Excess applies to all claims made"
    ]
  },
  {
    icon: FileText,
    title: "Professional Indemnity Insurance",
    description: "Protection against claims arising from professional advice or services provided",
    badge: "Specialist",
    badgeVariant: "outline" as const,
    features: [
      "Cover for negligent acts or omissions",
      "Breach of professional duty protection",
      "Legal defence costs included",
      "Retroactive cover available"
    ],
    benefits: [
      "Protects against professional negligence claims",
      "Covers errors in design and specification",
      "Maintains professional credibility and contracts",
      "Required by many trade associations"
    ],
    considerations: [
      "Claims-made policy basis",
      "Run-off cover needed after retirement",
      "Specific trade exclusions may apply"
    ]
  },
  {
    icon: Zap,
    title: "Product Liability Insurance",
    description: "Coverage for claims arising from defective products or faulty workmanship",
    badge: "Important",
    badgeVariant: "default" as const,
    features: [
      "Defective workmanship protection",
      "Product recall expenses",
      "Worldwide product liability cover",
      "Legal defence and compensation"
    ],
    benefits: [
      "Protects against product defect claims",
      "Covers recall and withdrawal costs",
      "Maintains customer confidence",
      "Essential for product suppliers"
    ],
    considerations: [
      "Excludes design defects unless specified",
      "Gradual pollution exclusions apply",
      "Warranty work may be excluded"
    ]
  },
  {
    icon: Users,
    title: "Employers Liability Insurance",
    description: "Legal requirement providing protection against employee injury or illness claims",
    badge: "Legal Requirement",
    badgeVariant: "destructive" as const,
    features: [
      "Minimum £5m cover as required by law",
      "Employee injury and disease claims",
      "Legal defence costs and court awards",
      "Covers employees, labour-only subcontractors"
    ],
    benefits: [
      "Meets legal compliance requirements",
      "Protects against employee claims",
      "Covers workplace-related illnesses",
      "Includes legal representation"
    ],
    considerations: [
      "Certificate must be displayed at each workplace",
      "Does not cover genuine self-employed contractors",
      "Motor vehicle accidents may require separate cover"
    ]
  },
  {
    icon: Building,
    title: "Contract Works Insurance",
    description: "Protection for construction projects and works in progress against damage or loss",
    badge: "Project Specific",
    badgeVariant: "outline" as const,
    features: [
      "Works in progress protection",
      "Materials on site cover",
      "Temporary buildings and plant",
      "Third-party property damage"
    ],
    benefits: [
      "Protects project investments",
      "Covers material and labour costs",
      "Maintains project timelines",
      "Required by most main contractors"
    ],
    considerations: [
      "Project-specific policy terms",
      "Maintenance period may be excluded",
      "Design defects typically excluded"
    ]
  }
]

export function ContractorsTradesmansProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contractors & Tradesmans Insurance Products
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions designed specifically for contractors, tradesmen, and skilled professionals 
            operating in the UK construction and trade industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-200 border-slate-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <product.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <Badge variant={product.badgeVariant} className="text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{product.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Benefits
                  </h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Considerations
                  </h4>
                  <ul className="space-y-1">
                    {product.considerations.map((consideration, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-slate-600 text-center">
            <strong>Important:</strong> All insurance products are subject to underwriting criteria and terms and conditions. 
            The information provided is for comparison purposes only and does not constitute advice. Focus Insurance Services 
            is authorised and regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </section>
  )
}
