import { Manrope, PT_Mono } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-manrope",
  display: "swap",
  preload: true,
});

export const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-pt-mono",
  display: "swap",
  preload: true,
});
