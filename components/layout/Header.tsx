'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(6,14,26,0.85)] backdrop-blur-[12px] border-b border-[#0D2744]'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        {/* ロゴ */}
        <Link href="/" className="text-[18px] font-medium text-[#EEF4FF] hover:opacity-80 transition-opacity mr-auto">
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
              className="text-[13px] text-[#7AABCF] hover:text-[#EEF4FF] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAボタン（md以上） */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'rgba(197,160,89,0.85)',
              borderBottom: '1px solid rgba(197,160,89,0.4)',
              paddingBottom: '2px',
              background: 'none',
              textDecoration: 'none',
            }}
          >
            相談する
          </Link>
        </div>

        {/* ハンバーガーボタン（md未満） */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          className="md:hidden text-[#7AABCF] hover:text-[#EEF4FF] transition-colors"
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
