"use client";
import { Section } from "./Section";
import linkedin from "./linkedin-icon.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GithubIcon } from "../svg_icons/GithubIcon";
import { LinkedinIcon } from "../svg_icons/LinkedinIcon";

export const Hero = () => {
  return (
    <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border ">
      <div className="flex-[2] text-center pt-10 pb-4">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl mb-3 italic text-gray-200">
            Clément Maillet
          </h1>
        </div>
        <h1 className="text-3xl font-caption mb-3">20 ans</h1>
        <div className="h-100">
          <p className="lg:text-3xl sm:text-2xl text-xl font-caption">
            Développeur Junior
          </p>
        </div>
        <p className="font-sans mt-3 text-l">
          Je suis un développeur junior passionné par le développement web
          moderne
          <br />
          Diplomé d&apos;un <span className="text-key font-bold">BUT</span>{" "}
          Informatique (<span className="text-key font-bold">BAC +3</span>) à
          l&apos;IUT de <span className="text-key font-bold">VANNES</span>
          &nbsp;
        </p>
        <div className="mt-10 gap-10 flex items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>EMAIL</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact moi !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://github.com/Karbbone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={40} color="white" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon GitHub !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LinkedinIcon size={40} color="white" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon Linkedin !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-4">
          <span className="font-bold text-key">
            Actuellement en recherche d&apos;un poste
          </span>
        </div>
      </div>
    </Section>
  );
};