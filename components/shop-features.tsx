'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Award, Clock, Users, Shield, Phone, FileText } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Retail Insurance Specialists",
    description: "Over 20 years of experience providing insurance solutions specifically for UK retail businesses and high street shops."
  },
  {
    icon: Clock,
    title: "Quick Quote Process",
    description: "Get your shop insurance quote in minutes with our streamlined application process designed for busy retailers."
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Personal service from experienced insurance professionals who understand the unique challenges facing retail businesses."
  },
  {
    icon: Shield,
    title: "FCA Regulated Service",
    description: "Complete peace of mind with our fully regulated service, ensuring the highest standards of professional conduct and customer protection."
  },
  {
    icon: Phone,
    title: "24/7 Claims Support",
    description: "Round-the-clock claims helpline ensuring you get the support you need when incidents occur, minimising business disruption."
  },
  {
    icon: FileText,
    title: "Comprehensive Policy Reviews",
    description: "Regular policy reviews to ensure your cover remains appropriate as your business grows and evolves in the retail market."
  }
]

export default function ShopFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Focus for Shop Insurance?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the unique risks facing retail businesses. Our specialist knowledge and personalised service ensure you get the right protection for your shop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            FCA Regulated & Authorised
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
            This means we operate under strict regulatory standards to ensure fair treatment and professional service for all our clients.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Shield className="w-4 h-4" />
            <span>FCA Registration Number: [Registration Number]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
