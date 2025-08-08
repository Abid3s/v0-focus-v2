"use client"

import { Truck, Car, Package, CheckCircle, AlertTriangle, ArrowRight, Phone, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommercialVehicleProducts() {
  const products = [
    {
      title: "Van Insurance",
      description: "Comprehensive cover for commercial vans and light goods vehicles",
      features: [
        "Goods in transit cover available",
        "Tool cover included",
        "Business use covered",
        "Breakdown assistance"
      ],
      icon: Package,
      popular: true
    },
    {
      title: "Lorry Insurance",
      description: "Specialist cover for HGVs and heavy commercial vehicles",
      features: [
        "Operator's licence compliance",
        "Trailer cover available",
        "International use options",
        "Specialist claims handling"
      ],
      icon: Truck,
      popular: false
    },
    {
      title: "Commercial Car",
      description: "Business use cover for cars and light commercial vehicles",
      features: [
        "Business use included",
        "Any driver options",
        "Competitive rates",
        "Fast claims service"
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
            Commercial Vehicle Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your commercial vehicles with our comprehensive insurance solutions. 
            From vans to lorries, we have the right cover for your business needs.
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
                All commercial vehicle insurance policies are subject to underwriting criteria, terms and conditions. 
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
