'use client'

import { Phone, Mail, MessageCircle, Building2, Shield, CheckCircle, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CommercialInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Protect Your
            <span className="block text-[#F61F41] mt-2">Business?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Get expert commercial insurance advice and competitive quotes from our experienced business insurance specialists. 
            All quotes subject to underwriting criteria and terms and conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Call Our Commercial Team</h3>
            <p className="text-blue-100 mb-6">Speak directly with our commercial insurance specialists</p>
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
            <p className="text-blue-100 mb-6">Send us your business requirements for a detailed quote</p>
            <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-semibold text-[#F61F41] hover:text-white transition-colors duration-200 break-all">
              info@focusinsurance.co.uk
            </a>
            <p className="text-sm text-blue-200 mt-2">Response within 2 hours during business hours</p>
          </div>

          {/* Business Consultation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Consultation</h3>
            <p className="text-blue-100 mb-6">Book a consultation with our commercial specialists</p>
            <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Book Consultation
            </Button>
            <p className="text-sm text-blue-200 mt-2">Free risk assessment available</p>
          </div>
        </div>

        {/* Commercial Quote Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Get Your Commercial Insurance Quote</h3>
            <p className="text-blue-100 text-lg">Complete the form below and our commercial team will provide you with competitive quotes tailored to your business needs</p>
            <div className="mt-4 text-sm text-blue-200">
              <p>*All quotes subject to underwriting criteria and terms and conditions</p>
            </div>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Business Name *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your business name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Contact Name *</label>
              <input
                type="text"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter contact name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your email"
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
              <label className="block text-sm font-medium text-white mb-2">Business Type *</label>
              <select 
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#001d3d] text-white">Select business type</option>
                <option value="retail" className="bg-[#001d3d] text-white">Retail</option>
                <option value="hospitality" className="bg-[#001d3d] text-white">Hospitality</option>
                <option value="professional-services" className="bg-[#001d3d] text-white">Professional Services</option>
                <option value="manufacturing" className="bg-[#001d3d] text-white">Manufacturing</option>
                <option value="transport" className="bg-[#001d3d] text-white">Transport & Logistics</option>
                <option value="construction" className="bg-[#001d3d] text-white">Construction</option>
                <option value="healthcare" className="bg-[#001d3d] text-white">Healthcare</option>
                <option value="other" className="bg-[#001d3d] text-white">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Insurance Type Required *</label>
              <select 
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#001d3d] text-white">Select insurance type</option>
                <option value="commercial-combined" className="bg-[#001d3d] text-white">Commercial Combined</option>
                <option value="public-liability" className="bg-[#001d3d] text-white">Public Liability</option>
                <option value="professional-indemnity" className="bg-[#001d3d] text-white">Professional Indemnity</option>
                <option value="commercial-vehicle" className="bg-[#001d3d] text-white">Commercial Vehicle</option>
                <option value="commercial-property" className="bg-[#001d3d] text-white">Commercial Property</option>
                <option value="multiple" className="bg-[#001d3d] text-white">Multiple Types</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Business Details & Requirements</label>
              <textarea
                rows={4}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all resize-none"
                placeholder="Please provide details about your business, number of employees, annual turnover, and specific insurance requirements..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 w-4 h-4 text-[#F61F41] bg-white/10 border-white/20 rounded focus:ring-[#F61F41] focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-blue-100">
                  I consent to Focus Insurance Services contacting me about my commercial insurance enquiry. I understand that my data will be processed in accordance with the Privacy Policy and that I can withdraw consent at any time. *
                </label>
              </div>
            </div>

            <div className="md:col-span-2 text-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <CheckCircle className="mr-3 w-5 h-5" />
                Get My Commercial Insurance Quote
              </Button>
              
              <div className="mt-6 text-sm text-blue-200 space-y-2">
                <p>We'll respond within 2 hours during business hours</p>
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All quotes subject to underwriting criteria and terms and conditions</p>
              </div>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Shield className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">FCA Regulated</h4>
            <p className="text-blue-100 text-sm">Authorised and regulated by the Financial Conduct Authority for your protection</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <FileText className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Terms & Conditions</h4>
            <p className="text-blue-100 text-sm">All products subject to underwriting criteria, terms and conditions apply</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Users className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Expert Support</h4>
            <p className="text-blue-100 text-sm">Dedicated commercial insurance specialists providing ongoing support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
