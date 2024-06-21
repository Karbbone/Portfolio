import { Header } from "@/_components/Header";
import { Hero } from "@/_components/Hero";
import { Section } from "@/_components/Section";
import { TechSection } from "@/_components/TechSection";
import Image from "next/image";
import iutlogo from "../_components/iutvannes.png";
import mediamaglogo from "../_components/mediamag.png";
import { Card } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechSection />
      <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border">
        <div className="flex-[2]">
          <h1 className="text-2xl font-caption font-bold text-center">
            POSTE/ECOLE
          </h1>
          <div className="flex flex-col gap-4 px-4">
            <Card className="w-full p-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <Image
                  src={mediamaglogo}
                  alt="mediamag-logo"
                  className="w-20 h-auto"
                />
                <p>
                  Mediamag Système <br /> 2023 - Maintenant
                </p>
              </div>
            </Card>
            <Card className="w-full">
              <div className="flex flex-row items-center justify-center gap-2">
                <Image src={iutlogo} alt="iut-logo" className="w-20 h-auto" />
                <p>
                  IUT DE VANNES <br /> 2020-2024
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
