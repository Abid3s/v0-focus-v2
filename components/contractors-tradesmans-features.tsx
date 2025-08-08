'use client'

import { Award, Clock, Shield, Users, Phone, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Trade Specialists",
    description: "Over 15 years of experience providing insurance solutions specifically for contractors, tradesmen, and construction professionals across the UK, with deep understanding of industry-specific risks and requirements."
  },
  {
    icon: Clock,
    title: "Same-Day Cover",
    description: "Fast-track applications with same-day cover available for urgent requirements. Get protected quickly when starting new contracts, tenders, or projects with immediate effect subject to underwriting acceptance."
  },
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "Complete insurance packages combining public liability, professional indemnity, tools cover, and employers liability in tailored solutions."
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Dedicated team with extensive knowledge of construction and trade sector risks, working exclusively with A-rated insurers who specialise in contractors and understand your business challenges."
  },
  {
    icon: Phone,
    title: "24/7 Claims Support",
    description: "Round-the-clock claims helpline with direct access to specialist claims handlers experienced in construction and trade incidents, ensuring rapid response when you need it most."
  },
  {
    icon: FileCheck,
    title: "FCA Regulated Service",
    description: "Fully authorised and regulated by the Financial Conduct Authority, ensuring professional standards and consumer protection in all our services."
  }
]

export function ContractorsTradesmansFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Focus for Contractors Insurance?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We understand the unique challenges facing contractors and tradesmen. Our specialist approach ensures 
            you get the right protection at competitive rates with exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6 group-hover:bg-red-50 transition-colors duration-200">
                <feature.icon className="w-8 h-8 text-slate-700 group-hover:text-red-600 transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-green-800 text-sm font-medium">
              FCA Authorised & Regulated - Your Protection Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
