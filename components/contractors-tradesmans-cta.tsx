'use client'

import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ContractorsTradesmansCta() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Contractors Insurance Quote Today
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Speak to our specialist team for tailored contractors and tradesmans insurance solutions. 
            We're here to protect your business with comprehensive cover at competitive rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Our Specialists</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-300">01733 263311</p>
                    <p className="text-sm text-slate-400">Free from landlines and mobiles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-300">info@focusinsurance.co.uk</p>
                    <p className="text-sm text-slate-400">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Opening Hours</h4>
                    <p className="text-slate-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-300">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-slate-400">24/7 claims support available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office</h4>
                    <p className="text-slate-300">Focus Insurance Services</p>
                    <p className="text-slate-300">Peterborough, Cambridgeshire</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-400" />
                Why Choose Our Contractors Insurance?
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Specialist knowledge of construction and trade risks</li>
                <li>• Access to leading insurers and competitive rates</li>
                <li>• Same-day cover available for urgent requirements</li>
                <li>• Comprehensive packages tailored to your trade</li>
                <li>• 24/7 claims support with dedicated handlers</li>
                <li>• FCA regulated for your peace of mind</li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Get Your Quote</CardTitle>
              <CardDescription>
                Complete the form below and we'll provide a tailored contractors insurance quote within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Enter your business name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tradeType">Type of Trade/Contractor *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your trade type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="builder">Builder/General Building</SelectItem>
                    <SelectItem value="electrician">Electrician</SelectItem>
                    <SelectItem value="plumber">Plumber/Heating Engineer</SelectItem>
                    <SelectItem value="carpenter">Carpenter/Joiner</SelectItem>
                    <SelectItem value="roofer">Roofer/Roofing Contractor</SelectItem>
                    <SelectItem value="decorator">Painter/Decorator</SelectItem>
                    <SelectItem value="landscaper">Landscaper/Groundworker</SelectItem>
                    <SelectItem value="plasterer">Plasterer/Renderer</SelectItem>
                    <SelectItem value="tiler">Tiler/Floor Layer</SelectItem>
                    <SelectItem value="glazier">Glazier/Window Fitter</SelectItem>
                    <SelectItem value="demolition">Demolition Contractor</SelectItem>
                    <SelectItem value="scaffolder">Scaffolder</SelectItem>
                    <SelectItem value="other">Other Trade (please specify)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualTurnover">Annual Turnover</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select annual turnover" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under50k">Under £50,000</SelectItem>
                    <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
                    <SelectItem value="100k-250k">£100,000 - £250,000</SelectItem>
                    <SelectItem value="250k-500k">£250,000 - £500,000</SelectItem>
                    <SelectItem value="500k-1m">£500,000 - £1,000,000</SelectItem>
                    <SelectItem value="over1m">Over £1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverageNeeded">Coverage Required</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public-liability">Public Liability Insurance</SelectItem>
                    <SelectItem value="employers-liability">Employers Liability Insurance</SelectItem>
                    <SelectItem value="combined">Combined Liability Package</SelectItem>
                    <SelectItem value="tools-equipment">Tools & Equipment Insurance</SelectItem>
                    <SelectItem value="professional-indemnity">Professional Indemnity</SelectItem>
                    <SelectItem value="contract-works">Contract Works Insurance</SelectItem>
                    <SelectItem value="comprehensive">Complete Contractors Package</SelectItem>
                    <SelectItem value="unsure">Not Sure - Need Guidance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your specific requirements, current cover, or any questions you have..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold">
                Get My Contractors Quote
              </Button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to be contacted by Focus Insurance Services regarding your enquiry. 
                We respect your privacy and will not share your details with third parties.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 p-6 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-sm text-slate-300 text-center">
            <strong>Regulatory Information:</strong> Focus Insurance Services is authorised and regulated by the Financial Conduct Authority (FCA). 
            All insurance products are subject to underwriting acceptance, terms, conditions and exclusions. The information provided is for 
            guidance purposes only and does not constitute financial advice. You should consider whether the products meet your needs and seek 
            professional advice if required.
          </p>
        </div>
      </div>
    </section>
  )
}
