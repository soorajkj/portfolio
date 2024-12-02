import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

export const manrope = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-manrope",
  display: "swap",
  preload: true,
});

export const ptMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-pt-mono",
  display: "swap",
  preload: true,
});
