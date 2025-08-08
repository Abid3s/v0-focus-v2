'use client'

import { Car, Users, Crown, CheckCircle, ArrowRight, Star, Phone, AlertTriangle, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const taxiInsuranceProducts = [
  {
    id: 'hackney-carriage-insurance',
    title: 'Hackney Carriage Insurance',
    subtitle: 'Licensed black cab protection',
    description: 'Comprehensive insurance for licensed hackney carriages and black cabs with plying for hire rights. Essential cover for drivers operating in designated taxi ranks and street hailing areas.',
    icon: Car,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    features: [
      'Public liability up to £6 million',
      'Comprehensive vehicle cover',
      'Personal accident benefits',
      'Legal expenses protection',
      'Breakdown assistance included',
      'Windscreen cover'
    ],
    benefits: [
      'Regulatory compliance assured*',
      'Quick claims processing',
      'Specialist taxi expertise',
      'Competitive premium rates*'
    ],
    considerations: [
      'Valid hackney carriage licence required',
      'Vehicle must meet local authority standards',
      'Regular compliance checks necessary'
    ],
    href: '/commercial-insurance/taxi/hackney-carriage'
  },
  {
    id: 'private-hire-insurance',
    title: 'Private Hire Insurance',
    subtitle: 'Minicab and PHV protection',
    description: 'Specialist cover for private hire vehicles, minicabs, and pre-booked taxi services. Designed for drivers operating through licensed operators with advance booking systems.',
    icon: Users,
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    features: [
      'Public liability cover',
      'Comprehensive vehicle protection',
      'Employer\'s liability (if applicable)',
      'Personal effects cover',
      'Key replacement service',
      'Emergency accommodation'
    ],
    benefits: [
      'Flexible policy options*',
      'Multi-vehicle discounts*',
      'No claims bonus protection*',
      'Annual or monthly payments*'
    ],
    considerations: [
      'Valid private hire licence required',
      'Must operate through licensed operator',
      'Pre-booking requirements apply'
    ],
    href: '/commercial-insurance/taxi/private-hire'
  },
  {
    id: 'executive-car-insurance',
    title: 'Executive Car Insurance',
    subtitle: 'Premium chauffeur services',
    description: 'Premium insurance for executive cars and chauffeur services providing high-end transportation. Enhanced cover for luxury vehicles and professional driving services.',
    icon: Crown,
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'hover:from-purple-700 hover:to-purple-800',
    features: [
      'Enhanced public liability cover',
      'Premium vehicle protection',
      'Business interruption cover',
      'Passenger personal effects',
      'Courtesy car provision',
      '24/7 claims support'
    ],
    benefits: [
      'High-value vehicle cover*',
      'Professional service standards',
      'Bespoke policy options*',
      'Dedicated account management'
    ],
    considerations: [
      'Higher security requirements may apply',
      'Professional presentation standards',
      'Enhanced background checks required'
    ],
    href: '/commercial-insurance/taxi/executive'
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

export default function TaxiInsuranceProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Car className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">Taxi Insurance Options</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Professional Taxi
            <span className="block text-[#F61F41] mt-2">Insurance Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protect your taxi business with our comprehensive range of specialist insurance products. From hackney carriages to executive cars, we provide tailored cover for professional drivers across the UK.
          </p>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="font-bold text-blue-800 mb-2">FCA Regulated Service</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                  All taxi insurance products are subject to underwriting criteria, terms and conditions. 
                  We are committed to treating customers fairly and providing clear information to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {taxiInsuranceProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Understanding Taxi Insurance
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the different types of taxi insurance and what protection they provide for professional drivers across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Hackney Carriage</h4>
              <p className="text-gray-600 leading-relaxed">
                Licensed black cabs with plying for hire rights, able to pick up passengers from taxi ranks and respond to street hailing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Private Hire</h4>
              <p className="text-gray-600 leading-relaxed">
                Minicabs and private hire vehicles that must be pre-booked through a licensed operator, cannot pick up from ranks or street hailing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Executive Cars</h4>
              <p className="text-gray-600 leading-relaxed">
                Premium chauffeur services providing luxury transportation with enhanced service standards and higher-value vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Taxi Insurance in the UK: What You Need to Know
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="leading-relaxed">
                Taxi insurance is a legal requirement for all professional drivers operating hackney carriages, private hire vehicles, and minicabs in the UK. Whether you're driving a black cab in London or operating a minicab service in your local area, having appropriate insurance cover is essential for regulatory compliance and business protection.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Essential Cover Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Public liability insurance (minimum £6 million recommended)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive vehicle cover for business use</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Employer's liability (if employing drivers)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personal accident and legal expenses cover*</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Regulatory Compliance</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Valid taxi or private hire licence required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Vehicle must meet local authority standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Regular MOT and compliance testing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Driver background checks and training*</span>
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
                      Taxi insurance policies vary significantly between insurers and vehicle types. Policy terms, conditions, exclusions, and cover limits differ based on your specific circumstances, operating area, and claims history. 
                      It's essential to ensure your policy meets local authority licensing requirements and provides adequate protection for your business operations. 
                      Consider factors such as excess amounts, security requirements, and any special conditions that may apply to your vehicle or operating licence.
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
                Ready to Protect Your Taxi Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get expert taxi insurance advice and competitive quotes from our experienced advisors. 
                All quotes subject to underwriting criteria and terms and conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Taxi Quote
                </Button>
                
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  Compare Cover Options
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-blue-200 space-y-2">
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All taxi insurance products subject to underwriting criteria, terms and conditions</p>
                <p>Professional indemnity insurance and client money protection in place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
