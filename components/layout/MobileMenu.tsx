import Link from 'next/link'
import { User } from 'lucide-react'

const navLinks = [
  { label: 'スーツを選ぶ',       href: '/products' },
  { label: 'エアバッグ',         href: '/airbag' },
  { label: '修理・クリーニング', href: '/repair' },
  { label: 'サーキットサービス', href: '/service' },
  { label: 'PRIDE1とは',         href: '/about' },
] as const

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#060E1A] flex flex-col">
      {/* 閉じるボタン */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-[#0D2744]">
        <span className="text-[18px] font-medium text-white">PRIDE1</span>
        <button
          onClick={onClose}
          aria-label="メニューを閉じる"
          className="text-white hover:text-[#C5A059] transition-colors duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* ナビリンク */}
      <nav className="flex-1 overflow-y-auto px-6 pt-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block text-[20px] text-white py-4 border-b border-[#0D2744] hover:text-[#C5A059] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* マイページ */}
      <div className="px-6 py-8">
        <Link
          href="/mypage"
          aria-label="マイページ"
          onClick={onClose}
          className="flex items-center gap-2 text-[14px] text-white hover:text-[#C5A059] transition-colors duration-200"
        >
          <User size={20} />
          <span>マイページ</span>
        </Link>
      </div>
    </div>
  )
}
