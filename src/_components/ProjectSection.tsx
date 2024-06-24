import React from "react";
import { Section } from "@/_components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pokemonStudio from "../_components/pokemonStudio.png";
import pokemonStudioIcon from "../_components/pokemonStudioIcon.png";
import Image from "next/image";
import { GithubIcon } from "./svg_icons/GithubIcon";
import { ReactIcon } from "./svg_icons/ReactIcon";
import { TsIcon } from "./svg_icons/TsIcon";

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
                  flex  items-center gap-1"
                  >
                    <Image
                      src={pokemonStudioIcon}
                      alt="pokemon-studio-icon"
                      className="w-[35] h-[35]"
                    />
                    <span>Pokémon Studio</span>
                  </div>
                  <ReactIcon size={35} color="white" />
                  <TsIcon size={35} color="white" />
                </div>
                <div>
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
                  flex  items-center gap-1"
                  >
                    <Image
                      src={pokemonStudioIcon}
                      alt="pokemon-studio-icon"
                      className="w-[35] h-[35]"
                    />
                    <span>Today&apos;s Flag</span>
                  </div>
                  <ReactIcon size={35} color="white" />
                  <TsIcon size={35} color="white" />
                </div>
                <div>
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
