// /app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company, orgNr, message } = body;

  // Set up Nodemailer transporter using your custom SMTP server
  const transporter = nodemailer.createTransport({
    host: "mail.pallhotellet.se",
    port: 465, // SMTP Port
    secure: true, // True for 465, false for other ports
    auth: {
      user: "contact@pallhotellet.se", // Your email
      pass: "TkO2O%{bHcan", // Your password
    },
  });

  const mailOptions = {
    from: "contact@pallhotellet.se", // Sender's email address
    to: process.env.EMAIL_RECIPIENT, // Fetch recipient from environment variable
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
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: "Tack för ditt mail, vi kontaktar dig inom kort!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500 }
    );
  }
}
