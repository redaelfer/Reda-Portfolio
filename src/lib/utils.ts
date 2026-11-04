import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
export function readPreference(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
export function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* The portfolio works without browser storage. */
  }
}
