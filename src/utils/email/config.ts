import type { EmailConfig } from './types';

export function getEmailConfig(): EmailConfig {
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  return {
    host: process.env.SMTP_HOST ?? '',
    port: Number.parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER ?? '',
    pass: process.env.SMTP_PASS ?? '',
    from: process.env.SMTP_FROM ?? '',
    to: process.env.SMTP_TO ?? '',
  };
}

export const TRANSPORT_OPTIONS = {
  requireTLS: true,
  tls: {
    rejectUnauthorized: true,
    minVersion: 'TLSv1.2' as const,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
} as const;
