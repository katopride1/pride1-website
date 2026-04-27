'use client'

import Image from 'next/image'
import CTASection from '@/components/sections/CTASection'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type Service = {
  tag: string
  title: string
  body: string
  durationLabel: string
  duration: string
  note?: string
}

const reasons = [
  {
    number: '01',
    title: '作った人が、直す。',
    body: 'スーツの縫製構造を知っているのは、作った本人だけです。同一の革・同一の糸での補修が可能で、修理後もMFJ車検を通過できる品質を保証します。',
  },
  {
    number: '02',
    title: 'エアバッグごと、受け付ける。',
    body: 'エアバッグ内蔵スーツを受け付けられる業者は、国内にほとんど存在しません。PRIDE1は縫製修理とエアバッグ点検を同時に対応。送り先は、一箇所で足ります。',
  },
  {
    number: '03',
    title: 'サーキット現場で、その日に直す。',
    body: '東日本の主要サーキットへ出向き、現地でスーツを修理します。転倒後も、次のセッションへ間に合うようその場で対応。PRIDE1ユーザー以外のスーツも受け付けています。',
  },
]

const services: Service[] = [
  {
    tag: 'REPAIR',
    title: '修理',
    body: '転倒による革の破損、縫製のほつれ、ファスナーやスライダーの交換まで。送付前に症状をお知らせください。修理内容と費用を確認した上で作業を開始します。修理後の強度・品質はPRIDE1の製造者基準で検査します。',
    durationLabel: '納期目安',
    duration: '2〜4週間',
  },
  {
    tag: 'CLEANING',
    title: 'クリーニング',
    body: 'レザースーツは、一般のクリーニング店では対応できません。革の特性に合わせた洗浄と乾燥管理、クリーニング後のオイル補給まで一貫して行います。ステッチ補修（約15箇所）とエアバッグ点検が含まれます。',
    durationLabel: '納期目安',
    duration: '4週間〜',
    note: '¥16,500（税別）/ ¥18,150（税込）',
  },
  {
    tag: 'AIRBAG',
    title: 'エアバッグ点検・交換',
    body: '一度作動したカートリッジは再使用できません。スーツ外観から気室の損傷は分かりません。Hit-Airとのパートナーシップのもと、気室の漏れ検査とカートリッジ交換を行います。点検のみ、カートリッジ交換のみの依頼も受け付けます。',
    durationLabel: '納期目安',
    duration: '当日〜3日',
  },
]

const steps = [
  {
    number: '01',
    title: 'お問い合わせ',
    body: 'フォームまたはLINEでご連絡ください。症状・破損箇所・エアバッグの有無をお知らせいただけると、スムーズにご案内できます。',
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

export default function RepairContent() {
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()
  const imageRef   = useScrollAnimation()

  const reasonLabelRef = useScrollAnimation()
  const reasonRef1     = useScrollAnimation()
  const reasonRef2     = useScrollAnimation()
  const reasonRef3     = useScrollAnimation()
  const reasonRefs     = [reasonRef1, reasonRef2, reasonRef3]

  const serviceLabelRef = useScrollAnimation()
  const serviceRef1     = useScrollAnimation()
  const serviceRef2     = useScrollAnimation()
  const serviceRef3     = useScrollAnimation()
  const serviceRefs     = [serviceRef1, serviceRef2, serviceRef3]

  const circuitLabelRef = useScrollAnimation()
  const circuitRef      = useScrollAnimation()

  const howLabelRef = useScrollAnimation()
  const stepRef1    = useScrollAnimation()
  const stepRef2    = useScrollAnimation()
  const stepRef3    = useScrollAnimation()
  const stepRef4    = useScrollAnimation()
  const stepRefs    = [stepRef1, stepRef2, stepRef3, stepRef4]

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pb-10 md:px-12 md:pb-12" style={{ paddingTop: '100px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            REPAIR & CLEANING
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
            作った人が、直す。
          </h1>
        </div>
        <div ref={subtextRef} className="scroll-hidden delay-1">
          <p
            style={{
              fontSize: '12px',
              lineHeight: 2.4,
              color: '#555555',
              letterSpacing: '0.07em',
              marginTop: '24px',
            }}
          >
            スーツの縫製構造を知っているのは、作った本人だけです。<br />
            どの革を、どの糸で、どの強度で縫ったのか。その記憶から、PRIDE1の修理は始まります。
          </p>
        </div>
      </div>

      {/* Photo */}
      <div ref={imageRef} className="scroll-hidden delay-2 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="rounded-lg" style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden' }}>
          <Image
            src="/images/repair-photo.png"
            alt="PRIDE1 修理・縫製作業"
            fill
            className="object-cover"
            style={{ objectFit: 'cover', objectPosition: '20% center' }}
          />
        </div>
      </div>

      {/* WHY PRIDE1 */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">
        <p ref={reasonLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          WHY PRIDE1
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reasons.map((r, i) => (
            <div key={r.number} ref={reasonRefs[i]} className={`scroll-hidden delay-${i + 1}`}>
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
                {r.number}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#111111',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                  lineHeight: 1.6,
                }}
              >
                {r.title}
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555555', letterSpacing: '0.04em' }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR SERVICES */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">
        <p ref={serviceLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          OUR SERVICES
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <div
              key={s.tag}
              ref={serviceRefs[i]}
              className={`scroll-hidden delay-${i + 1} grid grid-cols-1 md:grid-cols-[200px_1fr_180px] items-start`}
              style={{
                padding: '32px 24px',
                borderTop: i === 0 ? undefined : '1px solid rgba(10,10,10,0.10)',
              }}
            >
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(10,10,10,0.4)', marginBottom: '12px' }}>
                  {s.tag}
                </p>
                <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#111111', lineHeight: 1.5 }}>
                  {s.title}
                </h3>
              </div>
              <p
                className="mt-4 md:mt-0 md:px-12"
                style={{ fontSize: '15px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.05em' }}
              >
                {s.body}
              </p>
              <div className="mt-4 md:mt-0 md:pl-8">
                <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(10,10,10,0.4)', marginBottom: '8px' }}>
                  {s.durationLabel}
                </p>
                <p style={{ fontSize: '15px', color: '#111111', fontWeight: 500 }}>
                  {s.duration}
                </p>
                {s.note && (
                  <p style={{ fontSize: '11px', color: 'rgba(10,10,10,0.4)', marginTop: '10px', letterSpacing: '0.04em', lineHeight: 1.8 }}>
                    {s.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CIRCUIT SERVICE */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">
        <p ref={circuitLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          CIRCUIT SERVICE
        </p>
        <div ref={circuitRef} className="scroll-hidden delay-1 flex flex-col md:flex-row items-start" style={{ gap: '48px' }}>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 300,
                letterSpacing: '0.06em',
                color: '#111111',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              転倒したその日に、<br />走れる状態へ。
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.05em', maxWidth: '480px' }}>
              東日本の主要サーキットで、PRIDE1は現地対応を行っています。<br />
              転倒後のスーツも、その場で確認・修理。<br />
              次のセッションへ向けて、できる限り走れる状態に整えます。<br />
              PRIDE1ユーザー以外のスーツも対応可能です。<br />
              対応スケジュールは、SNSでご確認ください。
            </p>
          </div>
          <div style={{ flexShrink: 0, width: '220px', paddingTop: '8px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(10,10,10,0.4)', marginBottom: '20px' }}>
              MAIN CIRCUITS
            </p>
            {['筑波サーキット', 'モビリティリゾートもてぎ', 'スポーツランドSUGO'].map((circuit) => (
              <p
                key={circuit}
                style={{
                  fontSize: '13px',
                  color: '#111111',
                  letterSpacing: '0.06em',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(10,10,10,0.08)',
                  marginBottom: '12px',
                  lineHeight: 1.5,
                }}
              >
                {circuit}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* HOW TO ORDER */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:px-12">
        <p ref={howLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          HOW TO ORDER
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[2px]">
          {steps.map((step, i) => (
            <div key={step.number} ref={stepRefs[i]} className={`scroll-hidden delay-${i + 1}`} style={{ paddingRight: '16px' }}>
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
              <p
                style={{
                  fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#111111',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555555', letterSpacing: '0.04em' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection subtext="修理の相談は無料です。スーツの状態を教えていただければ、最適な方法をご提案します。修理できない状態かどうか含め、正直にお伝えします。" />

    </div>
  )
}
