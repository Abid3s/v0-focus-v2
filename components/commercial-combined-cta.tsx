'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export function CommercialCombinedCta() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    employees: '',
    turnover: '',
    propertyValue: '',
    currentInsurer: '',
    renewalDate: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Your Commercial Combined Insurance Quote
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Speak to our commercial insurance experts or complete our online form for a comprehensive quote tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Commercial Team</h3>
              <p className="text-gray-600 mb-8">
                Our experienced commercial insurance advisors are ready to help you find the right coverage for your business. 
                We provide expert advice, competitive quotes, and ongoing support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F61F41]/10">
                    <Phone className="h-6 w-6 text-[#F61F41]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 mb-2">Speak directly with our commercial insurance specialists</p>
                  <a href="tel:01733263311" className="text-xl font-bold text-[#F61F41] hover:text-[#d91635] transition-colors duration-200">
                    01733 263311
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F61F41]/10">
                    <Mail className="h-6 w-6 text-[#F61F41]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 mb-2">Send us your enquiry and we'll respond promptly</p>
                  <a href="mailto:info@focusinsurance.co.uk" className="text-lg font-semibold text-[#F61F41] hover:text-[#d91635] transition-colors duration-200">
                    info@focusinsurance.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F61F41]/10">
                    <MapPin className="h-6 w-6 text-[#F61F41]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Focus Insurance Services<br />
                    29 Ivatt Way<br />
                    Peterborough PE3 7PH
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F61F41]/10">
                    <Clock className="h-6 w-6 text-[#F61F41]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Opening Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Focus Insurance?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Over 25 years of commercial insurance experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">FCA authorised and regulated for your protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Access to leading UK commercial insurers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Dedicated account management and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                    placeholder="01733 263311"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select business type</option>
                    <option value="retail">Retail</option>
                    <option value="office">Office</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="construction">Construction</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select range</option>
                    <option value="0">0 (Sole trader)</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-25">11-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="turnover" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Turnover
                  </label>
                  <select
                    id="turnover"
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select range</option>
                    <option value="0-50k">£0 - £50,000</option>
                    <option value="50k-100k">£50,000 - £100,000</option>
                    <option value="100k-250k">£100,000 - £250,000</option>
                    <option value="250k-500k">£250,000 - £500,000</option>
                    <option value="500k-1m">£500,000 - £1,000,000</option>
                    <option value="1m+">£1,000,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Value
                  </label>
                  <select
                    id="propertyValue"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select range</option>
                    <option value="0-100k">£0 - £100,000</option>
                    <option value="100k-250k">£100,000 - £250,000</option>
                    <option value="250k-500k">£250,000 - £500,000</option>
                    <option value="500k-1m">£500,000 - £1,000,000</option>
                    <option value="1m-2m">£1,000,000 - £2,000,000</option>
                    <option value="2m+">£2,000,000+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    placeholder="Current insurance company"
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
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent transition-colors duration-200"
                  placeholder="Please provide any additional information about your business or specific insurance requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F61F41] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d91635] focus:outline-none focus:ring-2 focus:ring-[#F61F41] focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Request Quote
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service. 
                We will contact you within 24 hours with your personalised quote.
              </p>
            </form>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
            All insurance products are subject to underwriting acceptance and terms and conditions apply. 
            This website provides general information only and does not constitute advice.
          </p>
        </div>
      </div>
    </section>
  )
}
