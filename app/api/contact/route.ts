import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, contact, email, company, role } = await req.json();

  const from = process.env.RESEND_FROM_ADDRESS ?? "";

  if (!from) {
    return NextResponse.json({ error: "No from address configured" }, { status: 500 });
  }

  const to = (process.env.RESEND_TO_ADDRESSES ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  if (!to.length) {
    return NextResponse.json({ error: "No recipients configured" }, { status: 500 });
  }

  const { error } = await resend.emails.send({
    from,
    to,
    // cc: email, // uncomment to send a confirmation copy to the submitter
    subject: `New contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
