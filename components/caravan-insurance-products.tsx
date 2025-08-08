'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, MapPin, Home, Truck, CheckCircle, AlertTriangle, Phone } from 'lucide-react'

export default function CaravanInsuranceProducts() {
  const products = [
    {
      icon: Truck,
      title: "Touring Caravan Insurance",
      description: "Comprehensive insurance for touring caravans used for holidays and recreational travel throughout the UK and Europe.",
      features: [
        "Accidental damage cover",
        "Fire and theft protection",
        "European touring cover available",
        "Personal belongings cover",
        "Awning and equipment protection",
        "Emergency accommodation costs"
      ],
      considerations: [
        "Cover subject to security requirements",
        "Age and value restrictions may apply",
        "European cover requires additional premium"
      ]
    },
    {
      icon: Home,
      title: "Static Caravan Insurance",
      description: "Specialist insurance for static caravans and holiday homes on caravan parks and private sites across the UK.",
      features: [
        "Buildings and contents cover",
        "Site fees protection",
        "Public liability cover",
        "Storm and flood damage",
        "Vandalism protection",
        "Loss of enjoyment cover"
      ],
      considerations: [
        "Site approval may be required",
        "Flood risk areas subject to additional terms",
        "Minimum security standards apply"
      ]
    },
    {
      icon: Shield,
      title: "Motorhome Insurance",
      description: "Comprehensive motorhome insurance combining vehicle and caravan cover for self-propelled recreational vehicles.",
      features: [
        "Road traffic act cover",
        "Comprehensive vehicle protection",
        "Personal effects cover",
        "Breakdown assistance",
        "European travel cover",
        "New for old replacement"
      ],
      considerations: [
        "Valid driving licence required",
        "Vehicle modifications must be declared",
        "Mileage restrictions may apply"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Caravan Insurance Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialist caravan insurance products designed for UK caravan owners. All policies subject to underwriting criteria, terms and conditions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-lg">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F61F41] rounded-lg flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Considerations */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                    Important Considerations
                  </h4>
                  <ul className="space-y-2">
                    {product.considerations.map((consideration, idx) => (
                      <li key={idx} className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 w-4 h-4" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-2">Important Information</p>
              <p>
                All caravan insurance products are subject to underwriting criteria, policy terms and conditions. 
                Cover levels and premiums will vary based on individual circumstances, caravan type, value, and usage. 
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                This information does not constitute advice or a personal recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
