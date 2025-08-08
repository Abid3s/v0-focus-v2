"use client"

import { Phone, Mail, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CommercialVehicleCTA() {
  const benefits = [
    "Competitive commercial vehicle rates",
    "Expert business insurance advice", 
    "24/7 claims and breakdown support",
    "Flexible payment terms available"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#0066cc] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#F61F41] rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Shield className="w-4 h-4 text-yellow-400 mr-3" />
                <span className="font-medium text-sm">FCA Authorised & Regulated</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="block">Get Your Commercial</span>
                <span className="block">Vehicle Insurance</span>
                <span className="block text-[#F61F41]">Quote Today</span>
              </h2>

              <p className="text-xl text-blue-100 leading-relaxed">
                Protect your commercial vehicles with comprehensive insurance coverage. 
                Our expert team will find you competitive rates and the right level of protection for your business needs.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <Phone className="mr-2 w-5 h-5" />
                Call for Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Email Enquiry
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>01234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri 9am-5pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>commercial@focusinsurance.co.uk</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F61F41] rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Speak to Our Vehicle Experts</h3>
                    <p className="text-blue-100 mb-4">
                      Get personalised advice and competitive quotes from our commercial vehicle insurance specialists.
                    </p>
                    <Button className="bg-white text-[#001d3d] hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Email Your Vehicle Details</h3>
                    <p className="text-blue-100 mb-4">
                      Send us your vehicle information and we'll provide a comprehensive quote within 24 hours.
                    </p>
                    <Button className="bg-white text-[#001d3d] hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-xs text-blue-200 text-center max-w-4xl mx-auto">
            *Subject to underwriting criteria, terms and conditions. All commercial vehicle insurance policies are subject to insurer acceptance. 
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
            This information is provided for guidance only and does not constitute advice or a personal recommendation.
          </p>
        </div>
      </div>
    </section>
  )
}
