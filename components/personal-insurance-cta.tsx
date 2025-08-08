'use client'

import { Phone, Mail, MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PersonalInsuranceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Protect What
            <span className="block text-[#F61F41] mt-2">Matters Most?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Get expert personal insurance advice and competitive quotes from our experienced team. 
            We're here to help you find the perfect cover for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Call Us Today</h3>
            <p className="text-blue-100 mb-6">Speak directly with our personal insurance experts</p>
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
            <p className="text-blue-100 mb-6">Send us your requirements for a detailed quote</p>
            <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-semibold text-[#F61F41] hover:text-white transition-colors duration-200 break-all">
              info@focusinsurance.co.uk
            </a>
            <p className="text-sm text-blue-200 mt-2">Response within 2 hours</p>
          </div>

          {/* Live Chat */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
            <p className="text-blue-100 mb-6">Instant support from our insurance advisors</p>
            <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Start Chat Now
            </Button>
            <p className="text-sm text-blue-200 mt-2">Available during office hours</p>
          </div>
        </div>

        {/* Quick Quote Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Get Your Personal Insurance Quote</h3>
            <p className="text-blue-100 text-lg">Fill in your details and we'll get back to you with competitive quotes</p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">First Name</label>
              <input
                type="text"
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Last Name</label>
              <input
                type="text"
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Insurance Type</label>
              <select className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer">
                <option value="" className="bg-[#001d3d] text-white">Select insurance type</option>
                <option value="household" className="bg-[#001d3d] text-white">Household Insurance</option>
                <option value="caravan" className="bg-[#001d3d] text-white">Caravan Insurance</option>
                <option value="travel" className="bg-[#001d3d] text-white">Travel Insurance</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Additional Information</label>
              <textarea
                rows={4}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all resize-none"
                placeholder="Tell us about your specific requirements..."
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <Button className="bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <CheckCircle className="mr-3 w-5 h-5" />
                Get My Personal Insurance Quote
              </Button>
              
              <p className="text-sm text-blue-200 mt-4">
                We'll respond within 2 hours during business hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
