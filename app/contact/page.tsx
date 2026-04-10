import ContactGrid from './ContactGrid'

export const metadata = {
  title: 'お問い合わせ | PRIDE1',
  description: 'スーツの購入相談、エアバッグ、修理・クリーニングなど、どんな相談でもお気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>

      {/* Hero area (アニメーションなし) */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24">
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            CONTACT
          </p>
        </div>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '36px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'white',
            marginBottom: '16px',
          }}
        >
          どんな相談でも、答えます。
        </h1>
        <p
          style={{
            fontSize: '11px',
            lineHeight: 2.2,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.07em',
          }}
        >
          スーツのこと、エアバッグのこと、修理のこと。まずお気軽にご相談ください。
        </p>
      </div>

      {/* Divider: dark → white */}
      <div style={{ height: '1px', background: 'rgba(10,10,10,0.08)' }} />

      {/* Content area: アニメーションあり（クライアントコンポーネント） */}
      <ContactGrid />

    </div>
  )
}
