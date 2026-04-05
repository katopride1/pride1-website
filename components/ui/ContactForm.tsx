'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 0,
  color: 'white',
  fontSize: '12px',
  padding: '14px 16px',
  width: '100%',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '10px',
  letterSpacing: '0.18em',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '8px',
}

const errorStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#E05C5C',
  marginTop: '4px',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

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

  const getFocusStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === name ? 'rgba(197,160,89,0.5)' : 'rgba(255,255,255,0.1)',
  })

  if (status === 'success') {
    return (
      <p style={{ fontSize: '11px', lineHeight: 2.2, color: 'rgba(255,255,255,0.38)' }}>
        お問い合わせありがとうございます。48時間以内にご返信いたします。
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* お名前 */}
      <div>
        <label style={labelStyle}>
          お名前 <span style={{ color: '#E05C5C' }}>*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="山田 太郎"
          style={getFocusStyle('name')}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
        />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
      </div>

      {/* メールアドレス */}
      <div>
        <label style={labelStyle}>
          メールアドレス <span style={{ color: '#E05C5C' }}>*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="example@email.com"
          style={getFocusStyle('email')}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      {/* 相談の種類 */}
      <div>
        <label style={labelStyle}>
          相談の種類 <span style={{ color: '#E05C5C' }}>*</span>
        </label>
        <select
          {...register('type')}
          defaultValue=""
          style={getFocusStyle('type')}
          onFocus={() => setFocusedField('type')}
          onBlur={() => setFocusedField(null)}
        >
          <option value="" disabled>選択してください</option>
          {contactTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.type && <p style={errorStyle}>{errors.type.message}</p>}
      </div>

      {/* メッセージ */}
      <div>
        <label style={labelStyle}>
          メッセージ <span style={{ color: '#E05C5C' }}>*</span>
        </label>
        <textarea
          {...register('message')}
          placeholder="ご相談内容をご記入ください"
          style={{ ...getFocusStyle('message'), minHeight: '160px', resize: 'vertical' }}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      {/* エラーバナー */}
      {status === 'error' && (
        <p style={{ fontSize: '11px', color: '#E05C5C' }}>
          送信に失敗しました。お手数ですが、お電話またはLINEでご連絡ください。
        </p>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          background: 'transparent',
          border: '1px solid rgba(197,160,89,0.5)',
          color: 'rgba(197,160,89,0.85)',
          fontSize: '10px',
          letterSpacing: '0.22em',
          padding: '16px 32px',
          width: '100%',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.6 : 1,
        }}
      >
        {status === 'loading' ? '送信中...' : '送信する'}
      </button>
    </form>
  )
}
