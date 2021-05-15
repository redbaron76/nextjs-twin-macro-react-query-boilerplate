import { State } from "zustand";

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
};

export interface IGeoState extends GeoProps, State {
  getCurrentPosition: () => IGeoState;
  watchPosition: (
    enableHighAccuracy?: boolean,
    maximumAge?: number,
    timeout?: number
  ) => IGeoState;
  clearWatch: () => IGeoState;
  setGeo: (
    key: keyof GeoProps,
    value: GeoProps[typeof key]
  ) => Promise<IGeoState>;
}
