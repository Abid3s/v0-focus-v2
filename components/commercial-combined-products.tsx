'use client'

import { Building2, Shield, TrendingDown, Users, Truck, Package, CheckCircle, AlertTriangle, ArrowRight, Phone } from 'lucide-react'

const products = [
  {
    icon: Building2,
    title: 'Commercial Property Insurance',
    description: 'Comprehensive protection for your business premises, contents, and stock against fire, theft, flood, and other perils.',
    features: [
      'Buildings insurance up to £5 million',
      'Contents and stock cover',
      'Business equipment protection',
      'Loss of rent coverage',
      'Alternative accommodation costs',
      'Professional fees included'
    ],
    coverage: 'Up to £5M',
    essential: true
  },
  {
    icon: Shield,
    title: 'Public Liability Insurance',
    description: 'Essential protection against third-party injury claims and property damage occurring in connection with your business operations.',
    features: [
      'Third-party injury claims',
      'Property damage coverage',
      'Legal defence costs',
      'Court attendance compensation',
      'Worldwide territorial limits',
      'Product recall expenses'
    ],
    coverage: 'Up to £10M',
    essential: true
  },
  {
    icon: TrendingDown,
    title: 'Business Interruption Insurance',
    description: 'Protects your income and covers additional costs when your business operations are disrupted by an insured event.',
    features: [
      'Loss of gross profit coverage',
      'Increased cost of working',
      'Additional rental costs',
      'Accountants fees',
      'Book debts protection',
      'Suppliers extension available'
    ],
    coverage: 'Up to £2M',
    essential: false
  },
  {
    icon: Users,
    title: 'Employers Liability Insurance',
    description: 'Legally required coverage protecting your business against compensation claims from employees injured at work.',
    features: [
      'Employee injury compensation',
      'Occupational disease claims',
      'Legal defence representation',
      'Court attendance costs',
      'Minimum £5 million cover',
      'Certificate display compliance'
    ],
    coverage: 'Minimum £5M',
    essential: true
  },
  {
    icon: Truck,
    title: 'Goods in Transit Insurance',
    description: 'Covers your goods, stock, and equipment whilst being transported by road, rail, sea, or air anywhere in the UK.',
    features: [
      'Theft and damage coverage',
      'Loading and unloading protection',
      'Temporary storage included',
      'Own goods and customers goods',
      'Refrigerated goods extension',
      'Worldwide cover available'
    ],
    coverage: 'Up to £100K',
    essential: false
  },
  {
    icon: Package,
    title: 'Product Liability Insurance',
    description: 'Protection against claims arising from defective products you manufacture, supply, or sell causing injury or damage.',
    features: [
      'Defective product claims',
      'Recall costs coverage',
      'Legal defence expenses',
      'Worldwide territorial cover',
      'Retroactive date protection',
      'Contamination extension'
    ],
    coverage: 'Up to £10M',
    essential: false
  }
]

export function CommercialCombinedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Business Protection
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our commercial combined insurance policies include multiple covers in one convenient package, 
            providing comprehensive protection for your business at competitive rates.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              {product.essential && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center rounded-full bg-[#F61F41] px-3 py-1 text-xs font-semibold text-white">
                    Essential Cover
                  </span>
                </div>
              )}
              
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <product.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-[#F61F41] font-medium">{product.coverage}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="w-full rounded-lg bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#001d3d] to-[#002a5c] px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white">Ready to Protect Your Business?</h3>
          <p className="mt-4 text-lg text-blue-100">
            Get a comprehensive quote for your commercial combined insurance today
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01733263311"
              className="inline-flex items-center justify-center rounded-lg bg-[#F61F41] px-6 py-3 text-base font-semibold text-white hover:bg-[#d91635] transition-colors duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 01733 263311
            </a>
            <a
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Get Online Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-12 rounded-lg bg-amber-50 border border-amber-200 p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="ml-3">
              <h4 className="text-sm font-semibold text-amber-800">Important Information</h4>
              <p className="mt-2 text-sm text-amber-700">
                All insurance products are subject to underwriting acceptance and terms and conditions. 
                Cover levels, policy terms, and premiums may vary based on your specific business requirements 
                and risk assessment. This information is for guidance only and does not constitute advice. 
                Focus Insurance Services is authorised and regulated by the Financial Conduct Authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
