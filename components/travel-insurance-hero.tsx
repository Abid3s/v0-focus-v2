'use client'

import { Plane, Shield, CheckCircle, Globe, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function TravelInsuranceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#F61F41] rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#F61F41]/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#F61F41]/30">
              <Plane className="w-4 h-4 text-[#F61F41] mr-2" />
              <span className="text-sm font-medium">Travel Insurance</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Comprehensive Travel Insurance for Your
                <span className="block text-[#F61F41]">Peace of Mind</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Protect your travels with comprehensive cover from Focus Insurance Services. Whether you're planning a single trip or multiple journeys, we'll help you find the right protection.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F61F41]/20 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#F61F41]" />
                </div>
                <span className="text-sm font-medium">Worldwide Cover Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F61F41]/20 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#F61F41]" />
                </div>
                <span className="text-sm font-medium">24/7 Emergency Assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F61F41]/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#F61F41]" />
                </div>
                <span className="text-sm font-medium">Medical & Cancellation Cover</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F61F41]/20 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#F61F41]" />
                </div>
                <span className="text-sm font-medium">FCA Regulated Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://focusinsurance.b2ctravel.co.uk/quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#F61F41] hover:bg-[#d91736] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
                  <Plane className="mr-2 w-5 h-5" />
                  Get Quick Quote & Buy Online
                </Button>
              </Link>
              
              <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 text-lg rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                <Shield className="mr-2 w-5 h-5" />
                Speak to an Expert
              </Button>
            </div>

            {/* Regulatory Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">FCA Regulated Service</p>
                  <p>Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. Travel insurance is arranged through our partner Sunworld Travel. Terms, conditions, and exclusions apply.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/travel-insurance-items.png"
                alt="Travel insurance essentials including passport, luggage, and travel documents"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ready to Travel?</h3>
                    <p className="text-sm text-gray-600">Get covered in minutes</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
