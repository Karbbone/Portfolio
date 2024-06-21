import { Header } from "@/_components/Header";
import { Hero } from "@/_components/Hero";
import { Section } from "@/_components/Section";
import reactlogo from "../_components/react.svg";
import javalogo from "../_components/java.svg";
import mongodbLogo from "../_components/mongodb-icon.svg";
import mysqlLogo from "../_components/mysql-icon.svg";
import heart from "../_components/heart.svg";
import tslogo from "../_components/typescript-icon.svg";
import Image from "next/image";
import iutlogo from "../_components/iutvannes.png";
import mediamaglogo from "../_components/mediamag.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border">
        <div className="flex-[2]">
          <div className="flex items justify-center gap-3">
            <h2 className="text-2xl mt-2 mb-4 font-caption font-bold text-center">
              {"Mes technologies de"}
            </h2>
            <Image src={heart} alt="Coeur" className="w-8 h-8 mt-2" />
          </div>
          <div className="flex gap-4 justify-center">
            <Card className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  React
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image src={reactlogo} alt="ts-logo" className="w-12 h-12" />
              </CardContent>
            </Card>
            <Card className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  TS
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image src={tslogo} alt="ts-logo" className="w-12 h-12" />
              </CardContent>
            </Card>
            <Card className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  Java
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image src={javalogo} alt="ts-logo" className="w-12 h-12" />
              </CardContent>
            </Card>
            <Card className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  MySQL
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image src={mysqlLogo} alt="ts-logo" className="w-12 h-12" />
              </CardContent>
            </Card>
            <Card className="w-1/6">
              <CardHeader>
                <CardTitle className="overflow-hidden overflow-ellipsis">
                  Mongo
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image src={mongodbLogo} alt="ts-logo" className="w-12 h-12" />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
      <Section className="my-9 flex flex-col items-center sm:flex-row sm:items-start bg-background rounded border">
        <div className="flex-[2]">
          <h1 className="text-2xl font-caption font-bold text-center">
            POSTE/ECOLE
          </h1>
          <div className="flex flex-col gap-4 px-4">
            <Card className="w-full p-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <Image
                  src={mediamaglogo}
                  alt="mediamag-logo"
                  className="w-20 h-auto"
                />
                <p>
                  Mediamag Système <br /> 2023 - Maintenant
                </p>
              </div>
            </Card>
            <Card className="w-full">
              <div className="flex flex-row items-center justify-center gap-2">
                <Image src={iutlogo} alt="iut-logo" className="w-20 h-auto" />
                <p>
                  IUT DE VANNES <br /> 2020-2024
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
