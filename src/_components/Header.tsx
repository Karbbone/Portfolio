"use client";
import { Section } from "./sections/Section";
import { useCallback } from "react";
import { ModeToggle } from "@/_components/ModeToggle";
import { useTheme } from "next-themes";
import { NameDotIcon } from "./svg_icons/NameDotIcon";
export const Header = () => {
  const { theme } = useTheme();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <header className="sticky z-50 top-0 bg-background border-b border-b-4">
      <Section className="flex items-center justify-between">
        <a onClick={scrollToTop} className="cursor-pointer select-none p-2">
          <NameDotIcon
            id="header-name"
            width={120}
            color={theme == "dark" ? "white" : "black"}
            onClick={scrollToTop}
          ></NameDotIcon>
        </a>
        <ModeToggle />
      </Section>
    </header>
  );
};
