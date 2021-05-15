// Variabili di ambiente
export const isBrowser = typeof window !== "undefined";
export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

// EagleMap

export const EMAP_VERSION = "1.12.1";
export const EMAP_SRC = `https://eaglefvg.regione.fvg.it/EagleMap/${EMAP_VERSION}/IgisMap-min.js`;

export const EMAP_CONFIG_PROJ_NAME = "EagleApp";
export const EMAP_CONFIG_CENTER = { lat: 46.1, lng: 13 };
export const EMAP_CONFIG_ZOOM_LEVEL = 9;
export const EMAP_CONFIG_MIN_ZOOM_LEVEL = 19;
export const EMAP_CONFIG_BG_LAYER = { type: "OSM", layer: "Mapnik" };
export const EMAP_CONFIG_MAP_LAYERS = ["Regione"];
export const EMAP_CONFIG_SERVICE_URL = "https://irdat.regione.fvg.it/WebGIS";
export const EMAP_CONFIG_SERVICE_TEMPLATE =
  "http://eaglefvg.regione.fvg.it/configurationservice/servicesconfigdata/igisservice/Embedded/censimentoAccessibilita.xml";
export const EMAP_CONFIG_PROTOCOL = "https";
export const EMAP_CONFIG_CREDENTIALS =
  "AlxMIV4lIZQd2W4zwnlQ2JQNvJu9KqsaCuZQzCXGP9hZYrfg0z3uC1Vy3oMF4pVh"; // sviluppo
