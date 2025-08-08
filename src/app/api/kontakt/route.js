import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company, orgNr, message, recaptchaToken } = body;

  // Verify reCAPTCHA token server-side
  try {
    if (!recaptchaToken) {
      return new NextResponse(
        JSON.stringify({ message: "Ogiltig reCAPTCHA-token." }),
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not set");
      return new NextResponse(
        JSON.stringify({ message: "Serverfel: reCAPTCHA är inte konfigurerat." }),
        { status: 500 }
      );
    }

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: String(secretKey), response: String(recaptchaToken) }),
    });

    const verification = await verifyResponse.json();
    if (!verification.success) {
      return new NextResponse(
        JSON.stringify({ message: "reCAPTCHA-verifiering misslyckades." }),
        { status: 400 }
      );
    }
  } catch (e) {
    console.error("reCAPTCHA verification error:", e);
    return new NextResponse(
      JSON.stringify({ message: "Fel vid reCAPTCHA-verifiering." }),
      { status: 500 }
    );
  }

  // Set up Nodemailer transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.pallhotellet.se",
    port: process.env.SMTP_PORT ||587, 
    auth: {
      user: process.env.SMTP_USER || "info@pallhotellet.se",
      pass: process.env.SMTP_PASS, // Store in environment variable
    },
    tls: {
      rejectUnauthorized: true, // Adjust based on your certificate configuration
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER || "info@pallhotellet.se",
    to: process.env.RECIPIENT_EMAIL || "josip@jgruppen.se", // Store in environment variable
    subject: "Kontakt från sidan Pallhotellet.se",
    html: `
      <p><strong>Förnamn:</strong> ${firstName}</p>
      <p><strong>Efternamn:</strong> ${lastName}</p>
      <p><strong>E-post:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Företag:</strong> ${company}</p>
      <p><strong>Organisationsnummer:</strong> ${orgNr}</p>
      <p><strong>Meddelande:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return new NextResponse(
      JSON.stringify({ message: "Tack för ditt mail, vi kontaktar dig inom kort!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email. Full error:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to send email",
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
