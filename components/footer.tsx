'use client'

import { Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight, FileText, Lock, Scale } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  services: [
    { title: 'Personal Insurance', href: '/personal-insurance' },
    { title: 'Household Insurance', href: '/personal-insurance/household' },
    { title: 'Caravan Insurance', href: '/personal-insurance/caravan' },
    { title: 'Travel Insurance', href: '/personal-insurance/travel' },
  ],
  commercial: [
    { title: 'Commercial Insurance', href: '/commercial-insurance' },
    { title: 'Commercial Vehicle', href: '/commercial-insurance/commercial-vehicle' },
    { title: 'Professional Indemnity', href: '/commercial-insurance/professional-indemnity' },
    { title: 'Commercial Property', href: '/commercial-insurance/commercial-property' },
  ],
  specialist: [
    { title: 'Specialist Insurance', href: '/specialist-insurance' },
    { title: 'Cyber Cover', href: '/specialist-insurance/cyber-cover' },
    { title: 'Unoccupied Property', href: '/specialist-insurance/unoccupied-property' },
    { title: 'Medical Malpractice', href: '/specialist-insurance/medical-malpractice' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Get a Quote', href: '/quote' },
    { title: 'Claims', href: '/claims' },
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/focusinsurance', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/focusinsurance', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/focus-insurance-services', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/focusinsurance', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#F61F41]/5 rounded-full -translate-x-20 -translate-y-20"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo */}
              <div>
                <Image
                  src="/images/focus-logo.png"
                  alt="Focus Insurance Services"
                  width={250}
                  height={75}
                  className="h-12 w-auto mb-6"
                />
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Your trusted partner in insurance excellence. Providing unrivalled expertise, exceptional service, and bespoke insurance solutions across the UK.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#F61F41]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#F61F41]" />
                  </div>
                  <div>
                    <p className="text-blue-100 leading-relaxed">
                      29 Ivatt Way<br />
                      Peterborough<br />
                      Cambridgeshire, PE3 7PH
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#F61F41]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#F61F41]" />
                  </div>
                  <div>
                    <a href="tel:01733263311" className="text-blue-100 hover:text-white transition-colors duration-200 text-lg font-medium">
                      01733 263311
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#F61F41]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#F61F41]" />
                  </div>
                  <div>
                    <a href="mailto:info@focusinsurance.co.uk" className="text-blue-100 hover:text-white transition-colors duration-200 text-lg">
                      info@focusinsurance.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#F61F41]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#F61F41]" />
                  </div>
                  <div>
                    <p className="text-blue-100 leading-relaxed">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Personal Insurance</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Commercial Insurance</h4>
              <ul className="space-y-3">
                {footerLinks.commercial.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-white mb-6 mt-8">Specialist Cover</h4>
              <ul className="space-y-3">
                {footerLinks.specialist.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-[#F61F41] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors duration-200" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* FCA Badge */}
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold text-white text-sm">FCA Regulated</span>
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Authorised and regulated by the Financial Conduct Authority
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10">
              <div className="flex items-start mb-4">
                <Scale className="w-6 h-6 text-[#F61F41] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Legal Information</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Focus Insurance Services is a trading name of Captios Limited, registered in England and Wales under company number 09620500. 
                    Registered Office: 29 Ivatt Way, Peterborough, Cambridgeshire, PE3 7PH. Captios Limited is authorised and regulated by the 
                    Financial Conduct Authority, register no: 717691.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-sm text-blue-100">
                <p>&copy; {new Date().getFullYear()} Focus Insurance Services. All rights reserved.</p>
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                <Link 
                  href="/terms-of-business" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Business
                </Link>
                <Link 
                  href="/privacy-policy" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
                <Link 
                  href="/cookie-policy" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Cookie Policy
                </Link>
                <Link 
                  href="/complaints-procedure" 
                  className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Complaints Procedure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
