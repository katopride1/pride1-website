import SectionHeader from '@/components/ui/SectionHeader'
import ContactForm from '@/components/ui/ContactForm'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'お問い合わせ | PRIDE1',
  description: 'スーツの購入相談、エアバッグ、修理・クリーニングなど、どんな相談でもお気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <>
      {/* フォームエリア */}
      <section className="bg-[#060E1A] px-6 py-20">
        <div className="max-w-[640px] mx-auto">
          <SectionHeader
            eyebrow="CONTACT"
            title="どんな相談でも、答えます。"
            description="何を買えばいいか分からない。今のスーツでいいのか不安。転倒後のスーツをどうするか。まずはお気軽にご相談ください。"
            align="left"
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 電話・LINE情報 */}
      <section className="bg-[#0D1E30] px-6 py-12">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-[13px] text-[#4A7A9B] mb-6">
            フォーム以外でのご連絡はこちら
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {/* 電話 */}
            <div className="flex flex-col items-center">
              <p className="text-[11px] text-[#4A7A9B] mb-2">お電話</p>
              <a
                href="tel:047-445-8366"
                className="text-[20px] font-medium text-[#EEF4FF] hover:text-[#7AABCF] transition-colors"
              >
                047-445-8366
              </a>
              <p className="text-[12px] text-[#4A7A9B] mt-1">
                受付時間はスケジュールページをご確認ください
              </p>
            </div>

            {/* LINE */}
            <div className="flex flex-col items-center">
              <p className="text-[11px] text-[#4A7A9B] mb-2">LINE</p>
              <Button href="#line" variant="secondary">
                LINEで相談する
              </Button>
              <p className="text-[12px] text-[#4A7A9B] mt-1">
                LINEでの相談はお気軽にどうぞ
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
