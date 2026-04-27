'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type CTASectionProps = {
  headline?: string
  subtext?: string
}

export default function CTASection({
  headline = 'まず、相談してください。',
  subtext,
}: CTASectionProps) {
  const headlineRef = useScrollAnimation()
  const subtextRef  = useScrollAnimation()
  const actionsRef  = useScrollAnimation()

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: '#f5f4f0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="scroll-hidden">
          <h2
            className="text-[22px] md:text-[clamp(28px,3vw,40px)]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              letterSpacing: '0.08em',
              color: '#111111',
              marginBottom: '16px',
            }}
          >
            {headline}
          </h2>
        </div>

        <div ref={subtextRef} className="scroll-hidden delay-1">
          {subtext && (
            <p
              style={{
                fontSize: '13px',
                lineHeight: 2.2,
                color: '#555555',
                letterSpacing: '0.07em',
                marginBottom: '56px',
              }}
            >
              {subtext}
            </p>
          )}
          {!subtext && <div style={{ marginBottom: '56px' }} />}
        </div>

        <div
          ref={actionsRef}
          className="scroll-hidden delay-2 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-12"
        >
          <Link
            href="/contact"
            className="cta-button block w-full text-center md:inline-block md:w-auto md:text-left"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C5A059',
              border: '1px solid #C5A059',
              padding: '14px 32px',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Link>
          <Link
            href="#line"
            style={{
              fontSize: '13px',
              letterSpacing: '0.05em',
              color: '#111111',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            → LINEで相談する
          </Link>
          <Link
            href="tel:047-445-8366"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#555555',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            電話する 047-445-8366
          </Link>
        </div>
      </div>
    </section>
  )
}
