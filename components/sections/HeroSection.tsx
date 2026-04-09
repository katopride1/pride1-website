import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F14]">

      {/* Layer 1: Photo placeholder */}
      <div
        className="absolute inset-0 bg-[#0D1B2E]"
        aria-hidden="true"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          border: '1px dashed rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>
          推奨: 1920×1080px以上
        </div>
        <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
          HERO IMAGE
        </div>
        <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.18)', marginTop: '4px' }}>
          被写体は右側に
        </div>
      </div>

      {/* Layer 2: Horizontal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(11,15,20,0.96) 0%, rgba(11,15,20,0.85) 30%, rgba(11,15,20,0.45) 65%, rgba(11,15,20,0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to top, #0B0F14 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div
        className="absolute z-10 left-6 md:left-[72px]"
        style={{ top: '45%', transform: 'translateY(-50%)' }}
      >
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
              fontFamily: "var(--font-barlow-condensed), sans-serif",
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
              fontFamily: "var(--font-barlow), sans-serif",
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
          className="text-[10px] md:text-[11px] max-w-full md:max-w-[480px]"
          style={{
            lineHeight: 2.2,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.07em',
            marginBottom: '48px',
          }}
        >
          全日本ロードレース選手権にネックエアバッグスーツを唯一供給するブランド。38年間、サーキットの現場でライダーを見続けてきた。
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
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

      {/* Decorative number: desktop only */}
      <div
        className="hidden md:block absolute z-10 text-right"
        style={{ right: '72px', bottom: '88px' }}
        aria-hidden="true"
      >
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
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
