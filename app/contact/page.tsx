import ContactHero from './ContactHero'
import ContactGrid from './ContactGrid'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'お問い合わせ | PRIDE1',
  description: 'スーツの購入相談、エアバッグ、修理・クリーニングなど、どんな相談でもお気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <ContactHero />
      <ContactGrid />
      <CTASection />
    </div>
  )
}
