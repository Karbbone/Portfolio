import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassIcon } from "../svg_icons/GlassIcon";
import { TeamIcon } from "../svg_icons/TeamIcon";
import { PuzzleIcon } from "../svg_icons/PuzzleIcon";
import { useTheme } from "next-themes";

const skills = [
  {
    title: "Travail d'équipe",
    description:
      "J'apprécie grandement le travail d'équipe et le partage de mes connaissances pour favoriser une croissance collective.",
    Icon: TeamIcon,
    color: "#289297",
  },
  {
    title: "Versatile",
    description:
      "Je suis pleinement capable de m'adapter rapidement à de nouvelles technologies et à des environnements variés.",
    Icon: PuzzleIcon,
    color: "#979528",
  },
  {
    title: "Curieux",
    description:
      "Ma curiosité me pousse à explorer et à maîtriser de nouvelles technologies, enrichissant ainsi mes connaissances chaque jour. Cette soif d'apprendre stimule mon développement professionnel continu et renforce ma capacité.",
    Icon: GlassIcon,
    colSpan: 2,
    color: "#2f9728",
  },
];

export const SkillSection = () => {
  const { theme } = useTheme();
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mes compétences"}
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-2">
            {skills.map(({ title, description, Icon, colSpan, color }) => (
              <Card
                key={title}
                style={{ backgroundColor: color }}
                className={`${colSpan === 2 ? "md:col-span-2" : ""}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    <Icon
                      size={40}
                      color={theme == "dark" ? "white" : "black"}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
