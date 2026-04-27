'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const milestones = [
  {
    year: '1987',
    title: '創業',
    body: '「Riderのケガを減らす事が仕事」という理念のもと、レーシングスーツの製造をスタート。',
  },
  {
    year: '1991',
    title: '全日本GP500 チャンピオン',
    body: 'Peter Godard選手がPRIDE1製スーツで全日本GP500チャンピオン獲得。トップライダーが選んだという事実が、品質の証明となった。',
  },
  {
    year: '1993',
    title: 'WGP250 世界チャンピオン',
    body: '原田哲也選手がWGP250クラスで世界チャンピオン。ヤマハとの共同でエアロダイナミック形状「コブ」を開発し、技術革新を続ける。',
  },
  {
    year: '2007',
    title: 'PRIDE1、本格始動',
    body: 'OEM依頼先の廃業を転機に、自社ブランドとして新たなスタート。カンガルー革×アルミ製ショルダースライダーの新世代スーツを開発。',
  },
  {
    year: '2012',
    title: '業界初：ネックエアバッグ内蔵スーツ供給',
    body: '全日本ロードレース選手権 JSB・J-GP2・ST600 クラスへ、日本で初めてネックエアバッグ内蔵スーツを供給。',
  },
  {
    year: '2014',
    title: 'エアバッグ内蔵スーツ 日本No.1',
    body: 'エアバッグ内蔵スーツの販売シェアで日本No.1を達成。普及への使命が、数字に変わった年。',
  },
] as const

export default function AboutTimeline() {
  const labelRef = useScrollAnimation()
  const headRef  = useScrollAnimation()

  const r0 = useScrollAnimation()
  const r1 = useScrollAnimation()
  const r2 = useScrollAnimation()
  const r3 = useScrollAnimation()
  const r4 = useScrollAnimation()
  const r5 = useScrollAnimation()
  const rowRefs = [r0, r1, r2, r3, r4, r5]

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12" style={{ background: '#FFFFFF' }}>
      <p ref={labelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '16px' }}>
        HISTORY
      </p>
      <h2
        ref={headRef}
        className="scroll-hidden delay-1"
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: '22px',
          fontWeight: 300,
          letterSpacing: '0.06em',
          color: '#111111',
          lineHeight: 1.6,
          marginBottom: '64px',
        }}
      >
        38年間、変わらない理念で。
      </h2>

      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            left: '96px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(0,0,0,0.08)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {milestones.map((item, i) => (
            <div
              key={item.year}
              ref={rowRefs[i]}
              className={`scroll-hidden delay-${(i % 4) + 1}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '8px',
                paddingBottom: i < milestones.length - 1 ? '48px' : '0',
              }}
            >
              {/* Mobile layout */}
              <div className="flex items-baseline gap-4 md:hidden">
                <span
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: 'rgba(197,160,89,0.6)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {item.year}
                </span>
                <div
                  style={{
                    width: '24px',
                    height: '1px',
                    background: 'rgba(0,0,0,0.15)',
                    flexShrink: 0,
                    marginBottom: '2px',
                  }}
                />
              </div>
              <div className="md:hidden">
                <p style={{ fontSize: '13px', fontWeight: 500, color: '#111111', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '11px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.04em' }}>
                  {item.body}
                </p>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid" style={{ gridTemplateColumns: '96px 48px 1fr', alignItems: 'start', gap: '0' }}>
                {/* Year */}
                <div style={{ paddingRight: '24px', paddingTop: '2px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-barlow-condensed), sans-serif',
                      fontSize: '32px',
                      fontWeight: 300,
                      color: 'rgba(197,160,89,0.65)',
                      lineHeight: 1,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Dot on line */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
                  <div
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#C5A059',
                      opacity: 0.5,
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ paddingLeft: '32px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#111111', marginBottom: '10px', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '11px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.04em' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
