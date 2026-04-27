import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseServer } from '@/lib/supabase-server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    // leads に upsert（同じemailなら既存レコードを更新）
    const { data: lead, error: leadError } = await supabaseServer
      .from('leads')
      .upsert({ email, name }, { onConflict: 'email' })
      .select('id')
      .single()

    if (leadError) throw leadError

    // contacts に問い合わせ履歴を追加
    const { error: contactError } = await supabaseServer
      .from('contacts')
      .insert({ lead_id: lead.id, name, email, type, message })

    if (contactError) throw contactError

    // 管理者への通知
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'katopride1@gmail.com',
      subject: `【PRIDE1】お問い合わせ：${type}`,
      text: `お名前：${name}\nメール：${email}\n種別：${type}\n\n${message}`,
    })

    // ユーザーへの自動返信
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `【PRIDE1】お問い合わせを受け付けました`,
      text: `${name} 様\n\nお問い合わせありがとうございます。\n内容を確認の上、48時間以内にご返信いたします。\n\n---\n種別：${type}\nメッセージ：\n${message}\n---\n\nPRIDE1\nhttps://pride1.jp`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
