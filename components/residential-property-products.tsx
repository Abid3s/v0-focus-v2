'use client'

import { Shield, Home, Key, Umbrella, AlertTriangle, Wifi } from 'lucide-react'

const products = [
  {
    icon: Home,
    title: "Buildings Insurance",
    description: "Essential protection for the structure of your property including walls, roof, windows, doors, and permanent fixtures such as fitted kitchens and bathrooms.",
    features: [
      "Storm, flood, and weather damage cover",
      "Fire, explosion, and smoke damage",
      "Subsidence, heave, and landslip protection",
      "Malicious damage and vandalism cover",
      "Impact damage from vehicles or aircraft",
      "Theft of fixtures and fittings"
    ],
    benefits: [
      "Full rebuilding cost coverage",
      "Alternative accommodation expenses",
      "Professional fees (architects, surveyors)",
      "Trace and access cover for hidden pipes",
      "Garden and boundary coverage",
      "Debris removal costs included"
    ],
    considerations: [
      "Property age, construction type, and location affect premiums",
      "Accurate rebuild cost assessment essential (not market value)",
      "Regular property maintenance required to maintain cover",
      "Flood risk areas may have higher excesses",
      "Listed buildings may need specialist cover",
      "Unoccupied property restrictions may apply"
    ],
    isEssential: true
  },
  {
    icon: Shield,
    title: "Contents Insurance",
    description: "Comprehensive protection for your personal belongings, furniture, appliances, and valuables within your home, including cover away from home.",
    features: [
      "Personal possessions and furniture",
      "Electrical appliances and equipment",
      "Clothing, jewellery, and valuables",
      "Money and credit cards",
      "Personal belongings away from home",
      "Temporary accommodation costs"
    ],
    benefits: [
      "New for old replacement (no depreciation)",
      "Worldwide personal effects cover",
      "Accidental damage protection available",
      "Family legal protection included",
      "Home emergency cover options",
      "Pedal cycle cover included"
    ],
    considerations: [
      "Accurate valuation of contents required annually",
      "High-value items (over £1,500-£2,500) need separate listing",
      "Security requirements for valuable items",
      "Lifestyle and occupation factors affect pricing",
      "Students and young adults may have restrictions",
      "Business equipment usually excluded"
    ]
  },
  {
    icon: Key,
    title: "Landlord Insurance",
    description: "Specialist protection designed for buy-to-let properties, covering rental income loss, tenant-related damage, and landlord-specific liabilities.",
    features: [
      "Loss of rental income protection",
      "Tenant default and rent guarantee",
      "Malicious damage by tenants",
      "Legal expenses and eviction costs",
      "Employers' liability (if staff employed)",
      "Public liability for common areas"
    ],
    benefits: [
      "Up to 12 months loss of rent cover",
      "Tenant referencing services included",
      "Emergency accommodation for displaced tenants",
      "Legal helpline and document templates",
      "Rent protection insurance options",
      "Property management support services"
    ],
    considerations: [
      "Tenant referencing and credit checks required",
      "Property must meet current safety standards",
      "Rental agreements must comply with legislation",
      "Regular property inspections expected",
      "HMO properties need specialist cover",
      "Short-term lets may require different policies"
    ]
  },
  {
    icon: Umbrella,
    title: "High-Value Home Insurance",
    description: "Premium protection for luxury properties and high-value contents, offering enhanced coverage limits, bespoke services, and concierge claims handling.",
    features: [
      "Unlimited or very high buildings cover",
      "Enhanced contents limits (£100k+)",
      "Worldwide valuables protection",
      "Fine art and antiques cover",
      "Wine cellar and collections",
      "Concierge claims service"
    ],
    benefits: [
      "No upper limit on buildings sum insured",
      "Automatic contents sum increases",
      "Professional valuations included annually",
      "Priority claims handling and settlement",
      "Specialist restoration services",
      "Risk management surveys provided"
    ],
    considerations: [
      "Professional valuations required for high-value items",
      "Enhanced security measures mandatory",
      "Significantly higher premium costs",
      "Detailed property surveys and risk assessments",
      "Lifestyle questionnaires required",
      "Geographic restrictions may apply"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Flood & Subsidence Cover",
    description: "Specialist protection against flood damage and ground movement risks, essential for properties in flood-prone areas or with subsidence history.",
    features: [
      "River, coastal, and surface water flooding",
      "Subsidence, heave, and landslip damage",
      "Alternative accommodation during repairs",
      "Professional drying and restoration",
      "Contents cleaning and replacement",
      "Garden and boundary reinstatement"
    ],
    benefits: [
      "Comprehensive flood damage restoration",
      "Structural movement investigation and repair",
      "24/7 emergency response services",
      "Specialist contractor networks",
      "Temporary storage for belongings",
      "Loss adjusters with flood expertise"
    ],
    considerations: [
      "Environment Agency flood risk assessment required",
      "Previous flood or subsidence claims affect availability",
      "Higher policy excesses typically apply",
      "Flood prevention measures may be required",
      "Properties in Flood Zone 3 may face restrictions",
      "Waiting periods may apply for new policies"
    ]
  },
  {
    icon: Wifi,
    title: "Holiday Home Insurance",
    description: "Tailored coverage for second homes, holiday cottages, and seasonal properties, addressing unique risks of unoccupied and remotely located properties.",
    features: [
      "Unoccupied property protection",
      "Seasonal occupation flexibility",
      "Holiday rental income cover",
      "Emergency property management",
      "Frozen pipe and heating failure cover",
      "Security and maintenance requirements"
    ],
    benefits: [
      "Flexible occupation periods (30+ days)",
      "Holiday let rental income protection",
      "Property management coordination",
      "Emergency repairs and maintenance",
      "Key holding and security services",
      "Weather damage protection"
    ],
    considerations: [
      "Minimum and maximum occupation periods apply",
      "Enhanced security requirements when vacant",
      "Location accessibility affects premiums",
      "Increased maintenance responsibilities",
      "Utility disconnection requirements",
      "Holiday letting regulations compliance needed"
    ]
  }
]

export default function ResidentialPropertyProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Residential Property Insurance Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive protection solutions for all types of residential properties. 
            From standard home insurance to specialist landlord and high-value property cover, 
            all designed to meet current UK insurance market standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                      {product.isEssential && (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                          Essential
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{product.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-700 mb-2">Important Considerations</h4>
                      <ul className="space-y-1">
                        {product.considerations.map((consideration, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-slate-50 border-t">
                  <p className="text-xs text-slate-500">
                    *Subject to underwriting criteria, terms and conditions, and policy limits. 
                    Coverage details and availability may vary by insurer and property type.
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Important Property Insurance Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Current Market Considerations</h4>
              <ul className="space-y-1">
                <li>• Property insurance premiums have increased due to climate change impacts</li>
                <li>• Flood risk assessments now use updated Environment Agency data</li>
                <li>• Building materials costs affect rebuild valuations significantly</li>
                <li>• Energy efficiency improvements may qualify for premium discounts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Regulatory Updates</h4>
              <ul className="space-y-1">
                <li>• FCA regulations require clear policy documentation</li>
                <li>• Renewal notices must highlight significant changes</li>
                <li>• Customers have cancellation rights within cooling-off periods</li>
                <li>• Claims handling standards are strictly regulated</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-6">
            All residential property insurance products are subject to underwriting criteria, terms and conditions. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FRN: 123456). 
            We do not provide advice or recommendations - information is provided for comparison purposes only.
          </p>
        </div>
      </div>
    </section>
  )
}
