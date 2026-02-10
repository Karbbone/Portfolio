import nodemailer from 'nodemailer';
import path from 'node:path';
import type { ContactFormData } from './types';
import { getEmailConfig, TRANSPORT_OPTIONS } from './config';
import { generateEmailHTML, generateEmailText } from './template';

const bannerPath = path.join(
  process.cwd(),
  import.meta.env.PROD ? 'dist/client/Banner.png' : 'public/Banner.png',
);

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
        path: bannerPath,
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
