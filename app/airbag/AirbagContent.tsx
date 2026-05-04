'use client'

import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/sections/CTASection'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const specs = [
  { value: '0.25', unit: '秒', label: '展開時間（Sシステム）' },
  { value: '2012', unit: '年', label: '全日本選手権採用開始' },
  { value: '17', unit: '年', label: '実戦データの蓄積' },
] as const

const features = [
  {
    tag: 'NECK ONLY',
    title: '首（頚椎）に特化',
    body: 'ヘルメットが頭を、スーツが胴体を、エアバッグが首を守る。守る場所を一点に絞った設計思想。',
    image: '/images/airbag-neck-closeup.png',
    reverse: false,
  },
  {
    tag: 'MECHANICAL',
    title: '機械式・電源不要',
    body: 'ワイヤーによる物理作動。バッテリー切れも誤作動もない。シンプルだから、確実に動く。',
    image: '/images/airbag-mechanism.png',
    reverse: true,
  },
  {
    tag: 'RACE PROVEN',
    title: '全日本ロードで採用',
    body: '2012年から全日本ロードレース選手権に供給。国内で唯一、開発を担うメーカー。',
    image: '/images/airbag-race-circuit.png',
    reverse: false,
  },
] as const

const steps = [
  {
    number: '01',
    title: '乗る前に接続',
    body: '伸縮ワイヤーでバイクとスーツを繋ぐ。電源もセンサーも不要。この一本が起点になる。',
  },
  {
    number: '02',
    title: '転倒で展開',
    body: '身体がバイクから離れると、約0.25秒でエアバッグが首周りに二重展開。CO2カートリッジによる機械式作動。',
  },
  {
    number: '03',
    title: 'ボンベ交換で復元',
    body: '作動後、本体に損傷がなければカートリッジボンベを交換するだけで再使用可能。付属工具で現場対応できる。',
  },
] as const

const models = [
  { name: 'レーシングスーツ', modelNumber: 'PRR-175 STD', desc: 'フラッグシップ。カンガルー×牛革ハイブリッド、Hit-Airネックエアバッグ内蔵。', href: '/products#flagship' },
  { name: 'レーシングスーツ フルオーダー', modelNumber: 'PRR-145', desc: '体型・カラー・デザインを完全オーダーで仕上げる上位モデル。', href: '/products#full-order' },
  { name: 'スーパーモトスーツ', modelNumber: 'PRM-103 TypeC', desc: '全日本スーパーモト選手権で約25%のシェア。Hit-Airネックエアバッグ内蔵。', href: '/products#supermoto' },
  { name: 'ストリートスーツ', modelNumber: 'PRA-116', desc: 'ストリート・ツーリング対応。エアバッグ内蔵でMFJ公認。', href: '/products#street' },
  { name: 'ヴィンテージスーツ', modelNumber: 'PRV-158', desc: 'クラシックデザイン×最新安全技術。Hit-Airネックエアバッグ内蔵。', href: '/products#vintage' },
  { name: 'Hit-Air RS-1', modelNumber: '', desc: 'ベストタイプのレーシングエアバッグ。スーツへの後付けに。', href: '/products' },
] as const

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PhotoPlaceholder({ label, size, height = 480 }: { label: string; size: string; height?: number }) {
  return (
    <div
      style={{
        width: '100%',
        height: `${height}px`,
        background: '#f0eeea',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: '1px dashed rgba(10,10,10,0.12)',
      }}
    >
      <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(10,10,10,0.25)' }}>推奨: {size}</div>
      <div style={{ fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(10,10,10,0.4)', fontWeight: 500, textAlign: 'center', padding: '0 16px' }}>{label}</div>
    </div>
  )
}

export default function AirbagContent() {
  const heroRef    = useScrollAnimation()
  const subtextRef = useScrollAnimation()

  const statsContainerRef = useScrollAnimation()

  const featRef1     = useScrollAnimation()
  const featRef2     = useScrollAnimation()
  const featRef3     = useScrollAnimation()
  const featRefs     = [featRef1, featRef2, featRef3]

  const howLabelRef = useScrollAnimation()
  const stepRef1    = useScrollAnimation()
  const stepRef2    = useScrollAnimation()
  const stepRef3    = useScrollAnimation()
  const stepRefs    = [stepRef1, stepRef2, stepRef3]

  const modelsLabelRef = useScrollAnimation()
  const modelRef1      = useScrollAnimation()
  const modelRef2      = useScrollAnimation()
  const modelRef3      = useScrollAnimation()
  const modelRef4      = useScrollAnimation()
  const modelRef5      = useScrollAnimation()
  const modelRef6      = useScrollAnimation()
  const modelRefs      = [modelRef1, modelRef2, modelRef3, modelRef4, modelRef5, modelRef6]

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pb-6 md:pb-10 md:px-12" style={{ background: '#ffffff', paddingTop: '100px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            AIRBAG SYSTEM
          </p>
        </div>
        <div ref={heroRef} className="scroll-hidden">
          <h1
            className="text-[26px] md:text-[36px]"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              letterSpacing: '0.06em',
              color: '#111111',
              lineHeight: 1.6,
            }}
          >
            首を守るという、一点の思想。
          </h1>
        </div>
        <div ref={subtextRef} className="scroll-hidden delay-1">
          <p style={{ fontSize: '12px', lineHeight: 2.2, color: '#555555', letterSpacing: '0.07em', marginTop: '24px', maxWidth: '640px' }}>
            2008年にHit-Airとの共同開発を開始し、2012年に業界初の全日本ロードレース選手権供給を実現。<br />
            国内で唯一、レーシングネックエアバッグの開発を担うメーカーです。
          </p>
        </div>
      </div>

      {/* Hero photo */}
      <div className="h-[300px] md:h-[480px]" style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/images/airbag-suit-hero.png"
          alt="PRIDE1 ネックエアバッグ内蔵レーシングスーツ"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Stats */}
      <section style={{ background: '#ffffff' }}>
        <div ref={statsContainerRef} className="scroll-hidden max-w-[1200px] mx-auto px-6 py-10 md:py-20 md:px-12">
          <div className="md:hidden">
            {specs.map((spec) => (
              <div key={spec.value} style={{ padding: '24px 0', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 200, fontSize: '56px', color: '#0a0a0a', lineHeight: 1 }}>
                  {spec.value}<span style={{ fontSize: '24px' }}>{spec.unit}</span>
                </div>
                <p style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(10,10,10,0.45)', lineHeight: 1.7, marginTop: '8px' }}>{spec.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3">
            {specs.map((spec, i) => (
              <div key={spec.value} style={{ padding: '40px 48px', borderLeft: i > 0 ? '1px solid rgba(10,10,10,0.08)' : undefined }}>
                <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontWeight: 200, fontSize: 'clamp(48px, 5vw, 72px)', color: '#0a0a0a', lineHeight: 1, whiteSpace: 'nowrap' }}>
                  {spec.value}<span style={{ fontSize: '28px' }}>{spec.unit}</span>
                </div>
                <p style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(10,10,10,0.45)', lineHeight: 1.7, marginTop: '12px' }}>{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — 写真左右交互レイアウト */}
      <div style={{ background: '#ffffff' }}>
        {features.map((f, i) => (
          <div
            key={f.tag}
            ref={featRefs[i]}
            className="scroll-hidden delay-1 grid grid-cols-1 md:grid-cols-[1fr_1fr]"
            style={{ borderTop: i === 0 ? undefined : '1px solid rgba(10,10,10,0.08)' }}
          >
            {/* 写真 */}
            <div className={`${f.reverse ? 'md:order-2' : 'md:order-1'} min-h-[260px] md:min-h-[440px]`} style={{ position: 'relative' }}>
              <Image
                src={f.image}
                alt={f.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* テキスト */}
            <div
              className={`flex flex-col justify-center px-8 py-8 md:py-0 ${f.reverse ? 'md:order-1 md:px-12' : 'md:order-2 md:px-12'}`}
              style={{ background: i % 2 === 0 ? '#F5F4F0' : '#ffffff' }}
            >
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(10,10,10,0.35)', marginBottom: '20px' }}>{f.tag}</p>
              <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#111111', lineHeight: 1.6, letterSpacing: '0.04em', marginBottom: '24px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 2.3, color: '#555555', letterSpacing: '0.05em' }}>{f.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 md:px-12" style={{ background: '#ffffff' }}>
        <p ref={howLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          HOW IT WORKS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2px]">
          {steps.map((step, i) => (
            <div key={step.number} ref={stepRefs[i]} className={`scroll-hidden delay-${i + 1}`} style={{ paddingRight: '16px' }}>
              <div style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 200, color: '#e0e0e0', lineHeight: 1, marginBottom: '16px' }}>
                {step.number}
              </div>
              <p style={{ fontSize: '15px', fontWeight: 500, color: '#111111', letterSpacing: '0.06em', marginBottom: '12px' }}>{step.title}</p>
              <p style={{ fontSize: '13px', lineHeight: 2.1, color: '#555555', letterSpacing: '0.04em' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Models */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 md:px-12" style={{ background: '#ffffff' }}>
        <p ref={modelsLabelRef} className="scroll-hidden" style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '48px' }}>
          MODELS
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {models.map((model, i) => (
            <div key={model.name} ref={modelRefs[i]} className={`scroll-hidden delay-${i + 1}`} style={{ borderTop: i === 0 ? undefined : '1px solid rgba(10,10,10,0.10)' }}>
              <Link
                href={model.href}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr_80px] items-center"
                style={{ padding: '28px 24px', display: 'grid', background: 'transparent', textDecoration: 'none', transition: 'background 0.2s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10,10,10,0.03)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#111111', letterSpacing: '0.06em' }}>{model.name}</p>
                <p className="mt-2 md:mt-0 md:px-10" style={{ fontSize: '12px', lineHeight: 1.9, color: '#666666', letterSpacing: '0.04em' }}>{model.desc}</p>
                <p className="hidden md:block" style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#C5A059', textAlign: 'right' }}>VIEW →</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <CTASection subtext="エアバッグのこと、スーツとの組み合わせのこと。サーキットの現場から答えます。" />

    </div>
  )
}
