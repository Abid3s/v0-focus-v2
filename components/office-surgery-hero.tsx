'use client'

import { CheckCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OfficeSurgeryHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/commercial-insurance" className="hover:text-white transition-colors duration-200">
              Commercial Insurance
            </Link>
            <span>/</span>
            <span className="text-[#F61F41]">Office & Surgery Insurance</span>
          </div>
        </nav>

        {/* FCA Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm font-medium">FCA Authorised & Regulated</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Office & Surgery
                <br />
                Insurance
                <br />
                <span className="text-[#F61F41]">Protection</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Comprehensive insurance solutions for healthcare professionals and office-based businesses. 
                Protect your practice, staff, and patients with tailored coverage designed for UK medical 
                and professional services.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Professional indemnity available*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Medical malpractice cover*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Cyber liability protection*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">24/7 claims helpline</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center space-x-2 bg-[#F61F41] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d91635] transition-all duration-200 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Get Office Quote</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#001d3d] transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Speak to Advisor</span>
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-blue-300 leading-relaxed">
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
                  OFFICE & SURGERY INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/modern-medical-office.png"
                    alt="Modern medical office representing UK healthcare insurance"
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
