import AboutHero from './AboutHero'
import AboutAnimated from './AboutAnimated'
import AboutTimeline from './AboutTimeline'
import AboutQuote from './AboutQuote'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'PRIDE1とは | PRIDE1',
  description: '1987年創業。「Riderのケガを減らす事が仕事」の理念のもと、エアバッグ内蔵レーシングスーツ日本No.1シェア。全日本ロードレース選手権唯一の供給メーカー。',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <AboutHero />
      <AboutAnimated />
      <AboutTimeline />
      <AboutQuote />
      <CTASection
        headline="スーツについて、相談してください。"
        subtext="選手のスペック、走るサーキット、予算——実際に話を聞いた上で、あなたに合ったスーツを提案します。"
      />
    </div>
  )
}
