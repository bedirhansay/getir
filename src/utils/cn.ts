import { ClassValue, clsx } from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
