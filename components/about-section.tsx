'use client'

import { Shield, Users, Award, CheckCircle, Target, Heart, Star, MapPin, Phone, Mail, Clock, TrendingUp, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const whatSetsUsApart = [
  {
    icon: Shield,
    title: 'Independent Expertise',
    description: 'As an independent broker, we work for you—not for insurers. This means truly impartial advice and access to a comprehensive panel of trusted insurance partners.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We believe every client is unique. Our experienced team listens, understands, and builds bespoke solutions designed around your individual requirements.',
    color: 'from-[#F61F41] to-[#e91e63]'
  },
  {
    icon: Award,
    title: 'Comprehensive Product Range',
    description: 'From household, motor, and caravan insurance to complex commercial and specialist covers, we provide the protection you need, whatever your circumstances.',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: TrendingUp,
    title: 'Personal Service, Modern Approach',
    description: 'Blending traditional values with cutting-edge digital solutions, we offer the accessibility and responsiveness you expect—via phone, email, in-branch, or live chat.',
    color: 'from-green-600 to-green-700'
  }
]

const commitments = [
  {
    icon: Heart,
    title: 'Building Long-Term Relationships',
    description: 'Founded on trust, transparency, and proactive advice'
  },
  {
    icon: CheckCircle,
    title: 'Fast, Efficient Claims Support',
    description: 'Dedicated account management at every stage'
  },
  {
    icon: Star,
    title: 'Continuous Investment',
    description: 'In our people, technology, and community—ensuring we remain at the forefront'
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#001d3d]/10 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-[#001d3d] mr-2" />
            <span className="text-[#001d3d] font-semibold text-sm tracking-wide">About Focus Insurance</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Your Trusted Partner in
            <span className="block text-[#F61F41] mt-2">Insurance Excellence</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              At Focus Insurance Services, we are committed to providing unrivalled expertise, exceptional service, and bespoke insurance solutions that put our clients' needs at the centre of everything we do.
            </p>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Established in Peterborough, Focus Insurance Services has built a sterling reputation as a leading independent insurance broker, recognised for our integrity, professionalism, and in-depth industry knowledge. From our high street office at 29 Ivatt Way, we serve a diverse portfolio of clients—ranging from individuals and families to entrepreneurs and established businesses—across the UK.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] rounded-2xl p-12 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F61F41]/20 rounded-full translate-y-20 -translate-x-20"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#F61F41]/10 rounded-full -translate-x-16 -translate-y-16"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-[#F61F41] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              To deliver peace of mind by offering robust, tailored insurance solutions, combining best-in-class cover with dedicated personal service.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence and client satisfaction drives everything we do
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {whatSetsUsApart.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#F61F41] transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-12 lg:p-16 mb-20 border border-gray-100 shadow-lg">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We pledge to deliver exceptional service at every touchpoint
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-[#F61F41] to-[#e91e63] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F61F41] transition-colors duration-300">
                    {commitment.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-10">
              Visit Our Peterborough Office
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#F61F41]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-[#F61F41]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Our Address</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    29 Ivatt Way<br />
                    Peterborough<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#F61F41]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-[#F61F41]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone</h4>
                  <p className="text-gray-600 text-lg">01733 263311</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#F61F41]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-[#F61F41]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <p className="text-gray-600 text-lg">info@focusinsurance.co.uk</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#F61F41]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-[#F61F41]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Opening Hours</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F61F41]/20 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#F61F41] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Whether you are safeguarding your family home, your livelihood, or your business assets, Focus Insurance Services stands ready to be your insurance partner of choice—today, tomorrow, and for the future.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-[#F61F41] hover:bg-white hover:text-[#001d3d] text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  Call Us Today
                </Button>
                
                <Link href="/contact">
                  <Button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-[#001d3d] text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-lg">
                    <Mail className="w-5 h-5 mr-3" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-12 lg:p-16 border border-gray-200 shadow-lg">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Experience the Focus Insurance Difference
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who trust us with their insurance needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-[#F61F41] hover:bg-[#001d3d] text-white font-semibold px-10 py-5 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              Get Your Quote
            </Button>
            
            <Link href="/about">
              <Button className="bg-transparent border-2 border-[#001d3d] hover:bg-[#001d3d] hover:text-white text-[#001d3d] font-semibold px-10 py-5 text-xl rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                <Users className="w-6 h-6 mr-3" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
