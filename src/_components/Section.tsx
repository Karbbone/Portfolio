import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-4xl p-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
