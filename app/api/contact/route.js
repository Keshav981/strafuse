import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ success: false, error: "RESEND_API_KEY is not configured" }, { status: 500 });
    }

    if (!data.phone || !data.phone.trim()) {
      return NextResponse.json({ success: false, error: "Phone number is required" }, { status: 400 });
    }

    const name = data.name && data.name.trim() ? data.name.trim() : "Anonymous";
    const email = data.email && data.email.trim() ? data.email.trim() : "No email provided";
    const phone = data.phone.trim();
    const concern = (data.message || data.concern || "").trim() || "No message provided (General Audit Inquiry)";

    const resend = new Resend(apiKey);
    const { data: resData, error } = await resend.emails.send({
      from: 'Strafuse Reachout <onboarding@resend.dev>',
      to: ['thakurkeshav112@gmail.com'],
      subject: `⚡ New Contact Reachout from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #fafafc;">
          <h2 style="color: #4f46e5; margin-top: 0;">📬 New Website Inquiry / Reachout</h2>
          <p style="font-size: 14px; color: #475569; margin-bottom: 20px;">You have received a new contact submission from your Strafuse website:</p>
          
          <table border="0" cellpadding="12" cellspacing="0" style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="font-weight: bold; width: 30%; color: #64748b;">User Name</td>
              <td style="font-weight: 600; color: #0f172a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="font-weight: bold; color: #64748b;">Email Address</td>
              <td><a href="mailto:${email}" style="color: #4f46e5; font-weight: 600; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="font-weight: bold; color: #64748b;">Phone Number</td>
              <td style="font-weight: 600; color: #0f172a;">${phone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #64748b; vertical-align: top;">Concern / Message</td>
              <td style="color: #334155; line-height: 1.5;">${concern}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent automatically via Strafuse Resend Integration to thakurkeshav112@gmail.com
          </div>
        </div>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, method: "Resend", id: resData.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
