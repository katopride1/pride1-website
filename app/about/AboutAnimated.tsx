'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const numbers = [
  { value: '1987', label: '年創業', mobileSmall: false },
  { value: '38+', label: '年のサーキット経験', mobileSmall: false },
  { value: '全日本', label: 'ロードレース選手権\n唯一供給ブランド', mobileSmall: true },
  { value: 'MFJ', label: 'スタンダード\n公認取得', mobileSmall: true },
] as const

const values = [
  {
    tag: 'SAFETY',
    title: '安全は妥協しない',
    body: '転倒時の衝撃から、首・頸椎・体幹を守る。それだけを38年間考え続けた。',
  },
  {
    tag: 'FIELD',
    title: '現場主義',
    body: 'サーキットの現場でしか得られない知見がある。だから私たちは、今日もサーキットにいる。',
  },
  {
    tag: 'CRAFT',
    title: '職人の縫製',
    body: '一着一着、職人が手で縫う。データと経験が交差する場所に、PRIDE1のスーツがある。',
  },
] as const

export default function AboutAnimated() {
  // Statement refs
  const leftRef  = useScrollAnimation()
  const rightRef = useScrollAnimation()

  // Numbers refs
  const numRef1 = useScrollAnimation()
  const numRef2 = useScrollAnimation()
  const numRef3 = useScrollAnimation()
  const numRef4 = useScrollAnimation()
  const numRefs = [numRef1, numRef2, numRef3, numRef4]

  // Values refs
  const valRef1 = useScrollAnimation()
  const valRef2 = useScrollAnimation()
  const valRef3 = useScrollAnimation()
  const valRefs = [valRef1, valRef2, valRef3]

  return (
    <>
      {/* Section 2: Statement — 左: テキスト2段積み / 右: オーナー写真 */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Left: both text blocks stacked */}
        <div className="flex flex-col gap-10">
          <div ref={leftRef} className="scroll-hidden" style={{ minWidth: 0 }}>
            <p style={{ fontSize: '18px', fontWeight: 400, color: 'white', lineHeight: 1.7, marginBottom: '32px' }}>
              1987年、私たちはサーキットに立った。
            </p>
            <p style={{ fontSize: '12px', lineHeight: 2.4, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
              全日本ロードレース選手権の現場で、転倒するライダーを見続けてきた。その度に問い続けた。もっと安全にできないか。もっと速く、もっと軽く、もっと確実に守れないか。
            </p>
          </div>
          <div ref={rightRef} className="scroll-hidden delay-2" style={{ minWidth: 0 }}>
            <p style={{ fontSize: '18px', fontWeight: 400, color: 'white', lineHeight: 1.7, marginBottom: '32px' }}>
              答えは、現場にしかなかった。
            </p>
            <p style={{ fontSize: '12px', lineHeight: 2.4, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
              カタログやデータだけでは、ライダーを守れない。だから私たちは38年間、サーキットに通い続けた。試着し、修理し、エアバッグを点検し、転倒を分析した。その積み重ねが、PRIDE1というブランドを作った。
            </p>
          </div>
        </div>

        {/* Right: owner photo placeholder */}
        <div
          style={{
            width: '100%',
            height: '360px',
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
            推奨: 800×1000px以上
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            OWNER PHOTO
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.18)', marginTop: '4px' }}>
            オーナーポートレートまたはサーキット現場写真
          </div>
        </div>
      </div>

      {/* Section 3: Numbers */}
      <div
        className="px-6 py-12 pb-16 md:px-[72px] md:py-20 md:pb-24"
        style={{ background: '#F5F4F0', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          NUMBERS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {numbers.map((item, i) => (
            <div key={item.value} ref={numRefs[i]} className={`scroll-hidden delay-${i + 1}`}>
              <div
                className={item.mobileSmall ? 'text-[20px] md:text-[56px]' : 'text-[56px]'}
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 300,
                  color: '#080808',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {item.value}
              </div>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.16em',
                  color: '#999999',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Values */}
      <div className="px-6 pb-20 md:px-[72px] md:pb-[120px]" style={{ background: '#FFFFFF' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px', paddingTop: '64px' }}>
          OUR VALUES
        </p>

        {/* Workshop photo placeholder */}
        <div
          style={{
            width: '100%',
            height: '300px',
            background: '#EBEBEB',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px dashed rgba(0,0,0,0.12)',
            marginBottom: '48px',
          }}
        >
          <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)' }}>
            推奨: 1600×600px以上
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(0,0,0,0.45)', fontWeight: 500 }}>
            WORKSHOP PHOTO
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(0,0,0,0.25)', marginTop: '4px' }}>
            ミシン・縫製作業場の写真
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {values.map((card, i) => (
            <div
              key={card.tag}
              ref={valRefs[i]}
              className={`scroll-hidden delay-${i + 1}`}
              style={{ background: '#F0F1F3', padding: '48px 40px' }}
            >
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '20px' }}>
                {card.tag}
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#080808', marginBottom: '20px', lineHeight: 1.5 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '11px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.05em' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
