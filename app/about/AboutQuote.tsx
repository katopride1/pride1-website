'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AboutQuote() {
  const photoRef = useScrollAnimation()
  const quoteRef = useScrollAnimation()
  const nameRef  = useScrollAnimation()

  return (
    <div className="py-16 md:py-20" style={{ background: '#FFFFFF' }}>
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: owner photo */}
        <div
          ref={photoRef}
          className="scroll-hidden"
          style={{ position: 'relative', minHeight: '480px' }}
        >
          <Image
            src="/images/owner.jpeg"
            alt="代表 和田功一"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center center' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: quote */}
        <div
          className="px-6 py-20 md:px-16 flex flex-col justify-center"
          style={{ minHeight: '480px' }}
        >
          <div
            style={{
              width: '24px',
              height: '1px',
              background: 'rgba(197,160,89,0.5)',
              marginBottom: '40px',
            }}
          />

          <div ref={quoteRef} className="scroll-hidden">
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                fontWeight: 300,
                lineHeight: 2.2,
                letterSpacing: '0.07em',
                color: '#111111',
                marginBottom: '40px',
              }}
            >
              すべてのレーサーが、エアバッグ付きのレーシングスーツを着てサーキットを走る。
              そんな日が、一日でも早く来るといいな。
            </p>
          </div>

          <div ref={nameRef} className="scroll-hidden delay-2" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(197,160,89,0.4)' }} />
            <p style={{ fontSize: '10px', letterSpacing: '0.24em', color: 'rgba(197,160,89,0.65)', margin: 0 }}>
              代表　和田功一
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
