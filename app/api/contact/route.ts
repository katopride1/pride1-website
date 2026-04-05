import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    // TODO: Resend APIキー取得後にメール送信を実装する
    console.log('[Contact Form Submission]', { name, email, type, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
