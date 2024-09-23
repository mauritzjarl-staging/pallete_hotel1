// /app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, orgNr, message } = body;

    // Set up Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,   // Fetch from environment variable
            pass: process.env.EMAIL_PASS    // Fetch from environment variable
        }
    });

    // Define the email options, using environment variable for recipient
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email address
        to: process.env.EMAIL_RECIPIENT,  // Fetch recipient from environment variable
        subject: 'New Contact Form Submission',
        html: `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>OrgNr:</strong> ${orgNr}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    // Attempt to send the email
    try {
        await transporter.sendMail(mailOptions);
        return new NextResponse(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        // Provide a more detailed error response
        return new NextResponse(JSON.stringify({ 
            message: "Failed to send email", 
            error: error.message || 'Unknown error'
        }), { status: 500 });
    }
}
