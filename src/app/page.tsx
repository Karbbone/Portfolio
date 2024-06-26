import React from "react";
import { Header } from "@/_components/Header";
import { Hero } from "@/_components/sections/Hero";
import { TechSection } from "@/_components/sections/TechSection";
import { SchoolSection } from "@/_components/sections/SchoolSection";
import { ExpSection } from "@/_components/sections/ExpSection";
import { ProjectSection } from "@/_components/sections/ProjectSection";
import { SkillSection } from "@/_components/sections/SkillSection";
import { MailSection } from "@/_components/sections/MailSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechSection />
      <ProjectSection />
      <SkillSection />
      <ExpSection />
      <SchoolSection />
      <MailSection />
    </main>
  );
}
