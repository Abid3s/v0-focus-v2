"use client"

import Image from "next/image"
import { Shield, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CommercialVehicleHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white py-20">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#F61F41] rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-blue-200" aria-label="Breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>Commercial Insurance</span>
              <span>/</span>
              <span className="text-[#F61F41]">Commercial Vehicle Insurance</span>
            </nav>

            {/* FCA badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-4 h-4 text-yellow-400 mr-3" />
              <span className="font-medium text-sm">FCA Authorised & Regulated</span>
            </div>

            {/* Headline and intro */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Commercial Vehicle</span>
                <span className="block text-white">Insurance</span>
                <span className="block text-[#F61F41]">Protection</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Insurance information for vans, couriers and HGV/LGV. Clear, fair and not misleading content is
                provided to help you understand the cover that may be available. No advice or personal recommendation
                is given.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Comprehensive, TPF&amp;T or TPO (eligibility applies)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Use: own goods, hire &amp; reward, courier or haulage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Documents set out limits, exclusions and endorsements</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">EU cover and Green Card where permitted by policy</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Get Vehicle Quote
              </Button>

              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Speak to Advisor
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-gray-400 mt-2">
              <p>
                Subject to underwriting criteria and individual circumstances. Terms, conditions, limits and exclusions apply.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/commercial-fleet-insurance.png"
                alt="UK commercial vehicles including vans and HGV at a depot"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
