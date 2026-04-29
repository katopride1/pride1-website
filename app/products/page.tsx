import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'スーツを選ぶ | PRIDE1',
  description: 'PRIDE1のレーシングスーツ一覧。全日本ロードレース選手権で培った技術と、サーキットの現場で生まれたデザイン。',
}

const purposes = [
  {
    label: '競技に出る',
    sub: '全日本・地方選手権・エリア戦',
    note: 'レーシングスーツ / スーパーモトスーツ',
    href: '#flagship',
  },
  {
    label: 'サーキットを走る',
    sub: '走行会・スポーツ走行',
    note: 'レーシングスーツ / ストリートスーツ',
    href: '#flagship',
  },
  {
    label: 'モタード・スーパーモト',
    sub: 'スーパーモト選手権・練習走行',
    note: 'スーパーモトスーツ',
    href: '#supermoto',
  },
  {
    label: 'ストリート・ツーリング',
    sub: '街乗り・ロングツーリング',
    note: 'ストリートスーツ / ヴィンテージスーツ',
    href: '#street',
  },
] as const

const suits = [
  {
    id: 'flagship',
    category: 'ROAD RACING',
    modelNumber: 'PRR-175 STD',
    displayName: 'レーシングスーツ',
    sub: 'スタンダード',
    price: '¥245,000〜（税別）',
    body: '全日本ロードレース選手権に供給するフラッグシップモデル。カンガルー皮革×牛革ハイブリッド構造で、軽さと耐久性を両立。Hit-Air製ネックエアバッグを内蔵し、頚椎への衝撃を機械式で確実にカバーする。',
    specs: ['素材: カンガルー + 牛革', 'エアバッグ: ネック内蔵（Hit-Air）', '公認: MFJスタンダード', 'オーダー: 既製サイズ / 採寸対応'],
    image: '/images/prr-175-orange.png',
  },
  {
    id: 'full-order',
    category: 'ROAD RACING',
    modelNumber: 'PRR-145',
    displayName: 'レーシングスーツ フルオーダー',
    sub: 'サイズ・カラー完全対応',
    price: '¥335,000〜（税別）',
    body: 'レーシングスーツ（スタンダード）と同等の安全性能をベースに、体型・カラー・デザインを完全オーダーで仕上げるモデル。チームカラーへの対応や、ライダー個人のデザインを反映したい方に。',
    specs: ['素材: カンガルー + 牛革', 'エアバッグ: ネック内蔵（Hit-Air）', '公認: MFJスタンダード', 'オーダー: 採寸専用 / カラー・デザイン対応'],
    image: '/images/prr-145-red.png',
  },
  {
    id: 'supermoto',
    category: 'SUPERMOTO',
    modelNumber: 'PRM-103 TypeC',
    displayName: 'スーパーモトスーツ',
    sub: '全日本スーパーモト選手権対応',
    price: '¥198,000〜（税別）',
    body: '全日本スーパーモト選手権で約25%のシェアを誇る専用モデル。シュリンクハイド（高級牛革）を用い、モタードならではの動作範囲に対応したパターン設計。Hit-Air製ネックエアバッグを内蔵し、転倒時の頚椎保護を担保する。',
    specs: ['素材: シュリンクハイド（高級牛革）', 'エアバッグ: ネック内蔵（Hit-Air）', '公認: MFJスタンダード', 'オーダー: 既製（M / L / LL）/ 採寸対応'],
    image: '/images/prm-103-blue.png',
  },
  {
    id: 'street',
    category: 'STREET / TOURING',
    modelNumber: 'PRA-116',
    displayName: 'ストリートスーツ',
    sub: 'エアバッグ内蔵・ストリート仕様',
    price: '¥298,000〜（税別）',
    body: 'ストリートライディングとツーリングに対応したエアバッグ内蔵スーツ。MFJ公認を取得しながら、日常使いの快適さも追求したマルチパーパスモデル。',
    specs: ['素材: 牛革', 'エアバッグ: ネック内蔵（Hit-Air）', '公認: MFJスタンダード', 'オーダー: 既製サイズ / 採寸対応'],
    image: '/images/pra-116-green.png',
  },
  {
    id: 'vintage',
    category: 'VINTAGE STYLE',
    modelNumber: 'PRV-158',
    displayName: 'ヴィンテージスーツ',
    sub: 'クラシックデザイン・エアバッグ内蔵',
    price: '¥260,000〜（税別）',
    body: 'ヴィンテージカラーの革を用いたクラシカルデザインに、PRIDE1の最新安全技術を組み合わせたモデル。Hit-Air製ネックエアバッグを内蔵し、懐かしさと信頼性を一着に。',
    specs: ['素材: カンガルー + ヴィンテージ牛革', 'エアバッグ: ネック内蔵（Hit-Air）', '公認: MFJスタンダード', 'オーダー: 採寸専用'],
    image: '/images/prv-158-black.png',
  },
] as const

const orderSteps = [
  {
    number: '01',
    title: 'ご相談',
    body: 'まずはお問い合わせください。用途・予算・ご要望をお聞きし、最適なモデルとオーダー方法をご提案します。',
  },
  {
    number: '02',
    title: '試着・採寸',
    body: '全国12ヶ所のディーラーでサンプルを試着できます。採寸は郵送対応も可能。カラー・デザインを確定します。',
  },
  {
    number: '03',
    title: '製作',
    body: '職人が一着ずつ手作業で製作。製作中も進捗をご連絡します。',
  },
  {
    number: '04',
    title: '納品',
    body: '完成後、配送またはサーキット会場でのお渡し。フィッティングの最終確認を行います。',
  },
] as const

export default function ProductsPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:px-12 md:pt-24" style={{ background: '#ffffff' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            RACING SUITS
          </p>
        </div>
        <h1
          className="text-[26px] md:text-[36px]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: '#111111',
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
            color: '#555555',
            letterSpacing: '0.07em',
            marginTop: '24px',
          }}
        >
          PRIDE1のスーツはすべて、Hit-Air製ネックエアバッグを内蔵した安全装備です。
        </p>
        <p
          style={{
            fontSize: '12px',
            lineHeight: 2.2,
            color: '#555555',
            letterSpacing: '0.07em',
          }}
        >
          全日本ロードレースで証明された技術を、あなたのライディングスタイルに合わせてオーダーできます。
        </p>
      </div>

      {/* Section 2: 目的から選ぶ */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:px-12">
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '24px' }}>
            FIND YOUR SUIT
          </p>
          <p style={{ fontSize: '17px', fontWeight: 500, color: '#111111', letterSpacing: '0.06em', marginBottom: '32px' }}>
            どんな場面で使いますか？
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {purposes.map((p, i) => (
              <Link key={p.label} href={p.href} style={{ textDecoration: 'none' }}>
                <div
                  className="group hover:bg-[#eceae3] transition-colors duration-200"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 0',
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    borderBottom: i === purposes.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: 500, color: '#111111', letterSpacing: '0.04em', marginBottom: '6px' }}>
                      {p.label}
                    </p>
                    <p style={{ fontSize: '10px', color: '#999999', letterSpacing: '0.06em' }}>
                      {p.sub}
                    </p>
                  </div>
                  <span
                    className="group-hover:translate-x-2 transition-transform duration-200"
                    style={{ fontSize: '16px', color: '#111111', flexShrink: 0, marginLeft: '24px' }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Lineup */}
      <div style={{ background: '#f5f4f0' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
            LINEUP
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {suits.map((suit) => (
              <div
                id={suit.id}
                key={suit.id}
                className="grid grid-cols-1 md:grid-cols-[240px_280px_1fr_240px] items-start p-6 md:p-0"
                style={{ background: '#FFFFFF', scrollMarginTop: '80px' }}
              >
                {/* Suit photo */}
                <div
                  className="hidden md:flex items-center justify-center self-stretch"
                  style={{ minHeight: '180px', background: '#FFFFFF', position: 'relative' }}
                >
                  <Image
                    src={suit.image}
                    alt={suit.displayName}
                    width={210}
                    height={300}
                    style={{ objectFit: 'contain', padding: '8px' }}
                  />
                </div>

                {/* Model info */}
                <div className="md:p-12">
                  <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '12px' }}>
                    {suit.category}
                  </p>
                  <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#111111', lineHeight: 1.4, marginBottom: '8px' }}>
                    {suit.displayName}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#999999', letterSpacing: '0.06em', marginBottom: '8px' }}>
                    {suit.sub}
                  </p>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#333333', letterSpacing: '0.04em' }}>
                    {suit.price}
                  </p>
                </div>

                {/* Center: specs & description */}
                <div className="mt-6 md:mt-0 md:py-12 md:px-12" style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '11px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.05em', marginBottom: '24px' }}>
                    {suit.body}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-8">
                    {suit.specs.map((spec) => (
                      <p key={spec} style={{ fontSize: '10px', color: '#999999', letterSpacing: '0.04em' }}>
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="mt-6 md:mt-0 md:py-12 md:pr-12">
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
                    エアバッグ内蔵
                  </span>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      color: '#111111',
                      borderBottom: '1px solid rgba(0,0,0,0.2)',
                      paddingBottom: '3px',
                      textDecoration: 'none',
                      marginTop: '8px',
                    }}
                  >
                    詳細・お見積もりはこちら →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: How to order */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12" style={{ background: '#FFFFFF' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '16px' }}>
          HOW TO ORDER
        </p>
        <p
          style={{
            fontSize: '12px',
            lineHeight: 2.2,
            color: '#555555',
            letterSpacing: '0.07em',
            marginBottom: '48px',
            maxWidth: '480px',
          }}
        >
          すべてのスーツはオーダーメイドに対応。全国12ヶ所のディーラーで試着・採寸が可能です。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-[2px]">
          {orderSteps.map((step) => (
            <div key={step.number} style={{ paddingRight: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  fontWeight: 200,
                  color: '#e0e0e0',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </div>
              <p style={{ fontSize: '17px', fontWeight: 500, color: '#111111', letterSpacing: '0.06em', marginBottom: '12px' }}>
                {step.title}
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555555', letterSpacing: '0.04em' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection subtext="どのモデルが合っているかわからない方も、まずはお気軽にご連絡ください。" />

    </div>
  )
}
