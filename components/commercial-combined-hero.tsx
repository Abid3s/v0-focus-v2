'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageSquare, Shield, CheckCircle, Clock, Users, Award, TrendingUp } from 'lucide-react'

export function CommercialCombinedHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pt-8 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#F61F41] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link 
                  href="/commercial-insurance" 
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-[#F61F41] md:ml-2 transition-colors duration-200"
                >
                  Commercial Insurance
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Commercial Combined</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* FCA Badge */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10">
            <Shield className="mr-2 h-4 w-4 text-[#F61F41]" />
            FCA Authorised & Regulated
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Commercial Combined{' '}
                <span className="text-[#F61F41]">Insurance</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive business protection combining property, liability, and business interruption cover in one convenient policy. Tailored solutions for UK businesses with competitive premiums and expert claims support.
              </p>

              {/* Key Benefits Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">All-in-one business cover</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Competitive premiums</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">24/7 claims support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Expert business advice</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:01733263311"
                  className="inline-flex items-center justify-center rounded-lg bg-[#F61F41] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#d91635] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F61F41] transition-colors duration-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01733 263311
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Online Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-[#F61F41]" />
                  Same day quotes
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-[#F61F41]" />
                  FCA regulated
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-[#F61F41]" />
                  25+ years experience
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            {/* Decorative offset squares behind the frame */}
            <div className="pointer-events-none absolute -top-8 left-8 hidden h-20 w-20 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />
            <div className="pointer-events-none absolute -bottom-10 right-12 hidden h-24 w-24 rounded-xl bg-white/5 ring-1 ring-white/10 md:block" />

            {/* Framed card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(99,160,255,0.10),rgba(255,255,255,0))]" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                  COMMERCIAL COMBINED INSURANCE
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/uk-commercial-combined.png"
                    alt="UK commercial combined insurance representing comprehensive business protection"
                    width={720}
                    height={540}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 md:-bottom-6 md:-left-6">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">£10M+</div>
                  <div className="text-xs text-gray-600">Liability Cover</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 md:-top-6 md:-right-6">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Claims Support</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/3 -right-8 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Award className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">25+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/3 -left-8 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Same Day</div>
                  <div className="text-xs text-gray-600">Quote Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
