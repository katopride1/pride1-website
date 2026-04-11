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
    <div style={{ background: '#080808', minHeight: '100vh' }}>

      {/* Section 1: Hero */}
      <div className="px-6 pt-16 pb-20 md:px-[72px] md:pt-24">
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

      {/* CIRCUIT PHOTO placeholder */}
      <div
        style={{
          width: '100%',
          height: '320px',
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
          推奨: 1600×640px以上
        </div>
        <div style={{ fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
          CIRCUIT PHOTO
        </div>
        <div style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.18)', marginTop: '4px' }}>
          サーキット現場・ピットでの対応写真
        </div>
      </div>

      {/* Divider: dark → white */}
      <div style={{ height: '1px', background: 'rgba(10,10,10,0.08)' }} />

      {/* Section 2: What we do */}
      <div
        className="px-6 py-12 md:px-[72px] md:py-20"
        style={{ background: '#FFFFFF' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '64px' }}>
          WHAT WE DO
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {services.map((s) => (
            <div
              key={s.tag}
              style={{
                background: '#F5F4F0',
                padding: '32px 24px',
                border: '1px solid rgba(10,10,10,0.10)',
              }}
            >
              <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(10,10,10,0.4)', marginBottom: '16px' }}>
                {s.tag}
              </p>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#0a0a0a', marginBottom: '16px', lineHeight: 1.5 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '11px', lineHeight: 2.1, color: 'rgba(10,10,10,0.65)', letterSpacing: '0.04em' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider: white → dark */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Section 3: Schedule */}
      <div
        className="px-6 py-12 pb-16 md:px-[72px] md:py-20 md:pb-24"
        style={{ background: '#F5F4F0', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.36em', color: 'rgba(197,160,89,0.65)', marginBottom: '16px' }}>
          2025 SCHEDULE
        </p>
        <p style={{ fontSize: '10px', color: '#999999', letterSpacing: '0.05em', marginBottom: '56px' }}>
          ※ 参戦スケジュールは変更になる場合があります。最新情報はSNSでご確認ください。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {schedule.map((item, i) => (
            <div
              key={item.month + item.event}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr_200px] items-center p-4 md:py-6 md:px-8"
              style={{
                background: i % 2 === 0 ? '#FFFFFF' : 'transparent',
                borderBottom: i % 2 !== 0 ? '1px solid rgba(0,0,0,0.06)' : undefined,
              }}
            >
              <p style={{ fontSize: '11px', color: 'rgba(197,160,89,0.7)', letterSpacing: '0.1em', fontWeight: 300 }}>
                {item.month}
              </p>
              <p style={{ fontSize: '14px', color: '#080808', fontWeight: 300, letterSpacing: '0.04em' }}>
                {item.event}
              </p>
              <p
                className="hidden md:block"
                style={{ fontSize: '11px', color: '#555555', letterSpacing: '0.06em', textAlign: 'right' }}
              >
                {item.circuit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: CTA */}
      <div
        className="px-6 py-12 pb-20 md:px-[72px] md:py-20 md:pb-[120px]"
        style={{ borderTop: '1px solid rgba(197,160,89,0.15)' }}
      >
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
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
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
