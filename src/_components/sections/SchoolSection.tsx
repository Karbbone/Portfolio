import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import iutlogo from "../iutvannes.png";
import lyceelogo from "../lycee.png";

const schoolData = [
  {
    title: "BUT Informatique",
    year: "2023/2024",
    degree: "BAC +3",
    description:
      "Bachelor universitaire de technologie à l'IUT de Vannes en Alternance chez Médiamag Système",
    logo: iutlogo,
    alt: "iut-logo",
    alignment: "md:justify-start",
    margin: "md:pr-28",
  },
  {
    title: "DUT Informatique",
    year: "2021/2023",
    degree: "BAC +2",
    description: "Diplôme universitaire de technologie à l'IUT de Vannes",
    logo: iutlogo,
    alt: "iut-logo",
    alignment: "md:justify-end",
    margin: "md:pl-28",
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
    margin: "md:pr-28",
  },
];

export const SchoolSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border ">
      <div className="flex-[2]">
        <h2 className="text-3xl font-caption font-bold text-center mt-2 mb-4 text-key">
          {"Mon parcours scolaire"}
        </h2>
        <div className="justify-center h-full relative py-4">
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
                    <br />
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
