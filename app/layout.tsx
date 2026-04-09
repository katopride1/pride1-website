import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  display: 'swap',
  variable: '--font-barlow-condensed',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-noto',
})

const description =
  '全日本ロードレース選手権に唯一エアバッグスーツを供給。1987年から「Riderのケガを減らす」をミッションに、サーキット現場で設計・製造・修理まで一貫対応。'

export const metadata: Metadata = {
  title: 'PRIDE1 | レーシング安全装備ブランド 1987年創業',
  description,
  keywords: 'レーシングスーツ,エアバッグスーツ,MFJ公認,プライドワン,PRIDE1,バイク安全装備',
  openGraph: {
    title: 'PRIDE1 | レーシング安全装備ブランド',
    description,
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${notoSansJP.variable}`}>
        <Header />
        <main style={{ paddingTop: '64px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
