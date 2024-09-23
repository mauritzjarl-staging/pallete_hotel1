// pages/api/quotation.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.json();
  console.log('Received data:', data); // Log the received data for debugging

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail password or app password
    },
  });

  // Function to format date objects
  const formatDate = (date) => {
    if (!date) return 'Not provided';
    const d = new Date(date);
    return d.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT, // Recipient email address
    subject: 'New Quotation Request',
    html: `
      <h1>Quotation Request</h1>

      <!-- Main Fields -->
      <h2>1. Företagsuppgifter</h2>
      <p><strong>Namn:</strong> ${data.name || 'Not provided'}</p>
      <p><strong>Efternamn:</strong> ${data.aftername || 'Not provided'}</p>
      <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
      <p><strong>Telefon:</strong> ${data.telephone || 'Not provided'}</p>
      <p><strong>Företag:</strong> ${data.foretag || 'Not provided'}</p>
      <p><strong>OrgNr:</strong> ${data.orgnr || 'Not provided'}</p>

      <!-- Section 2: Hyra av lageryta -->
      <h2>2. Hyra av lageryta</h2>

      <!-- 2.1 Kallager -->
      <h3>2.1 Kallager</h3>
      <p><strong>Selected:</strong> ${data.kallager.isChecked ? 'Yes' : 'No'}</p>
      ${
        data.kallager.isChecked
          ? `
        <p><strong>Antal pallplatser:</strong> ${data.kallager.antalpallplaster || 'Not provided'}</p>
        <p><strong>Pallvikt/snitt:</strong> ${data.kallager.snitt || 'Not provided'}</p>
        <p><strong>Antal kragar:</strong> ${data.kallager.antalKragar || 'Not provided'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.kallager.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.kallager.tillOchMed)}</p>
      `
          : ''
      }

      <!-- 2.2 Varmlager -->
      <h3>2.2 Varmlager</h3>
      <p><strong>Selected:</strong> ${data.varmlager.isChecked ? 'Yes' : 'No'}</p>
      ${
        data.varmlager.isChecked
          ? `
        <p><strong>Antal pallplatser:</strong> ${data.varmlager.antalpallplaster || 'Not provided'}</p>
        <p><strong>Pallvikt/snitt:</strong> ${data.varmlager.snitt || 'Not provided'}</p>
        <p><strong>Antal kragar:</strong> ${data.varmlager.antalKragar || 'Not provided'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.varmlager.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.varmlager.tillOchMed)}</p>
      `
          : ''
      }

      <!-- 2.3 Utomhusförvaring -->
      <h3>2.3 Utomhusförvaring</h3>
      <p><strong>Selected:</strong> ${data.utomhusforvaring.isChecked ? 'Yes' : 'No'}</p>
      ${
        data.utomhusforvaring.isChecked
          ? `
        <p><strong>Yta i m²:</strong> ${data.utomhusforvaring.ytaIM2 || 'Not provided'}</p>
        <p><strong>Höjd:</strong> ${data.utomhusforvaring.hojd || 'Not provided'}</p>
        <p><strong>Bredd:</strong> ${data.utomhusforvaring.bredd || 'Not provided'}</p>
        <p><strong>Längd:</strong> ${data.utomhusforvaring.langd || 'Not provided'}</p>
        <p><strong>Från och med:</strong> ${formatDate(data.utomhusforvaring.franOchMed)}</p>
        <p><strong>Till och med:</strong> ${formatDate(data.utomhusforvaring.tillOchMed)}</p>
        <p><strong>Typ av gods:</strong> ${data.utomhusforvaring.typAvGods || 'Not provided'}</p>
      `
          : ''
      }

      <!-- 2.4 Hyra av förråd -->
      <h3>2.4 Hyra av förråd</h3>
      <p><strong>Selected:</strong> ${data.hyraAvForrad.isChecked ? 'Yes' : 'No'}</p>
      ${
        data.hyraAvForrad.isChecked
          ? `
        <p><strong>Ytan i m²:</strong> ${data.hyraAvForrad.ytanIM2 || 'Not provided'}</p>
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
        data.services.lossningLastbilGaffeltruckOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Lossning/lastning av container önskas:</strong> ${
        data.services.lossningLastningContainerOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Ompackning och plock önskas:</strong> ${
        data.services.ompackningPlockOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Containerhantering /packetering:</strong> ${
        data.services.containerhanteringPacketering ? 'Yes' : 'No'
      }</p>
      <p><strong>Hantering av skrymmande gods:</strong> ${
        data.services.hanteringSkrymmandeGods ? 'Yes' : 'No'
      }</p>

      <!-- 3.2 Redskap och maskiner -->
      <h3>3.2 Redskap och maskiner</h3>
      <p><strong>Handtruck önskas:</strong> ${
        data.services.handtruckOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Gaffeltruck önskas:</strong> ${
        data.services.gaffeltruckOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Travers önskas (max 7ton):</strong> ${
        data.services.traversOnskas ? 'Yes' : 'No'
      }</p>

      <!-- Section 4: Kringtjänster -->
      <h2>4. Kringtjänster</h2>
      <p><strong>Hjälp med dokumentation önskas:</strong> ${
        data.services.hjalpDokumentationOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Hjälp med orderhantering önskas:</strong> ${
        data.services.hjalpOrderhanteringOnskas ? 'Yes' : 'No'
      }</p>
      <p><strong>Behöver hjälp med andra kringtjänster:</strong> ${
        data.services.behoverHjalpKringtjansterMerInfo ? 'Yes' : 'No'
      }</p>
      <p><strong>Behöver förslag till en komplett 3pl lösning:</strong> ${
        data.services.behoverForslagKomplett3plLosning ? 'Yes' : 'No'
      }</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to send email', error: error.message }),
      { status: 500 }
    );
  }
}
