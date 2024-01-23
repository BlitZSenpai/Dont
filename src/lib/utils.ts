import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CACHE_URL = "http://webcache.googleusercontent.com/search?q=cache:";

export const CACHE_END = "&sca_esv=599792272&strip=1&vwsrc=0";
