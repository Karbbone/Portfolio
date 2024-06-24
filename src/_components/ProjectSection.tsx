import React from "react";
import { Section } from "@/_components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mes projets"}
        </h2>
        <div className="justify-center h-full py-8 relative"></div>
      </div>
    </Section>
  );
};
