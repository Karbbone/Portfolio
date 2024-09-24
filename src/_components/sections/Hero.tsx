"use client";
import { useCallback } from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GithubIcon } from "../svg_icons/GithubIcon";
import { LinkedinIcon } from "../svg_icons/LinkedinIcon";
import { NameIcon } from "../svg_icons/NameIcon";
import { useTheme } from "next-themes";
import { Hand } from "../svg_icons/Hand";

export const Hero = () => {
  const toContact = useCallback(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  const { theme } = useTheme();
  return (
    <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border ">
      <div className="flex-[2] text-center pt-10 pb-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-full sm:w-[75%] md:w-[60%]">
            <NameIcon></NameIcon>
            <div className="h-2 bg-key mt-3 line-name w-[0%]"></div>
          </div>
        </div>
        <p className="md:text-3xl  text-2xl font-caption">
          21ans et Développeur
        </p>
        <p className="mt-3 text-l md:text-xl">
          Je suis un développeur passionné par le développement
          d&apos;application web moderne.
        </p>
        <p className="mt-3 text-l md:text-xl">
          J&apos;ai des compétences avec les frameworks{" "}
          <span className="text-key font-bold">Node.js</span> tel que{" "}
          <span className="text-key font-bold">React</span>,{" "}
          <span className="text-key font-bold">Adonis</span>.
        </p>
        <p className="mt-3 text-l md:text-xl">
          Diplômé d&apos;un{" "}
          <span className="text-key font-bold">BUT (BAC +3)</span> Informatique
          à l&apos;IUT de <span className="text-key font-bold">Vannes</span>.
        </p>
        <div className="mt-10 gap-10 flex items-center justify-center">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="px-6 py-2 text-white bg-keybutton rounded transition-all duration-300 ease-in-out hover:brightness-[0.88]"
                  onClick={(e) => toContact()}
                >
                  Me contacter
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact moi !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://github.com/Karbbone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={40} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon GitHub !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <LinkedinIcon
                  size={40}
                  color={theme == "dark" ? "white" : "black"}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon Linkedin !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Hand size={35} />
          <p className="font-bold">
            Actuellement en <span className="text-key">recherche</span> d&apos;{" "}
            un <span className="text-key">poste full stack ou back-end</span>
          </p>
        </div>
      </div>
    </Section>
  );
};
