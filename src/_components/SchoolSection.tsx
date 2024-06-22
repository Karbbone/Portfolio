import React from "react";
import { Section } from "@/_components/Section";

export const SchoolSection = () => {
  return (
    <Section className="my-9 flex  items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center">
          {"Mon parcours scolaire"}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:justify-center"></div>
      </div>
    </Section>
  );
};
