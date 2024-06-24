import React from "react";
import { Header } from "@/_components/Header";
import { Hero } from "@/_components/Hero";
import { TechSection } from "@/_components/TechSection";
import { SchoolSection } from "@/_components/SchoolSection";
import { ExpSection } from "@/_components/ExpSection";
import { ProjectSection } from "@/_components/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechSection />
      <ProjectSection />
      <ExpSection />
      <SchoolSection />
    </main>
  );
}
