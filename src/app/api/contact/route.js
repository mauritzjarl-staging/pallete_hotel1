// /app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company, orgNr, message } = body;

  // Set up Nodemailer transporter using custom SMTP server
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Your SMTP host (mail.lokalermotala.se)
    port: process.env.EMAIL_PORT, // Your SMTP port (e.g., 465 for SSL)
    secure: process.env.EMAIL_SECURE === 'true', // true for SSL (port 465), false for others
    auth: {
      user: process.env.EMAIL_USER, // Your email address (contact@lokalermotala.se)
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Define the email options, using environment variable for recipient
  const mailOptions = {
    from: `"Lokalermotala" <${process.env.EMAIL_USER}>`, // Sender's email address
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

  // Attempt to send the email
  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: "Tack för ditt mail, vi kontaktar dig inom kort!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    // Provide a more detailed error response
    return new NextResponse(
      JSON.stringify({
        message: "Failed to send email",
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
