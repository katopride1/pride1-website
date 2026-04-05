export const metadata = {
  title: 'PRIDE1とは | PRIDE1',
  description: '1987年の創業から38年。全日本ロードレース選手権の現場で積み上げてきた、PRIDE1のブランドストーリー。',
}

const numbers = [
  { value: '1987', label: '年創業' },
  { value: '38+', label: '年のサーキット経験' },
  { value: '全日本', label: 'ロードレース選手権\n唯一供給ブランド' },
  { value: 'MFJ', label: 'スタンダード\n公認取得' },
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

export default function AboutPage() {
  return (
    <div style={{ background: '#060E1A', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div style={{ padding: '96px 72px 80px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            ABOUT PRIDE1
          </p>
        </div>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '32px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'white',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          ライダーの命を守ることが、私たちの仕事です。
        </h1>
      </div>

      {/* Section 2: Statement */}
      <div
        style={{
          padding: '80px 72px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
        }}
      >
        {/* Left */}
        <div style={{ minWidth: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 400, color: 'white', lineHeight: 1.7, marginBottom: '32px' }}>
            1987年、私たちはサーキットに立った。
          </p>
          <p style={{ fontSize: '12px', lineHeight: 2.4, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
            全日本ロードレース選手権の現場で、転倒するライダーを見続けてきた。その度に問い続けた。もっと安全にできないか。もっと速く、もっと軽く、もっと確実に守れないか。
          </p>
        </div>
        {/* Right */}
        <div style={{ minWidth: 0 }}>
          <p style={{ fontSize: '18px', fontWeight: 400, color: 'white', lineHeight: 1.7, marginBottom: '32px' }}>
            答えは、現場にしかなかった。
          </p>
          <p style={{ fontSize: '12px', lineHeight: 2.4, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
            カタログやデータだけでは、ライダーを守れない。だから私たちは38年間、サーキットに通い続けた。試着し、修理し、エアバッグを点検し、転倒を分析した。その積み重ねが、PRIDE1というブランドを作った。
          </p>
        </div>
      </div>

      {/* Section 3: Numbers */}
      <div
        style={{
          padding: '80px 72px 96px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          NUMBERS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {numbers.map((item) => (
            <div key={item.value}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '56px',
                  fontWeight: 300,
                  color: 'white',
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
                  color: 'rgba(255,255,255,0.28)',
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
      <div style={{ padding: '0 72px 120px' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          OUR VALUES
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {values.map((card) => (
            <div key={card.tag} style={{ background: '#0D1B2E', padding: '48px 40px' }}>
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '20px' }}>
                {card.tag}
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'white', marginBottom: '20px', lineHeight: 1.5 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.05em' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
