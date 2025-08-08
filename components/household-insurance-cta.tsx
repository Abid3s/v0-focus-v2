'use client'

import { Phone, Mail, MessageCircle, Home, Shield, CheckCircle, Users, FileText, AlertTriangle, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HouseholdInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Protect
            <span className="block text-[#F61F41] mt-2">Your Home?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Get expert household insurance advice and competitive quotes from our experienced advisors. 
            All household insurance products are subject to underwriting criteria, terms and conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Call Our Home Insurance Team</h3>
            <p className="text-blue-100 mb-6">Speak directly with our household insurance specialists</p>
            <a href="tel:01733263311" className="text-2xl font-bold text-[#F61F41] hover:text-white transition-colors duration-200">
              01733 263311
            </a>
            <p className="text-sm text-blue-200 mt-2">Mon-Fri 9AM-5PM</p>
          </div>

          {/* Email Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email Enquiry</h3>
            <p className="text-blue-100 mb-6">Send us your household insurance requirements</p>
            <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-semibold text-[#F61F41] hover:text-white transition-colors duration-200 break-all">
              info@focusinsurance.co.uk
            </a>
            <p className="text-sm text-blue-200 mt-2">Response within 2 hours during business hours</p>
          </div>

          {/* Quote Calculator */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Online Quote Tool</h3>
            <p className="text-blue-100 mb-6">Get an indicative household insurance quote online</p>
            <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Start Quote
            </Button>
            <p className="text-sm text-blue-200 mt-2">Instant indicative pricing available</p>
          </div>
        </div>

        {/* Household Insurance Quote Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Get Your Household Insurance Quote</h3>
            <p className="text-blue-100 text-lg mb-4">Complete the form below and our household insurance specialists will provide you with competitive quotes</p>
            
            {/* Important Notice */}
            <div className="bg-blue-900/30 border border-blue-600/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm text-blue-100 leading-relaxed">
                    <strong>FCA Regulated Service:</strong> Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                    All household insurance quotes are subject to underwriting criteria, terms and conditions. 
                    We are committed to treating customers fairly and providing clear information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Property Postcode *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter property postcode"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Property Type *</label>
              <select 
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#001d3d] text-white">Select property type</option>
                <option value="detached-house" className="bg-[#001d3d] text-white">Detached House</option>
                <option value="semi-detached-house" className="bg-[#001d3d] text-white">Semi-Detached House</option>
                <option value="terraced-house" className="bg-[#001d3d] text-white">Terraced House</option>
                <option value="flat-apartment" className="bg-[#001d3d] text-white">Flat/Apartment</option>
                <option value="bungalow" className="bg-[#001d3d] text-white">Bungalow</option>
                <option value="other" className="bg-[#001d3d] text-white">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Cover Required *</label>
              <select 
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#001d3d] text-white">Select cover type</option>
                <option value="buildings-only" className="bg-[#001d3d] text-white">Buildings Insurance Only</option>
                <option value="contents-only" className="bg-[#001d3d] text-white">Contents Insurance Only</option>
                <option value="buildings-and-contents" className="bg-[#001d3d] text-white">Buildings and Contents Combined</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Additional Information</label>
              <textarea
                rows={4}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all resize-none"
                placeholder="Please provide any additional information about your property, security features, or specific requirements..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="household-consent"
                  required
                  className="mt-1 w-4 h-4 text-[#F61F41] bg-white/10 border-white/20 rounded focus:ring-[#F61F41] focus:ring-2"
                />
                <label htmlFor="household-consent" className="text-sm text-blue-100">
                  I consent to Focus Insurance Services contacting me about my household insurance enquiry. 
                  I understand that my data will be processed in accordance with the Privacy Policy and that I can withdraw consent at any time. 
                  I confirm that the information provided is accurate to the best of my knowledge. *
                </label>
              </div>
            </div>

            <div className="md:col-span-2 text-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <CheckCircle className="mr-3 w-5 h-5" />
                Get My Household Insurance Quote
              </Button>
              
              <div className="mt-6 text-sm text-blue-200 space-y-2">
                <p>We'll respond with competitive quotes within 2 hours during business hours</p>
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All household insurance products subject to underwriting criteria and terms and conditions</p>
              </div>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Shield className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">FCA Regulated</h4>
            <p className="text-blue-100 text-sm">Authorised and regulated by the Financial Conduct Authority</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <FileText className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Clear Information</h4>
            <p className="text-blue-100 text-sm">Transparent policy terms and conditions provided</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Users className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Expert Advice</h4>
            <p className="text-blue-100 text-sm">Professional household insurance guidance available</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <AlertTriangle className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Terms Apply</h4>
            <p className="text-blue-100 text-sm">Subject to underwriting criteria and conditions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
