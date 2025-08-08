'use client'

import { Home, Package, Shield, Users, CheckCircle, ArrowRight, Star, Phone, AlertTriangle, Umbrella } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const householdInsuranceProducts = [
  {
    id: 'buildings-insurance',
    title: 'Buildings Insurance',
    subtitle: 'Structural property protection',
    description: 'Buildings insurance covers the structure of your home including walls, roof, floors, and permanent fixtures. Essential for mortgage holders and property owners, subject to property type and construction.',
    icon: Home,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    features: [
      'Structural damage cover',
      'Storm and flood protection*',
      'Fire and explosion cover',
      'Subsidence protection*',
      'Alternative accommodation*',
      'Rebuilding cost assessment'
    ],
    benefits: [
      'New for old replacement*',
      'Trace and access cover',
      'Garden and grounds cover*',
      'Professional fees included'
    ],
    considerations: [
      'Subject to property survey',
      'Flood risk assessment required',
      'Exclusions may apply'
    ],
    href: '/personal-insurance/household/buildings'
  },
  {
    id: 'contents-insurance',
    title: 'Contents Insurance',
    subtitle: 'Personal belongings protection',
    description: 'Contents insurance protects your personal belongings, furniture, and household items against theft, damage, and loss. Available for homeowners and tenants, subject to item values and security measures.',
    icon: Package,
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    features: [
      'Household contents cover',
      'Theft and burglary protection',
      'Accidental damage cover*',
      'Temporary removal cover',
      'Personal money cover*',
      'Freezer contents protection'
    ],
    benefits: [
      'New for old replacement*',
      'No excess on certain claims*',
      'Worldwide personal effects*',
      'Student belongings cover*'
    ],
    considerations: [
      'Item limits may apply',
      'Security requirements necessary',
      'High-value items need declaration'
    ],
    href: '/personal-insurance/household/contents'
  },
  {
    id: 'combined-home-insurance',
    title: 'Combined Home Insurance',
    subtitle: 'Complete household protection',
    description: 'Combined buildings and contents insurance providing comprehensive protection for your property and belongings in one convenient policy. Suitable for homeowners seeking complete household cover.',
    icon: Shield,
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'hover:from-purple-700 hover:to-purple-800',
    features: [
      'Buildings and contents combined',
      'Single policy convenience',
      'Comprehensive cover options',
      'Family legal protection*',
      'Home emergency assistance*',
      'Personal liability cover*'
    ],
    benefits: [
      'Potential cost savings*',
      'Simplified claims process',
      'Single renewal date',
      'Enhanced cover options*'
    ],
    considerations: [
      'Both covers subject to assessment',
      'Combined excess may apply',
      'Policy limits vary by insurer'
    ],
    href: '/personal-insurance/household/combined'
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
      {/* Price Badge */}
      

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

        {/* Important Considerations */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
            Important Information
          </h4>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="space-y-2">
              {product.considerations.slice(0, 2).map((consideration, considerationIndex) => (
                <div key={considerationIndex} className="flex items-start space-x-2">
                  <AlertTriangle className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-xs text-orange-700">{consideration}</span>
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
            Get Quote
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
          <p>*Subject to underwriting criteria, terms and conditions. Cover availability and terms may vary based on individual circumstances.</p>
        </div>
      </div>
    </div>
  )
}

export default function HouseholdInsuranceProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Home className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">Household Insurance Options</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Home
            <span className="block text-[#F61F41] mt-2">Insurance Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protect your home and belongings with our range of household insurance products. From buildings insurance for property owners to contents cover for tenants, we provide tailored solutions for UK households.
          </p>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="font-bold text-blue-800 mb-2">FCA Regulated Service</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                  All household insurance products are subject to underwriting criteria, terms and conditions. 
                  We are committed to treating customers fairly and providing clear information to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {householdInsuranceProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Understanding Household Insurance
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the different types of home insurance and what protection they provide for UK homeowners and tenants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Buildings Insurance</h4>
              <p className="text-gray-600 leading-relaxed">
                Covers the structure of your property including walls, roof, and permanent fixtures. Usually required by mortgage lenders for property purchases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contents Insurance</h4>
              <p className="text-gray-600 leading-relaxed">
                Protects your personal belongings, furniture, and household items. Available for both homeowners and tenants renting property.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Combined Cover</h4>
              <p className="text-gray-600 leading-relaxed">
                Buildings and contents insurance in one policy, often providing convenience and potential cost savings for homeowners.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Household Insurance in the UK: What You Need to Know
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="leading-relaxed">
                Household insurance is essential protection for UK homeowners and tenants. Whether you need buildings insurance to protect your property's structure or contents insurance to safeguard your belongings, choosing the right home insurance policy requires careful consideration of your individual circumstances.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Buildings Insurance Coverage</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Structural damage from fire, storm, and flood*</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Subsidence and ground heave protection*</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Alternative accommodation costs*</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Professional fees and debris removal</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Contents Insurance Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personal belongings and furniture protection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Theft and burglary cover</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Accidental damage options*</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personal possessions away from home*</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2">Important Considerations</h4>
                    <p className="text-sm text-yellow-700 leading-relaxed">
                      Home insurance policies vary significantly between insurers. Policy terms, conditions, exclusions, and cover limits differ. 
                      It's important to read policy documents carefully and ensure you understand what is and isn't covered. 
                      Consider factors such as excess amounts, security requirements, and any special conditions that may apply to your property or circumstances.
                    </p>
                  </div>
                </div>
              </div>
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
                Ready to Protect Your Home?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get expert household insurance advice and competitive quotes from our experienced advisors. 
                All quotes subject to underwriting criteria and terms and conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Household Quote
                </Button>
                
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  Compare Cover Options
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-blue-200 space-y-2">
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All household insurance products subject to underwriting criteria, terms and conditions</p>
                <p>Professional indemnity insurance and client money protection in place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
