import { Anonymous_Pro, Bebas_Neue, Pangolin } from "next/font/google";

export const manrope = Pangolin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-manrope",
  display: "swap",
  preload: true,
});

export const ptMono = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-pt-mono",
  display: "swap",
  preload: true,
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-bebas",
  display: "swap",
  preload: true,
});
