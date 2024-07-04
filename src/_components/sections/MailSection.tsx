import React from "react";
import { Section } from "@/_components/sections/Section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

export const MailSection = () => {
  const [state, handleSubmit] = useForm("xeojjnzv");
  const refTel = React.useRef<HTMLInputElement>(null);
  const refEmail = React.useRef<HTMLInputElement>(null);
  const refMessage = React.useRef<HTMLTextAreaElement>(null);
  const refSociete = React.useRef<HTMLInputElement>(null);
  const handleTelInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    input.value = input.value.replace(/\D/g, "");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((event.target as HTMLFormElement).checkValidity()) {
      try {
        await handleSubmit(event);
        if (state.errors) {
          toast.custom((t) => (
            <div className="bg-toast p-3 border border-gray-200 rounded-lg shadow-lg text-white text-center flex gap-2 items-center text-texttoast">
              <span>❌</span>
              Une erreur est survenue, veuillez réessayer.
            </div>
          ));
        } else {
          toast.custom((t) => (
            <div className="bg-toast p-3 border border-gray-200 rounded-lg shadow-lg text-white text-center flex gap-2 items-center text-texttoast">
              <span>✅</span>
              Message envoyé avec succès !
            </div>
          ));
          if (refTel.current) refTel.current.value = "";
          if (refEmail.current) refEmail.current.value = "";
          if (refMessage.current) refMessage.current.value = "";
          if (refSociete.current) refSociete.current.value = "";
        }
      } catch (error) {
        toast.custom((t) => (
          <div className="bg-toast p-3 border border-gray-200 rounded-lg shadow-lg text-white text-center flex gap-2 items-center text-texttoast">
            <span>❌</span>
            Une erreur est survenue, veuillez réessayer.
          </div>
        ));
      }
    } else {
      toast.custom((t) => (
        <div className="bg-toast p-3 border border-gray-200 rounded-lg shadow-lg text-white text-center flex gap-2 items-center text-texttoast">
          <span>❌</span>
          Veuillez remplir correctement tous les champs.
        </div>
      ));
    }
  };

  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <Toaster position="top-right" />
      <div className="flex-[2]">
        <h2 className="text-3xl font-caption font-bold text-center mt-2 mb-4 text-key">
          Me contacter
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="société">Société</Label>
                <Input
                  type="text"
                  name="société"
                  id="société"
                  placeholder="Société"
                  minLength={2}
                  maxLength={50}
                  required
                  className="input-class"
                  ref={refSociete}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@exemple.com"
                  required
                  className="input-class"
                  ref={refEmail}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tel">Numéro de téléphone</Label>
                <Input
                  type="tel"
                  id="tel"
                  name="tel"
                  maxLength={10}
                  pattern="^[0-9]{10}$"
                  placeholder="0600000000"
                  required
                  className="input-class"
                  onInput={(e) => handleTelInput(e)}
                  ref={refTel}
                />
              </div>
            </div>
            <div className="w-full my-6">
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Votre message."
                minLength={10}
                required
                className="textarea-class"
                ref={refMessage}
              ></Textarea>
              <span className="error-message">(minimum 10 caractères)</span>
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-28 px-6 py-2 text-white bg-keybutton rounded transition-all duration-300 ease-in-out hover:brightness-[0.88]"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
