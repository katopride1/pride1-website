import Link from 'next/link'

const serviceLinks = [
  { label: 'レーシングスーツ', href: '/products' },
  { label: 'エアバッグ対応',   href: '/airbag' },
  { label: '修理・クリーニング', href: '/repair' },
  { label: 'サーキットサービス', href: '/service' },
] as const

const snsLinks = [
  { label: 'Facebook',    href: '#facebook' },
  { label: 'Twitter(X)',  href: '#twitter' },
  { label: 'Instagram',   href: '#instagram' },
  { label: 'YouTube',     href: '#youtube' },
] as const

export default function Footer() {
  return (
    <footer className="bg-[#0D1E30] border-t border-[#0D2744] px-6 pt-12 pb-8">
      {/* 上段: 3カラム */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* 左カラム: ロゴ＋キャッチ＋SNS */}
        <div>
          <p className="text-[18px] font-medium text-[#EEF4FF]">PRIDE1</p>
          <p className="text-[13px] text-[#4A7A9B] mt-2 leading-relaxed">
            Riderのケガを減らすことが、仕事です。
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {snsLinks.map((sns) => (
              <a
                key={sns.href}
                href={sns.href}
                className="text-[12px] text-[#4A7A9B] hover:text-[#7AABCF] transition-colors"
              >
                {sns.label}
              </a>
            ))}
          </div>
        </div>

        {/* 中央カラム: サービス */}
        <div>
          <p className="text-[12px] font-medium text-[#EEF4FF] uppercase tracking-[0.08em] mb-4">
            サービス
          </p>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-[#7AABCF] hover:text-[#EEF4FF] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 右カラム: 会社情報 */}
        <div>
          <p className="text-[12px] font-medium text-[#EEF4FF] uppercase tracking-[0.08em] mb-4">
            会社情報
          </p>
          <address className="not-italic text-[13px] text-[#4A7A9B] leading-[1.8]">
            <p>〒270-0222 千葉県白井市冨士57-11</p>
            <p>
              TEL:{' '}
              <a href="tel:047-445-8366" className="hover:text-[#7AABCF] transition-colors">
                047-445-8366
              </a>
            </p>
            <p>
              <a href="mailto:info@pride1.jp" className="hover:text-[#7AABCF] transition-colors">
                info@pride1.jp
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* 下段: コピーライト */}
      <div className="border-t border-[#0D2744] mt-8 pt-6">
        <p className="text-[12px] text-[#4A7A9B] text-center">
          © 2025 プライドワン All rights reserved.
        </p>
      </div>
    </footer>
  )
}
