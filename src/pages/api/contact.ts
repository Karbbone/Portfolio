import type { APIRoute } from 'astro';
import { validateContactForm, sendContactEmail } from '../../utils/email';

/**
 * Extract string value from FormData
 */
function getFormValue(formData: FormData, key: string): string | undefined {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : undefined;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const data = {
      nom: getFormValue(formData, 'nom'),
      prenom: getFormValue(formData, 'prenom'),
      email: getFormValue(formData, 'email'),
      message: getFormValue(formData, 'message'),
    };

    // Validate form data
    const errors = validateContactForm(data);
    if (errors.length > 0) {
      return new Response(
        JSON.stringify({
          error: 'Validation échouée',
          details: errors,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email
    await sendContactEmail({
      nom: data.nom!,
      prenom: data.prenom!,
      email: data.email!,
      message: data.message!,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email envoyé avec succès',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return new Response(
      JSON.stringify({
        error: 'Erreur lors de l\'envoi de l\'email',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
