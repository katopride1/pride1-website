import Link from 'next/link'

export default function SuitsSection() {
  return (
    <section style={{ background: '#0a0a0a' }}>
      <div
        className="px-6 py-20 md:px-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Left: text */}
        <div>
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
              fontSize: '28px',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.7,
              letterSpacing: '0.05em',
              marginBottom: '24px',
            }}
          >
            あなたのライディングに、<br />最適な一着を。
          </h2>
          <p
            style={{
              fontSize: '12px',
              lineHeight: 2.2,
              color: 'rgba(255,255,255,0.38)',
              letterSpacing: '0.06em',
              marginBottom: '48px',
              maxWidth: '420px',
            }}
          >
            サーキット専用から公道対応まで。PRIDE1のスーツはすべて、転倒データに基づいて設計されています。
          </p>
          <Link
            href="/products"
            className="cta-button"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              border: '1px solid #C9A84C',
              padding: '12px 32px',
              textDecoration: 'none',
            }}
          >
            View Suits
          </Link>
        </div>

        {/* Right: photo placeholder */}
        <div
          style={{
            aspectRatio: '4 / 3',
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px dashed rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>
            推奨: 960×720px以上
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            SUIT PHOTO
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.18)', marginTop: '4px' }}>
            スーツ全体・着用イメージ
          </div>
        </div>
      </div>
    </section>
  )
}
