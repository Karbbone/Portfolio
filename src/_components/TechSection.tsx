import React from "react";
import { ReactIcon } from "./svg_icons/ReactIcon";
import { JavaIcon } from "./svg_icons/JavaIcon";
import { TsIcon } from "./svg_icons/TsIcon";
import { MongoIcon } from "./svg_icons/MongoIcon";
import { MysqlIcon } from "./svg_icons/MysqlIcon";
import { Section } from "@/_components/Section";
import { HeartIcon } from "./svg_icons/HeartIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TechSection = () => {
  const techs = [
    {
      name: "React",
      Logo: ReactIcon,
    },
    {
      name: "TS",
      Logo: TsIcon,
    },
    {
      name: "Java",
      Logo: JavaIcon,
    },
    {
      name: "MySQL",
      Logo: MysqlIcon,
    },
    {
      name: "Mongo",
      Logo: MongoIcon,
    },
  ];

  return (
    <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <div className="flex justify-center items-center gap-3 mt-2 mb-4">
          <h2 className="text-2xl font-caption font-bold text-center">
            {"Mes technologies de"}
          </h2>
          <HeartIcon size={32} color="white" />
        </div>
        <div className="flex gap-4 justify-center">
          {techs.map((tech) => (
            <Card key={tech.name} className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <tech.Logo size={56} color="white" className="w-12 h-12" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};