'use client'

import ContactForm from '@/components/ui/ContactForm'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ContactGrid() {
  const formRef  = useScrollAnimation()
  const rightRef = useScrollAnimation()

  return (
    <div className="px-6 pb-20 md:px-[72px] md:pb-[120px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      {/* Left: Form */}
      <div ref={formRef} className="scroll-hidden" style={{ minWidth: 0 }}>
        <ContactForm />
      </div>

      {/* Right: Other contact methods */}
      <div ref={rightRef} className="scroll-hidden delay-2" style={{ paddingTop: '8px', minWidth: 0 }}>
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '48px',
          }}
        >
          または、直接ご連絡ください。
        </p>

        {/* Phone */}
        <div style={{ marginBottom: '56px' }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '12px' }}>
            PHONE
          </p>
          <a
            href="tel:047-445-8366"
            style={{
              fontSize: '24px',
              fontWeight: 300,
              color: 'white',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            047-445-8366
          </a>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>
            平日 10:00〜18:00
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '56px' }} />

        {/* LINE */}
        <div>
          <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(197,160,89,0.6)', marginBottom: '12px' }}>
            LINE
          </p>
          <a
            href="#line"
            style={{
              fontSize: '14px',
              fontWeight: 300,
              color: 'white',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            LINEで相談する
          </a>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>
            24時間受付、返信は営業時間内
          </p>
        </div>
      </div>
    </div>
  )
}
