'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function OfficeSurgeryCTA() {
  const [formData, setFormData] = useState({
    practiceType: '',
    name: '',
    email: '',
    phone: '',
    postcode: '',
    currentInsurer: '',
    renewalDate: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#001d3d] mb-6">
                Get Your Healthcare Insurance Quote
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Speak to our healthcare insurance specialists for expert advice and competitive quotes 
                tailored to your medical practice or office-based business.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#F61F41]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001d3d] mb-2">Call Our Specialists</h3>
                  <p className="text-gray-600 mb-2">Speak directly to our healthcare insurance experts</p>
                  <a href="tel:01733263311" className="text-[#F61F41] font-semibold text-lg hover:underline">
                    01733 263311
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#F61F41]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001d3d] mb-2">Email Enquiries</h3>
                  <p className="text-gray-600 mb-2">Send us your requirements for a detailed quote</p>
                  <a href="mailto:info@focusinsurance.co.uk" className="text-[#F61F41] font-semibold hover:underline">
                    info@focusinsurance.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F61F41]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001d3d] mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">
                    29 Ivatt Way<br />
                    Peterborough<br />
                    Cambridgeshire, PE3 7PH
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F61F41]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#F61F41]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001d3d] mb-2">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-semibold text-[#001d3d]">Why Choose Focus Insurance?</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  FCA Authorised & Regulated
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Healthcare Insurance Specialists
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Competitive Rates & Expert Advice
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  24/7 Claims Support
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Quote Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#001d3d] mb-6">Request Your Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="practiceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Practice Type *
                </label>
                <select
                  id="practiceType"
                  name="practiceType"
                  value={formData.practiceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select practice type</option>
                  <option value="gp-surgery">GP Surgery</option>
                  <option value="dental-practice">Dental Practice</option>
                  <option value="veterinary-practice">Veterinary Practice</option>
                  <option value="physiotherapy">Physiotherapy Clinic</option>
                  <option value="optometry">Optometry Practice</option>
                  <option value="medical-consultant">Medical Consultant</option>
                  <option value="office-based">Office-Based Business</option>
                  <option value="other">Other Healthcare Professional</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="01733 123456"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="PE3 7PH"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentInsurer" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Insurer
                  </label>
                  <input
                    type="text"
                    id="currentInsurer"
                    name="currentInsurer"
                    value={formData.currentInsurer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="Current insurance provider"
                  />
                </div>

                <div>
                  <label htmlFor="renewalDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Renewal Date
                  </label>
                  <input
                    type="date"
                    id="renewalDate"
                    name="renewalDate"
                    value={formData.renewalDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your specific insurance requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F61F41] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#d91635] transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Get My Quote</span>
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              By submitting this form, you agree to be contacted by Focus Insurance Services regarding your enquiry. 
              We are authorised and regulated by the Financial Conduct Authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
