import type { MetadataRoute } from 'next'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.focusinsurance.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/contact',
    '/personal-insurance',
    '/personal-insurance/household',
    '/personal-insurance/caravan',
    '/personal-insurance/travel',
    '/commercial-insurance',
    '/commercial-insurance/commercial-vehicle',
    '/commercial-insurance/taxi',
    '/commercial-insurance/fleet',
    '/commercial-insurance/commercial-property',
    '/commercial-insurance/residential-property',
    '/commercial-insurance/contractors-liability',
    '/commercial-insurance/shop',
    '/specialist-insurance',
    '/specialist-insurance/cyber-cover',
    '/specialist-insurance/unoccupied-property',
    '/specialist-insurance/medical-malpractice',
    '/commercial-insurance/takeaways-restaurant',
    '/commercial-insurance/office-surgery',
    '/commercial-insurance/sports-clubs',
    '/commercial-insurance/commercial-combined',
  ]
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
