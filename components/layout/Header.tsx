'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
// import Image from 'next/image'
import MobileMenu from '@/components/layout/MobileMenu'

const navLinks = [
  { label: 'スーツを選ぶ',       href: '/products' },
  { label: 'エアバッグ',         href: '/airbag' },
  { label: '修理・クリーニング', href: '/repair' },
  { label: 'サーキットサービス', href: '/service' },
  { label: 'PRIDE1とは',         href: '/about' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12 bg-[#0a0a0a]">
        {/* ロゴ */}
        <Link href="/" className="text-[18px] font-medium text-white hover:opacity-80 transition-opacity mr-auto outline-none">
          {/* ロゴ画像に差し替える場合はこちらを使用:
          <Image src="/images/logo.svg" alt="PRIDE1" width={100} height={28} priority />
          */}
          PRIDE1
        </Link>

        {/* デスクトップナビ（md以上） */}
        <nav className="hidden md:flex items-center gap-7 mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-white hover:text-[#C5A059] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* マイページアイコン（md以上） */}
        <div className="hidden md:flex items-center">
          <Link
            href="/mypage"
            aria-label="マイページ"
            className="text-white hover:text-[#C5A059] transition-colors duration-200"
          >
            <User size={20} />
          </Link>
        </div>

        {/* ハンバーガーボタン（md未満） */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          className="md:hidden text-white hover:text-[#C5A059] transition-colors duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
