'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function SuitsSection() {
  const textRef  = useScrollAnimation()
  const imageRef = useScrollAnimation()
  const btnRef   = useScrollAnimation()

  const buttonStyle = {
    fontFamily: 'var(--font-barlow-condensed), sans-serif',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: '#000000',
    background: '#C5A059',
    border: '1px solid #C5A059',
    padding: '12px 32px',
    textDecoration: 'none',
  }

  return (
    <section style={{ background: '#ffffff' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12 flex flex-col md:grid md:grid-cols-2 md:gap-20 md:items-start">
        {/* テキスト：order-1（モバイル・PC共通で先頭） */}
        <div ref={textRef} className="scroll-hidden order-1 mb-8 md:mb-0">
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.36em',
              color: 'rgba(197,160,89,0.65)',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            Racing Suits
          </p>
          <h2
            style={{
              fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 300,
              color: '#111111',
              lineHeight: 1.7,
              letterSpacing: '0.05em',
              marginBottom: '24px',
            }}
          >
            あなたのライディングに、<br />最適な一着を。
          </h2>
          <p
            style={{
              fontSize: '14px',
              lineHeight: 2.0,
              color: '#555555',
              letterSpacing: '0.06em',
              marginBottom: '48px',
              maxWidth: '420px',
            }}
          >
            サーキット専用から公道対応まで。PRIDE1のスーツはすべて、転倒データに基づいて設計されています。
          </p>
          {/* PCのみボタン表示 */}
          <Link href="/products" className="cta-button hidden md:inline-block" style={buttonStyle}>
            View Suits
          </Link>
        </div>

        {/* 写真：モバイルorder-2 */}
        <div
          ref={imageRef}
          className="scroll-hidden delay-2 order-2 md:row-span-2"
          style={{
            position: 'relative',
            aspectRatio: '2 / 3',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/suit-rider.jpg"
            alt="PRIDE1レーシングスーツ着用イメージ"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 5%' }}
          />
        </div>

        {/* ボタン：モバイルのみ order-3（写真の下） */}
        <div ref={btnRef} className="scroll-hidden delay-1 order-3 mt-8 md:hidden">
          <Link href="/products" className="cta-button block text-center" style={buttonStyle}>
            View Suits
          </Link>
        </div>
      </div>
    </section>
  )
}
