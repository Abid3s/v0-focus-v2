'use client'

import { Award, Users, Clock, Phone, Shield, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Hospitality Specialists',
    description: 'Over 20 years of experience providing insurance solutions specifically for restaurants, takeaways, and food service businesses across the UK.'
  },
  {
    icon: Users,
    title: 'Expert Advisory Team',
    description: 'Our qualified insurance professionals understand the unique risks facing hospitality businesses and provide tailored advice for your specific needs.'
  },
  {
    icon: Clock,
    title: 'Quick Quote Process',
    description: 'Get competitive quotes within 24 hours. Our streamlined process ensures you can secure the right cover without unnecessary delays.'
  },
  {
    icon: Phone,
    title: '24/7 Claims Support',
    description: 'Access to round-the-clock claims assistance when you need it most. Our dedicated claims team ensures rapid resolution of your insurance matters.'
  },
  {
    icon: Shield,
    title: 'FCA Regulated Service',
    description: 'Complete peace of mind with our FCA authorised and regulated service. We maintain the highest standards of professional conduct and client protection.'
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Cover Options',
    description: 'From basic public liability to comprehensive business packages, we offer flexible insurance solutions that grow with your restaurant business.'
  }
]

export default function TakeawaysRestaurantFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001d3d] mb-4">
            Why Choose Focus Insurance for Your Restaurant?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges facing restaurant and takeaway businesses. 
            Our specialist knowledge and comprehensive service ensure you get the right protection at competitive rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F61F41] to-[#d91736] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#001d3d] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Restaurant Business?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get expert advice and competitive quotes from our specialist hospitality insurance team. 
            We'll help you find the right cover to protect your business and give you peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:01733263311" 
              className="bg-[#F61F41] hover:bg-[#d91736] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 01733 263311
            </a>
            <a 
              href="mailto:info@focusinsurance.co.uk" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#001d3d] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Get Quote Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
