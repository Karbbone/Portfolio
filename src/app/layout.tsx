import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Clément Maillet",
  description: "Portfolio de Clément Maillet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(GeistSans.variable, nunito.variable, "font-sans h-full")}
        id="body"
      >
        {children}
      </body>
    </html>
  );
}
