import Link from 'next/link'

export const metadata = {
  title: '修理・クリーニング | PRIDE1',
  description: 'PRIDE1スーツの修理・クリーニングサービス。サーキットの現場で培った技術で、大切なスーツを長く使い続けるためのサポートを提供します。',
}

const services = [
  {
    tag: 'REPAIR',
    title: '修理',
    body: '転倒による破損、縫製のほつれ、ファスナーの交換など。状態を確認した上で、最適な修理方法をご提案します。',
    durationLabel: '納期目安',
    duration: '2〜4週間',
  },
  {
    tag: 'CLEANING',
    title: 'クリーニング',
    body: 'レザースーツ専用のクリーニング。素材を傷めず、臭いや汚れを除去します。シーズン前後のメンテナンスにもおすすめです。',
    durationLabel: '納期目安',
    duration: '1〜2週間',
  },
  {
    tag: 'AIRBAG',
    title: 'エアバッグ点検・交換',
    body: 'エアバッグシステムの動作確認、ガスカートリッジの交換、センサーの点検を行います。年1回以上の点検を推奨しています。',
    durationLabel: '納期目安',
    duration: '当日〜3日',
  },
] as const

const steps = [
  {
    number: '01',
    title: 'お問い合わせ',
    body: 'フォームまたはLINEでご連絡ください。スーツの状態や症状をお知らせいただけると、スムーズにご案内できます。',
  },
  {
    number: '02',
    title: 'スーツの送付',
    body: '着払いでスーツをお送りください。サーキット会場での直接お渡しも可能です。',
  },
  {
    number: '03',
    title: '確認・見積もり',
    body: '状態を確認後、修理内容と料金をご連絡します。ご了承いただいてから作業を開始します。',
  },
  {
    number: '04',
    title: '返送・お渡し',
    body: '作業完了後、着払いにて返送します。サーキット会場でのお渡しも可能です。',
  },
] as const

export default function RepairPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24">
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            REPAIR & CLEANING
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
          スーツを、長く使い続けるために。
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
          購入後も、PRIDE1はそばにいます。修理・クリーニング・エアバッグ点検まで、サーキットの現場で培った技術でサポートします。
        </p>
      </div>

      {/* REPAIR PHOTO placeholder */}
      <div
        style={{
          width: '100%',
          height: '280px',
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
          推奨: 1600×560px以上
        </div>
        <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
          REPAIR PHOTO
        </div>
        <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.18)', marginTop: '4px' }}>
          修理・縫製作業中の手元写真
        </div>
      </div>

      {/* Section 2: Services */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          OUR SERVICES
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {services.map((s) => (
            <div
              key={s.tag}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr_200px] items-start"
              style={{ background: '#080808', padding: '32px 24px' }}
            >
              {/* Left */}
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '12px' }}>
                  {s.tag}
                </p>
                <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'white', lineHeight: 1.5 }}>
                  {s.title}
                </h3>
              </div>
              {/* Center */}
              <p
                className="mt-4 md:mt-0 md:px-12"
                style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.05em' }}
              >
                {s.body}
              </p>
              {/* Right */}
              <div className="mt-4 md:mt-0">
                <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
                  {s.durationLabel}
                </p>
                <p style={{ fontSize: '13px', color: 'white', fontWeight: 300 }}>
                  {s.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: How to order */}
      <div
        className="px-6 py-12 pb-16 md:px-[72px] md:py-20 md:pb-24"
        style={{ background: '#F5F4F0', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          HOW TO ORDER
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[2px]">
          {steps.map((step) => (
            <div key={step.number} style={{ paddingRight: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '48px',
                  fontWeight: 300,
                  color: 'rgba(0,0,0,0.06)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#080808', letterSpacing: '0.06em', marginBottom: '12px' }}>
                {step.title}
              </p>
              <p style={{ fontSize: '11px', lineHeight: 2.1, color: '#555555', letterSpacing: '0.04em' }}>
                {step.body}
              </p>
            </div>
          ))}
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
          修理の相談は無料です。状態を教えていただければ、最適な方法をご提案します。
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
