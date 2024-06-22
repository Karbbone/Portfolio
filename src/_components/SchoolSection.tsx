import React from "react";
import { Section } from "@/_components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import iutlogo from "../_components/iutvannes.png";
import lyceelogo from "../_components/lycee.png";

export const SchoolSection = () => {
  return (
    <Section className="my-9 flex  items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mon parcours scolaire"}
        </h2>
        <div className="justify-center h-full py-8 relative">
          <div className="w-full flex md:justify-start justify-center mb-16 md:mb-0 md:pl-4 md:pr-28">
            <Card className="w-full md:w-1/2 z-10">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                  <p>
                    BUT Informatique <br />
                    <span className="text-key italic text-base">2023/2024</span>
                  </p>
                  <Image src={iutlogo} alt="iut-logo" className="w-16 h-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <p>
                  <span className="text-key font-bold">BAC +3</span> à
                  l&apos;IUT de Vannes en Alternance chez Médiamag Système
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full flex md:justify-end justify-center mb-16 md:mb-0 md:pl-28 md:pr-4">
            <Card className="w-full md:w-1/2 z-10">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                  <p>
                    DUT Informatique
                    <br />
                    <span className="text-key italic text-base">2021/2023</span>
                  </p>
                  <Image src={iutlogo} alt="iut-logo" className="w-16 h-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <p>
                  <span className="text-key font-bold">BAC +2</span> à
                  l&apos;IUT de Vannes
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full flex md:justify-start justify-center mb-16 md:mb-0 md:pl-4 md:pr-28">
            <Card className="w-full md:w-1/2 z-10">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                  <p>
                    BAC Général <br />
                    <span className="text-key italic text-base">2020-2021</span>
                  </p>
                  <div className="h-12 flex items-center">
                    <Image
                      src={lyceelogo}
                      alt="iut-logo"
                      className="w-16 h-auto"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <p>
                  Bac Général spécialité Informatique/Mathématiques option
                  Mathématiques expertes au Lycée Marcelin Berthelot à
                  Questembert
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="w-2 bg-key h-4/5 absolute left-1/2 top-8"></div>
        </div>
      </div>
    </Section>
  );
};
