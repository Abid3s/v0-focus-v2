'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, Phone, Mail } from 'lucide-react'

export default function ResidentialPropertyHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(246,31,65,0.1),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-500">/</span>
          <Link href="/commercial-insurance" className="text-slate-400 hover:text-white transition-colors">
            Commercial Insurance
          </Link>
          <span className="text-slate-500">/</span>
          <span className="text-red-400 font-medium">Residential Property Insurance</span>
        </nav>

        {/* FCA Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-slate-300 text-sm font-medium">FCA Authorised & Regulated</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Residential Property
                <br />
                Insurance
                <br />
                <span className="text-red-400">Protection</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Comprehensive property insurance solutions for landlords, homeowners, and property investors. 
              Protect your residential investments with tailored coverage designed for the UK property market.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300">Buildings insurance available*</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300">Landlord protection options*</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300">Contents cover available*</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300">24/7 claims support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Get Property Quote
              </button>
              <button className="border border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Speak to Advisor
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-500 leading-relaxed">
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
                  PROPERTY INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/uk-residential-property.png"
                    alt="UK residential property representing comprehensive property insurance coverage"
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
