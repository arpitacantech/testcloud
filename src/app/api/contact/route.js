import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com, smtp.hostinger.com
      port: parseInt(process.env.SMTP_PORT) || 587, // 587 for TLS, 465 for SSL
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username/email
        pass: process.env.SMTP_PASSWORD, // Your SMTP password
      },
      tls: {
        rejectUnauthorized: false // For development; remove in production
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to admin/company
    const adminMailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      replyTo: email, // Allow easy reply to customer
      to: process.env.SMTP_RECEIVE_EMAIL || 'sales@cantech.in',
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #111111 0%, #373737 100%); padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Contact Form Submission Form Cantech Cloud</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f9f9f9; border-radius: 5px;">
                              <tr>
                                <td style="font-weight: bold; color: #333; width: 120px;">Name:</td>
                                <td style="color: #666;">${name}</td>
                              </tr>
                              <tr>
                                <td style="font-weight: bold; color: #333;">Email:</td>
                                <td style="color: #666;"><a href="mailto:${email}" style="color: #111111; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td style="font-weight: bold; color: #333;">Subject:</td>
                                <td style="color: #666;">${subject}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-top: 10px;">
                            <p style="font-weight: bold; color: #333; margin-bottom: 10px;">Message:</p>
                            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #111111; border-radius: 5px; color: #333; line-height: 1.6; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                              ${message.replace(/\n/g, '<br>')}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                      <p style="color: #999; font-size: 12px; margin: 0;">
                        This email was sent from your website contact form on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from website contact form on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Cantech Cloud" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Cantech Cloud',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #111111 0%, #373737 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0 0 10px 0; font-size: 32px;">Thank You!</h1>
                      <p style="color: #ffffff; margin: 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">
                        Dear <strong>${name}</strong>,
                      </p>
                      <p style="color: #333; font-size: 16px; line-height: 1.6;">
                        Thank you for reaching out to us at Cantech Cloud. We have received your message and our team will review it shortly.
                      </p>
                      
                      <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #111111; margin: 25px 0; border-radius: 5px;">
                        <p style="margin: 0 0 10px 0; color: #666; font-weight: bold;">Your message:</p>
                        <p style="margin: 0; color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                      </div>
                      
                      <p style="color: #333; font-size: 16px; line-height: 1.6;">
                        We typically respond within <strong>24-48 hours</strong> during business days. If your inquiry is urgent, please feel free to call us directly.
                      </p>
                      
                      <div style="background-color: #111111; color: white; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
                        <p style="margin: 0 0 10px 0; font-size: 14px; opacity: 0.9;">Need immediate assistance?</p>
                        <p style="margin: 0; font-size: 20px; font-weight: bold;">📞 +91 7096937096</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 30px; border-top: 1px solid #e0e0e0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="text-align: center; padding-bottom: 15px;">
                            <p style="margin: 0 0 5px 0; color: #333; font-weight: bold; font-size: 16px;">Cantech Cloud</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                              F/6, 602, Victoria Prime, Nr Kalvibid Water Tank<br>
                              Kalvibid "D", Bhavnagar Gujarat, India - 364002
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center; padding-top: 15px;">
                            <p style="margin: 0; color: #666; font-size: 14px;">
                              📧 <a href="mailto:sales@cantech.in" style="color: #111111; text-decoration: none;">sales@cantech.in</a> | 
                              📞 <a href="tel:+917096937096" style="color: #111111; text-decoration: none;">+91 7096937096</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Dear ${name},

Thank you for reaching out to us at Cantech Cloud. We have received your message and our team will review it shortly.

Your message:
${message}

We typically respond within 24-48 hours during business days. If your inquiry is urgent, please feel free to call us at +91 7096937096.

---
Cantech Cloud
F/6, 602, Victoria Prime, Nr Kalvibid Water Tank
Kalvibid "D", Bhavnagar Gujarat, India - 364002
Email: sales@cantech.in
Phone: +91 7096937096
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}