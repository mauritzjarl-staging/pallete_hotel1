import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Add this function to handle CORS preflight requests
export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company, orgNr, message } = body;

  // Log environment variables for debugging
  console.log("Using SMTP host:", process.env.EMAIL_HOST);
  console.log("Using SMTP port:", process.env.EMAIL_PORT);
  console.log("Using SMTP secure:", process.env.EMAIL_SECURE);
  console.log("Using SMTP user:", process.env.EMAIL_USER);

  // Set up Nodemailer transporter with debug and logging enabled
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true', // Use true for SSL (port 465)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,  // Enable logging for debugging
    debug: true,   // Enable SMTP debug output
  });

  // Verify transporter configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.error("SMTP configuration error:", error);  // Log error if configuration is wrong
    } else {
      console.log("SMTP server is ready to send emails");
    }
  });

  // Define the email options
  const mailOptions = {
    from: `"Pallhotellet" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT,
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

  // Try to send the email
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
