'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TakeawaysRestaurantCTA() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    annualTurnover: '',
    currentInsurer: '',
    renewalDate: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001d3d] mb-4">
            Get Your Restaurant Insurance Quote Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied restaurant and takeaway owners who trust Focus Insurance Services. 
            Get competitive quotes and expert advice from our FCA regulated specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-l-4 border-l-[#F61F41]">
              <CardHeader>
                <CardTitle className="text-[#001d3d] flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-[#F61F41]" />
                  Speak to Our Experts
                </CardTitle>
                <CardDescription>
                  Get immediate assistance from our restaurant insurance specialists
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-[#F61F41] mr-3" />
                  <div>
                    <p className="font-semibold text-[#001d3d]">01733 263311</p>
                    <p className="text-sm text-gray-600">Direct line to our team</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-[#F61F41] mr-3" />
                  <div>
                    <p className="font-semibold text-[#001d3d]">info@focusinsurance.co.uk</p>
                    <p className="text-sm text-gray-600">Email for quotes and enquiries</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-[#F61F41] mr-3" />
                  <div>
                    <p className="font-semibold text-[#001d3d]">Mon-Fri: 9AM-5PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9AM-1PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#F61F41] mr-3" />
                  <div>
                    <p className="font-semibold text-[#001d3d]">Peterborough, UK</p>
                    <p className="text-sm text-gray-600">Serving businesses nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#001d3d] to-[#002a5c] text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  Customer Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm">4.8/5 from 150+ reviews</span>
                  </div>
                  <blockquote className="text-sm italic">
                    "Excellent service for our restaurant chain. Focus Insurance found us comprehensive cover at competitive rates."
                  </blockquote>
                  <p className="text-xs text-blue-200">- Sarah M., Restaurant Owner</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#001d3d]">Request Your Quote</CardTitle>
                <CardDescription>
                  Complete the form below and we'll provide you with a competitive quote within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                        placeholder="Your restaurant/takeaway name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                        placeholder="01733 123456"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                      >
                        <option value="">Select business type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="takeaway">Takeaway</option>
                        <option value="cafe">Café</option>
                        <option value="pub">Pub/Bar</option>
                        <option value="catering">Catering Service</option>
                        <option value="food-truck">Food Truck</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="annualTurnover" className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Turnover
                      </label>
                      <select
                        id="annualTurnover"
                        name="annualTurnover"
                        value={formData.annualTurnover}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                      >
                        <option value="">Select turnover range</option>
                        <option value="under-50k">Under £50,000</option>
                        <option value="50k-100k">£50,000 - £100,000</option>
                        <option value="100k-250k">£100,000 - £250,000</option>
                        <option value="250k-500k">£250,000 - £500,000</option>
                        <option value="500k-1m">£500,000 - £1,000,000</option>
                        <option value="over-1m">Over £1,000,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="currentInsurer" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Insurer
                      </label>
                      <input
                        type="text"
                        id="currentInsurer"
                        name="currentInsurer"
                        value={formData.currentInsurer}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                        placeholder="Current insurance provider"
                      />
                    </div>
                    <div>
                      <label htmlFor="renewalDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Renewal Date
                      </label>
                      <input
                        type="date"
                        id="renewalDate"
                        name="renewalDate"
                        value={formData.renewalDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F61F41] focus:border-transparent"
                      placeholder="Tell us about any specific requirements or previous claims..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                    <Button 
                      type="submit" 
                      className="bg-[#F61F41] hover:bg-[#d91736] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                    >
                      Get Quote Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-[#001d3d] mb-2">FCA Regulated & Authorised</h3>
            <p className="text-sm text-gray-600">
              Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
              All quotes are subject to underwriting criteria, terms, conditions, and exclusions. 
              We are committed to treating customers fairly and providing clear, transparent information about our insurance products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
