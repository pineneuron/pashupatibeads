import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, whatsapp, message } = await request.json();

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Check if environment variables are set
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing SMTP credentials:', {
                SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Missing',
                SMTP_PASS: process.env.SMTP_PASS ? 'Set' : 'Missing',
                SMTP_HOST: process.env.SMTP_HOST || 'smtp.zoho.com',
                SMTP_PORT: process.env.SMTP_PORT || '587'
            });
            return NextResponse.json(
                { error: 'Email service not configured. Please set up SMTP credentials.' },
                { status: 500 }
            );
        }

        // Create transporter with better error handling
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            // Add timeout and connection settings
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
        });

        // Verify SMTP connection
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError);
            return NextResponse.json(
                { error: 'Email service connection failed. Please check your SMTP settings.' },
                { status: 500 }
            );
        }

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'maheshbohara0101@gmail.com',
            subject: `New Early Access Request - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; margin-bottom: 20px;">New Early Access Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280;">
            <p>Sent from Pashupati Beads - Sacred Rudraksha Collection</p>
            <p>© 2025 Pashupati Beads • Sacred • Authentic • Divine</p>
          </div>
        </div>
      `,
        };

        // Send email
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.messageId);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        
        // Provide more specific error messages
        let errorMessage = 'Failed to send email';
        if (error instanceof Error) {
            if (error.message.includes('Invalid login')) {
                errorMessage = 'Invalid email credentials. Please check your SMTP username and password.';
            } else if (error.message.includes('ECONNREFUSED')) {
                errorMessage = 'Could not connect to email server. Please check your SMTP host and port.';
            } else if (error.message.includes('timeout')) {
                errorMessage = 'Email server connection timeout. Please try again.';
            } else {
                errorMessage = `Email error: ${error.message}`;
            }
        }
        
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
