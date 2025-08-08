'use client'

import { Shield, Clock, Users, Award, Phone, CheckCircle, Star, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated Service',
    description: 'Fully authorised and regulated by the Financial Conduct Authority, ensuring your protection and peace of mind.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Clock,
    title: '24/7 Claims Support',
    description: 'Round-the-clock claims assistance and emergency helplines to support you when you need it most.',
    color: 'from-[#F61F41] to-[#e91e63]'
  },
  {
    icon: Users,
    title: 'Expert Personal Service',
    description: 'Dedicated personal advisors who understand your needs and provide tailored insurance solutions.',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognised for excellence in customer service and innovative insurance solutions.',
    color: 'from-purple-600 to-purple-700'
  }
]

const whyChooseUs = [
  {
    title: 'Independent Advice',
    description: 'We work for you, not the insurers, ensuring truly impartial recommendations.',
    icon: CheckCircle
  },
  {
    title: 'Competitive Pricing',
    description: 'Access to leading insurers means we can find you the best value for money.',
    icon: TrendingUp
  },
  {
    title: 'Personal Touch',
    description: 'Every client receives individual attention and bespoke insurance solutions.',
    icon: Users
  },
  {
    title: 'Claims Excellence',
    description: 'We support you through every step of the claims process.',
    icon: Star
  }
]

export default function PersonalInsuranceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Focus Insurance for
              <span className="block text-[#F61F41] mt-2">Personal Cover?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine industry expertise with personal service to deliver exceptional insurance solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group text-center"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F61F41] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 lg:p-16 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Focus Insurance Advantage
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with a trusted independent broker
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="flex items-start space-x-6 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F61F41] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#F61F41] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F61F41] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
