'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const cards = [
  {
    number: '01',
    tag: 'TECHNOLOGY',
    title: '業界初のネックエアバッグ内蔵スーツ',
    body: '2012年、全日本ロードレース選手権へのネックエアバッグスーツ供給を業界で唯一実現。転倒時の首・頸椎保護という課題に、誰よりも早く答えを出した。',
  },
  {
    number: '02',
    tag: 'FIELD',
    title: 'サーキット現場に38年間、通い続けた',
    body: '試着・相談・修理・エアバッグ点検。購入前も購入後も、サーキットの現場で直接対応する。これはカタログを売るブランドには、絶対にできないことだ。',
  },
  {
    number: '03',
    tag: 'PHILOSOPHY',
    title: '転倒を見続けてきた設計思想',
    body: '1987年から積み上げてきた実戦データが、すべての縫い目に反映されている。素材・パターン・エアバッグ配置、全ての判断に根拠がある。',
  },
] as const

export default function ReasonSection() {
  const sectionRef = useScrollAnimation()
  const card1Ref  = useScrollAnimation()
  const card2Ref  = useScrollAnimation()
  const card3Ref  = useScrollAnimation()
  const cardRefs = [card1Ref, card2Ref, card3Ref]

  return (
    <section
      className="px-6 pt-14 pb-20 md:px-[72px]"
      style={{ background: '#FFFFFF' }}
    >
      {/* Section header */}
      <div ref={sectionRef} className="scroll-hidden">
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.36em',
            color: 'rgba(197,160,89,0.65)',
            marginBottom: '80px',
          }}
        >
          WHY PRIDE1
        </p>
        <h2
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '32px',
            fontWeight: 400,
            fontStyle: 'normal',
            color: '#0a0a0a',
            marginBottom: '40px',
            lineHeight: 1.2,
          }}
        >
          なぜPRIDE1が選ばれるのか
        </h2>
        <p
          style={{
            fontSize: '11px',
            lineHeight: 2.2,
            color: 'rgba(10,10,10,0.65)',
            letterSpacing: '0.07em',
            marginBottom: '128px',
          }}
        >
          技術と現場。この2つを38年間、一度も手放さなかった。
        </p>
      </div>

      {/* Cards */}
      <div>
        {cards.map((card, i) => (
          <div
            key={card.number}
            ref={cardRefs[i]}
            className={`scroll-hidden delay-${i + 1} grid grid-cols-1 md:grid-cols-[80px_260px_1fr] items-center py-12`}
            style={{ borderTop: '1px solid rgba(10,10,10,0.10)' }}
          >
            {/* Left: number - desktop only */}
            <div
              className="hidden md:block"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '88px',
                fontWeight: 300,
                color: 'rgba(10,10,10,0.18)',
                lineHeight: 1,
                marginTop: '-12px',
              }}
            >
              {card.number}
            </div>

            {/* Center: tag + title */}
            <div>
              <p
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(197,160,89,0.6)',
                  marginBottom: '12px',
                }}
              >
                {card.tag}
              </p>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  lineHeight: 1.65,
                  letterSpacing: '0.05em',
                  color: '#0a0a0a',
                }}
              >
                {card.title}
              </h3>
            </div>

            {/* Right: body */}
            <p
              className="mt-4 md:mt-0 md:pl-8"
              style={{
                fontSize: '15px',
                lineHeight: 1.9,
                color: 'rgba(10,10,10,0.65)',
                letterSpacing: '0.05em',
                fontWeight: 300,
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
