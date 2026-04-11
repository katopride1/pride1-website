'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const stats = [
  { value: '1987', label: '年創業' },
  { value: '38+', label: '年のサーキット経験' },
  { value: 'JAPAN', label: '全日本ロードレース選手権\n唯一供給ブランド' },
  { value: 'MFJ', label: '公認スタンダード取得' },
] as const

export default function StatsSection() {
  const headerRef = useScrollAnimation()
  const statsRef  = useScrollAnimation()

  return (
    <section style={{ background: '#F5F4F0' }}>
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}
      >
        {/* Section header */}
        <div ref={headerRef} className="scroll-hidden" style={{ marginBottom: '64px' }}>
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(197,160,89,0.65)',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            About PRIDE1
          </p>
          <h2
            style={{
              fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              fontWeight: 300,
              color: '#0a0a0a',
              lineHeight: 1.5,
              letterSpacing: '0.05em',
              marginBottom: '32px',
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
            }}
          >
            PRIDE1とは →
          </Link>
        </div>

        {/* 4-column stats row */}
        <div
          ref={statsRef}
          className="scroll-hidden delay-2 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                padding: '40px 48px',
                borderLeft: i > 0 ? '1px solid rgba(10,10,10,0.08)' : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 200,
                  fontSize: 'clamp(48px, 5vw, 72px)',
                  color: '#0a0a0a',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  color: 'rgba(10,10,10,0.45)',
                  lineHeight: 1.7,
                  marginTop: '12px',
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
