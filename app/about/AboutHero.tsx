'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutHero() {
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12" style={{ background: '#FFFFFF', paddingTop: '100px' }}>
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
          ライダーのけがを、少しでも減らす。<br />それが私たちの仕事です。
        </h1>
      </div>
      <div ref={subtextRef} className="scroll-hidden delay-1" style={{ maxWidth: '640px' }}>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          タイムを削ること。<br />
          思い通りに走ること。<br />
          自分らしい一着を着ること。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          どれも、ライダーにとって大切なことです。<br />
          それでも私たちは、転倒の先にあるけがを少しでも減らすことを、何より大切にしてきました。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          全日本ロードレース選手権の現場で、転倒するライダーを見続けてきたからこそ、問い続けてきたことがあります。<br />
          もっと安全にできないか。もっと軽く、もっと確実に守れないか。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em', marginBottom: '24px' }}>
          答えは、いつも現場にありました。<br />
          カタログやデータだけでは、見えてこないことがあります。<br />
          だから私たちは38年間、サーキットに通い続けています。
        </p>
        <p style={{ fontSize: '13px', lineHeight: 2.4, color: '#555555', letterSpacing: '0.06em' }}>
          その積み重ねが、PRIDE1というブランドをつくっています。
        </p>
      </div>
    </div>
  )
}
