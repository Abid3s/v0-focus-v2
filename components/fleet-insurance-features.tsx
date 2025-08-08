"use client"

import { Shield, Users, Clock, Phone, FileText, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FleetInsuranceFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Full cover for your fleet including third party, fire, theft, and accidental damage protection.",
      benefits: [
        "Third party liability cover",
        "Comprehensive accidental damage",
        "Fire and theft protection",
        "Windscreen cover included"
      ]
    },
    {
      icon: Users,
      title: "Flexible Driver Options",
      description: "Choose from any driver, named driver, or age-restricted policies to suit your business needs.",
      benefits: [
        "Any driver options available",
        "Named driver policies",
        "Age restrictions if required",
        "Driver training discounts"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Claims Support",
      description: "Round-the-clock claims handling and emergency assistance to keep your business moving.",
      benefits: [
        "24/7 claims helpline",
        "Emergency roadside assistance",
        "Replacement vehicle service",
        "Fast claims processing"
      ]
    },
    {
      icon: FileText,
      title: "Fleet Management Tools",
      description: "Online portal and management tools to help you track and manage your fleet insurance efficiently.",
      benefits: [
        "Online policy management",
        "Vehicle addition/removal",
        "Certificate downloads",
        "Claims tracking system"
      ]
    },
    {
      icon: Award,
      title: "Risk Management",
      description: "Telematics and risk assessment tools to help reduce premiums and improve driver safety.",
      benefits: [
        "Telematics options available",
        "Driver behaviour monitoring",
        "Risk assessment reports",
        "Premium reduction opportunities"
      ]
    },
    {
      icon: Phone,
      title: "Dedicated Support",
      description: "Personal account management and expert advice from our commercial insurance specialists.",
      benefits: [
        "Dedicated account manager",
        "Expert commercial advice",
        "Policy review services",
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
            Why Choose Our Fleet Insurance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection and expert support designed specifically for UK commercial fleets. 
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
              Ready to Protect Your Fleet?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a competitive quote for your commercial fleet insurance today. 
              Our experts are ready to help you find the right cover for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group">
                <Phone className="mr-2 w-5 h-5" />
                Get Fleet Quote
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
