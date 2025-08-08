import Image from 'next/image'
import Link from 'next/link'
import { Shield, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001d3d] via-[#002a5c] to-[#001d3d] text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F61F41]/10 rounded-full translate-y-32 -translate-x-32" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center text-sm text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="mx-2">{'>'}</li>
              <li className="text-white aria-current:page" aria-current="page">Contact us</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 mb-4">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>Authorised & Regulated by the Financial Conduct Authority</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Get in touch with Focus Insurance Services
              </h1>
              <p className="mt-4 text-blue-100 text-base sm:text-lg leading-relaxed">
                Speak with our team for clear, fair, and not misleading information about your insurance options. We will explain what is and is not covered to help you make an informed decision. We do not provide advice unless explicitly stated in writing.
              </p>

              {/* Benefits */}
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                  <dt className="flex items-center gap-2 font-semibold"><Phone className="w-4 h-4 text-[#F61F41]" /> Call us</dt>
                  <dd className="text-blue-100">01733 263311 (Mon–Fri, 9:00am–5:00pm)</dd>
                </div>
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                  <dt className="flex items-center gap-2 font-semibold"><Mail className="w-4 h-4 text-[#F61F41]" /> Email</dt>
                  <dd className="text-blue-100">info@focusinsurance.co.uk</dd>
                </div>
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                  <dt className="flex items-center gap-2 font-semibold"><MapPin className="w-4 h-4 text-[#F61F41]" /> Address</dt>
                  <dd className="text-blue-100">29 Ivatt Way, Peterborough PE3 7PH</dd>
                </div>
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                  <dt className="font-semibold">Fair & transparent</dt>
                  <dd className="text-blue-100">Balanced information, no unsubstantiated claims. Terms and conditions apply.</dd>
                </div>
              </dl>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:01733263311"
                  className="inline-flex items-center justify-center rounded-lg bg-[#F61F41] px-5 py-3 font-medium text-white hover:bg-[#d91635] transition-colors"
                >
                  Call 01733 263311
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Send an enquiry
                </Link>
              </div>

              <p className="mt-4 text-xs text-blue-100">
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority. Information provided is for general guidance and does not constitute advice unless explicitly stated. Terms and conditions apply. Subject to underwriting.
              </p>
            </div>

            {/* Framed visual */}
            <div className="relative">
              <div className="pointer-events-none absolute -top-8 left-8 hidden h-20 w-20 rounded-xl bg-white/10 ring-1 ring-white/10 md:block" />
              <div className="pointer-events-none absolute -bottom-10 right-12 hidden h-24 w-24 rounded-xl bg-white/10 ring-1 ring-white/10 md:block" />

              <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-2xl ring-1 ring-black/5 md:p-6">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(99,160,255,0.10),rgba(255,255,255,0))]" />
                <div className="relative rounded-xl border border-slate-200 bg-white p-4 md:p-6">
                  <div className="mb-3 text-center text-xs font-semibold tracking-[0.20em] text-slate-700 md:mb-4">
                    CONTACT FOCUS
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src="/uk-insurance-office.png"
                      alt="Focus Insurance Services office environment in the UK"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
