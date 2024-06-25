import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassIcon } from "../svg_icons/GlassIcon";
import { TeamIcon } from "../svg_icons/TeamIcon";
import { PuzzleIcon } from "../svg_icons/PuzzleIcon";

export const SkillSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mes compétences"}
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <div className="py-4 grid md:grid-cols-2  grid-cols-1 justify-center gap-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Travail d&apos;équipe</CardTitle>
                  <TeamIcon size={40} color="white" />
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Versatile</CardTitle>
                  <PuzzleIcon size={40} color="white" />
                </div>
              </CardHeader>
            </Card>
            <Card className="card md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Curieux</CardTitle>
                  <GlassIcon size={40} color="white" />
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
