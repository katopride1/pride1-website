import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060E1A]">

      {/* Layer 1: Photo placeholder */}
      <div className="hero-photo-placeholder absolute inset-0 bg-[#0D1B2E]" aria-hidden="true">
        <Image
          src="/images/hero-rider.jpeg"
          alt="PRIDE1 レーシングライダー"
          fill
          style={{ objectFit: 'cover', objectPosition: 'right center' }}
          priority
        />
      </div>

      {/* Layer 2: Horizontal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(6,14,26,0.96) 0%, rgba(6,14,26,0.85) 30%, rgba(6,14,26,0.45) 65%, rgba(6,14,26,0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to top, #060E1A 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)', left: '72px', zIndex: 10 }}>

        {/* Eyebrow */}
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'rgba(197,160,89,0.75)', margin: 0 }}>
            RACING SAFETY BRAND SINCE 1987
          </p>
        </div>

        {/* H1 */}
        <h1 style={{ marginBottom: '32px', lineHeight: 1.2 }}>
          <span
            className="block"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 300,
              color: 'white',
              whiteSpace: 'nowrap',
            }}
          >
            転倒から、命を守る。
          </span>
          <span
            className="block"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(22px, 2.8vw, 40px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            1987年から。
          </span>
        </h1>

        {/* Body text */}
        <p
          style={{
            fontSize: '11px',
            lineHeight: 2.2,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.07em',
            maxWidth: '480px',
            marginBottom: '48px',
          }}
        >
          全日本ロードレース選手権にネックエアバッグスーツを唯一供給するブランド。38年間、サーキットの現場でライダーを見続けてきた。
        </p>

        {/* Actions */}
        <div className="flex items-center gap-12">
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
            スーツを相談する
          </Link>
          <Link
            href="/airbag"
            style={{
              fontSize: '10px',
              letterSpacing: '0.18em',
              color: 'rgba(197,160,89,0.7)',
              textDecoration: 'none',
            }}
          >
            → エアバッグ対応を確認する
          </Link>
        </div>
      </div>

      {/* Decorative number */}
      <div
        className="absolute z-10 text-right"
        style={{ right: '72px', bottom: '88px' }}
        aria-hidden="true"
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '120px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 1,
          }}
        >
          38
        </div>
        <div
          style={{
            fontSize: '9px',
            letterSpacing: '0.24em',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          YEARS OF TRUST
        </div>
      </div>

    </section>
  )
}
