'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'

const schema = z.object({
  name:    z.string().min(1, 'お名前を入力してください'),
  email:   z.string().email('メールアドレスの形式が正しくありません'),
  type:    z.string().min(1, '相談の種類を選択してください'),
  message: z.string().min(10, '10文字以上入力してください'),
})

type FormData = z.infer<typeof schema>

const contactTypes = [
  'スーツの購入相談',
  'エアバッグの相談',
  '修理・クリーニング',
  'サイズ・採寸の相談',
  'その他',
] as const

const inputClass =
  'w-full bg-[#0D1E30] border border-[#0D2744] rounded-[4px] px-4 py-3 text-[15px] text-[#EEF4FF] outline-none focus:border-[#1865C8] transition-colors'

const labelClass = 'block text-[13px] text-[#7AABCF] mb-1.5'
const errorClass = 'text-[12px] text-[#E05C5C] mt-1'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-[640px] bg-[#0D1E30] border border-[#0D2744] rounded-[8px] px-8 py-10 text-[15px] text-[#7AABCF] leading-[1.75]">
        お問い合わせありがとうございます。48時間以内にご返信いたします。
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[640px] flex flex-col gap-6">
      {/* お名前 */}
      <div>
        <label className={labelClass}>
          お名前 <span className="text-[#E05C5C]">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="山田 太郎"
          className={inputClass}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* メールアドレス */}
      <div>
        <label className={labelClass}>
          メールアドレス <span className="text-[#E05C5C]">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="example@email.com"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* 相談の種類 */}
      <div>
        <label className={labelClass}>
          相談の種類 <span className="text-[#E05C5C]">*</span>
        </label>
        <select
          {...register('type')}
          className={inputClass}
          style={{ appearance: 'none' }}
          defaultValue=""
        >
          <option value="" disabled>選択してください</option>
          {contactTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.type && <p className={errorClass}>{errors.type.message}</p>}
      </div>

      {/* メッセージ */}
      <div>
        <label className={labelClass}>
          メッセージ <span className="text-[#E05C5C]">*</span>
        </label>
        <textarea
          {...register('message')}
          placeholder="ご相談内容をご記入ください"
          className={`${inputClass} min-h-[160px] resize-y`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* エラーバナー */}
      {status === 'error' && (
        <p className="text-[13px] text-[#E05C5C]">
          送信に失敗しました。お手数ですが、お電話またはLINEでご連絡ください。
        </p>
      )}

      {/* 送信ボタン */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full mt-2"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '送信中...' : '送信する'}
      </Button>
    </form>
  )
}
