import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-background">
      <Section className="flex items-center">
        <h1 className="text-3xl italic">Clément.M</h1>
      </Section>
    </header>
  );
};
