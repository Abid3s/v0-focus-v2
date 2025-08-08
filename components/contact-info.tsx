import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-[#001d3d]/5 px-4 py-1 text-sm font-medium text-[#001d3d]">
            <Shield className="w-4 h-4 mr-2 text-[#F61F41]" />
            FCA Authorised & Regulated
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to contact Focus Insurance Services
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Speak to our UK-based team for clear, fair, and not misleading information about your insurance options.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#F61F41]/10 p-2">
                <Phone className="w-5 h-5 text-[#F61F41]" />
              </div>
              <h3 className="font-semibold text-gray-900">Telephone</h3>
            </div>
            <p className="mt-3 text-gray-700">
              <a href="tel:01733263311" className="text-[#F61F41] font-semibold hover:underline">
                01733 263311
              </a>
            </p>
            <p className="text-sm text-gray-600">Mon–Fri, 9:00–17:00</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#F61F41]/10 p-2">
                <Mail className="w-5 h-5 text-[#F61F41]" />
              </div>
              <h3 className="font-semibold text-gray-900">Email</h3>
            </div>
            <p className="mt-3 text-gray-700">
              <a href="mailto:info@focusinsurance.co.uk" className="text-[#F61F41] font-semibold hover:underline">
                info@focusinsurance.co.uk
              </a>
            </p>
            <p className="text-sm text-gray-600">We aim to respond the same working day</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#F61F41]/10 p-2">
                <MapPin className="w-5 h-5 text-[#F61F41]" />
              </div>
              <h3 className="font-semibold text-gray-900">Address</h3>
            </div>
            <p className="mt-3 text-gray-700">
              Focus Insurance Services<br />
              29 Ivatt Way<br />
              Peterborough PE3 7PH
            </p>
            <p className="text-sm text-gray-600">Visits by appointment</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#F61F41]/10 p-2">
                <Clock className="w-5 h-5 text-[#F61F41]" />
              </div>
              <h3 className="font-semibold text-gray-900">Opening hours</h3>
            </div>
            <ul className="mt-3 text-gray-700 text-sm space-y-1">
              <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Compliance */}
        <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800 text-sm">
          Information provided is for general guidance only and does not constitute a recommendation unless we explicitly
          provide regulated advice. Terms and conditions apply. Subject to underwriting. Focus Insurance Services is authorised
          and regulated by the Financial Conduct Authority.
        </div>
      </div>
    </section>
  )
}
