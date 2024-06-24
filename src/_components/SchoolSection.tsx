import React from "react";
import { Section } from "@/_components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import iutlogo from "../_components/iutvannes.png";
import lyceelogo from "../_components/lycee.png";

const schoolData = [
  {
    title: "BUT Informatique",
    year: "2023/2024",
    degree: "BAC +3",
    description: "à l'IUT de Vannes en Alternance chez Médiamag Système",
    logo: iutlogo,
    alt: "iut-logo",
    alignment: "md:justify-start",
    margin: "md:pl-4 md:pr-28",
  },
  {
    title: "DUT Informatique",
    year: "2021/2023",
    degree: "BAC +2",
    description: "à l'IUT de Vannes",
    logo: iutlogo,
    alt: "iut-logo",
    alignment: "md:justify-end",
    margin: "md:pl-28 md:pr-4",
  },
  {
    title: "BAC Général",
    year: "2020-2021",
    degree: "",
    description:
      "Bac Général spécialité Informatique/Mathématiques option Mathématiques expertes au Lycée Marcelin Berthelot à Questembert",
    logo: lyceelogo,
    alt: "lycee-logo",
    alignment: "md:justify-start",
    margin: "md:pl-4 md:pr-28",
  },
];

export const SchoolSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mon parcours scolaire"}
        </h2>
        <div className="justify-center h-full py-8 relative">
          {schoolData.map((school, index) => (
            <div
              key={index}
              className={`w-full flex ${school.alignment} justify-center mb-16 md:mb-0 ${school.margin}`}
            >
              <Card className="w-full md:w-1/2 z-10">
                <CardHeader>
                  <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                    <p>
                      {school.title} <br />
                      <span className="text-key italic text-base">
                        {school.year}
                      </span>
                    </p>
                    <Image
                      src={school.logo}
                      alt={school.alt}
                      className="w-16 h-auto"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <p>
                    <span className="text-key font-bold">{school.degree}</span>{" "}
                    {school.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          <div className="w-2 bg-key h-[88%] absolute left-1/2 top-9"></div>
        </div>
      </div>
    </Section>
  );
};
