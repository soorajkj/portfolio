import { clsx } from "clsx";
import { twMerge as merge } from "tailwind-merge";

type ClassBase = null | undefined | string | number | boolean;
type ClassName = ClassArray | ClassDict | ClassBase;
type ClassArray = ClassName[];
type ClassDict = Record<string, any>;

export const classnames = (...inputs: ClassName[]) => merge(clsx(inputs));
