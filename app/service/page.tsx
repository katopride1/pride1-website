import Link from 'next/link'

export const metadata = {
  title: 'サーキットサービス | PRIDE1',
  description: '全日本ロードレース選手権をはじめ、国内主要サーキットでPRIDE1が直接サポート。試着・相談・修理・エアバッグ点検をその場で。',
}

const services = [
  {
    tag: 'FITTING',
    title: '試着・フィッティング',
    body: '実際にスーツを着て、サイズ感や動きやすさを確認。購入前の試着対応をサーキット会場で行います。',
  },
  {
    tag: 'CONSULT',
    title: 'スーツ相談',
    body: '用途・レベル・予算に合わせたモデル選びをご提案。スーツのことなら何でもご相談ください。',
  },
  {
    tag: 'REPAIR',
    title: '現場修理',
    body: 'レース中のトラブルにもその場で対応。軽微な修理はサーキット会場で即日対応することも可能です。',
  },
  {
    tag: 'AIRBAG',
    title: 'エアバッグ点検',
    body: 'ガスカートリッジの交換、動作確認をその場で実施。レース前の安心確認にご利用ください。',
  },
] as const

const schedule = [
  { month: '4月', event: '全日本ロードレース選手権 第1戦', circuit: 'ツインリンクもてぎ' },
  { month: '5月', event: '全日本ロードレース選手権 第2戦', circuit: 'スポーツランドSUGO' },
  { month: '6月', event: '全日本ロードレース選手権 第3戦', circuit: '岡山国際サーキット' },
  { month: '8月', event: '全日本ロードレース選手権 第4戦', circuit: 'ツインリンクもてぎ' },
  { month: '9月', event: '全日本ロードレース選手権 第5戦', circuit: 'オートポリス' },
  { month: '10月', event: '全日本ロードレース選手権 第6戦', circuit: '鈴鹿サーキット' },
] as const

export default function ServicePage() {
  return (
    <div style={{ background: '#060E1A', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div style={{ padding: '96px 72px 80px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(197,160,89,0.5)', flexShrink: 0 }} />
          <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.7)', margin: 0 }}>
            CIRCUIT SERVICE
          </p>
        </div>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '36px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'white',
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          サーキットに、私たちはいます。
        </h1>
        <p
          style={{
            fontSize: '12px',
            lineHeight: 2.2,
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.07em',
            marginTop: '24px',
            maxWidth: '520px',
          }}
        >
          試着、相談、修理、エアバッグ点検。購入前も購入後も、サーキットの現場で直接対応します。これはカタログを売るブランドには、絶対にできないことです。
        </p>
      </div>

      {/* Section 2: What we do */}
      <div style={{ padding: '80px 72px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          WHAT WE DO
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
          {services.map((s) => (
            <div key={s.tag} style={{ background: '#0D1B2E', padding: '40px 32px' }}>
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '16px' }}>
                {s.tag}
              </p>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'white', marginBottom: '16px', lineHeight: 1.5 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '11px', lineHeight: 2.1, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Schedule */}
      <div style={{ padding: '80px 72px 96px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '16px' }}>
          2025 SCHEDULE
        </p>
        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em', marginBottom: '56px' }}>
          ※ 参戦スケジュールは変更になる場合があります。最新情報はSNSでご確認ください。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {schedule.map((item, i) => (
            <div
              key={item.month + item.event}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 200px',
                padding: '24px 32px',
                alignItems: 'center',
                background: i % 2 === 0 ? '#0D1B2E' : 'transparent',
                borderBottom: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.04)' : undefined,
              }}
            >
              <p style={{ fontSize: '11px', color: 'rgba(197,160,89,0.7)', letterSpacing: '0.1em', fontWeight: 300 }}>
                {item.month}
              </p>
              <p style={{ fontSize: '13px', color: 'white', fontWeight: 300, letterSpacing: '0.04em' }}>
                {item.event}
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textAlign: 'right' }}>
                {item.circuit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: CTA */}
      <div style={{ padding: '80px 72px 120px', borderTop: '1px solid rgba(197,160,89,0.15)' }}>
        <h2
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'white',
            marginBottom: '16px',
          }}
        >
          サーキットで会いましょう。
        </h2>
        <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)', marginBottom: '48px' }}>
          次のレース会場でお声がけください。スーツのこと、エアバッグのこと、何でもその場でお答えします。
        </p>
        <div className="flex items-center" style={{ gap: '48px' }}>
          <Link
            href="/contact"
            style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.8)',
              borderBottom: '1px solid rgba(255,255,255,0.25)',
              paddingBottom: '4px',
              textDecoration: 'none',
            }}
          >
            問い合わせフォームへ
          </Link>
          <Link
            href="tel:047-445-8366"
            style={{
              fontSize: '10px',
              color: 'rgba(197,160,89,0.7)',
              textDecoration: 'none',
            }}
          >
            → 電話で相談する 047-445-8366
          </Link>
        </div>
      </div>

    </div>
  )
}
