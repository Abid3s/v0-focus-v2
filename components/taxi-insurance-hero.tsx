"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TaxiInsuranceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white">
      {/* Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 h-56 w-56 rounded-full bg-[#F61F41]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/commercial-insurance" className="hover:underline">Commercial Insurance</Link></li>
            <li aria-hidden="true">/</li>
          </ol>
          <span className="text-white">Taxi Insurance</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <Shield className="mr-2 h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">FCA Authorised & Regulated</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="block">Specialist</span>
                <span className="block">Taxi <span className="text-[#F61F41]">Insurance</span></span>
              </h1>
              <p className="max-w-2xl text-lg text-blue-100">
                Information for hackney carriages, private hire vehicles and executive cars. Clear, fair and not misleading content to help you make an informed decision. No advice or personal recommendation is provided.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Public liability and vehicle cover options*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Legal expenses and breakdown (where available)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Licensed vehicle and driver requirements apply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-blue-100">Documentation confirms terms, limits and exclusions</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-[#F61F41] px-7 py-6 text-lg hover:bg-[#001d3d]">
                <Phone className="mr-2 h-5 w-5" />
                Get Taxi Quote
              </Button>
              <Button variant="outline" className="border-2 border-white bg-transparent px-7 py-6 text-lg text-white hover:bg-white hover:text-[#001d3d]">
                <Mail className="mr-2 h-5 w-5" />
                Speak to Advisor
              </Button>
            </div>

            <p className="text-xs text-blue-200">
              *Subject to underwriting criteria and policy terms. Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
            </p>
          </div>

          {/* Visual (no floating stats for consistency) */}
          <div className="relative">
            {/* Decorative corner shapes to match the Household hero aesthetic */}
            <div
              className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-2xl border border-white/10 bg-white/5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-2xl border border-white/10 bg-white/5"
              aria-hidden="true"
            />

            {/* Framed card */}
            <figure className="relative overflow-hidden rounded-3xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur-md shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/70 to-white/20 p-4">
                {/* Top label to echo the reference frame */}
                <figcaption className="mb-2 text-center text-xs font-semibold tracking-[0.18em] text-black/80">
                  {'TAXI INSURANCE'}
                </figcaption>

                {/* Image area */}
                <div className="relative aspect-[4/3] w-full rounded-xl">
                  <Image
                    src="/images/london-black-cab.png"
                    alt="Black London taxi cab in a UK city street"
                    fill
                    priority
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="rounded-xl object-cover shadow-xl"
                  />
                  {/* Soft sheen overlay for a premium finish */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 via-transparent to-transparent mix-blend-overlay"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
