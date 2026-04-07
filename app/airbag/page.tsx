import Link from 'next/link'

export const metadata = {
  title: 'エアバッグ対応 | PRIDE1',
  description: '全日本ロードレース選手権で唯一採用されるネックエアバッグシステム。PRIDE1のエアバッグ対応スーツについて。',
}

const specs = [
  { value: '0.06', unit: '秒', label: '展開速度' },
  { value: '2012', unit: '年', label: '全日本選手権採用開始' },
  { value: 'MFJ', unit: '', label: '公認スタンダード取得' },
] as const

const steps = [
  {
    step: 'DETECT',
    title: '転倒を検知',
    body: 'スーツ内のセンサーが転倒の動きを0.04秒以内に検知する。',
  },
  {
    step: 'INFLATE',
    title: 'エアバッグ展開',
    body: 'ガスカートリッジが瞬時に作動し、首・頸椎周辺のエアバッグが0.06秒で展開。',
  },
  {
    step: 'PROTECT',
    title: '衝撃を吸収',
    body: '展開したエアバッグが頭部・頸椎への衝撃を分散・吸収する。',
  },
] as const

export default function AirbagPage() {
  return (
    <div style={{ background: '#060E1A', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24">
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            AIRBAG SYSTEM
          </p>
        </div>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '36px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'white',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          転倒の瞬間、0.06秒で展開する。
        </h1>
        <p
          style={{
            fontSize: '12px',
            lineHeight: 2.2,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.07em',
            marginTop: '24px',
            maxWidth: '480px',
          }}
        >
          業界初のネックエアバッグ内蔵スーツ。首・頸椎への衝撃を、PRIDE1が独自開発したシステムで守る。
        </p>
      </div>

      {/* Section 2: Spec numbers */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-16 grid grid-cols-3"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {specs.map((spec) => (
          <div key={spec.value}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '56px',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1,
                marginBottom: '10px',
              }}
            >
              {spec.value}
              {spec.unit && (
                <span style={{ fontSize: '18px' }}>{spec.unit}</span>
              )}
            </div>
            <p
              style={{
                fontSize: '9px',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.28)',
                lineHeight: 1.8,
              }}
            >
              {spec.label}
            </p>
          </div>
        ))}
      </div>

      {/* Section 3: How it works */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        style={{ alignItems: 'start' }}
      >
        {/* Left */}
        <div style={{ minWidth: 0 }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
            HOW IT WORKS
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {steps.map((item) => (
              <div key={item.step}>
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '32px',
                    color: 'rgba(255,255,255,0.08)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {item.step}
                </div>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'white', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ background: '#0D1B2E', padding: '48px 40px', minWidth: 0 }}>
          <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'white', marginBottom: '24px' }}>
            対応モデルについて
          </h3>
          <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.45)', marginBottom: '40px' }}>
            エアバッグシステムはすべてのPRIDE1スーツに対応しているわけではありません。対応モデルとガスカートリッジの詳細については、お気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(197,160,89,0.8)',
              borderBottom: '1px solid rgba(197,160,89,0.35)',
              paddingBottom: '4px',
              textDecoration: 'none',
            }}
          >
            スーツの対応状況を確認する →
          </Link>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', marginTop: '32px', lineHeight: 1.8 }}>
            ※ガスカートリッジは消耗品です。定期的な交換をお勧めします。
          </p>
        </div>
      </div>

      {/* Section 4: CTA */}
      <div
        className="px-6 py-12 pb-20 md:px-[72px] md:py-20 md:pb-[120px]"
        style={{ borderTop: '1px solid rgba(197,160,89,0.15)' }}
      >
        <h2
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'white',
            marginBottom: '16px',
          }}
        >
          まず、相談してください。
        </h2>
        <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)', marginBottom: '48px' }}>
          エアバッグのこと、スーツとの組み合わせのこと。サーキットの現場から答えます。
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
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
            問い合わせフォームへ
          </Link>
          <Link
            href="tel:047-445-8366"
            style={{
              fontSize: '10px',
              color: 'rgba(197,160,89,0.7)',
              textDecoration: 'none',
            }}
          >
            → 電話で相談する 047-445-8366
          </Link>
        </div>
      </div>

    </div>
  )
}
