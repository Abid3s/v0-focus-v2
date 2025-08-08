'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Mail } from 'lucide-react'

export default function CommercialPropertyHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#001d3d] via-[#003566] to-[#001d3d] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/commercial-insurance" className="hover:text-white transition-colors">
              Commercial Insurance
            </Link>
            <span>/</span>
            <span className="text-[#F61F41]">Commercial Property Insurance</span>
          </div>
        </nav>

        {/* FCA Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-white text-sm font-medium">FCA Authorised & Regulated</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Commercial Property
                <br />
                Insurance
                <br />
                <span className="text-[#F61F41]">Protection</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                Comprehensive commercial property insurance covering buildings, contents, and business interruption. 
                Protect your business premises and assets with tailored policies designed for UK commercial property owners and tenants.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white">Buildings insurance available*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white">Contents cover options*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white">Business interruption protection*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white">Property owners liability*</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#F61F41] hover:bg-[#d91736] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Property Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#001d3d] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Speak to Advisor
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-blue-200 leading-relaxed">
              *Subject to underwriting criteria and terms and conditions. Focus Insurance Services is authorised and 
              regulated by the Financial Conduct Authority.
            </p>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Decorative offset squares behind the frame */}
            <div className="pointer-events-none absolute -top-8 left-8 hidden h-20 w-20 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />
            <div className="pointer-events-none absolute -bottom-10 right-12 hidden h-24 w-24 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />

            {/* Framed card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(99,160,255,0.10),rgba(255,255,255,0))]" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                  COMMERCIAL PROPERTY INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/uk-commercial-property.png"
                    alt="UK commercial property building representing business property insurance"
                    width={720}
                    height={540}
                    className="h-full w-full object-cover"
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
