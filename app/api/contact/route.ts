export const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY); // ✅ 延迟实例化
  const body = await req.json();
  const { name, email, type, company, tel, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'MONONEST <noreply@mononest.jp>',
      to: process.env.RESEND_RECEIVER_EMAIL!,
      subject: '【MONONEST】新しいお問い合わせ',
      replyTo: email,
      text: `
      お名前: ${name}
      メールアドレス: ${email}
      ご用件: ${type}
      会社名: ${company}
      電話番号: ${tel}
      メッセージ内容:${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Send mail error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}