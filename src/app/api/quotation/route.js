import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req) {
  const data = await req.json();
  console.log('Received data:', data); // Log the received data for debugging

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

  // Verify the transporter setup before attempting to send an email
  transporter.verify(function (error, success) {
    if (error) {
      console.error("SMTP configuration error:", error);  // Log error if configuration is wrong
    } else {
      console.log("SMTP server is ready to send emails");
    }
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_RECIPIENT, 
    subject: 'Offertförfrågan pallhotellet.se',
    html: `
      <h1>Offertförfrågan</h1>

      <!-- Main Fields -->
      <h2>1. Företagsuppgifter</h2>
      <p><strong>Namn:</strong> ${data.name || 'Info saknas'}</p>
      <p><strong>Efternamn:</strong> ${data.aftername || 'Info saknas'}</p>
      <p><strong>Email:</strong> ${data.email || 'Info saknas'}</p>
      <p><strong>Telefon:</strong> ${data.telephone || 'Info saknas'}</p>
      <p><strong>Företag:</strong> ${data.foretag || 'Info saknas'}</p>
      <p><strong>OrgNr:</strong> ${data.orgnr || 'Info saknas'}</p>

      <!-- Section 2: Hyra av lageryta -->
      <h2>2. Hyra av lageryta</h2>

      <!-- 2.1 Kallager -->
      <h3>2.1 Kallager</h3>
      <p><strong>Selected:</strong> ${data.kallager.isChecked ? 'JA' : 'NEJ'}</p>
      ${
        data.kallager.isChecked
          ? `
        <p><strong>Antal pallplatser:</strong> ${data.kallager.antalpallplaster || 'Info saknas'}</p>
        <p><strong>Pallvikt/snitt:</strong> ${data.kallager.snitt || 'Info saknas'}</p>
        <p><strong>Antal kragar:</strong> ${data.kallager.antalKragar || 'Info saknas'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.kallager.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.kallager.tillOchMed)}</p>
      `
          : ''
      }

      <!-- 2.2 Varmlager -->
      <h3>2.2 Varmlager</h3>
      <p><strong>Selected:</strong> ${data.varmlager.isChecked ? 'JA' : 'NEJ'}</p>
      ${
        data.varmlager.isChecked
          ? `
        <p><strong>Antal pallplatser:</strong> ${data.varmlager.antalpallplaster || 'Info saknas'}</p>
        <p><strong>Pallvikt/snitt:</strong> ${data.varmlager.snitt || 'Info saknas'}</p>
        <p><strong>Antal kragar:</strong> ${data.varmlager.antalKragar || 'Info saknas'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.varmlager.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.varmlager.tillOchMed)}</p>
      `
          : ''
      }

      <!-- 2.3 Utomhusförvaring -->
      <h3>2.3 Utomhusförvaring</h3>
      <p><strong>Selected:</strong> ${data.utomhusforvaring.isChecked ? 'JA' : 'NEJ'}</p>
      ${
        data.utomhusforvaring.isChecked
          ? `
        <p><strong>Yta i m²:</strong> ${data.utomhusforvaring.ytaIM2 || 'Info saknas'}</p>
        <p><strong>Höjd:</strong> ${data.utomhusforvaring.hojd || 'Info saknas'}</p>
        <p><strong>Bredd:</strong> ${data.utomhusforvaring.bredd || 'Info saknas'}</p>
        <p><strong>Längd:</strong> ${data.utomhusforvaring.langd || 'Info saknas'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.utomhusforvaring.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.utomhusforvaring.tillOchMed)}</p>
        <p><strong>Typ av gods:</strong> ${data.utomhusforvaring.typAvGods || 'Info saknas'}</p>
      `
          : ''
      }

      <!-- 2.4 Hyra av förråd -->
      <h3>2.4 Hyra av förråd</h3>
      <p><strong>Selected:</strong> ${data.hyraAvForrad.isChecked ? 'JA' : 'NEJ'}</p>
      ${
        data.hyraAvForrad.isChecked
          ? `
        <p><strong>Ytan i m²:</strong> ${data.hyraAvForrad.ytanIM2 || 'Info saknas'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.hyraAvForrad.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.hyraAvForrad.tillOchMed)}</p>
      `
          : ''
      }

      <!-- Section 3: Inlastning / utlastning -->
      <h2>3. Inlastning / utlastning</h2>

      <!-- 3.1 Lossning, ompackning -->
      <h3>3.1 Lossning, ompackning</h3>
      <p><strong>Lossning/lastning lastbil med gaffeltruck önskas:</strong> ${
        data.services.lossningLastbilGaffeltruckOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Lossning/lastning av container önskas:</strong> ${
        data.services.lossningLastningContainerOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Ompackning och plock önskas:</strong> ${
        data.services.ompackningPlockOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Containerhantering /packetering:</strong> ${
        data.services.containerhanteringPacketering ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Hantering av skrymmande gods:</strong> ${
        data.services.hanteringSkrymmandeGods ? 'JA' : 'NEJ'
      }</p>

      <!-- 3.2 Redskap och maskiner -->
      <h3>3.2 Redskap och maskiner</h3>
      <p><strong>Handtruck önskas:</strong> ${
        data.services.handtruckOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Gaffeltruck önskas:</strong> ${
        data.services.gaffeltruckOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Travers önskas (max 7ton):</strong> ${
        data.services.traversOnskas ? 'JA' : 'NEJ'
      }</p>

      <!-- Section 4: Kringtjänster -->
      <h2>4. Kringtjänster</h2>
      <p><strong>Hjälp med dokumentation önskas:</strong> ${
        data.services.hjalpDokumentationOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Hjälp med orderhantering önskas:</strong> ${
        data.services.hjalpOrderhanteringOnskas ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Behöver hjälp med andra kringtjänster:</strong> ${
        data.services.behoverHjalpKringtjansterMerInfo ? 'JA' : 'NEJ'
      }</p>
      <p><strong>Behöver förslag till en komplett 3pl lösning:</strong> ${
        data.services.behoverForslagKomplett3plLosning ? 'JA' : 'NEJ'
      }</p>
    `,
  };

  // Try to send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return new NextResponse(
      JSON.stringify({ message: 'Tack för ditt mail, vi kontaktar dig inom kort!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email. Full error:", error); // Log the full error object
    return new NextResponse(
      JSON.stringify({ message: 'Failed to send email', error: error.message }),
      { status: 500 }
    );
  }
}