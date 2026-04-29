'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactHero() {
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()

  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-20 md:px-12" style={{ background: '#ffffff', paddingTop: '100px' }}>
      <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
        <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
          CONTACT
        </p>
      </div>
      <div ref={heroRef} className="scroll-hidden">
        <h1
          className="text-[26px] md:text-[36px]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: '#111111',
            marginBottom: '16px',
          }}
        >
          どんな相談でも、答えます。
        </h1>
      </div>
      <div ref={subtextRef} className="scroll-hidden delay-1">
        <p
          style={{
            fontSize: '11px',
            lineHeight: 2.2,
            color: '#555555',
            letterSpacing: '0.07em',
          }}
        >
          スーツのこと、エアバッグのこと、修理のこと。まずお気軽にご相談ください。
        </p>
      </div>
    </div>
  )
}
