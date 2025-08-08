'use client'

import { Shield, Clock, Users, Award, Phone, CheckCircle, Star, TrendingUp, AlertTriangle, FileText, Target, Lock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'FCA Regulated Expertise',
    description: 'Fully authorised and regulated by the Financial Conduct Authority, ensuring professional standards in specialist risk assessment.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Users,
    title: 'Specialist Underwriters',
    description: 'Access to expert underwriters who specialise in complex and unique risks that require detailed assessment and bespoke solutions.',
    color: 'from-[#F61F41] to-[#e91e63]'
  },
  {
    icon: Target,
    title: 'Risk Assessment Excellence',
    description: 'Comprehensive risk evaluation and analysis to ensure appropriate cover levels and terms for specialist insurance requirements.',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Recognised expertise in specialist insurance markets with established relationships with leading specialist insurers.',
    color: 'from-purple-600 to-purple-700'
  }
]

const specialistAdvantages = [
  {
    title: 'Expert Risk Analysis',
    description: 'Detailed assessment of unique risks by specialists who understand complex insurance requirements and market conditions.',
    icon: Target
  },
  {
    title: 'Bespoke Policy Design',
    description: 'Tailored insurance solutions designed specifically for your unique circumstances, subject to underwriting approval.',
    icon: FileText
  },
  {
    title: 'Specialist Market Access',
    description: 'Direct access to specialist insurers and Lloyd\'s of London syndicates for complex and unusual risks.',
    icon: Star
  },
  {
    title: 'Claims Expertise',
    description: 'Specialist claims handling support from experts who understand the complexities of unique insurance claims.',
    icon: CheckCircle
  },
  {
    title: 'Regulatory Compliance',
    description: 'Expert guidance on regulatory requirements and compliance issues specific to specialist insurance sectors.',
    icon: Lock
  },
  {
    title: 'Ongoing Risk Management',
    description: 'Proactive risk management advice to help minimise exposures and maintain appropriate cover levels.',
    icon: TrendingUp
  }
]

const riskConsiderations = [
  {
    title: 'Underwriting Complexity',
    description: 'Specialist insurance requires detailed underwriting assessment which may take longer than standard policies.',
    icon: AlertTriangle,
    type: 'warning'
  },
  {
    title: 'Premium Variability',
    description: 'Premiums for specialist cover can vary significantly based on individual risk factors and market conditions.',
    icon: TrendingUp,
    type: 'info'
  },
  {
    title: 'Policy Exclusions',
    description: 'Specialist policies may have specific exclusions and conditions that require careful consideration and understanding.',
    icon: FileText,
    type: 'warning'
  },
  {
    title: 'Market Availability',
    description: 'Cover availability depends on market appetite and may be subject to capacity constraints in certain sectors.',
    icon: Star,
    type: 'info'
  }
]

export default function SpecialistInsuranceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Focus Insurance for
              <span className="block text-[#F61F41] mt-2">Specialist Cover?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine specialist insurance expertise with professional service to deliver exceptional solutions for complex risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Specialist Advantages */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 lg:p-16 border border-gray-100 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Specialist Insurance Advantage
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with specialist insurance experts who understand complex risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialistAdvantages.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F61F41] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#F61F41] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#F61F41] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Risk Considerations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Important Considerations
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the key factors that affect specialist insurance cover and pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskConsiderations.map((consideration, index) => {
              const IconComponent = consideration.icon
              const bgColor = consideration.type === 'warning' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
              const iconColor = consideration.type === 'warning' ? 'text-orange-600' : 'text-blue-600'
              const textColor = consideration.type === 'warning' ? 'text-orange-800' : 'text-blue-800'
              
              return (
                <div
                  key={index}
                  className={`${bgColor} rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <IconComponent className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    
                    <div>
                      <h4 className={`text-lg font-bold ${textColor} mb-3`}>
                        {consideration.title}
                      </h4>
                      <p className={`${textColor} leading-relaxed text-sm`}>
                        {consideration.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FCA Compliance and Professional Standards */}
        <div className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-yellow-400 mr-4" />
                <h3 className="text-3xl lg:text-4xl font-bold">Professional Standards & Compliance</h3>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-blue-100 leading-relaxed">
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
                  Our specialist insurance services adhere to the highest professional standards and regulatory requirements.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Client Protection
                    </h4>
                    <ul className="text-sm text-blue-100 space-y-2">
                      <li>• Professional indemnity insurance in place</li>
                      <li>• Client money protection scheme</li>
                      <li>• FCA complaints procedure available</li>
                      <li>• Financial Services Compensation Scheme protection</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-3 flex items-center">
                      <FileText className="w-5 h-5 text-blue-400 mr-2" />
                      Regulatory Compliance
                    </h4>
                    <ul className="text-sm text-blue-100 space-y-2">
                      <li>• FCA Principles for Businesses compliance</li>
                      <li>• Treating Customers Fairly outcomes</li>
                      <li>• Clear, fair and not misleading communications</li>
                      <li>• Regular regulatory reporting and monitoring</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-sm text-blue-200 bg-white/5 rounded-lg p-6">
                  <p className="leading-relaxed">
                    <strong>Important:</strong> Specialist insurance products are complex and may not be suitable for all circumstances. 
                    We recommend seeking professional advice to ensure any specialist insurance meets your specific requirements. 
                    All products are subject to underwriting criteria, terms, conditions and exclusions. 
                    This information does not constitute advice or a personal recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
