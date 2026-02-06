import type { EmailConfig } from './types';

export function getEmailConfig(): EmailConfig {
  return {
    host: import.meta.env.SMTP_HOST,
    port: Number.parseInt(import.meta.env.SMTP_PORT || '587'),
    secure: import.meta.env.SMTP_SECURE === 'true',
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS,
    from: import.meta.env.SMTP_FROM,
    to: import.meta.env.SMTP_TO,
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
