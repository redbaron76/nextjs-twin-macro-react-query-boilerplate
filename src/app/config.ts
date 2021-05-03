// Variabili di ambiente
export const isBrowser = typeof window !== "undefined";
export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;
