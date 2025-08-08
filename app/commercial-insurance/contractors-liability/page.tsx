import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle2, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Contractors & Tradesman Liability Insurance | Focus Insurance Services',
  description:
    'Public liability, employers liability and tools cover for UK contractors and tradespeople. Clear, fair and not misleading information. FCA regulated.',
  keywords: [
    'contractors liability insurance',
    'tradesman insurance',
    'public liability insurance',
    'employers liability',
    'tools cover',
  ],
}

export default function ContractorsLiabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero aligned to household layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="mx-2">{'>'}</li>
              <li><Link href="/commercial-insurance" className="hover:text-white">Commercial Insurance</Link></li>
              <li className="mx-2">{'>'}</li>
              <li className="text-white" aria-current="page">Contractors & Tradesman Liability</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 mb-4">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>FCA Authorised & Regulated</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Contractors & Tradesman Liability Insurance
              </h1>
              <p className="mt-4 text-blue-100">
                Flexible liability cover for contractors and trades. Clear summaries of what is and is not covered to
                help you decide what suits your needs. Terms and conditions apply. Subject to underwriting.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#F61F41] px-5 py-3 font-medium text-white hover:bg-[#d91635] transition-colors">
                  Enquire now
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
                    CONTRACTORS
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image src="/uk-contractors-tradesmans.png" alt="Contractor on UK worksite with safety equipment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'Public Liability', d: 'Protection for third-party injury or property damage claims. Limits typically £1m–£10m.' },
              { t: 'Employers Liability', d: 'Legal requirement for most employers. Standard limit £10m.' },
              { t: 'Tools & Equipment', d: 'Cover for theft or damage to tools. Security conditions may apply.' },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <CheckCircle2 className="h-5 w-5" />
                  {i.t}
                </div>
                <p className="mt-2 text-gray-700">{i.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 text-sm text-amber-700">
            <AlertTriangle className="h-4 w-4 mt-0.5" />
            <p>
              Important: Cover is subject to terms, conditions and exclusions. The summary above does not list every
              aspect of cover. Full details are available on request.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
