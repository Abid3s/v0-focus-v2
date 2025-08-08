'use client'

import { useState } from 'react'
import { Plane, Phone, Mail, MapPin, Clock, Shield, CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function TravelInsuranceCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelType: '',
    destination: '',
    travelDate: '',
    message: '',
    consent: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#F61F41]/10 rounded-lg px-4 py-2 mb-6">
            <Plane className="w-4 h-4 text-[#F61F41] mr-2" />
            <span className="text-sm font-medium text-[#F61F41]">Get Your Travel Insurance</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Protect Your Next Adventure?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a quote in minutes or speak to our expert team for personalised advice on the best travel insurance for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Quick Quote Section */}
          <Card className="border-2 border-[#F61F41]/20 rounded-lg shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#F61F41] to-[#d91736] text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Plane className="w-6 h-6 mr-3" />
                Get Instant Quote & Buy Online
              </CardTitle>
              <p className="text-red-100">Quick, easy, and secure online purchase</p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">Instant online quotes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">Secure payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">Immediate policy documents</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">24/7 online access</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    Powered by Sunworld Travel
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Our travel insurance is provided through our trusted partner Sunworld Travel, offering competitive rates and comprehensive cover options.
                  </p>
                  <p className="text-xs text-gray-600">
                    Focus Insurance Services acts as an introducer to Sunworld Travel. Terms, conditions, and exclusions apply to all policies.
                  </p>
                </div>

                <Link 
                  href="https://focusinsurance.b2ctravel.co.uk/quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#F61F41] hover:bg-[#d91736] text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Plane className="mr-3 w-6 h-6" />
                    Get Quote & Buy Online Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-2 border-gray-200 rounded-lg shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#001d3d] to-[#002a5c] text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                Speak to Our Expert Team
              </CardTitle>
              <p className="text-blue-100">Personalised advice and support</p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  />
                  <select
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  >
                    <option value="">Travel Type *</option>
                    <option value="single-trip">Single Trip</option>
                    <option value="annual-multi-trip">Annual Multi-Trip</option>
                    <option value="winter-sports">Winter Sports</option>
                    <option value="cruise">Cruise</option>
                    <option value="adventure">Adventure Travel</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  />
                  <input
                    type="date"
                    name="travelDate"
                    placeholder="Travel Date"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Additional Information (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all resize-none"
                />

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-[#F61F41] border-gray-300 rounded focus:ring-[#F61F41]"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed">
                    I consent to Focus Insurance Services contacting me about travel insurance products and services. I understand that my data will be processed in accordance with the Privacy Policy and that I can withdraw consent at any time. *
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={!formData.consent}
                  className="w-full bg-[#001d3d] hover:bg-[#F61F41] text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-3 w-5 h-5" />
                  Request Expert Advice
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F61F41]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#F61F41]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Speak to our expert team</p>
            <a href="tel:01733263311" className="text-[#F61F41] font-bold text-lg hover:text-[#d91736] transition-colors">
              01733 263311
            </a>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-5PM</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#F61F41]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#F61F41]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">Get a written quote</p>
            <a href="mailto:info@focusinsurance.co.uk" className="text-[#F61F41] font-bold hover:text-[#d91736] transition-colors">
              info@focusinsurance.co.uk
            </a>
            <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#F61F41]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#F61F41]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">Local Peterborough service</p>
            <p className="text-gray-700 font-medium">Focus Insurance Services</p>
            <p className="text-sm text-gray-500">Peterborough, UK</p>
          </div>
        </div>

        {/* Regulatory Footer */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6 border border-gray-200">
          <div className="flex items-start space-x-4">
            <Shield className="w-6 h-6 text-[#F61F41] mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-2">Important Regulatory Information</p>
              <p className="mb-2">
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). Travel insurance is arranged through our partner Sunworld Travel. All policies are subject to terms, conditions, and exclusions which will be fully explained before purchase.
              </p>
              <p>
                This website provides general information only and does not constitute advice. We recommend that you read the policy wording and key facts document carefully before making a purchase decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
