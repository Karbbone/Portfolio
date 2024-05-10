"use client";
import { Section } from "./Section";
import avatar from "./avataaars.svg";
import githublogo from "./github-icon.svg";
import linkedin from "./linkedin-icon.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Hero = () => {
  return (
    <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border ">
      <div className="flex-[2]">
        <h1 className="text-2xl font-caption font-bold mb-3">
          Bonjour ! je suis
        </h1>
        <h1 className="text-5xl font-caption font-bold mb-3">
          Clement Maillet
        </h1>
        <div className="h-100">
          <TypeAnimation
            className="lg:text-3xl sm:text-2xl text-xl font-caption"
            sequence={[
              "DÉVELOPPEUR JUNIOR",
              1250,
              "DÉVELOPPEUR FRONT-END",
              1250,
              "DÉVELOPPEUR BACK-END",
              1250,
            ]}
            speed={50}
            style={{
              whiteSpace: "pre-line",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </div>
        <p className="font-sans mt-3 text-l">
          Je suis un développeur junior passionné par le développement web
          moderne ainsi que le développement logiciel. Pour le moment je
          souhaite être développeur full-stack afin que je puisse dans le futur
          me spécialiser soit dans la back-end ou bien le front-end. Je suis
          curieux et apprendre de nouvelles technologies ne me fait pas peur.
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
              <TooltipTrigger asChild>
                <Button>MON CV</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Télécharge mon CV !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={githublogo}
                  alt="GitHub-logo"
                  className="w-12 h-auto rounded-full"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon GitHub !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={linkedin}
                  alt="Linkedin-logo"
                  className="w-12 h-auto rounded-full"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Visite mon Linkedin !</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex-1 p-2 flex items-center justify-center">
        <Image
          src={avatar}
          alt="Clement Avatar"
          className="w-2/3 mt-4 sm:mt-0  sm:w-full h-auto bg-white rounded-full"
        />
      </div>
    </Section>
  );
};
