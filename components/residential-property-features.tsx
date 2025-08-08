'use client'

import { Award, Users, Clock, Shield, Phone, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Property Insurance Specialists",
    description: "Over 15 years of expertise in residential property insurance with comprehensive understanding of UK property market risks, building regulations, and current insurance requirements."
  },
  {
    icon: Users,
    title: "Landlord & Investor Expertise",
    description: "Specialist knowledge of buy-to-let portfolios, HMO properties, student accommodation, and commercial property investments with dedicated account management for larger portfolios."
  },
  {
    icon: Clock,
    title: "Same-Day Cover Available",
    description: "Fast, competitive quotes with same-day cover available for urgent requirements. Online quote system and telephone support for immediate property insurance needs."
  },
  {
    icon: Shield,
    title: "FCA Regulated & Compliant",
    description: "Fully authorised and regulated by the Financial Conduct Authority (FRN: 123456), ensuring professional standards, consumer protection, and compliance with current regulations."
  },
  {
    icon: Phone,
    title: "24/7 Claims & Emergency Support",
    description: "Round-the-clock claims assistance with dedicated property claims specialists, emergency helpline, and access to approved contractor networks for urgent repairs."
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Market Access",
    description: "Access to leading UK insurers including specialist property insurers, Lloyd's of London syndicates, and niche providers for unique or high-risk properties."
  }
]

export default function ResidentialPropertyFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Focus for Property Insurance?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional property insurance services backed by FCA regulation, specialist expertise, 
            and comprehensive market access to secure the right protection for your property investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-50 transition-colors">
                  <IconComponent className="w-8 h-8 text-slate-700 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Current Market Expertise
              </h3>
              <p className="text-slate-600 mb-4">
                Our property insurance specialists stay current with market developments, regulatory changes, 
                and emerging risks affecting UK residential properties.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Climate change impact on property insurance</li>
                <li>• Updated flood risk assessments and mapping</li>
                <li>• Building materials cost inflation effects</li>
                <li>• Energy efficiency and sustainability considerations</li>
                <li>• Emerging risks including cyber threats to smart homes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Professional Service Standards
              </h3>
              <p className="text-slate-600 mb-4">
                We provide factual information about property insurance products and market options 
                to support your decision-making process.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Clear, transparent policy documentation</li>
                <li>• Comprehensive comparison of available options</li>
                <li>• Professional guidance on coverage requirements</li>
                <li>• Regular policy reviews and updates</li>
                <li>• Dedicated account management for complex portfolios</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
              We do not provide advice or recommendations - information is provided for comparison purposes only. 
              All insurance products are subject to underwriting criteria and terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
