'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ShopCTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    shopType: '',
    location: '',
    currentInsurer: '',
    renewalDate: '',
    requirements: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Shop Insurance Quote Today
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Speak to our retail insurance specialists for a personalised quote tailored to your shop's specific needs and requirements.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Our Experts</h3>
                  <p className="text-slate-300 mb-2">Speak directly with our retail insurance specialists</p>
                  <p className="text-2xl font-bold text-white">01733 263311</p>
                  <p className="text-sm text-slate-400">Lines open Monday to Friday, 9am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Enquiries</h3>
                  <p className="text-slate-300 mb-2">Send us your requirements for a detailed quote</p>
                  <p className="text-lg text-white">info@focusinsurance.co.uk</p>
                  <p className="text-sm text-slate-400">We'll respond within 2 hours during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Visit Our Office</h3>
                  <p className="text-slate-300 mb-2">Face-to-face consultations available</p>
                  <p className="text-white">Focus Insurance Services</p>
                  <p className="text-white">29 Ivatt Way, Peterborough PE3 7PH</p>
                  <p className="text-sm text-slate-400">Appointments available Monday to Friday</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <p className="text-sm text-slate-400">
                    24/7 claims helpline available for existing customers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Request Your Quote</CardTitle>
              <CardDescription>
                Complete this form and we'll provide you with a comprehensive shop insurance quote within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shopType">Type of Shop *</Label>
                  <Select onValueChange={(value) => handleInputChange('shopType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your shop type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing & Fashion</SelectItem>
                      <SelectItem value="food">Food & Grocery</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="jewellery">Jewellery</SelectItem>
                      <SelectItem value="books">Books & Stationery</SelectItem>
                      <SelectItem value="gifts">Gifts & Souvenirs</SelectItem>
                      <SelectItem value="hardware">Hardware & DIY</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Shop Location *</Label>
                  <Input
                    id="location"
                    placeholder="City, County"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentInsurer">Current Insurer</Label>
                    <Input
                      id="currentInsurer"
                      placeholder="If applicable"
                      value={formData.currentInsurer}
                      onChange={(e) => handleInputChange('currentInsurer', e.target.value)}
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
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Tell us about any specific insurance requirements or concerns..."
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                  Get My Shop Insurance Quote
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service. 
                  We'll use your information to provide you with a quote and may contact you about our services. 
                  Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
