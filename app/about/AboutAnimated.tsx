'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const values = [
  {
    tag: 'SAFETY',
    title: '安全は妥協しない',
    body: '転倒時の衝撃から、首・頸椎・体幹をどう守るか。私たちはその問いに、38年間向き合い続けてきました。',
  },
  {
    tag: 'FIELD',
    title: '現場主義',
    body: 'サーキットの現場でしか得られない知見があります。だから私たちは、今日もサーキットに足を運びます。',
  },
  {
    tag: 'CRAFT',
    title: '職人の縫製',
    body: '一着一着、職人の手で丁寧に縫い上げています。データと経験が重なり合う場所に、PRIDE1のレーシングスーツがあります。',
  },
] as const

export default function AboutAnimated() {
  // Values refs
  const valLabelRef  = useScrollAnimation()
  const valPhotoRef  = useScrollAnimation()
  const valRef1      = useScrollAnimation()
  const valRef2      = useScrollAnimation()
  const valRef3      = useScrollAnimation()
  const valRefs      = [valRef1, valRef2, valRef3]

  return (
    <>
      {/* Section 2: Values */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12" style={{ background: '#FFFFFF' }}>
        <p ref={valLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          OUR VALUES
        </p>

        {/* Workshop photo */}
        <div
          ref={valPhotoRef}
          className="scroll-hidden delay-1"
          style={{ position: 'relative', width: '100%', height: '480px', marginBottom: '48px', overflow: 'hidden' }}
        >
          <Image
            src="/images/values-field.png"
            alt="PRIDE1 — サーキットのパドックでライダーにスーツを合わせる現場"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            sizes="100vw"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {values.map((card, i) => (
            <div
              key={card.tag}
              ref={valRefs[i]}
              className={`scroll-hidden delay-${i + 1} grid grid-cols-1 md:grid-cols-[120px_1fr]`}
              style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                paddingTop: '40px',
                paddingBottom: '40px',
                gap: '0 48px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 200,
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  color: 'rgba(0,0,0,0.07)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                0{i + 1}
              </div>
              <div style={{ paddingTop: '8px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#111111', marginBottom: '16px', lineHeight: 1.5, letterSpacing: '0.04em' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '12px', lineHeight: 2.3, color: '#555555', letterSpacing: '0.05em' }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
        </div>
      </div>
    </>
  )
}
