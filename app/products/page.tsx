import Link from 'next/link'

export const metadata = {
  title: 'スーツを選ぶ | PRIDE1',
  description: 'PRIDE1のレーシングスーツ一覧。全日本ロードレース選手権で培った技術と、サーキットの現場で生まれたデザイン。',
}

const suits = [
  {
    category: 'COMPETITION',
    name: 'PRIDE-R1',
    sub: 'Full Race Spec',
    body: '全日本ロードレース選手権に供給する最高峰モデル。ネックエアバッグ内蔵、最高グレードのレザーを使用。プロライダーの要求に応える一着。',
    specs: ['素材: カンガルーレザー', '重量: 約3.2kg', 'エアバッグ: ネック内蔵', '納期: 約8〜12週間'],
    airbag: true,
  },
  {
    category: 'COMPETITION',
    name: 'PRIDE-R2',
    sub: 'Race Spec',
    body: 'サーキット走行に必要な性能をすべて備えたスタンダードレースモデル。コストパフォーマンスと安全性を両立。',
    specs: ['素材: 牛革レザー', '重量: 約3.5kg', 'エアバッグ: 対応可', '納期: 約6〜8週間'],
    airbag: true,
  },
  {
    category: 'TRACK DAY',
    name: 'PRIDE-T1',
    sub: 'Track & Street',
    body: 'サーキット走行会から一般道まで対応するマルチパーパスモデル。安全性を妥協せず、日常使いの快適さも追求。',
    specs: ['素材: 牛革レザー', '重量: 約3.8kg', 'エアバッグ: 対応可', '納期: 約6〜8週間'],
    airbag: false,
  },
  {
    category: 'CUSTOM',
    name: 'PRIDE-C',
    sub: 'Full Custom Order',
    body: 'カラーリング、ロゴ、素材、パターンをすべてオーダーメイドで制作するフルカスタムモデル。チームスーツやレプリカスーツにも対応。',
    specs: ['素材: 選択可', '重量: 仕様による', 'エアバッグ: 対応可', '納期: 約12〜16週間'],
    airbag: true,
  },
] as const

const orderSteps = [
  {
    number: '01',
    title: 'ご相談',
    body: 'まずはお問い合わせください。用途・予算・ご要望をお聞きした上で、最適なモデルをご提案します。',
  },
  {
    number: '02',
    title: '採寸・デザイン確認',
    body: '採寸はサーキット会場または郵送でも対応可能。カラーやロゴのデザインを確定します。',
  },
  {
    number: '03',
    title: '製作',
    body: '職人が一着一着手作業で製作。製作期間中も進捗をご連絡します。',
  },
  {
    number: '04',
    title: '納品',
    body: '完成後、配送またはサーキット会場でのお渡し。フィッティング確認も行います。',
  },
] as const

export default function ProductsPage() {
  return (
    <div style={{ background: '#060E1A', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24">
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            RACING SUITS
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
          あなたのライディングに、最適な一着を。
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
          サーキット専用から公道対応まで。PRIDE1のスーツはすべて、転倒データに基づいて設計されています。
        </p>
      </div>

      {/* Section 2: Lineup */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          OUR LINEUP
        </p>
        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.06em', marginBottom: '48px' }}>
          ※ すべてのスーツはオーダーメイドです。サイズ・カラー・ネームはご相談ください。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {suits.map((suit) => (
            <div
              key={suit.name}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr_240px] p-6 md:p-12 items-start"
              style={{ background: '#0D1B2E' }}
            >
              {/* Left: model info */}
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '12px' }}>
                  {suit.category}
                </p>
                <h3 style={{ fontSize: '18px', fontWeight: 500, color: 'white', lineHeight: 1.4, marginBottom: '8px' }}>
                  {suit.name}
                </h3>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
                  {suit.sub}
                </p>
              </div>

              {/* Center: specs & description */}
              <div className="mt-6 md:mt-0 md:px-12" style={{ minWidth: 0 }}>
                <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.05em', marginBottom: '24px' }}>
                  {suit.body}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 32px' }}>
                  {suit.specs.map((spec) => (
                    <p key={spec} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
                      {spec}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="mt-6 md:mt-0">
                {suit.airbag && (
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(197,160,89,0.1)',
                      border: '1px solid rgba(197,160,89,0.3)',
                      padding: '6px 16px',
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: 'rgba(197,160,89,0.8)',
                      marginBottom: '24px',
                    }}
                  >
                    エアバッグ対応
                  </span>
                )}
                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    color: 'rgba(255,255,255,0.6)',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    paddingBottom: '3px',
                    textDecoration: 'none',
                    marginTop: suit.airbag ? '8px' : '0',
                  }}
                >
                  詳細・お見積もりはこちら →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: How to order */}
      <div
        className="px-6 py-12 pb-16 md:px-[72px] md:py-20 md:pb-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          HOW TO ORDER
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[2px]">
          {orderSteps.map((step) => (
            <div key={step.number} style={{ paddingRight: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '48px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'white', letterSpacing: '0.06em', marginBottom: '12px' }}>
                {step.title}
              </p>
              <p style={{ fontSize: '11px', lineHeight: 2.1, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
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
          どのモデルが合っているかわからない方も、まずはお気軽にご連絡ください。
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
