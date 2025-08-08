'use client'

import { Shield, Award, Clock, Users, Phone, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Healthcare Specialists',
    description: 'Dedicated expertise in medical practice and healthcare professional insurance with deep understanding of sector-specific risks and regulatory requirements.'
  },
  {
    icon: Award,
    title: 'FCA Regulated Excellence',
    description: 'Authorised and regulated by the Financial Conduct Authority, ensuring the highest standards of professional service and regulatory compliance.'
  },
  {
    icon: Clock,
    title: 'Rapid Response Service',
    description: '24/7 claims helpline and emergency support ensuring your practice receives immediate assistance when you need it most.'
  },
  {
    icon: Users,
    title: 'Tailored Solutions',
    description: 'Bespoke insurance packages designed specifically for your practice type, size, and unique risk profile with competitive premiums.'
  },
  {
    icon: Phone,
    title: 'Expert Advisory Team',
    description: 'Dedicated healthcare insurance specialists providing ongoing support, risk management advice, and policy optimisation guidance.'
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Coverage',
    description: 'Complete protection portfolio covering all aspects of healthcare practice from professional indemnity to cyber liability and business interruption.'
  }
]

export default function OfficeSurgeryFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001d3d] mb-6">
            Why Choose Focus for Healthcare Insurance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialised expertise, regulatory compliance, and dedicated support for healthcare 
            professionals and medical practices across the UK.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-gray-200 hover:border-[#F61F41]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#F61F41]/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#F61F41]" />
                </div>
                <h3 className="text-xl font-bold text-[#001d3d] mb-4 group-hover:text-[#F61F41] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Protect Your Practice?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert advice and competitive quotes for your healthcare insurance needs. 
            Our specialists are ready to help you find the right protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-flex items-center justify-center bg-[#F61F41] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d91635] transition-colors duration-200"
            >
              Get Your Quote
            </a>
            <a
              href="tel:01733263311"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#001d3d] transition-all duration-200"
            >
              Call 01733 263311
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
