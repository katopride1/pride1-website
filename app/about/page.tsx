import AboutAnimated from './AboutAnimated'

export const metadata = {
  title: 'PRIDE1とは | PRIDE1',
  description: '1987年の創業から38年。全日本ロードレース選手権の現場で積み上げてきた、PRIDE1のブランドストーリー。',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>

      {/* Section 1: Hero (アニメーションなし) */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24" style={{ background: '#FFFFFF' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            ABOUT PRIDE1
          </p>
        </div>
        <h1
          className="text-2xl md:text-[32px]"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: '#080808',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          ライダーの命を守ることが、私たちの仕事です。
        </h1>
      </div>

      {/* Section 2〜4: アニメーションあり（クライアントコンポーネント） */}
      <AboutAnimated />

    </div>
  )
}
