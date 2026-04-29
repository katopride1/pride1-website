'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">

      {/* Layer 1: Hero image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/hero-rider.jpeg"
          alt="PRIDE1 レーシングスーツ着用ライダー"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: '60% center',
          }}
        />
      </div>

      {/* Layer 2: Horizontal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.65) 35%, rgba(8,8,8,0.15) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 2b: Mobile overlay（モバイルのみ全体を暗くして可読性を確保） */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: 'rgba(8,8,8,0.50)' }}
        aria-hidden="true"
      />

      {/* Layer 3: Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 45%)' }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div
        className="absolute inset-0 z-10 flex items-center left-6 md:left-[72px]"
        style={{ paddingTop: '64px', maxWidth: '520px' }}
      >
        <div>
        {/* Eyebrow */}
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'rgba(197,160,89,0.75)', margin: 0 }}>
            RACING SAFETY BRAND SINCE 1987
          </p>
        </div>

        {/* H1 */}
        <h1 style={{ marginBottom: '40px', lineHeight: 1.2 }}>
          <span
            className="block"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 300,
              color: 'white',
              whiteSpace: 'nowrap',
            }}
          >
            転倒から、命を守る。
          </span>
        </h1>

        {/* CTA Button */}
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: isHovered ? '#A07830' : '#C5A059',
            color: '#000000',
            border: `1px solid ${isHovered ? '#A07830' : '#C5A059'}`,
            fontFamily: 'var(--font-barlow-condensed)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            cursor: 'pointer',
            transition: 'background 0.25s, border-color 0.25s',
            textDecoration: 'none',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          まずは無料で相談する
        </Link>
        </div>
      </div>

    </section>
  )
}
