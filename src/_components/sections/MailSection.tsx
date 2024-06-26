import React, { FormEvent, useState } from "react";
import { Section } from "@/_components/sections/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface Mail {
  société: string;
  email: string;
  tel: string;
  message: string;
}
export const MailSection = () => {
  const [mail, setMail] = useState<Mail>({
    société: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("mail");
  };

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setMail((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Me contacter"}
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="société">Société</Label>
                <Input
                  type="text"
                  id="société"
                  placeholder="Société"
                  value={mail.société}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="exemple@exemple.com"
                  value={mail.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tel">Numéro de téléphone</Label>
                <Input
                  type="tel"
                  id="tel"
                  maxLength={10}
                  placeholder="06 00 00 00 00"
                  value={mail.tel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full my-6">
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                placeholder="Votre message."
                value={mail.message}
                onChange={handleChange}
              ></Textarea>
            </div>
            <Button type="submit" className="w-28">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
