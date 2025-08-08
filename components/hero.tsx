'use client'

import { TrendingUp, Shield, CheckCircle, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#F61F41] rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* FCA Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-4 h-4 text-yellow-400 mr-3" />
              <span className="font-medium text-sm">FCA Authorised & Regulated Insurance Brokers</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-white">Focus On</span>
                <span className="block text-white">What's</span>
                <span className="block text-[#F61F41]">Important</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Let us make sure you're covered.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-[#001d3d] hover:bg-[#F61F41] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <User className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Get Quote
              </Button>
              
              <Button className="bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <TrendingUp className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Our Services
              </Button>
            </div>

            {/* Insurance Partners Scrolling Section */}
            <div className="pt-8">
              <p className="text-center text-gray-400 text-sm mb-6 font-medium">Trusted Partners</p>
              
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-4 sm:space-x-6 lg:space-x-8">
                  {/* First set of logos */}
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/allianz-logo.png"
                      alt="Allianz Insurance"
                      width={140}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/arch-logo.png"
                      alt="Arch Insurance"
                      width={140}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/covea-logo.png"
                      alt="Covea Insurance"
                      width={120}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-16 sm:w-24 lg:w-28 xl:w-32 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/nig-logo.png"
                      alt="NIG Insurance"
                      width={80}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-12 sm:w-16 lg:w-20 xl:w-24 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[180px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/jensten-logo.png"
                      alt="Jensten Underwriting"
                      width={160}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 lg:w-36 xl:w-40 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/rsa-logo.png"
                      alt="RSA Insurance"
                      width={140}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[120px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/aig-logo.png"
                      alt="AIG Insurance"
                      width={100}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-14 sm:w-20 lg:w-24 xl:w-28 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[180px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/unicorn-logo.png"
                      alt="Unicorn Underwriting"
                      width={160}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 lg:w-36 xl:w-40 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[180px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/liverpool-victoria-logo.png"
                      alt="Liverpool Victoria"
                      width={160}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 lg:w-36 xl:w-40 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/sabre-logo.png"
                      alt="Sabre Insurance Group"
                      width={140}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/ms-amlin-logo.png"
                      alt="MS Amlin"
                      width={120}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-16 sm:w-24 lg:w-28 xl:w-32 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[180px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/iprism-logo.png"
                      alt="iprism Underwriting"
                      width={160}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 lg:w-36 xl:w-40 h-auto"
                    />
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/allianz-logo.png"
                      alt="Allianz Insurance"
                      width={140}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/arch-logo.png"
                      alt="Arch Insurance"
                      width={140}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/covea-logo.png"
                      alt="Covea Insurance"
                      width={120}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-16 sm:w-24 lg:w-28 xl:w-32 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/nig-logo.png"
                      alt="NIG Insurance"
                      width={80}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-12 sm:w-16 lg:w-20 xl:w-24 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[180px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/jensten-logo.png"
                      alt="Jensten Underwriting"
                      width={160}
                      height={45}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-24 sm:w-32 lg:w-36 xl:w-40 h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-6 py-2 sm:py-3 lg:py-4 border border-gray-200 shadow-md hover:shadow-lg min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] h-10 sm:h-12 lg:h-16 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/logos/rsa-logo.png"
                      alt="RSA Insurance"
                      width={140}
                      height={40}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity w-20 sm:w-28 lg:w-32 xl:w-36 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Modern Quote Form */}
          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-lg rounded-md sm:rounded-lg border border-white/20 overflow-hidden shadow-2xl">
              {/* Form Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F61F41] rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Get Your Quote</h3>
                    <p className="text-sm sm:text-base text-gray-300">Expert advice in minutes</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 pb-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                    />
                  </div>

                  <select className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a2332] text-white">Select Insurance Type</option>
                    <option value="household" className="bg-[#1a2332] text-white">Household Insurance</option>
                    <option value="caravan" className="bg-[#1a2332] text-white">Caravan Insurance</option>
                    <option value="travel" className="bg-[#1a2332] text-white">Travel Insurance</option>
                    <option value="commercial" className="bg-[#1a2332] text-white">Commercial Insurance</option>
                    <option value="specialist" className="bg-[#1a2332] text-white">Specialist Cover</option>
                  </select>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F61F41] focus:border-transparent backdrop-blur-sm transition-all"
                  />

                  <Button className="w-full bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Request Quote
                  </Button>
                </form>

                {/* FCA Regulated Section */}
                <div className="mt-6 p-3 sm:p-4 bg-white/5 rounded-md sm:rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <Shield className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="font-semibold text-white text-sm">FCA Regulated Service</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>Professional indemnity insurance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>Client money protection</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>Complaints procedure available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
