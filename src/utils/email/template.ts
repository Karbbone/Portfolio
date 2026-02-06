import type { ContactFormData } from './types';

export function generateEmailHTML(data: ContactFormData): string {
  const { prenom, nom, email, message } = data;

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background-color: #f5f5f5;
      color: #1a1a1a;
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .banner {
      width: 100%;
      height: auto;
      display: block;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #80ca6e 0%, #6bb85d 100%);
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 40px 30px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #80ca6e;
      margin-bottom: 20px;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 10px;
    }
    .info-grid {
      background-color: #f9fafb;
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .info-row {
      margin-bottom: 15px;
    }
    .info-row:last-child {
      margin-bottom: 0;
    }
    .label {
      font-weight: 600;
      color: #4b5563;
      font-size: 13px;
      display: block;
      margin-bottom: 5px;
    }
    .value {
      color: #1a1a1a;
      font-size: 15px;
      word-break: break-word;
    }
    .email-link {
      color: #80ca6e;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .email-link:hover {
      color: #6bb85d;
      text-decoration: underline;
    }
    .message-container {
      background-color: #f9fafb;
      border-left: 4px solid #80ca6e;
      border-radius: 0 6px 6px 0;
      padding: 20px;
      margin-top: 10px;
    }
    .message-content {
      color: #374151;
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.7;
      font-size: 15px;
    }
    .footer {
      text-align: center;
      padding: 25px 30px;
      background-color: #f9fafb;
      border-top: 1px solid #e5e7eb;
    }
    .footer-text {
      font-size: 13px;
      color: #6b7280;
    }
    .footer-link {
      color: #80ca6e;
      text-decoration: none;
      font-weight: 500;
    }
    .footer-link:hover {
      text-decoration: underline;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e5e7eb, transparent);
      margin: 30px 0;
    }
    @media only screen and (max-width: 600px) {
      body {
        padding: 20px 10px;
      }
      .container {
        border-radius: 4px;
      }
      .header {
        padding: 20px;
      }
      .header h1 {
        font-size: 20px;
      }
      .content {
        padding: 30px 20px;
      }
      .footer {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="cid:banner-image" alt="Clément Maillet - Développeur Full Stack" class="banner">

    <div class="header">
      <h1>Nouveau message de contact</h1>
    </div>

    <div class="content">
      <div class="section-title">Informations de contact</div>

      <div class="info-grid">
        <div class="info-row">
          <span class="label">Nom complet</span>
          <span class="value">${prenom} ${nom}</span>
        </div>
        <div class="info-row">
          <span class="label">Adresse email</span>
          <span class="value">
            <a href="mailto:${email}" class="email-link">${email}</a>
          </span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="section-title">Message</div>

      <div class="message-container">
        <div class="message-content">${escapeHtml(message).replaceAll('\n', '<br>')}</div>
      </div>
    </div>

    <div class="footer">
      <p class="footer-text">
        Message envoyé depuis
        <a href="https://maillet.bzh" class="footer-link">maillet.bzh</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function generateEmailText(data: ContactFormData): string {
  const { prenom, nom, email, message } = data;

  return `
Nouveau message depuis le portfolio

De: ${prenom} ${nom}
Email: ${email}

Message:
${message}
  `.trim();
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return text.split('').map(char => htmlEscapeMap[char] || char).join('');
}
