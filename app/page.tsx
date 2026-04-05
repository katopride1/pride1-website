import HeroSection from '@/components/sections/HeroSection'
import ReasonSection from '@/components/sections/ReasonSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReasonSection />
      <CTASection subtext="スーツのこと、エアバッグのこと、修理のこと。どんな小さな疑問でも、サーキットの現場から答えます。" />
    </>
  )
}
