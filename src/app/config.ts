import pkg from "../../package.json";

// Variabili di ambiente
export const isBrowser = typeof window !== "undefined";
export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

export const SITE_LANG = "en";
export const SITE_TITLE = `Next.js version: ${pkg.dependencies.next}`;
export const SITE_DESCRIPTION = `a Next.js boilerplate in TypeScript with Tailwind CSS, Emotion, Twin.Macro and Zustand`;
export const SITE_VERSION = `v. ${pkg.version}`;
