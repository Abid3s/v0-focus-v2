'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ArrowRight, Car, Shield, Users, CheckCircle } from 'lucide-react'

export default function TaxiInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Get Your Taxi Insurance
            <span className="block text-[#F61F41] mt-2">Quote Today</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Speak to our specialist taxi insurance advisors for competitive quotes and expert guidance. 
            All quotes subject to underwriting criteria and terms and conditions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Call Our Experts</h3>
            <p className="text-gray-300 mb-6">Speak directly to our taxi insurance specialists</p>
            <div className="space-y-2 mb-6">
              <p className="text-2xl font-bold text-[#F61F41]">01733 207 207</p>
              <p className="text-sm text-gray-400">Monday to Friday: 9am - 5:30pm</p>
            </div>
            <Button className="w-full bg-[#F61F41] hover:bg-[#F61F41]/90 text-white font-semibold py-3 rounded-lg">
              Call Now
            </Button>
          </div>

          {/* Email Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email Enquiry</h3>
            <p className="text-gray-300 mb-6">Send us your taxi insurance requirements</p>
            <div className="space-y-2 mb-6">
              <p className="text-lg font-semibold text-blue-400">info@focusinsurance.co.uk</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
              Send Email
            </Button>
          </div>

          {/* Office Visit */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
            <p className="text-gray-300 mb-6">Face-to-face taxi insurance consultation</p>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-300">Focus House, Peterborough</p>
              <p className="text-sm text-gray-400">By appointment only</p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white rounded-2xl p-12 shadow-2xl mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Your Taxi Insurance Quote</h3>
              <p className="text-gray-600">Complete the form below and we'll contact you with a competitive quote</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="hackney-carriage">Hackney Carriage</option>
                    <option value="private-hire">Private Hire Vehicle</option>
                    <option value="executive-car">Executive Car</option>
                    <option value="minibus">Minibus (9+ seats)</option>
                    <option value="fleet">Fleet (Multiple vehicles)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Operating Area *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                    placeholder="e.g. London, Manchester, Birmingham"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200">
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Insurance Status</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200">
                    <option value="">Select status</option>
                    <option value="new-driver">New driver</option>
                    <option value="current-policy">Have current policy</option>
                    <option value="lapsed">Policy lapsed</option>
                    <option value="renewal">Renewal due</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-all duration-200"
                  placeholder="Please provide any additional information about your taxi insurance requirements..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 w-4 h-4 text-[#F61F41] border-gray-300 rounded focus:ring-[#F61F41]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to Focus Insurance Services contacting me about taxi insurance products and services. 
                  I understand that my information will be processed in accordance with the Privacy Policy and that I can withdraw consent at any time.
                </label>
              </div>

              <Button className="w-full bg-[#F61F41] hover:bg-[#F61F41]/90 text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Car className="w-8 h-8 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">All Vehicle Types</h4>
            <p className="text-sm text-gray-300">Hackney carriages, PHVs, executive cars, and fleet operations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">FCA Regulated</h4>
            <p className="text-sm text-gray-300">Authorised and regulated for your protection and peace of mind</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Expert Advisors</h4>
            <p className="text-sm text-gray-300">Specialist knowledge of taxi insurance and industry requirements</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Quick Service</h4>
            <p className="text-sm text-gray-300">Fast quotes with same-day cover available when needed</p>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="max-w-4xl mx-auto space-y-4 text-sm text-gray-300">
              <p>
                <strong className="text-white">Focus Insurance Services</strong> is authorised and regulated by the Financial Conduct Authority. 
                All taxi insurance products are subject to underwriting criteria, terms, conditions, and exclusions.
              </p>
              <p>
                Policy terms, cover levels, and premiums vary based on individual circumstances, vehicle type, operating area, and claims history. 
                We do not provide advice or recommendations - information provided is for guidance only.
              </p>
              <p>
                Professional indemnity insurance and client money protection arrangements are in place. 
                Complaints procedure available on request. Privacy policy and terms of business available on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
