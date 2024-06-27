import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pokemonStudio from "../pokemonStudioPic.png";
import pokemonStudioIcon from "../pokemonStudioIcon.png";
import todaysFlag from "../todaysFlagPic.png";
import todaysFlagIcon from "../todaysFlagIcon.png";
import Image from "next/image";
import { LinkIcon } from "../svg_icons/LinkIcon";
import { GithubIcon } from "../svg_icons/GithubIcon";
import { ReactIcon } from "../svg_icons/ReactIcon";
import { TsIcon } from "../svg_icons/TsIcon";
import { SassIcon } from "../svg_icons/SassIcon";
import { ElectronIcon } from "../svg_icons/ElectronIcon";
import { useTheme } from "next-themes";
export const ProjectSection = () => {
  const { theme } = useTheme();

  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-3xl font-caption font-bold text-center mt-2 mb-4 text-key">
          {"Mes projets"}
        </h2>
        <div className="justify-center py-4 flex flex-col gap-8">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="overflow-hidden text-xl justify-between items-center flex">
                <div className="flex items-center gap-3">
                  <Image
                    src={pokemonStudioIcon}
                    alt="pokemon-studio-icon"
                    className="w-[50px] h-[50px]"
                  />
                  <span>Pokémon Studio</span>
                </div>
                <div className="flex items-center md:gap-6 gap-2">
                  <a
                    href="https://pokemonworkshop.com/fr/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon
                      size={35}
                      color={theme == "dark" ? "white" : "black"}
                    />
                  </a>
                  <a
                    href="https://github.com/PokemonWorkshop/PokemonStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon
                      size={35}
                      color={theme == "dark" ? "white" : "black"}
                    />
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 md:gap-8 min-w-0">
              <div className="flex-1 md:flex-[3] min-w-0">
                <Image
                  src={pokemonStudio}
                  alt="pokemon-studio"
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex-1 md:flex-[3] min-w-0">
                <p>
                  Pokémon studio est une application web qui permet de créer son
                  propre jeu pokémon. Cet outil est totalement modulable ce qui
                  permet à l&apos;utilisateur de créer un jeu pokémon unique.
                </p>
                <p className="mt-4">
                  Contribution sur mon temps libre au projet avec une équipe
                  organisée de manière agile, réunion de sprint et répartition
                  des tâches.
                </p>
                <div className="inline-flex gap-12 mt-4 border p-2">
                  <ReactIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                  <TsIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                  <ElectronIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="overflow-hidden text-xl justify-between items-center flex">
                <div className="flex items-center gap-4">
                  <Image
                    src={todaysFlagIcon}
                    alt="todays-flag-icon"
                    className="w-[40px] h-[40px]"
                  />
                  <span>Today&apos;s Flag</span>
                </div>
                <div className="flex items-center  md:gap-6 gap-2">
                  <a
                    href="https://todays-flag.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon
                      size={35}
                      color={theme == "dark" ? "white" : "black"}
                    />
                  </a>
                  <a
                    href="https://github.com/Karbbone/TodaysFlag"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon
                      size={35}
                      color={theme == "dark" ? "white" : "black"}
                    />
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 md:gap-8 min-w-0">
              <div className="flex-1 md:flex-[3] min-w-0">
                <Image
                  src={todaysFlag}
                  alt="todays-flag"
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="flex-1 md:flex-[3] min-w-0">
                <p>
                  Today&apos;s Flag est une application web qui permet de
                  deviner le pays se cachant derrière un drapeau chaque jour. En
                  plus de deviner le drapeau, j&apos;aimerais ajouter de
                  nouveaux modes de jeu à l&apos;avenir, ainsi que créer une
                  application mobile et un bot Discord.
                </p>
                <p className="mt-4">
                  Projet 100% personnel, réalisé sur mon temps libre.
                </p>
                <div className="inline-flex gap-12 mt-4 border p-2">
                  <ReactIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                  <TsIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                  <SassIcon
                    size={35}
                    color={theme == "dark" ? "white" : "black"}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};
