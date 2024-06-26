import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const MailSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Me contacter"}
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="société">Société</Label>
              <Input type="text" id="société" placeholder="Société" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Votre message</Label>
            <Textarea placeholder="Votre message." id="message" />
          </div>
          <Button className="w-36">Envoyer</Button>
        </div>
      </div>
    </Section>
  );
};
