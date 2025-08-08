'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function CommercialPropertyCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    propertyValue: '',
    currentInsurer: '',
    renewalDate: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d3d] mb-4">
            Get Your Commercial Property Insurance Quote
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Speak to our commercial property insurance specialists for expert advice and competitive quotes. 
            We're here to help protect your property investment with the right insurance solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#001d3d] flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#F61F41]" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Get in touch with our commercial property insurance specialists
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-[#F61F41] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#001d3d]">Phone</p>
                    <p className="text-slate-600">0800 542 2743</p>
                    <p className="text-sm text-slate-500">Mon-Fri 9am-5:30pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#F61F41] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#001d3d]">Email</p>
                    <p className="text-slate-600">info@focusinsurance.co.uk</p>
                    <p className="text-sm text-slate-500">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#F61F41] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#001d3d]">Address</p>
                    <p className="text-slate-600">
                      Focus Insurance Services<br />
                      123 Business Park<br />
                      London, UK
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#F61F41] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#001d3d]">Emergency Claims</p>
                    <p className="text-slate-600">24/7 Claims Helpline</p>
                    <p className="text-sm text-slate-500">Available round the clock</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-[#001d3d] text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Why Choose Focus?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F61F41] rounded-full mr-3"></div>
                    15+ years commercial property expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F61F41] rounded-full mr-3"></div>
                    FCA authorised and regulated
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F61F41] rounded-full mr-3"></div>
                    Same-day cover available
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F61F41] rounded-full mr-3"></div>
                    24/7 emergency support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl text-[#001d3d]">Request Your Quote</CardTitle>
                <CardDescription>
                  Complete the form below and we'll provide you with a competitive commercial property insurance quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="office">Office Building</SelectItem>
                          <SelectItem value="retail">Retail Property</SelectItem>
                          <SelectItem value="industrial">Industrial Unit</SelectItem>
                          <SelectItem value="warehouse">Warehouse</SelectItem>
                          <SelectItem value="mixed-use">Mixed Use</SelectItem>
                          <SelectItem value="residential-let">Residential Let</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyValue">Property Value</Label>
                      <Select onValueChange={(value) => handleInputChange('propertyValue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property value" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under £100,000</SelectItem>
                          <SelectItem value="100k-250k">£100,000 - £250,000</SelectItem>
                          <SelectItem value="250k-500k">£250,000 - £500,000</SelectItem>
                          <SelectItem value="500k-1m">£500,000 - £1,000,000</SelectItem>
                          <SelectItem value="1m-2m">£1,000,000 - £2,000,000</SelectItem>
                          <SelectItem value="over-2m">Over £2,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentInsurer">Current Insurer</Label>
                      <Input
                        id="currentInsurer"
                        value={formData.currentInsurer}
                        onChange={(e) => handleInputChange('currentInsurer', e.target.value)}
                        placeholder="Current insurance provider"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="renewalDate">Renewal Date</Label>
                      <Input
                        id="renewalDate"
                        type="date"
                        value={formData.renewalDate}
                        onChange={(e) => handleInputChange('renewalDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide any additional information about your property or insurance requirements..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#F61F41] hover:bg-[#d91736] text-white font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Get My Quote
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service. 
                    Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. 
                    We will contact you to discuss your requirements and provide a competitive quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
