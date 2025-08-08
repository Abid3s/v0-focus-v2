'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, Clock, Shield, Phone, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Commercial Property Specialists",
    description: "Over 15 years of expertise in commercial property insurance, working with property investors, landlords, and business owners across the UK."
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Personal account managers who understand your property portfolio and business needs, providing tailored advice and ongoing support."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    description: "Round-the-clock claims reporting and emergency support, with access to approved contractors and loss adjusters nationwide."
  },
  {
    icon: Shield,
    title: "FCA Regulated & Compliant",
    description: "Fully authorised and regulated by the Financial Conduct Authority, ensuring the highest standards of professional service and client protection."
  },
  {
    icon: Phone,
    title: "Same-Day Cover Available",
    description: "Fast-track underwriting for urgent requirements, with same-day cover available for qualifying commercial properties and standard risks."
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management",
    description: "Comprehensive portfolio management services for multiple properties, including consolidated reporting and renewal management."
  }
]

export default function CommercialPropertyFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d] mb-4">
            Why Choose Focus for Commercial Property Insurance?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our specialist knowledge and comprehensive service approach ensures your commercial property 
            investments are properly protected with the right insurance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#001d3d]/10 rounded-lg group-hover:bg-[#F61F41]/10 transition-colors flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-[#001d3d] group-hover:text-[#F61F41] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#001d3d] mb-2 group-hover:text-[#F61F41] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#001d3d]/5 rounded-full">
            <Shield className="h-5 w-5 text-[#001d3d]" />
            <span className="text-[#001d3d] font-medium">
              Focus Insurance Services is authorised and regulated by the Financial Conduct Authority
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
