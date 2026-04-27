'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutHero() {
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()

  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-20 md:px-12" style={{ background: '#FFFFFF', paddingTop: '100px' }}>
      <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
        <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
          ABOUT PRIDE1
        </p>
      </div>
      <div ref={heroRef} className="scroll-hidden">
        <h1
          className="text-2xl md:text-[32px]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: '#111111',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          ライダーの命を守ることが、私たちの仕事です。
        </h1>
      </div>
      <div ref={subtextRef} className="scroll-hidden delay-1" style={{ maxWidth: '640px' }}>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          全日本ロードレース選手権の現場で、転倒するライダーを見続けてきました。そのたびに問い続けてきました。もっと安全にできないか。もっと速く、もっと軽く、もっと確実に守れないか。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          答えは、いつも現場にありました。カタログやデータだけでは、見えてこないことがあります。<br />だから私たちは38年間、サーキットに通い続けました。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em' }}>
          その積み重ねが、PRIDE1というブランドをつくっています。
        </p>
      </div>
    </div>
  )
}
