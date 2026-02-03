import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nom = formData.get('nom')?.toString();
    const prenom = formData.get('prenom')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    // Validation
    if (!nom || !prenom || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: import.meta.env.SMTP_FROM,
      to: import.meta.env.SMTP_TO,
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: `
Nouveau message depuis le portfolio

De: ${prenom} ${nom}
Email: ${email}

Message:
${message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .content { background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
    .info { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .message { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nouveau message depuis le portfolio</h2>
    </div>
    <div class="content">
      <div class="info">
        <span class="label">De:</span> ${prenom} ${nom}
      </div>
      <div class="info">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="message">
        <span class="label">Message:</span>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email envoyé avec succès' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
