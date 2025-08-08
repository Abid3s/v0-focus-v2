'use client'

import { Truck, Building2, Shield, Users, Utensils, Briefcase, Car, Home, Dumbbell, Heart, CheckCircle, ArrowRight, Star, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const commercialInsuranceProducts = [
  // Vehicle & Transport
  {
    category: 'Vehicle & Transport',
    products: [
      {
        id: 'taxi',
        title: 'Taxi Insurance',
        subtitle: 'Comprehensive taxi and private hire cover',
        description: 'Specialist insurance for taxi operators, private hire vehicles, and minicab businesses. Subject to underwriting criteria and terms and conditions.',
        icon: Car,
        color: 'from-blue-600 to-blue-700',
        hoverColor: 'hover:from-blue-700 hover:to-blue-800',
        features: [
          'Public hire taxi cover',
          'Private hire vehicle insurance',
          'Comprehensive or third party options*',
          'Business use classification',
          'Fleet discounts available*',
          'Breakdown recovery options'
        ],
        benefits: [
          'Specialist underwriters',
          'Competitive rates*',
          'Claims support service',
          'Flexible payment terms*'
        ],
        href: '/commercial-insurance/taxi',
        popular: false
      },
      {
        id: 'commercial-vehicle',
        title: 'Commercial Vehicle',
        subtitle: 'Fleet and commercial vehicle protection',
        description: 'Comprehensive motor insurance for commercial vehicles, vans, and light goods vehicles. Cover options subject to vehicle type and business use.',
        icon: Truck,
        color: 'from-green-600 to-green-700',
        hoverColor: 'hover:from-green-700 hover:to-green-800',
        features: [
          'Goods in transit cover',
          'Third party liability',
          'Comprehensive vehicle cover*',
          'Breakdown assistance options',
          'Fleet management services*',
          'Driver protection schemes'
        ],
        benefits: [
          'Multi-vehicle discounts*',
          'Flexible excess options',
          'Claims management support',
          'Risk management advice'
        ],
        href: '/commercial-insurance/commercial-vehicle',
        popular: true
      },
      {
        id: 'fleet',
        title: 'Fleet Insurance',
        subtitle: 'Multi-vehicle fleet management',
        description: 'Tailored insurance solutions for businesses operating multiple vehicles. Comprehensive fleet management and risk assessment services available.',
        icon: Truck,
        color: 'from-purple-600 to-purple-700',
        hoverColor: 'hover:from-purple-700 hover:to-purple-800',
        features: [
          'Multi-vehicle policies',
          'Fleet risk management',
          'Driver training programmes*',
          'Telematics solutions*',
          'Claims management service',
          'Vehicle replacement options*'
        ],
        benefits: [
          'Volume discounts available*',
          'Dedicated fleet manager',
          'Online fleet management',
          'Comprehensive reporting'
        ],
        href: '/commercial-insurance/fleet',
        popular: false
      }
    ]
  },
  // Property & Liability
  {
    category: 'Property & Liability',
    products: [
      {
        id: 'residential-property',
        title: 'Residential Property',
        subtitle: 'Buy-to-let and rental property cover',
        description: 'Insurance for landlords and property investors covering buildings, contents, and liability. Subject to property type and letting arrangements.',
        icon: Home,
        color: 'from-orange-600 to-orange-700',
        hoverColor: 'hover:from-orange-700 hover:to-orange-800',
        features: [
          'Buildings insurance',
          'Landlord contents cover',
          'Loss of rent protection*',
          'Public liability cover',
          'Legal expenses insurance*',
          'Emergency assistance service'
        ],
        benefits: [
          'Multi-property discounts*',
          'Tenant default protection*',
          'Property management support',
          'Claims helpline service'
        ],
        href: '/commercial-insurance/residential-property',
        popular: false
      },
      {
        id: 'commercial-property',
        title: 'Commercial Property',
        subtitle: 'Business premises protection',
        description: 'Comprehensive insurance for commercial buildings, contents, and business interruption. Cover tailored to your specific business premises and operations.',
        icon: Building2,
        color: 'from-red-600 to-red-700',
        hoverColor: 'hover:from-red-700 hover:to-red-800',
        features: [
          'Buildings and contents cover',
          'Business interruption insurance',
          'Public liability protection',
          'Equipment breakdown cover*',
          'Loss of licence insurance*',
          'Terrorism cover options*'
        ],
        benefits: [
          'Risk assessment service',
          'Business continuity planning',
          'Claims management support',
          'Competitive premium rates*'
        ],
        href: '/commercial-insurance/commercial-property',
        popular: true
      },
      {
        id: 'contractors-tradesmans-liability',
        title: 'Contractors & Tradesmans Liability',
        subtitle: 'Professional trades liability cover',
        description: 'Specialist liability insurance for contractors, tradesmen, and skilled professionals. Cover options vary by trade and risk profile.',
        icon: Shield,
        color: 'from-teal-600 to-teal-700',
        hoverColor: 'hover:from-teal-700 hover:to-teal-800',
        features: [
          'Public liability cover',
          'Employers liability insurance',
          'Tools and equipment cover',
          'Contract works insurance*',
          'Professional indemnity options*',
          'Legal expenses cover*'
        ],
        benefits: [
          'Trade-specific policies',
          'Flexible cover limits',
          'Competitive rates*',
          'Expert claims handling'
        ],
        href: '/commercial-insurance/contractors-tradesmans-liability',
        popular: false
      },
      {
        id: 'commercial-combined',
        title: 'Commercial Combined',
        subtitle: 'All-in-one business protection',
        description: 'Comprehensive combined insurance package covering property, liability, and business interruption in one policy. Subject to business type and risk assessment.',
        icon: Shield,
        color: 'from-indigo-600 to-indigo-700',
        hoverColor: 'hover:from-indigo-700 hover:to-indigo-800',
        features: [
          'Buildings and contents',
          'Public and employers liability',
          'Business interruption cover',
          'Money and goods in transit*',
          'Equipment breakdown*',
          'Legal expenses protection*'
        ],
        benefits: [
          'Single policy convenience',
          'Comprehensive protection',
          'Competitive package pricing*',
          'Dedicated account management'
        ],
        href: '/commercial-insurance/commercial-combined',
        popular: false
      }
    ]
  },
  // Business Sectors
  {
    category: 'Business Sectors',
    products: [
      {
        id: 'takeaways-restaurant',
        title: 'Takeaways & Restaurant',
        subtitle: 'Hospitality industry specialists',
        description: 'Specialist insurance for restaurants, takeaways, and food service businesses. Cover tailored to hospitality industry risks and requirements.',
        icon: Utensils,
        color: 'from-yellow-600 to-yellow-700',
        hoverColor: 'hover:from-yellow-700 hover:to-yellow-800',
        features: [
          'Public liability cover',
          'Product liability insurance',
          'Equipment breakdown cover',
          'Loss of licence protection*',
          'Food poisoning cover',
          'Business interruption insurance'
        ],
        benefits: [
          'Industry expertise',
          'Competitive rates*',
          'Risk management advice',
          'Claims support service'
        ],
        href: '/commercial-insurance/takeaways-restaurant',
        popular: false
      },
      {
        id: 'office-surgery',
        title: 'Office & Surgery',
        subtitle: 'Professional services cover',
        description: 'Insurance solutions for offices, medical practices, and professional service providers. Cover options subject to professional activities and risk profile.',
        icon: Briefcase,
        color: 'from-cyan-600 to-cyan-700',
        hoverColor: 'hover:from-cyan-700 hover:to-cyan-800',
        features: [
          'Professional indemnity cover',
          'Public liability insurance',
          'Contents and equipment cover',
          'Business interruption protection',
          'Cyber liability options*',
          'Legal expenses cover*'
        ],
        benefits: [
          'Professional expertise',
          'Tailored cover options',
          'Competitive premiums*',
          'Claims management support'
        ],
        href: '/commercial-insurance/office-surgery',
        popular: false
      },
      {
        id: 'shop',
        title: 'Shop Insurance',
        subtitle: 'Retail business protection',
        description: 'Comprehensive insurance for retail businesses covering stock, premises, and liability. Cover options tailored to retail operations and customer-facing risks.',
        icon: Building2,
        color: 'from-pink-600 to-pink-700',
        hoverColor: 'hover:from-pink-700 hover:to-pink-800',
        features: [
          'Stock and contents cover',
          'Public liability protection',
          'Shop front insurance',
          'Money and till cover',
          'Business interruption insurance',
          'Theft and burglary cover'
        ],
        benefits: [
          'Retail sector expertise',
          'Flexible cover options',
          'Competitive rates*',
          'Dedicated claims service'
        ],
        href: '/commercial-insurance/shop',
        popular: false
      },
      {
        id: 'professional-indemnity',
        title: 'Professional Indemnity Insurance',
        subtitle: 'Professional liability protection',
        description: 'Essential cover for professionals providing advice or services. Protects against claims of professional negligence. Subject to professional activities and risk assessment.',
        icon: Shield,
        color: 'from-emerald-600 to-emerald-700',
        hoverColor: 'hover:from-emerald-700 hover:to-emerald-800',
        features: [
          'Professional negligence cover',
          'Legal defence costs',
          'Regulatory investigation cover*',
          'Dishonesty of employees*',
          'Loss of documents cover',
          'Worldwide territorial cover*'
        ],
        benefits: [
          'Industry-specific policies',
          'Flexible cover limits',
          'Expert claims handling',
          'Competitive premiums*'
        ],
        href: '/commercial-insurance/professional-indemnity',
        popular: true
      }
    ]
  },
  // Sports & Community
  {
    category: 'Sports & Community',
    products: [
      {
        id: 'sports-gyms-social-clubs',
        title: 'Sports, Gyms & Social Clubs Insurance',
        subtitle: 'Recreation facility cover',
        description: 'Specialist insurance for sports facilities, gyms, and social clubs. Cover tailored to recreational activities and public access requirements.',
        icon: Dumbbell,
        color: 'from-violet-600 to-violet-700',
        hoverColor: 'hover:from-violet-700 hover:to-violet-800',
        features: [
          'Public liability cover',
          'Equipment and contents insurance',
          'Personal accident cover*',
          'Loss of licence protection*',
          'Event cancellation insurance*',
          'Legal expenses cover*'
        ],
        benefits: [
          'Recreation industry expertise',
          'Flexible cover options',
          'Risk management support',
          'Competitive rates*'
        ],
        href: '/commercial-insurance/sports-gyms-social-clubs',
        popular: false
      },
      {
        id: 'sports-club',
        title: 'Sports Club Insurance',
        subtitle: 'Sports club protection',
        description: 'Comprehensive insurance for sports clubs and recreational organisations. Cover options subject to sporting activities and membership structure.',
        icon: Users,
        color: 'from-lime-600 to-lime-700',
        hoverColor: 'hover:from-lime-700 hover:to-lime-800',
        features: [
          'Public liability insurance',
          'Equipment and property cover',
          'Personal accident insurance*',
          'Event and match cover*',
          'Volunteer insurance*',
          'Legal expenses protection*'
        ],
        benefits: [
          'Sports sector knowledge',
          'Member protection options',
          'Competitive club rates*',
          'Claims support service'
        ],
        href: '/commercial-insurance/sports-club',
        popular: false
      },
      {
        id: 'gym',
        title: 'Gym Insurance',
        subtitle: 'Fitness facility cover',
        description: 'Specialist insurance for gyms, fitness centres, and health clubs. Cover tailored to fitness industry risks and equipment requirements.',
        icon: Dumbbell,
        color: 'from-amber-600 to-amber-700',
        hoverColor: 'hover:from-amber-700 hover:to-amber-800',
        features: [
          'Public liability cover',
          'Equipment breakdown insurance',
          'Personal trainer insurance*',
          'Class and activity cover',
          'Business interruption protection',
          'Cyber liability options*'
        ],
        benefits: [
          'Fitness industry expertise',
          'Equipment protection',
          'Member safety focus',
          'Competitive premiums*'
        ],
        href: '/commercial-insurance/gym',
        popular: false
      },
      {
        id: 'social-club',
        title: 'Social Club Insurance',
        subtitle: 'Community club protection',
        description: 'Insurance solutions for social clubs, community centres, and membership organisations. Cover options vary by activities and premises type.',
        icon: Users,
        color: 'from-rose-600 to-rose-700',
        hoverColor: 'hover:from-rose-700 hover:to-rose-800',
        features: [
          'Public liability insurance',
          'Premises and contents cover',
          'Event insurance options*',
          'Committee member protection*',
          'Loss of licence cover*',
          'Legal expenses insurance*'
        ],
        benefits: [
          'Community sector knowledge',
          'Flexible membership options',
          'Competitive club rates*',
          'Dedicated support service'
        ],
        href: '/commercial-insurance/social-club',
        popular: false
      },
      {
        id: 'third-sector-not-for-profit',
        title: 'Third Sector, Communities & Not-for-Profit Insurance',
        subtitle: 'Charity and non-profit cover',
        description: 'Specialist insurance for charities, community groups, and not-for-profit organisations. Cover tailored to charitable activities and volunteer involvement.',
        icon: Heart,
        color: 'from-sky-600 to-sky-700',
        hoverColor: 'hover:from-sky-700 hover:to-sky-800',
        features: [
          'Charity-specific liability cover',
          'Trustee indemnity insurance',
          'Volunteer accident cover*',
          'Professional indemnity options*',
          'Event and activity insurance*',
          'Fundraising protection*'
        ],
        benefits: [
          'Charity sector expertise',
          'Volunteer protection focus',
          'Competitive charity rates*',
          'Specialist claims handling'
        ],
        href: '/commercial-insurance/third-sector-not-for-profit',
        popular: false
      }
    ]
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
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#F61F41] shadow-lg">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Popular
          </span>
        </div>
      )}

      {/* Card Header */}
      <div className={`bg-gradient-to-r ${product.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
        
        <div className="relative z-10">
          <IconComponent className="w-10 h-10 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-bold mb-1">{product.title}</h3>
          <p className="text-white/90 text-sm">{product.subtitle}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {product.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Key Features
          </h4>
          <div className="space-y-1">
            {product.features.slice(0, 3).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-2">
                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-xs text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
            <Star className="w-4 h-4 text-[#F61F41] mr-2" />
            Benefits
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {product.benefits.slice(0, 2).map((benefit, benefitIndex) => (
              <div key={benefitIndex} className="flex items-start space-x-2">
                <ArrowRight className="w-3 h-3 text-[#F61F41] mt-1 flex-shrink-0" />
                <span className="text-xs text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Link href={product.href}>
            <Button className={`w-full bg-gradient-to-r ${product.color} ${product.hoverColor} text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105 text-sm`}>
              Learn More
              <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
          
          <Button className="w-full bg-transparent border-2 border-gray-200 hover:border-[#F61F41] hover:text-[#F61F41] text-gray-700 font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center text-sm">
            <Phone className="w-3 h-3 mr-2" />
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CommercialInsuranceProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Building2 className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">Commercial Insurance Products</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Business
            <span className="block text-[#F61F41] mt-2">Insurance Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protect your business with our extensive range of commercial insurance products. From vehicle fleets to professional services, we provide tailored cover options designed to meet your specific business needs.
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>*Subject to underwriting criteria, terms and conditions apply. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.</p>
          </div>
        </div>

        {/* Products by Category */}
        {commercialInsuranceProducts.map((category, categoryIndex) => (
          <div key={category.category} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="w-24 h-1 bg-[#F61F41] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Expert Business Insurance Advice?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our commercial insurance specialists will help you find the right cover for your business requirements. All quotes subject to underwriting and terms and conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Business Quote
                </Button>
                
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Request Consultation
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-blue-200">
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. Terms and conditions apply to all products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
