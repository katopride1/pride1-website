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
      className="px-6 py-16 md:px-[72px] md:py-24"
      style={{
        background: '#060E1A',
        borderTop: '1px solid rgba(197,160,89,0.2)',
      }}
    >
      <div ref={headlineRef} className="scroll-hidden">
        <h2
          className="text-[22px] md:text-[28px]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'white',
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
              fontSize: '11px',
              lineHeight: 2.2,
              color: 'rgba(255,255,255,0.38)',
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
        className="scroll-hidden delay-2 flex flex-col gap-6 md:flex-row md:items-center md:gap-12"
      >
        <Link
          href="/contact"
          style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.25)',
            paddingBottom: '4px',
            textDecoration: 'none',
          }}
        >
          問い合わせフォームへ
        </Link>
        <Link
          href="#line"
          style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(197,160,89,0.7)',
            textDecoration: 'none',
          }}
        >
          LINEで相談する
        </Link>
        <Link
          href="tel:047-445-8366"
          style={{
            fontSize: '10px',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none',
          }}
        >
          電話する 047-445-8366
        </Link>
      </div>
    </section>
  )
}
