import React from "react";
import { Section } from "@/_components/sections/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pokemonStudio from "../pokemonStudio.png";
import pokemonStudioIcon from "../pokemonStudioIcon.png";
import todaysFlag from "../todaysFlag.png";
import todaysFlagIcon from "../todaysFlagIcon.png";
import Image from "next/image";
import { LinkIcon } from "../svg_icons/LinkIcon";
import { GithubIcon } from "./svg_icons/GithubIcon";
import { ReactIcon } from "./svg_icons/ReactIcon";
import { TsIcon } from "./svg_icons/TsIcon";
import { SassIcon } from "./svg_icons/SassIcon";
import { LinkIcon } from "./svg_icons/LinkIcon";
import { ElectronIcon } from "./svg_icons/ElectronIcon";01bccf3d63a26c40e64b895c2e1d3639b7685d1:src/_components/ProjectSection.tsx

export const ProjectSection = () => {
  return (
    <Section className="my-9 flex items-center sm:items-start bg-background rounded border">
      <div className="flex-[2]">
        <h2 className="text-2xl font-caption font-bold text-center mt-2 mb-4">
          {"Mes projets"}
        </h2>
        <div className="justify-center h-full py-4 flex flex-col gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                <div className="flex items-center gap-4">
                  <div
                    className="
                  flex  items-center gap-2"
                  >
                    <Image
                      src={pokemonStudioIcon}
                      alt="pokemon-studio-icon"
                      className="w-[40px] h-[40px]"
                    />
                    <span>Pokémon Studio</span>
                  </div>
                  <ReactIcon size={35} color="white" />
                  <TsIcon size={35} color="white" />
                  <ElectronIcon size={35} color="white" />
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://pokemonworkshop.com/fr/studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon size={35} color="white" />
                  </a>
                  <a
                    href="https://github.com/PokemonWorkshop/PokemonStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={35} color="white" />
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-8">
              <div className="flex-[3]">
                <Image
                  src={pokemonStudio}
                  alt="pokemon-studio"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-[3]">
                <p>
                  Pokémon studio est une application web qui permet de créée son
                  propre jeu pokémon. Cet outil est totalement modulable ce qui
                  permet a l&apos;utilisateur de crée un jeu pokémon unique.
                </p>
                <p className="mt-4">
                  Contribution sur mon temps libre au projet avec une équipe
                  organisée de manière agile, réunion de sprint et répartition
                  des tâches.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="overflow-hidden overflow-ellipsis text-xl justify-between items-center flex">
                <div className="flex items-center gap-4">
                  <div
                    className="
                  flex  items-center gap-3"
                  >
                    <Image
                      src={todaysFlagIcon}
                      alt="pokemon-studio-icon"
                      className="w-[35px] h-[35px]"
                    />
                    <span>Today&apos;s Flag</span>
                  </div>
                  <ReactIcon size={35} color="white" />
                  <TsIcon size={35} color="white" />
                  <SassIcon size={35} color="white" />
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://todays-flag.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon size={35} color="white" />
                  </a>
                  <a
                    href="https://github.com/PokemonWorkshop/PokemonStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={35} color="white" />
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-8">
              <div className="flex-[3]">
                <Image
                  src={todaysFlag}
                  alt="todays-flag"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-[3]">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};
