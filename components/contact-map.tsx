export default function ContactMap() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find our Peterborough office
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Focus Insurance Services, 29 Ivatt Way, Peterborough PE3 7PH
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <iframe
            title="Map showing Focus Insurance Services, 29 Ivatt Way, Peterborough PE3 7PH"
            aria-label="Map to Focus Insurance Services"
            src="https://www.google.com/maps?q=29%20Ivatt%20Way%2C%20Peterborough%20PE3%207PH&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-6 text-sm text-gray-600 text-center">
          Public transport and parking options are available nearby. Please contact us if you have any accessibility needs.
        </div>
      </div>
    </section>
  )
}
