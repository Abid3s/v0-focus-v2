'use client'

import { Home, CheckCircle, Users, Award, Phone, Mail, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HouseholdInsuranceHero() {
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
              <span>Personal Insurance</span>
              <span>/</span>
              <span className="text-[#F61F41]">Household Insurance</span>
            </nav>

            {/* FCA Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-4 h-4 text-yellow-400 mr-3" />
              <span className="font-medium text-sm">FCA Authorised & Regulated</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Household</span>
                <span className="block text-white">Insurance</span>
                <span className="block text-[#F61F41]">Protection</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Comprehensive home insurance covering buildings and contents. Protect your property and belongings with tailored household insurance policies designed for UK homeowners and tenants.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Buildings insurance available*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Contents cover options*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Personal possessions cover*</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">24/7 claims helpline</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Get Household Quote
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
            <div className="relative z-10">
              <Image
                src="/modern-home-insurance.png"
                alt="Modern Home Insurance Protection for UK Properties"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F61F41] rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">15,000+</p>
                  <p className="text-sm text-blue-200">Homes Protected</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.8/5</p>
                  <p className="text-sm text-blue-200">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
