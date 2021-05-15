import { EMAP_SCRIPT_ID, EMAP_VERSION, isBrowser } from "./config";

let mapProvider = null;

export const geoSearchLocation = async ({ queryKey }) => {
  const [_key, searchText] = queryKey;
  if (isBrowser && !mapProvider) {
    const provider = require("leaflet-geosearch");
    mapProvider = new provider.OpenStreetMapProvider();
  }
  return mapProvider && (await mapProvider.search({ query: searchText }));
};
