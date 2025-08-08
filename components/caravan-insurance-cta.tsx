'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react'

export default function CaravanInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Protect Your Caravan?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get specialist caravan insurance advice from our experienced team. 
            We'll help you find the right cover for your touring or static caravan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F61F41] hover:bg-[#d91e3a] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call for Caravan Quote
            </Button>
            
            <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Email Our Specialists
            </Button>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#F61F41] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Speak to a Specialist</h3>
              <p className="text-gray-300 mb-6">
                Get immediate caravan insurance advice from our experienced team
              </p>
              <Button className="w-full bg-white/20 hover:bg-white hover:text-[#001d3d] text-white border border-white/30 rounded-lg">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Enquiry</h3>
              <p className="text-gray-300 mb-6">
                Send us your caravan details for a tailored insurance quotation
              </p>
              <Button className="w-full bg-white/20 hover:bg-white hover:text-[#001d3d] text-white border border-white/30 rounded-lg">
                Email Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 rounded-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Request Callback</h3>
              <p className="text-gray-300 mb-6">
                Choose a convenient time for our caravan insurance experts to call
              </p>
              <Button className="w-full bg-white/20 hover:bg-white hover:text-[#001d3d] text-white border border-white/30 rounded-lg">
                Book Callback
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Quote Form */}
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 max-w-4xl mx-auto rounded-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Quick Caravan Insurance Enquiry</h3>
              <p className="text-gray-300">
                Provide your details below and we'll contact you with a competitive caravan insurance quotation
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Caravan Type *</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                >
                  <option value="">Select caravan type</option>
                  <option value="touring">Touring Caravan</option>
                  <option value="static">Static Caravan</option>
                  <option value="motorhome">Motorhome</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                  placeholder="Please provide any additional details about your caravan insurance requirements..."
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-start space-x-3 mb-6">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    required
                    className="mt-1 w-4 h-4 text-[#F61F41] bg-white/20 border-white/30 rounded focus:ring-[#F61F41]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300">
                    I consent to Focus Insurance Services contacting me about caravan insurance products. 
                    I understand that my information will be processed in accordance with the Privacy Policy and that I can withdraw consent at any time. *
                  </label>
                </div>

                <Button className="w-full bg-[#F61F41] hover:bg-[#d91e3a] text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Request Caravan Insurance Quote
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Service Hours & Disclaimer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-[#F61F41] mr-2" />
            <span className="text-gray-300">Office Hours: Monday - Friday 9:00 AM - 5:30 PM</span>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-gray-300">FCA Authorised & Regulated | Professional Indemnity Insured</span>
          </div>

          <p className="text-xs text-gray-400 max-w-4xl mx-auto">
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
            This enquiry form does not constitute an application for insurance or a guarantee of cover. 
            All caravan insurance is subject to underwriting criteria, terms and conditions. 
            We may record calls for training and monitoring purposes.
          </p>
        </div>
      </div>
    </section>
  )
}
