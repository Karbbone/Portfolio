import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/_components/ThemeProvider";

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
      <head>
        <meta
          name="google-site-verification"
          content="w_5GhTXmwriwGLGA8fKIoHd3iH4ZDtcdO2FJhgHNAPw"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          nunito.variable,
          "font-sans h-full bg-body"
        )}
        id="body"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
