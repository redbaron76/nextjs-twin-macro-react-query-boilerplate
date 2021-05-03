import { State } from "zustand";
import L from "leaflet";

export type GeoResult = {
  x: number; // lon,
  y: number; // lat,
  label: string; // formatted address
  bounds: [
    [number, number], // s, w - lat, lon
    [number, number] // n, e - lat, lon
  ];
  raw: {}; // raw provider result
};

export type GeoProps = {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp?: number;
  error?: GeolocationPositionError;
  watchId: number | null;
  // Leaflet.Map
  map: L.Map;
  marker: L.Marker;
};

export interface IGeoState extends GeoProps, State {
  getCurrentPosition: () => void;
  watchPosition: (
    enableHighAccuracy?: boolean,
    maximumAge?: number,
    timeout?: number
  ) => void;
  clearWatch: () => void;
  setMarker: (latLng: L.LatLngExpression, flyToZoom?: number) => void;
  setGeo: (key: keyof GeoProps, value: GeoProps[typeof key]) => Promise<any>;
}
