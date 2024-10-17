import { Bebas_Neue, Montserrat, Roboto_Mono } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-montserrat",
  display: "swap",
  preload: true,
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-family-roboto-mono",
  display: "swap",
  preload: true,
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-family-bebas-neue",
  display: "swap",
  preload: true,
});
