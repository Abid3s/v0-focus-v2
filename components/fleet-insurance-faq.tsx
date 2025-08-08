"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function FleetInsuranceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is considered a fleet for insurance purposes?",
      answer: "A fleet typically consists of 3 or more vehicles owned or operated by the same business. This can include cars, vans, lorries, or mixed vehicle types. Fleet policies offer economies of scale and simplified administration compared to individual vehicle policies."
    },
    {
      question: "Can I add different types of vehicles to my fleet policy?",
      answer: "Yes, most fleet policies can accommodate mixed vehicle types including cars, vans, lorries, and specialist vehicles. Each vehicle type may have different premium rates based on risk factors, but they can all be managed under one policy for convenience."
    },
    {
      question: "What driver options are available for fleet insurance?",
      answer: "Fleet policies typically offer 'any driver' cover (subject to age and licence restrictions), named driver policies, or a combination of both. Any driver policies provide maximum flexibility, while named driver policies can offer cost savings for businesses with consistent drivers."
    },
    {
      question: "How does telematics work with fleet insurance?",
      answer: "Telematics devices monitor driving behaviour including speed, acceleration, braking, and cornering. This data helps insurers assess risk more accurately and can lead to premium discounts for safe driving. It also provides valuable fleet management insights for business owners."
    },
    {
      question: "What happens if I need to add or remove vehicles during the policy term?",
      answer: "Fleet policies are designed to be flexible. You can typically add or remove vehicles throughout the policy term with adjustments to your premium. Most insurers provide online portals or dedicated account managers to make these changes quickly and efficiently."
    },
    {
      question: "Is goods in transit cover included in fleet insurance?",
      answer: "Goods in transit cover is not automatically included in standard fleet motor insurance. However, it can often be added as an optional extra or may be included in specialist courier and delivery fleet policies. This covers goods being transported in your vehicles against theft or damage."
    },
    {
      question: "How are fleet insurance premiums calculated?",
      answer: "Fleet premiums are based on factors including vehicle types, driver profiles, business use, claims history, annual mileage, and where vehicles are kept overnight. Larger fleets often benefit from better rates due to economies of scale and risk spreading."
    },
    {
      question: "What support is available for fleet insurance claims?",
      answer: "Most fleet policies include 24/7 claims support, dedicated claims handlers familiar with commercial needs, and often provide replacement vehicles to minimise business disruption. Some policies also include accident management services and legal expenses cover."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about fleet insurance. 
            Can't find what you're looking for? Our experts are here to help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions about fleet insurance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:01234567890" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold rounded-lg transition-all duration-300"
            >
              Call Our Experts
            </a>
            <a 
              href="mailto:info@focusinsurance.co.uk" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#001d3d] text-[#001d3d] hover:bg-[#001d3d] hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
