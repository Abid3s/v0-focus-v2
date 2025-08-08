'use client'

import { Phone, Mail, MessageCircle, Shield, CheckCircle, Users, FileText, AlertTriangle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SpecialistInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready for Specialist
            <span className="block text-[#F61F41] mt-2">Insurance Solutions?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Get expert specialist insurance advice from our experienced team. All specialist insurance products are subject to detailed underwriting assessment, terms and conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Call Specialist Team</h3>
            <p className="text-blue-100 mb-6">Speak directly with our specialist insurance experts</p>
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
            <p className="text-blue-100 mb-6">Send us your specialist requirements for expert assessment</p>
            <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-semibold text-[#F61F41] hover:text-white transition-colors duration-200 break-all">
              info@focusinsurance.co.uk
            </a>
            <p className="text-sm text-blue-200 mt-2">Response within 2 hours during business hours</p>
          </div>

          {/* Risk Assessment */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Risk Assessment</h3>
            <p className="text-blue-100 mb-6">Book a comprehensive risk assessment consultation</p>
            <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Book Assessment
            </Button>
            <p className="text-sm text-blue-200 mt-2">Expert risk evaluation available</p>
          </div>
        </div>

        {/* Specialist Quote Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Get Your Specialist Insurance Quote</h3>
            <p className="text-blue-100 text-lg mb-4">Complete the form below for expert assessment of your specialist insurance requirements</p>
            
            {/* Important Notice */}
            <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm text-yellow-100 leading-relaxed">
                    <strong>Important:</strong> Specialist insurance requires detailed underwriting assessment. 
                    Cover availability and terms depend on individual risk factors and market conditions. 
                    All quotes subject to underwriting criteria and terms and conditions.
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
              <label className="block text-sm font-medium text-white mb-2">Company/Organisation</label>
              <input
                type="text"
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter company name (if applicable)"
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Specialist Insurance Type *</label>
              <select 
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#001d3d] text-white">Select specialist insurance type</option>
                <option value="cyber-cover" className="bg-[#001d3d] text-white">Cyber Cover</option>
                <option value="unoccupied-property" className="bg-[#001d3d] text-white">Unoccupied Property</option>
                <option value="medical-malpractice" className="bg-[#001d3d] text-white">Medical Malpractice</option>
                <option value="other-specialist" className="bg-[#001d3d] text-white">Other Specialist Cover</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Detailed Requirements *</label>
              <textarea
                rows={5}
                required
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all resize-none"
                placeholder="Please provide detailed information about your specialist insurance requirements, including any specific risks, previous claims history, and current cover arrangements..."
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="specialist-consent"
                  required
                  className="mt-1 w-4 h-4 text-[#F61F41] bg-white/10 border-white/20 rounded focus:ring-[#F61F41] focus:ring-2"
                />
                <label htmlFor="specialist-consent" className="text-sm text-blue-100">
                  I consent to Focus Insurance Services contacting me about my specialist insurance enquiry. 
                  I understand that specialist insurance requires detailed underwriting assessment and that my data will be processed in accordance with the Privacy Policy. 
                  I can withdraw consent at any time. *
                </label>
              </div>
            </div>

            <div className="md:col-span-2 text-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <CheckCircle className="mr-3 w-5 h-5" />
                Request Specialist Assessment
              </Button>
              
              <div className="mt-6 text-sm text-blue-200 space-y-2">
                <p>Our specialist team will respond within 4 hours during business hours</p>
                <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority</p>
                <p>All specialist insurance products subject to detailed underwriting assessment</p>
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
            <h4 className="text-lg font-bold mb-2">Expert Assessment</h4>
            <p className="text-blue-100 text-sm">Detailed risk assessment by specialist underwriters</p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <Users className="w-12 h-12 text-[#F61F41] mx-auto mb-4" />
            <h4 className="text-lg font-bold mb-2">Specialist Support</h4>
            <p className="text-blue-100 text-sm">Dedicated specialist insurance advisors</p>
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
