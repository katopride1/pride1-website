'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const stats = [
  { value: '1987', label: '年創業' },
  { value: '38+', label: '年のサーキット経験' },
  { value: '全日本', label: 'ロードレース選手権\n唯一供給ブランド' },
  { value: 'MFJ', label: '公認スタンダード取得' },
] as const

export default function StatsSection() {
  const gridRef  = useScrollAnimation()
  const rightRef = useScrollAnimation()

  return (
    <section style={{ background: '#F5F4F0' }}>
      <div
        className="px-6 py-16 md:px-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Left: 2×2 stats grid */}
        <div
          ref={gridRef}
          className="scroll-hidden grid grid-cols-2"
          style={{ border: '1px solid rgba(10,10,10,0.08)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: '40px 32px',
                borderRight:  i % 2 === 0 ? '1px solid rgba(10,10,10,0.08)' : undefined,
                borderBottom: i < 2       ? '1px solid rgba(10,10,10,0.08)' : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 200,
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  color: '#0a0a0a',
                  lineHeight: 1,
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(10,10,10,0.45)',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right: heading + link */}
        <div
          ref={rightRef}
          className="scroll-hidden delay-2 flex flex-col justify-center md:pl-20"
        >
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.36em',
              color: 'rgba(197,160,89,0.65)',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            About PRIDE1
          </p>
          <h2
            style={{
              fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
              fontSize: '28px',
              fontWeight: 300,
              color: '#0a0a0a',
              lineHeight: 1.7,
              letterSpacing: '0.05em',
              marginBottom: '40px',
            }}
          >
            数字が、すべてを語る。
          </h2>
          <Link
            href="/about"
            style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: 'rgba(10,10,10,0.6)',
              borderBottom: '1px solid rgba(10,10,10,0.2)',
              paddingBottom: '4px',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            PRIDE1とは →
          </Link>
        </div>
      </div>
    </section>
  )
}
