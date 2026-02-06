const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationError {
  field: string;
  message: string;
}

export function validateContactForm(data: {
  nom?: string;
  prenom?: string;
  email?: string;
  message?: string;
}): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.nom?.trim()) {
    errors.push({ field: 'nom', message: 'Le nom est requis' });
  }

  if (!data.prenom?.trim()) {
    errors.push({ field: 'prenom', message: 'Le prénom est requis' });
  }

  if (!data.email?.trim()) {
    errors.push({ field: 'email', message: "L'email est requis" });
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push({ field: 'email', message: 'Email invalide' });
  }

  if (!data.message?.trim()) {
    errors.push({ field: 'message', message: 'Le message est requis' });
  }

  return errors;
}
