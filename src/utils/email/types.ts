export interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}
