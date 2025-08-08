'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ResidentialPropertyCTA() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Property Insurance Quote
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Speak to our property insurance specialists for competitive quotes and professional guidance 
                on residential property protection.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Our Property Team</h3>
                  <p className="text-slate-300 mb-2">Speak directly to our property insurance specialists</p>
                  <p className="text-2xl font-bold text-red-400">0800 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Enquiries</h3>
                  <p className="text-slate-300 mb-2">Send us your property insurance requirements</p>
                  <p className="text-slate-300">property@focusinsurance.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Opening Hours</h3>
                  <div className="text-slate-300 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>24/7 Emergency Claims Line</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Visit Our Office</h3>
                  <div className="text-slate-300">
                    <p>Focus Insurance Services</p>
                    <p>123 High Street, London, EC1A 1BB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Property Quote</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Select property type</option>
                  <option value="house">House</option>
                  <option value="flat">Flat/Apartment</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="maisonette">Maisonette</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Type Required</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Select insurance type</option>
                  <option value="buildings">Buildings Insurance</option>
                  <option value="contents">Contents Insurance</option>
                  <option value="combined">Buildings & Contents</option>
                  <option value="landlord">Landlord Insurance</option>
                  <option value="high-value">High-Value Home</option>
                  <option value="holiday-home">Holiday Home</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Postcode</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter property postcode"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-semibold transition-colors"
              >
                Request Property Quote
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to be contacted about your property insurance requirements. 
                Subject to underwriting criteria and terms and conditions.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              FCA Regulated Property Insurance Service
            </h3>
            <p className="text-slate-300 max-w-4xl mx-auto">
              Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
              We provide factual information about property insurance products to help you make informed decisions. 
              We do not provide advice or recommendations - all information is provided for comparison purposes only. 
              Terms and conditions apply to all insurance products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
