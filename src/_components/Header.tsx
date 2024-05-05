import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-background">
      <Section className="flex items-baseline py-3">
        <h1 className="text-3xl font-caption text-primary font-bold">
          Clément 💻
        </h1>
      </Section>
    </header>
  );
};
