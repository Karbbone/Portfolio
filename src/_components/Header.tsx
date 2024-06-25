"use client";
import { Section } from "./sections/Section";
import { useCallback } from "react";

export const Header = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <header className="sticky z-50 top-0 bg-background">
      <Section className="flex items-center">
        <a
          id="header-name"
          className="text-3xl italic cursor-pointer select-none"
          onClick={scrollToTop}
        >
          Clément.M
        </a>
      </Section>
    </header>
  );
};
