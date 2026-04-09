import HeroSection   from '@/components/sections/HeroSection'
import ReasonSection from '@/components/sections/ReasonSection'
import StatsSection  from '@/components/sections/StatsSection'
import SuitsSection  from '@/components/sections/SuitsSection'
import CTASection    from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* 黒 → 白 */}
      <div className="h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
      <ReasonSection />
      <StatsSection />
      {/* 白 → 黒 */}
      <div className="h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
      <SuitsSection />
      {/* 黒 → 黒 */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      <CTASection subtext="スーツのこと、エアバッグのこと、修理のこと。どんな小さな疑問でも、サーキットの現場から答えます。" />
    </>
  )
}
