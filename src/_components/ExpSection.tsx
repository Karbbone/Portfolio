import React from "react";
import { Section } from "@/_components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import mediamaglogo from "../_components/mediamag.png";

export const ExpSection = () => {
  const expData = [
    {
      title: "Médiamag Système",
      year: "2023/2024 Alternance",
      tech: "React, Adonis, MySQL",
      description:
        "Développement d'une application web d'enregistrement d'audio (Web Services)",
      logo: mediamaglogo,
      alt: "iut-logo",
      alignment: "md:justify-start",
      margin: "md:pl-4 md:pr-28",
    },
    {
      title: "Médiamag Système",
      year: "2023 Stage + CDD",
      tech: "React, Express, MySQL",
      description:
        "Développement d'une application web de gestion du système d'information (Web Services)",
      logo: mediamaglogo,
      alt: "iut-logo",
      alignment: "md:justify-end",
      margin: "md:pl-28 md:pr-4",
    },
  ];

  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mes expériences"}
        </h2>
        <div className="justify-center h-full py-8 relative">
          {expData.map((school, index) => (
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
                    <span className="text-key font-bold">{school.tech}</span>{" "}
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
