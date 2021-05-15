import create, { SetState, GetState } from "zustand";
import { IGeoState } from "src/types/geo";
import { isBrowser } from "src/app/config";

let L = undefined;
if (isBrowser) L = require("leaflet");

export const useGeoStore = create<IGeoState>(
  (set: SetState<IGeoState>, get: GetState<IGeoState>) => ({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    watchId: null,
    // ACTION
    getCurrentPosition: () => {
      set({ error: null });
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            set({
              accuracy: pos.coords.accuracy,
              altitude: pos.coords.altitude,
              altitudeAccuracy: pos.coords.altitudeAccuracy,
              heading: pos.coords.heading,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              speed: pos.coords.speed,
              timestamp: pos.timestamp,
              error: null,
            });
          },
          (error) => {
            set({
              accuracy: null,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              latitude: null,
              longitude: null,
              speed: null,
              timestamp: null,
              error,
            });
          }
        );
      }
      return get();
    },
    watchPosition: (
      enableHighAccuracy = true,
      maximumAge = 15000,
      timeout = 12000
    ) => {
      let watchId = get().watchId;
      if (navigator && navigator.geolocation) {
        if (watchId) navigator.geolocation.clearWatch(watchId);
        watchId = navigator.geolocation.watchPosition(
          (pos) => {
            set({
              accuracy: pos.coords.accuracy,
              altitude: pos.coords.altitude,
              altitudeAccuracy: pos.coords.altitudeAccuracy,
              heading: pos.coords.heading,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              speed: pos.coords.speed,
              timestamp: pos.timestamp,
              error: null,
              watchId,
            });
          },
          (error) => {
            set({
              accuracy: null,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              latitude: null,
              longitude: null,
              speed: null,
              timestamp: null,
              error,
              watchId,
            });
          },
          { enableHighAccuracy, maximumAge, timeout }
        );
      }
      return get();
    },
    clearWatch: () => {
      const watchId = get().watchId;
      if (navigator && navigator.geolocation && watchId) {
        navigator.geolocation.clearWatch(watchId);
        set({
          watchId: null,
        });
      }
      return get();
    },
    setGeo: async (key, value) => {
      set({
        [key]: value,
      });
      return get();
    },
  })
);
