import React from "react";
import { Section } from "@/_components/sections/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

export const MailSection = () => {
  const [state, handleSubmit] = useForm("xeojjnzv");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loadingToast = toast.loading("Envoi en cours...", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });

    try {
      await handleSubmit(event);
      toast.dismiss(loadingToast);
      if (state.errors) {
        toast.error("Une erreur est survenue, veuillez réessayer.", {
          icon: "❌",
          style: {
            background: "#333",
            color: "#fff",
          },
          duration: 4000,
          position: "top-center",
        });
        return;
      }
      toast("Message envoyé avec succès !", {
        icon: "✅",
        style: {
          background: "#333",
          color: "#fff",
        },
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Une erreur est survenue, veuillez réessayer.", {
        style: {
          background: "#333",
          color: "#fff",
        },
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <Toaster />
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
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
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@exemple.com"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tel">Numéro de téléphone</Label>
                <Input
                  type="tel"
                  id="tel"
                  name="tel"
                  maxLength={10}
                  placeholder="06 00 00 00 00"
                />
              </div>
            </div>
            <div className="w-full my-6">
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                placeholder="Votre message."
                name="message"
              ></Textarea>
            </div>
            <Button type="submit" disabled={state.submitting} className="w-28">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
