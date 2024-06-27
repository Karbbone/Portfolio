"use client";
import { Section } from "./sections/Section";
import { useCallback, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("dark");

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        <div
          className="cursor-pointer select-none"
          onClick={() => toggleTheme()}
        >
          <span>{theme === "light" ? "🌙" : "🌞"}</span>
        </div>
      </Section>
    </header>
  );
};
