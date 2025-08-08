'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Package, TrendingDown, Shield, Zap, DollarSign, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: Building2,
    title: "Buildings Insurance",
    description: "Comprehensive cover for your commercial property structure",
    badge: "Essential",
    features: [
      "Fire, flood, and storm damage protection",
      "Malicious damage and vandalism cover",
      "Subsidence and ground heave protection",
      "Trace and access cover for hidden pipes"
    ],
    benefits: [
      "Rebuild cost assessment included",
      "Alternative accommodation expenses",
      "Professional fees covered",
      "Debris removal and site clearance"
    ],
    considerations: [
      "Subject to property survey and valuation",
      "Excess levels vary by claim type",
      "Some exclusions may apply for older buildings"
    ]
  },
  {
    icon: Package,
    title: "Contents Insurance",
    description: "Protection for business equipment, stock, and fixtures",
    badge: "Recommended",
    features: [
      "Office equipment and machinery cover",
      "Stock and inventory protection",
      "Fixtures and fittings insurance",
      "Money and valuable documents cover"
    ],
    benefits: [
      "New for old replacement basis",
      "Temporary removal cover included",
      "Seasonal stock increase allowance",
      "Professional cleaning costs covered"
    ],
    considerations: [
      "Regular stock valuations may be required",
      "Security requirements must be maintained",
      "High-value items may need separate listing"
    ]
  },
  {
    icon: TrendingDown,
    title: "Business Interruption",
    description: "Financial protection when your business operations are disrupted",
    badge: "Critical",
    features: [
      "Loss of gross profit coverage",
      "Increased cost of working expenses",
      "Rent and rates continuation",
      "Payroll protection during closure"
    ],
    benefits: [
      "Up to 24 months indemnity period",
      "Book debts protection included",
      "Professional accountants fees covered",
      "Suppliers and customers extension available"
    ],
    considerations: [
      "Accurate financial records essential",
      "Indemnity period selection critical",
      "Some waiting periods may apply"
    ]
  },
  {
    icon: Shield,
    title: "Property Owners Liability",
    description: "Legal liability protection for property owners and landlords",
    badge: "Legal Requirement",
    features: [
      "Public liability up to £6 million",
      "Defective premises act coverage",
      "Legal defence costs included",
      "Property in trust protection"
    ],
    benefits: [
      "Automatic court attendance costs",
      "Emergency legal helpline access",
      "Worldwide territorial coverage",
      "Tenant liability protection available"
    ],
    considerations: [
      "Regular property maintenance required",
      "Health and safety compliance essential",
      "Some high-risk activities excluded"
    ]
  },
  {
    icon: Zap,
    title: "Equipment Breakdown",
    description: "Specialist cover for mechanical and electrical equipment failure",
    badge: "Specialist",
    features: [
      "Sudden and unforeseen breakdown cover",
      "Electrical and mechanical equipment",
      "Computer and electronic systems",
      "Refrigeration and air conditioning"
    ],
    benefits: [
      "Emergency repair costs covered",
      "Loss of refrigerated goods included",
      "Hire of temporary equipment",
      "Professional inspection services"
    ],
    considerations: [
      "Regular maintenance schedules required",
      "Age restrictions may apply",
      "Gradual deterioration excluded"
    ]
  },
  {
    icon: DollarSign,
    title: "Loss of Rent",
    description: "Protection for rental income when property becomes uninhabitable",
    badge: "Landlord Essential",
    features: [
      "Rental income protection",
      "Service charge recovery",
      "Alternative accommodation costs",
      "Rent-free period coverage"
    ],
    benefits: [
      "Up to 36 months coverage available",
      "Void period protection included",
      "Legal expenses for tenant disputes",
      "Property management fees covered"
    ],
    considerations: [
      "Tenancy agreements must be current",
      "Property condition requirements apply",
      "Market rent assessments may be needed"
    ]
  }
]

export default function CommercialPropertyProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d] mb-4">
            Commercial Property Insurance Products
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive protection for your commercial property investment. Our specialist policies are designed 
            to meet the unique needs of UK commercial property owners, landlords, and business tenants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#001d3d]/10 rounded-lg group-hover:bg-[#001d3d]/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#001d3d]" />
                    </div>
                    <Badge 
                      variant={product.badge === 'Essential' || product.badge === 'Legal Requirement' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[#001d3d] group-hover:text-[#F61F41] transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-[#001d3d] mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <ArrowRight className="h-3 w-3 text-[#F61F41] mr-2 mt-1 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-[#001d3d] mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <ArrowRight className="h-3 w-3 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Considerations */}
                  <div>
                    <h4 className="font-semibold text-[#001d3d] mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mr-2" />
                      Important Considerations
                    </h4>
                    <ul className="space-y-2">
                      {product.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <ArrowRight className="h-3 w-3 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500">
                      *Subject to underwriting criteria and policy terms and conditions. 
                      This information is for comparison purposes only.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 max-w-4xl mx-auto">
            All commercial property insurance products are subject to underwriting criteria, terms and conditions. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
            The information provided is for comparison purposes only and does not constitute advice or recommendation.
          </p>
        </div>
      </div>
    </section>
  )
}
