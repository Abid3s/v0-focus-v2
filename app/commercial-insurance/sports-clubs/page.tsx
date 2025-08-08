import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Sports, Gyms & Social Clubs Insurance | Focus Insurance Services',
  description:
    'Insurance for sports clubs, gyms and social clubs in the UK. Clear, fair and not misleading information. FCA regulated.',
  keywords: [
    'sports club insurance',
    'gym insurance',
    'social club insurance',
    'public liability for clubs',
    'club insurance UK',
  ],
}

export default function SportsClubsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="mx-2">{'>'}</li>
              <li><Link href="/commercial-insurance" className="hover:text-white">Commercial Insurance</Link></li>
              <li className="mx-2">{'>'}</li>
              <li className="text-white" aria-current="page">Sports, Gyms & Social Clubs</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 mb-4">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>FCA Authorised & Regulated</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Sports, Gyms & Social Clubs Insurance
              </h1>
              <p className="mt-4 text-blue-100">
                Insurance for organisations and venues including sports clubs, gyms and social clubs. We explain what
                is and is not covered to help you make an informed decision. Terms and conditions apply. Subject to
                underwriting.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#F61F41] px-5 py-3 font-medium text-white hover:bg-[#d91635] transition-colors">
                  Enquire now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="tel:01733263311" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                  Call 01733 263311
                </a>
              </div>
              <p className="mt-4 text-xs text-blue-100">
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
                <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                  <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                    CLUBS & VENUES
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image src="/images/uk-sports-club.png" alt="UK sports club facility with equipment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
