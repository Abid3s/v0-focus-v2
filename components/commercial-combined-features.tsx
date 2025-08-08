'use client'

import { Shield, Clock, Users, TrendingDown, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description: 'Multiple insurance covers combined in one convenient policy, providing complete business protection with simplified administration and competitive premiums.'
  },
  {
    icon: Clock,
    title: '24/7 Claims Support',
    description: 'Round-the-clock claims helpline with dedicated commercial claims handlers who understand business needs and work to minimise disruption to your operations.'
  },
  {
    icon: Users,
    title: 'Expert Commercial Team',
    description: 'Specialist commercial insurance advisors with extensive knowledge of business risks, industry requirements, and regulatory compliance across all sectors.'
  },
  {
    icon: TrendingDown,
    title: 'Competitive Premiums',
    description: 'Access to leading UK insurers and competitive rates through our wholesale relationships, ensuring you receive excellent value for comprehensive business protection.'
  },
  {
    icon: Award,
    title: 'Personal Service',
    description: 'Dedicated account management with direct access to your insurance advisor, providing personalised service and ongoing support throughout your policy term.'
  },
  {
    icon: CheckCircle2,
    title: 'FCA Regulated',
    description: 'Authorised and regulated by the Financial Conduct Authority, ensuring professional standards, consumer protection, and compliance with industry regulations.'
  }
]

export function CommercialCombinedFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Focus for Commercial Combined Insurance?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            With over 25 years of experience in commercial insurance, we provide expert advice, 
            competitive rates, and exceptional service to protect your business.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F61F41]/10">
                <feature.icon className="h-6 w-6 text-[#F61F41]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information Boxes */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Independent advice with access to multiple insurers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Tailored policies designed for your specific business needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Proactive risk management and loss prevention advice</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Annual policy reviews to ensure adequate coverage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Flexible payment options including monthly instalments</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Promise</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Same day quotations for most business types</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Direct access to your dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Comprehensive claims support and advocacy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Regular policy reviews and renewal discussions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600">Professional indemnity and regulatory compliance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get Expert Commercial Insurance Advice</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-[#F61F41] mr-3" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Call us today</p>
                <a href="tel:01733263311" className="text-lg font-bold text-[#F61F41] hover:text-[#d91635] transition-colors duration-200">
                  01733 263311
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-[#F61F41] mr-3" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Email us</p>
                <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-bold text-[#F61F41] hover:text-[#d91635] transition-colors duration-200">
                  info@focusinsurance.co.uk
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#F61F41] mr-3" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Visit us</p>
                <p className="text-sm text-gray-600">Peterborough, Cambridgeshire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
