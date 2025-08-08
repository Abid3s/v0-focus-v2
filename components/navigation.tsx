'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type MenuKey = 'personal' | 'commercial' | 'specialist' | null

export default function Navigation() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [headerTop, setHeaderTop] = useState<number>(64) // fallback 64px
  const [open, setOpen] = useState<MenuKey>(null)
  const closeTimer = useRef<number | null>(null)

  // Measure the header height so the panel sits exactly underneath it.
  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      // rect.height can change with responsive layouts
      setHeaderTop(rect.height)
    }

    update()
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(el)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleOpen = (key: MenuKey) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpen(key)
  }

  const handleCloseSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(null), 120) as unknown as number
  }

  const isPanelVisible = open !== null

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/focus-logo.png"
            alt="Focus Insurance Services"
            width={124}
            height={28}
            priority
          />
        </Link>

        {/* Centre: Primary menu (desktop) */}
        <ul className="hidden items-center gap-2 md:flex">
          <li
            onMouseEnter={() => handleOpen('personal')}
            onMouseLeave={handleCloseSoon}
          >
            <NavTrigger active={open === 'personal'} href="/personal-insurance">
              Personal
            </NavTrigger>
          </li>
          <li
            onMouseEnter={() => handleOpen('commercial')}
            onMouseLeave={handleCloseSoon}
          >
            <NavTrigger active={open === 'commercial'} href="/commercial-insurance">
              Commercial
            </NavTrigger>
          </li>
          <li
            onMouseEnter={() => handleOpen('specialist')}
            onMouseLeave={handleCloseSoon}
          >
            <NavTrigger active={open === 'specialist'} href="/specialist-insurance">
              Specialist
            </NavTrigger>
          </li>
        </ul>

        {/* Right: Contact */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" aria-label="Go to Contact page">
            <Button className="bg-rose-600 hover:bg-rose-700">Get Quote</Button>
          </Link>
        </div>

        {/* Mobile minimal link */}
        <div className="md:hidden">
          <Link href="/contact" className="text-sm font-medium text-rose-700 underline">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mega panel: fixed, full-width, perfectly aligned under header */}
      <div
        onMouseEnter={() => (open ? handleOpen(open) : null)}
        onMouseLeave={handleCloseSoon}
        className={cn(
          'fixed left-0 right-0 z-[60] transition-all duration-150',
          isPanelVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        style={{ top: `${Math.round(headerTop)}px` }}
        aria-hidden={!isPanelVisible}
      >
        {/* Backdrop line */}
        <div className="border-b border-slate-200 bg-white shadow-[0_12px_40px_-20px_rgba(2,10,28,0.28)]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {open === 'commercial' && <CommercialMenu />}
            {open === 'personal' && <PersonalMenu />}
            {open === 'specialist' && <SpecialistMenu />}
          </div>
        </div>
      </div>
    </header>
  )
}

function NavTrigger({
  children,
  href,
  active,
}: {
  children: React.ReactNode
  href: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100',
        active && 'bg-slate-100'
      )}
      aria-expanded={active ? true : false}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn('h-4 w-4 transition-transform duration-150', active && 'rotate-180')}
        aria-hidden="true"
      />
    </Link>
  )
}

/* --- Menus --- */

function Item({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-6 rounded-lg p-3 transition-colors hover:bg-slate-50"
    >
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{description}</div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600" />
    </Link>
  )
}

function Section({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="min-w-0">
      <div className="mb-3 text-xs font-semibold tracking-wide text-slate-500">
        {heading}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

function CommercialMenu() {
  return (
    <div aria-label="Commercial Insurance menu">
      <h3 className="mb-2 text-base font-bold text-white">
        <span className="rounded bg-slate-900 px-2 py-1">Commercial Insurance</span>
      </h3>
      <p className="mb-6 max-w-3xl text-sm text-slate-600">
        Comprehensive business protection solutions.
      </p>
      <Grid>
        <Section heading="Vehicle & Transport">
          <Item
            title="Taxi Insurance"
            href="/commercial-insurance/taxi"
            description="Comprehensive taxi and private hire cover"
          />
          <Item
            title="Commercial Vehicle"
            href="/commercial-insurance/commercial-vehicle"
            description="Fleet and commercial vehicle protection"
          />
          <Item
            title="Fleet Insurance"
            href="/commercial-insurance/fleet"
            description="Multi-vehicle fleet management"
          />
        </Section>

        <Section heading="Property & Liability">
          <Item
            title="Residential Property"
            href="/commercial-insurance/residential-property"
            description="Buy-to-let and rental property cover"
          />
          <Item
            title="Commercial Property"
            href="/commercial-insurance/commercial-property"
            description="Business premises protection"
          />
          <Item
            title="Contractors & Tradesmans Liability"
            href="/commercial-insurance/contractors-tradesmans"
            description="Professional trades liability cover"
          />
          <Item
            title="Commercial Combined"
            href="/commercial-insurance/commercial-combined"
            description="All-in-one business protection"
          />
        </Section>

        <Section heading="Business">
          <Item
            title="Contractors Liability"
            href="/commercial-insurance/contractors-liability"
            description="Cover for contractors and projects"
          />
          <Item
            title="Sports Clubs"
            href="/commercial-insurance/sports-clubs"
            description="Amateur and semi-professional clubs"
          />
          <Item
            title="Takeaways & Restaurant"
            href="/commercial-insurance/takeaways-restaurant"
            description="Food business protection"
          />
          <Item
            title="Office & Surgery"
            href="/commercial-insurance/office-surgery"
            description="Professional practices and surgery cover"
          />
          <div className="pt-3">
            <Link href="/contact">
              <Button variant="default" className="bg-rose-600 hover:bg-rose-700">
                Speak to our team
              </Button>
            </Link>
          </div>
        </Section>
      </Grid>
    </div>
  )
}

function PersonalMenu() {
  return (
    <div aria-label="Personal Insurance menu">
      <h3 className="mb-2 text-base font-bold text-white">
        <span className="rounded bg-slate-900 px-2 py-1">Personal Insurance</span>
      </h3>
      <p className="mb-6 max-w-3xl text-sm text-slate-600">
        Straightforward cover for what matters at home and on the move.
      </p>
      <Grid>
        <Section heading="Popular">
          <Item
            title="Household"
            href="/personal-insurance/household"
            description="Buildings and contents cover"
          />
          <Item
            title="Caravan"
            href="/personal-insurance/caravan"
            description="Touring and static caravan insurance"
          />
          <Item
            title="Travel"
            href="/personal-insurance/travel"
            description="Single trip and annual multi-trip"
          />
        </Section>
        <Section heading="Help">
          <Item
            title="Contact"
            href="/contact"
            description="Ask a question or request a quote"
          />
        </Section>
        <Section heading="—" >
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold">Not sure what you need?</div>
            <p className="mt-1 text-sm text-slate-600">
              We’ll listen to your requirements and guide you clearly.
            </p>
            <div className="mt-3">
              <Link href="/contact">
                <Button variant="outline">Enquire now</Button>
              </Link>
            </div>
          </div>
        </Section>
      </Grid>
    </div>
  )
}

function SpecialistMenu() {
  return (
    <div aria-label="Specialist Insurance menu">
      <h3 className="mb-2 text-base font-bold text-white">
        <span className="rounded bg-slate-900 px-2 py-1">Specialist Insurance</span>
      </h3>
      <p className="mb-6 max-w-3xl text-sm text-slate-600">
        Tailored solutions for niche risks and complex placements.
      </p>
      <Grid>
        <Section heading="Business">
          <Item
            title="Commercial Combined"
            href="/commercial-insurance/commercial-combined"
            description="All-in-one business package"
          />
          <Item
            title="Residential Property Owners"
            href="/commercial-insurance/residential-property"
            description="Landlords and portfolio cover"
          />
        </Section>
        <Section heading="Help">
          <Item
            title="Contact"
            href="/contact"
            description="Speak with a broker"
          />
        </Section>
        <Section heading="—">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold">Need something specific?</div>
            <p className="mt-1 text-sm text-slate-600">
              Share a few details and we’ll come back with options.
            </p>
            <div className="mt-3">
              <Link href="/contact">
                <Button variant="outline">Get in touch</Button>
              </Link>
            </div>
          </div>
        </Section>
      </Grid>
    </div>
  )
}
