import { icons } from "@constants/icons";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Experience {
  organisation: string;
  location: string;
  period: string;
  role: string;
  icon: keyof typeof icons;
}

export interface ToolNTech {
  icon: keyof typeof icons;
  technology: string;
}
