"use client";
import { useCallback } from "react";
import { Section } from "./Section";
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
import { ScrollIcon } from "../svg_icons/ScrollIcon";

export const Hero = () => {
  const toContact = useCallback(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="hero-section"
      className="flex flex-col items-center sm:flex-row sm:items-start bg-background p-4 py-12 m-auto relative"
    >
      <div className="flex-[2] text-center pt-10 pb-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-full md:w-2/3">
            <NameIcon></NameIcon>
            <div className="h-2 bg-key mt-3 line-name w-[0%]"></div>
          </div>
        </div>
        <p className="md:text-3xl  text-2xl font-caption text-white">
          21ans et Développeur
        </p>
        <p className="mt-3 text-l md:text-xl text-white">
          Je suis un développeur passionné par le développement
          d&apos;application web moderne.
        </p>
        <div className="mt-10 gap-10 flex flex-col sm:flex-row items-center justify-center">
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
                <p>Contacte moi !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-10 gap-10 flex items-center justify-center">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://www.linkedin.com/in/cl%C3%A9ment-maillet-632895255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={40} landing={true} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon Linkedin !</p>
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
                  <GithubIcon size={40} landing={true} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon GitHub !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Hand size={45} />
          <p className="font-bold text-white text-xl">
            Actuellement en <span>recherche</span> d&apos;un poste full stack ou
            back-end
          </p>
        </div>
        <ScrollIcon size={180} />
      </div>
    </section>
  );
};
