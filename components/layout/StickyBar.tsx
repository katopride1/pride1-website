import Link from 'next/link'

export default function StickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-14 md:hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* 左：LINE */}
      <Link
        href="#line"
        className="flex flex-1 items-center justify-center hover:text-[#C5A059] transition-colors duration-200"
        style={{
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontSize: '13px',
          letterSpacing: '0.1em',
          color: '#ffffff',
          textDecoration: 'none',
          borderRight: '1px solid #333333',
        }}
      >
        → LINEで相談する
      </Link>

      {/* 右：CONTACT US */}
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center hover:bg-[#A07830] transition-colors duration-200"
        style={{
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontSize: '13px',
          letterSpacing: '0.1em',
          color: '#ffffff',
          background: '#C5A059',
          textDecoration: 'none',
        }}
      >
        CONTACT US
      </Link>
    </div>
  )
}
