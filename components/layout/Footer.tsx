import Link from 'next/link'
import { SiFacebook, SiX, SiInstagram, SiYoutube } from 'react-icons/si'

const serviceLinks = [
  { label: 'レーシングスーツ', href: '/products' },
  { label: 'エアバッグ対応',   href: '/airbag' },
  { label: '修理・クリーニング', href: '/repair' },
  { label: 'サーキットサービス', href: '/service' },
] as const

const snsLinks = [
  { label: 'Facebook',  href: '#facebook',  Icon: SiFacebook },
  { label: 'Twitter(X)', href: '#twitter',  Icon: SiX },
  { label: 'Instagram', href: '#instagram', Icon: SiInstagram },
  { label: 'YouTube',   href: '#youtube',   Icon: SiYoutube },
] as const

export default function Footer() {
  return (
    <footer className="px-6 pt-12 pb-[88px] md:pb-8" style={{ background: '#0a0a0a' }}>
      {/* 上段: 3カラム */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* 左カラム: ロゴ＋キャッチ＋SNS */}
        <div>
          <p className="text-[18px] font-medium text-white">PRIDE1</p>
          <p className="text-[13px] text-[#888888] mt-2 leading-relaxed">
            Riderのケガを減らすことが、仕事です。
          </p>
          <div className="flex items-center mt-5" style={{ gap: '24px' }}>
            {snsLinks.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className="text-[#888888] hover:text-[#C5A059] transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* 中央カラム: サービス */}
        <div>
          <p className="text-[12px] font-medium text-white uppercase tracking-[0.08em] mb-4">
            サービス
          </p>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-[#888888] hover:text-[#C5A059] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 右カラム: 会社情報 */}
        <div>
          <p className="text-[12px] font-medium text-white uppercase tracking-[0.08em] mb-4">
            会社情報
          </p>
          <address className="not-italic text-[13px] text-[#888888] leading-[1.8]">
            <p>〒270-0222 千葉県白井市冨士57-11</p>
            <p>
              TEL:{' '}
              <a href="tel:047-445-8366" className="text-[#888888] hover:text-[#C5A059] transition-colors duration-200">
                047-445-8366
              </a>
            </p>
            <p>
              <a href="mailto:info@pride1.jp" className="text-[#888888] hover:text-[#C5A059] transition-colors duration-200">
                info@pride1.jp
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* 下段: コピーライト */}
      <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[12px] text-[#888888] text-center">
          © 2025 プライドワン All rights reserved.
        </p>
      </div>
    </footer>
  )
}
