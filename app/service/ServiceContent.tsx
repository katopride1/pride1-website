'use client'

import CTASection from '@/components/sections/CTASection'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const services = [
  {
    tag: 'FITTING',
    title: '試着・フィッティング',
    body: '実際にスーツを着て、サイズ感や可動域を確認。購入前の試着対応をサーキット会場で行います。',
  },
  {
    tag: 'CONSULT',
    title: 'スーツ相談',
    body: '用途・クラス・予算に合わせたモデル選びをご提案。MFJレギュレーションの確認も、その場で。',
  },
  {
    tag: 'REPAIR',
    title: '現場修理',
    body: '転倒・接触によるスーツのダメージをその場で修理。PRIDE1ユーザー以外のライダーも、お気軽にお声がけください。',
  },
  {
    tag: 'AIRBAG',
    title: 'エアバッグ点検',
    body: 'ガスカートリッジ交換、作動確認、フィルムのエア漏れチェック。レース前の安心確認にご利用ください。',
  },
] as const

const serviceIcons = [
  // FITTING
  <svg key="fitting" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="rgba(197,160,89,0.75)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="9" r="5"/>
    <path d="M12 24 L6 18 L12 16 L20 18 L28 16 L34 18 L28 24"/>
    <path d="M12 24 L10 38"/>
    <path d="M28 24 L30 38"/>
    <path d="M10 38 L20 34 L30 38"/>
  </svg>,
  // CONSULT
  <svg key="consult" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="rgba(197,160,89,0.75)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 7 Q5 4 8 4 L32 4 Q35 4 35 7 L35 24 Q35 27 32 27 L22 27 L16 34 L16 27 L8 27 Q5 27 5 24 Z"/>
    <line x1="13" y1="14" x2="27" y2="14"/>
    <line x1="13" y1="19" x2="22" y2="19"/>
  </svg>,
  // REPAIR
  <svg key="repair" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="rgba(197,160,89,0.75)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 6 C32 6 36 10 34 16 C32 20 28 21 25 19 L11 33 C9 35 6 35 5 33 C4 31 5 28 7 27 L21 13 C19 10 20 6 24 4 C26 3 28 6 28 6 Z"/>
    <circle cx="8" cy="32" r="2"/>
  </svg>,
  // AIRBAG
  <svg key="airbag" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="rgba(197,160,89,0.75)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 3 L34 9 L34 22 C34 31 27 36 20 38 C13 36 6 31 6 22 L6 9 Z"/>
    <path d="M13 20 L17 24 L27 14"/>
  </svg>,
]

const schedule = [
  { month: '4月', event: '全日本ロードレース選手権 第2戦', circuit: 'スポーツランドSUGO' },
  { month: '5月', event: '全日本ロードレース選手権 第3戦', circuit: 'オートポリス' },
  { month: '6月', event: '全日本ロードレース選手権 第4戦', circuit: '筑波サーキット' },
  { month: '8月', event: '全日本ロードレース選手権 第5戦', circuit: 'モビリティリゾートもてぎ' },
  { month: '9月', event: '全日本ロードレース選手権 第6戦', circuit: '岡山国際サーキット' },
  { month: '10月', event: '全日本ロードレース選手権 第7戦', circuit: '鈴鹿サーキット' },
] as const

export default function ServiceContent() {
  // Hero
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()

  // WHAT WE DO
  const whatLabelRef = useScrollAnimation()
  const svcRef1      = useScrollAnimation()
  const svcRef2      = useScrollAnimation()
  const svcRef3      = useScrollAnimation()
  const svcRef4      = useScrollAnimation()
  const svcRefs      = [svcRef1, svcRef2, svcRef3, svcRef4]

  // SCHEDULE
  const schedLabelRef = useScrollAnimation()
  const schedRef1     = useScrollAnimation()
  const schedRef2     = useScrollAnimation()
  const schedRef3     = useScrollAnimation()
  const schedRef4     = useScrollAnimation()
  const schedRef5     = useScrollAnimation()
  const schedRef6     = useScrollAnimation()
  const schedRefs     = [schedRef1, schedRef2, schedRef3, schedRef4, schedRef5, schedRef6]

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20 md:px-12" style={{ background: '#ffffff', paddingTop: '100px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            CIRCUIT SERVICE
          </p>
        </div>
        <div ref={heroRef} className="scroll-hidden">
          <h1
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: '36px',
              fontWeight: 300,
              letterSpacing: '0.06em',
              color: '#111111',
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            サーキットに、私たちはいます。
          </h1>
        </div>
        <div ref={subtextRef} className="scroll-hidden delay-1">
          <p
            style={{
              fontSize: '12px',
              lineHeight: 2.2,
              color: '#555555',
              letterSpacing: '0.07em',
              marginTop: '24px',
              maxWidth: '520px',
            }}
          >
            試着、相談、修理、エアバッグ点検。購入前も購入後も、サーキットの現場で直接対応します。これはカタログを売るブランドには、絶対にできないことです。
          </p>
        </div>
      </div>

      {/* CIRCUIT PHOTO */}
      <div style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
        <img
          src="/images/circuit-service.png"
          alt="サーキットでのPRIDE1レーシングサービス"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
          }}
        />
      </div>

      {/* Section 2: What we do */}
      <div
        className="max-w-[1200px] mx-auto px-6 pt-20 pb-12 md:px-12"
        style={{ background: '#FFFFFF' }}
      >
        <div ref={whatLabelRef} className="scroll-hidden" style={{ marginBottom: '56px' }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '16px' }}>
            WHAT WE DO
          </p>
          <p style={{ fontSize: '13px', color: '#888888', letterSpacing: '0.06em', lineHeight: 1.9 }}>
            サーキット現場で、私たちが提供するサービス。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
          {services.map((s, i) => (
            <div
              key={s.tag}
              ref={svcRefs[i]}
              className={`scroll-hidden delay-${i + 1}`}
              style={{
                padding: '48px 0',
                borderTop: '1px solid rgba(10,10,10,0.12)',
              }}
            >
              <div style={{ marginBottom: '28px' }}>
                {serviceIcons[i]}
              </div>
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(10,10,10,0.35)', marginBottom: '14px' }}>
                {s.tag}
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 300, color: '#111111', marginBottom: '20px', lineHeight: 1.4, letterSpacing: '0.04em' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '12px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.04em' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Schedule */}
      <div
        className="max-w-[1200px] mx-auto px-6 py-20 md:px-12"
        style={{ background: '#ffffff' }}
      >
        <div ref={schedLabelRef} className="scroll-hidden" style={{ marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: 'clamp(72px, 10vw, 120px)',
              fontWeight: 200,
              color: 'rgba(10,10,10,0.15)',
              lineHeight: 1,
              letterSpacing: '0.02em',
              marginBottom: '8px',
            }}
          >
            2026
          </div>
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '12px' }}>
            SCHEDULE
          </p>
          <p style={{ fontSize: '10px', color: '#999999', letterSpacing: '0.05em' }}>
            ※ 参戦スケジュールは変更になる場合があります。最新情報はSNSでご確認ください。
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {schedule.map((item, i) => (
            <div
              key={item.month + item.event}
              ref={schedRefs[i]}
              className={`scroll-hidden delay-${i + 1} grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr_200px] items-center p-4 md:py-6 md:px-8`}
              style={{
                borderBottom: '1px solid rgba(10,10,10,0.07)',
              }}
            >
              <p style={{ fontSize: '11px', color: 'rgba(197,160,89,0.7)', letterSpacing: '0.1em', fontWeight: 300 }}>
                {item.month}
              </p>
              <p style={{ fontSize: '14px', color: '#111111', fontWeight: 300, letterSpacing: '0.04em' }}>
                {item.event}
              </p>
              <p
                className="hidden md:block"
                style={{ fontSize: '11px', color: '#555555', letterSpacing: '0.06em', textAlign: 'right' }}
              >
                {item.circuit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection subtext="次のレース会場でお声がけください。スーツのこと、エアバッグのこと、何でもその場でお答えします。" />

    </div>
  )
}
