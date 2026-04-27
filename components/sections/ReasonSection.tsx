'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const cards = [
  {
    number: '01',
    tag: 'TECHNOLOGY',
    title: 'ネックエアバッグ内蔵、業界初',
    body: '転倒した瞬間、首と頸椎に何が起きるか。その問いを38年間、サーキットの現場で問い続けてきました。2012年、全日本ロードレース選手権への供給という形で、一つの答えを出しました。',
  },
  {
    number: '02',
    tag: 'FIELD',
    title: '38年間のサーキット現場',
    body: '試着も、修理も、エアバッグ点検も、現場で直接お応えしています。購入前も購入後も、ずっとそばにいます。カタログではなく、人が動くブランドであり続けることが、私たちの仕事です。',
  },
  {
    number: '03',
    tag: 'PHILOSOPHY',
    title: '実戦データの、設計思想',
    body: '素材、パターン、エアバッグの配置。すべての判断に、現場で積み上げてきた根拠があります。1987年から続く転倒分析が、一着一着に反映されています。',
  },
] as const

export default function ReasonSection() {
  const sectionRef = useScrollAnimation()
  const card1Ref  = useScrollAnimation()
  const card2Ref  = useScrollAnimation()
  const card3Ref  = useScrollAnimation()
  const cardRefs = [card1Ref, card2Ref, card3Ref]

  return (
    <section style={{ background: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">

        {/* Section header */}
        <div ref={sectionRef} className="scroll-hidden" style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.36em',
              color: 'rgba(197,160,89,0.65)',
              marginBottom: '24px',
            }}
          >
            WHY PRIDE1
          </p>
          <h2
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 300,
              color: '#0a0a0a',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            なぜPRIDE1が<br className="md:hidden" />選ばれるのか
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(10,10,10,0.5)',
            }}
          >
            サーキットで、育ったブランド。
          </p>
        </div>

        {/* Cards */}
        <div>
          {cards.map((card, i) => (
            <div
              key={card.number}
              ref={cardRefs[i]}
              className={`scroll-hidden delay-${i + 1}`}
              style={{
                background: '#FFFFFF',
                borderBottom: '1px solid rgba(10,10,10,0.08)',
                padding: '28px 0',
              }}
            >
              {/* モバイル：縦1カラム */}
              <div className="md:hidden">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                  {/* 番号 */}
                  <span
                    style={{
                      fontFamily: 'var(--font-barlow-condensed), sans-serif',
                      fontSize: '40px',
                      fontWeight: 200,
                      color: 'rgba(10,10,10,0.10)',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {card.number}
                  </span>
                  {/* カテゴリ + タイトル */}
                  <div style={{ paddingTop: '4px' }}>
                    <p
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        color: '#C5A059',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {card.tag}
                    </p>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: 1.5,
                        color: '#0a0a0a',
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
                {/* 説明文 */}
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.9,
                    color: 'rgba(10,10,10,0.6)',
                    background: '#FFFFFF',
                  }}
                >
                  {card.body}
                </p>
              </div>

              {/* デスクトップ：3カラムグリッド */}
              <div
                className="hidden md:grid"
                style={{
                  gridTemplateColumns: '120px 300px 1fr',
                  gap: '0 48px',
                  alignItems: 'center',
                }}
              >
                {/* 番号 */}
                <div
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: 'clamp(72px, 8vw, 100px)',
                    fontWeight: 200,
                    color: 'rgba(10,10,10,0.10)',
                    lineHeight: 1,
                    alignSelf: 'center',
                  }}
                >
                  {card.number}
                </div>

                {/* カテゴリ + タイトル */}
                <div>
                  <p
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      color: '#C5A059',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {card.tag}
                  </p>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: '#0a0a0a',
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* 説明文 */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.85,
                    color: 'rgba(10,10,10,0.6)',
                    maxWidth: '600px',
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
