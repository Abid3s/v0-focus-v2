'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ShopHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)] opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/commercial-insurance" className="hover:text-white transition-colors">
            Commercial Insurance
          </Link>
          <span>/</span>
          <span className="text-red-400">Shop Insurance</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* FCA Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              FCA Authorised & Regulated
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Shop
                <br />
                Insurance
                <br />
                <span className="text-red-500">Protection</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Comprehensive retail insurance covering your premises, stock, and customers. Protect your shop with tailored insurance policies designed for UK retailers and high street businesses.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">Public liability cover*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">Stock protection*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">Business interruption*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">24/7 claims helpline</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Shop Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Speak to Advisor
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-400 leading-relaxed">
              *Subject to underwriting criteria and terms and conditions. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
            </p>
          </div>

          {/* Right - Framed Image */}
          <div className="relative">
            {/* Decorative offset squares behind the frame */}
            <div className="pointer-events-none absolute -top-8 left-8 hidden h-20 w-20 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />
            <div className="pointer-events-none absolute -bottom-10 right-12 hidden h-24 w-24 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />

            {/* Framed card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(99,160,255,0.10),rgba(255,255,255,0))]" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                  SHOP INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/uk-retail-shop.png"
                    alt="UK retail shop representing comprehensive shop insurance coverage"
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
