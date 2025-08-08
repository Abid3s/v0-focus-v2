'use client'

import { Shield, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function FleetInsuranceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#F61F41] rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-blue-200">
              <span>Home</span>
              <span>/</span>
              <span>Commercial Insurance</span>
              <span>/</span>
              <span className="text-[#F61F41]">Fleet Insurance</span>
            </nav>

            {/* FCA Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-4 h-4 text-yellow-400 mr-3" />
              <span className="font-medium text-sm">FCA Authorised & Regulated</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Fleet</span>
                <span className="block text-white">Insurance</span>
                <span className="block text-[#F61F41]">Protection</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Comprehensive fleet insurance covering commercial vehicles and mixed fleets. Protect your business vehicles with tailored fleet insurance policies designed for UK commercial operations.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Any or named drivers available*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Mixed vehicle types accepted*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Telematics options available*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">24/7 claims support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Get Fleet Quote
              </Button>
              
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Speak to Advisor
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-400 mt-4">
              <p>*Subject to underwriting criteria and terms and conditions. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.</p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            {/* Decorative offset squares behind the frame */}
            <div className="pointer-events-none absolute -top-8 left-8 hidden h-20 w-20 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />
            <div className="pointer-events-none absolute -bottom-10 right-12 hidden h-24 w-24 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />

            {/* Framed card */}
            <div className="relative z-10 rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(99,160,255,0.10),rgba(255,255,255,0))]" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                  FLEET INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/uk-commercial-fleet.png"
                    alt="UK commercial fleet insurance illustration with mixed vehicles"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
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
