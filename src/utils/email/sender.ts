import nodemailer from 'nodemailer';
import type { ContactFormData } from './types';
import { getEmailConfig, TRANSPORT_OPTIONS } from './config';
import { generateEmailHTML, generateEmailText } from './template';

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const config = getEmailConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    ...TRANSPORT_OPTIONS,
  });

  const mailOptions = {
    from: config.from,
    to: config.to,
    replyTo: data.email,
    subject: `Nouveau message de ${data.prenom} ${data.nom}`,
    text: generateEmailText(data),
    html: generateEmailHTML(data),
    attachments: [
      {
        filename: 'banner.png',
        path: './public/Banner.png',
        cid: 'banner-image',
      },
    ],
  };

  const info = await transporter.sendMail(mailOptions);

  console.log('Email envoyé avec succès:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
}
