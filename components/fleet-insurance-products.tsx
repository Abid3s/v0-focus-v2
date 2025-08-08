"use client"

import { Car, Truck, Package, CheckCircle, AlertTriangle, ArrowRight, Phone, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FleetInsuranceProducts() {
  const products = [
    {
      title: "Commercial Fleet",
      description: "Comprehensive cover for mixed vehicle fleets",
      features: [
        "Any driver or named driver options",
        "Mixed vehicle types accepted",
        "Telematics available",
        "Fleet management tools"
      ],
      icon: Truck,
      popular: false
    },
    {
      title: "Delivery Fleet",
      description: "Specialist cover for delivery and courier services",
      features: [
        "Goods in transit cover",
        "Public liability included",
        "Flexible driver options",
        "24/7 claims support"
      ],
      icon: Package,
      popular: true
    },
    {
      title: "Mini Fleet",
      description: "Cost-effective solutions for smaller fleets",
      features: [
        "3+ vehicles minimum",
        "Competitive rates",
        "Simple management",
        "Quick quotes available"
      ],
      icon: Car,
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fleet Insurance Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored insurance solutions for commercial vehicle fleets of all sizes. 
            Our policies are designed to meet the specific needs of UK businesses.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${product.popular ? 'ring-2 ring-[#F61F41] shadow-lg' : ''}`}>
              {product.popular && (
                <div className="absolute top-0 right-0 bg-[#F61F41] text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-[#001d3d] hover:bg-[#F61F41] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <Phone className="mr-2 w-4 h-4" />
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Information</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                All fleet insurance policies are subject to underwriting criteria, terms and conditions. 
                Cover levels, policy benefits and exclusions vary between insurers. This information is 
                provided for guidance only and does not constitute advice or a personal recommendation. 
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
