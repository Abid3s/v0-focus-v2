'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TakeawaysRestaurantHero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#F61F41] rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#F61F41] rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/commercial-insurance" className="hover:text-white transition-colors">Commercial Insurance</Link>
              <span>/</span>
              <span className="text-[#F61F41] font-medium">Takeaways & Restaurant Insurance</span>
            </nav>

            {/* FCA Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium">FCA Authorised & Regulated</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Takeaway &<br />
                Restaurant<br />
                <span className="text-[#F61F41]">Protection</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Comprehensive insurance solutions for restaurants, takeaways, and food service businesses. Protect your establishment with specialist hospitality cover designed for UK food businesses.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Public liability cover*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Product liability protection*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Equipment breakdown cover*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Business interruption insurance*</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-[#F61F41] hover:bg-[#d91736] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Get Restaurant Quote
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001d3d] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Speak to Advisor
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-blue-300 pt-4 max-w-2xl">
              *Subject to underwriting criteria and terms and conditions. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
            </p>
          </div>

          {/* Right - Framed Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative squares behind */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#F61F41]/20 rounded-lg transform -rotate-12"></div>
            
            {/* Main frame */}
            <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-8 shadow-2xl max-w-md w-full">
              {/* Header text */}
              <div className="text-center mb-6">
                <h3 className="text-[#001d3d] font-bold text-lg tracking-wider">RESTAURANT INSURANCE</h3>
              </div>
              
              {/* Image container with shield effect */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 shadow-inner">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Restaurant+Kitchen"
                    alt="UK restaurant kitchen representing professional food service insurance"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
