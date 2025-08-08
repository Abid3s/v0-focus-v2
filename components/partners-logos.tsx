'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type Logo = { src: string; alt: string; width: number; height: number }

const LOGOS: Logo[] = [
  { src: '/logos/allianz-logo.png', alt: 'Allianz', width: 140, height: 48 },
  { src: '/logos/arch-logo.png', alt: 'Arch Insurance', width: 140, height: 48 },
  { src: '/logos/axa-logo.png', alt: 'AXA', width: 140, height: 48 },
  { src: '/logos/covea-logo.png', alt: 'Covéa', width: 140, height: 48 },
  { src: '/logos/highway-logo.png', alt: 'Highway', width: 140, height: 48 },
  { src: '/logos/iprism-logo.png', alt: 'iPrism', width: 140, height: 48 },
  { src: '/logos/jensten-logo.png', alt: 'Jensten', width: 140, height: 48 },
  { src: '/logos/liverpool-victoria-logo.png', alt: 'Liverpool Victoria', width: 140, height: 48 },
  { src: '/logos/ms-amlin-logo.png', alt: 'MS Amlin', width: 140, height: 48 },
  { src: '/logos/nig-logo.png', alt: 'NIG', width: 140, height: 48 },
  { src: '/logos/rsa-logo.png', alt: 'RSA', width: 140, height: 48 },
  { src: '/logos/sabre-logo.png', alt: 'Sabre', width: 140, height: 48 },
  { src: '/logos/aig-logo.png', alt: 'AIG', width: 140, height: 48 },
  { src: '/logos/unicorn-logo.png', alt: 'Unicorn Underwriting', width: 140, height: 48 },
]

/**
 * Default: 18s loop. Lower is faster.
 * No tiles/brackets: only logos scroll on the page background.
 * Respects prefers-reduced-motion.
 */
export default function PartnersLogos({
  speedSeconds = 18, // slower default loop (higher number = slower)
  className,
  pauseOnHover = true,
}: {
  speedSeconds?: number
  className?: string
  pauseOnHover?: boolean
}) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const items = useMemo(() => [...LOGOS, ...LOGOS], [])
  const duration = Math.max(6, Math.min(40, speedSeconds))

  return (
    <section aria-label="Trusted insurance partners" className={cn('py-6', className)}>
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6">
        <div
          className={cn(
            'flex w-max items-center gap-12 will-change-transform',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
          style={{
            animation: reduceMotion ? undefined : `marquee ${duration}s linear infinite`,
          }}
          aria-hidden="true"
        >
          {items.map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="shrink-0 opacity-90 transition-opacity hover:opacity-100">
              <Image
                src={logo.src || '/placeholder.svg?height=48&width=140&query=logo%20placeholder'} 
                alt={`${logo.alt} logo`}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain"
                priority={i < 6}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
