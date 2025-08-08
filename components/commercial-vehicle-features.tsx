"use client"

import { Shield, Truck, Clock, Phone, FileText, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommercialVehicleFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Cover",
      description: "Full protection for your commercial vehicles including third party, fire, theft, and accidental damage.",
      benefits: [
        "Third party liability included",
        "Fire and theft protection",
        "Accidental damage cover",
        "Windscreen replacement"
      ]
    },
    {
      icon: Truck,
      title: "Business Use Cover",
      description: "Specialist cover designed for commercial use including goods carriage and business activities.",
      benefits: [
        "Goods in transit options",
        "Tool and equipment cover",
        "Business use included",
        "Loading/unloading cover"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock claims support and breakdown assistance to keep your business operational.",
      benefits: [
        "24/7 claims helpline",
        "Emergency breakdown cover",
        "Replacement vehicle service",
        "Priority repair network"
      ]
    },
    {
      icon: FileText,
      title: "Fleet Management",
      description: "Easy policy management tools for businesses with multiple commercial vehicles.",
      benefits: [
        "Online policy portal",
        "Certificate downloads",
        "Vehicle additions/removals",
        "Claims tracking"
      ]
    },
    {
      icon: Award,
      title: "Specialist Expertise",
      description: "Expert knowledge of commercial vehicle insurance and regulatory requirements.",
      benefits: [
        "Operator licence compliance",
        "Industry expertise",
        "Regulatory guidance",
        "Risk assessment"
      ]
    },
    {
      icon: Phone,
      title: "Personal Service",
      description: "Dedicated account management and personalised service for your commercial insurance needs.",
      benefits: [
        "Dedicated account manager",
        "Personal service",
        "Expert advice",
        "Renewal management"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Commercial Vehicle Insurance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection and expert support designed specifically for UK commercial vehicles. 
            Our policies provide the cover and flexibility your business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#001d3d] to-[#0066cc] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Protect Your Commercial Vehicles?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a competitive quote for your commercial vehicle insurance today. 
              Our experts are ready to help you find the right cover for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group">
                <Phone className="mr-2 w-5 h-5" />
                Get Vehicle Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Speak to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
