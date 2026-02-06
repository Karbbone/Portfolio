/**
 * Email utilities for contact form
 *
 * This module provides a clean, modular architecture for handling contact form emails:
 * - Type-safe with TypeScript
 * - Separation of concerns (validation, config, templates, sending)
 * - Easy to test and maintain
 *
 * @example
 * ```ts
 * import { sendContactEmail, validateContactForm } from './utils/email';
 *
 * const errors = validateContactForm(data);
 * if (errors.length === 0) {
 *   await sendContactEmail(data);
 * }
 * ```
 */

export { validateContactForm } from './validator';
export { sendContactEmail } from './sender';
export { generateEmailHTML, generateEmailText } from './template';
export { getEmailConfig, TRANSPORT_OPTIONS } from './config';
export type { ContactFormData, EmailConfig, ValidationError } from './types';
export type { ValidationError as ValidatorError } from './validator';
