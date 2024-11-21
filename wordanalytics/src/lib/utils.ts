import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const FACEBOOK_CHARACTERS_LIMIT = 2200;
export const INSTAGRAM_CHARACTERS_LIMIT = 280;
