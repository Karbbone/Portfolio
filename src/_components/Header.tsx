"use client";
import { Section } from "./sections/Section";
import { useCallback, useState } from "react";
import { ModeToggle } from "@/_components/ModeToggle";

export const Header = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <header className="sticky z-50 top-0 bg-background">
      <Section className="flex items-center justify-between">
        <a
          id="header-name"
          className="text-3xl italic cursor-pointer select-none"
          onClick={scrollToTop}
        >
          Clément.M
        </a>
        <ModeToggle />
      </Section>
    </header>
  );
};
