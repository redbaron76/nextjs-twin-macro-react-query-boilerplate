import create, { SetState, GetState } from "zustand";
import { BackgroundLayerId, ILegend, IMapState } from "src/types/map";
import {
  EMAP_CONFIG_BG_LAYER,
  EMAP_CONFIG_CENTER,
  EMAP_CONFIG_CREDENTIALS,
  EMAP_CONFIG_MAP_LAYERS,
  EMAP_CONFIG_MIN_ZOOM_LEVEL,
  EMAP_CONFIG_PROJ_NAME,
  EMAP_CONFIG_PROTOCOL,
  EMAP_CONFIG_SERVICE_TEMPLATE,
  EMAP_CONFIG_SERVICE_URL,
  EMAP_CONFIG_ZOOM_LEVEL,
} from "src/app/config";
import { includes, without } from "lodash";

export const useMapStore = create<IMapState>(
  (set: SetState<IMapState>, get: GetState<IMapState>) => ({
    config: {
      projectName: EMAP_CONFIG_PROJ_NAME,
      center: EMAP_CONFIG_CENTER,
      zoomLevel: EMAP_CONFIG_ZOOM_LEVEL,
      locateMinZoom: EMAP_CONFIG_MIN_ZOOM_LEVEL,
      backgroundLayer: EMAP_CONFIG_BG_LAYER,
      mapLayers: EMAP_CONFIG_MAP_LAYERS,
      igisServiceUrl: EMAP_CONFIG_SERVICE_URL,
      igisServiceTemplate: EMAP_CONFIG_SERVICE_TEMPLATE,
      protocol: EMAP_CONFIG_PROTOCOL,
      credentials: EMAP_CONFIG_CREDENTIALS,
    },
    map: null,
    marker: null,
    legend: null,
    backgroundLayer: EMAP_CONFIG_BG_LAYER.layer,
    projectLayer: EMAP_CONFIG_MAP_LAYERS,
    // ACTIONS
    addListener: (event, callback) => {
      const { map } = get();
      map.events[event].addListener(callback);
      return get();
    },
    removeListener: (event, callback) => {
      const { map } = get();
      map.events[event].removeListener(callback);
      return get();
    },
    setMarker: (id, lat, lng, options = {}) => {
      // get map and marker from state
      const { map, marker } = get();
      if (map) {
        // remove prev marker if any
        if (marker) map.removePoint(marker.id);
        // create marker
        let newMarker = new PushPin();
        // set mandatory props
        newMarker.id = id;
        newMarker.coord = new Coordinate(lat, lng);
        // assign options
        newMarker = Object.assign(newMarker, options);
        // set marker to map
        map.setPoint(newMarker);
        // locate coordinates
        map.locateCoord(newMarker.coord, EMAP_CONFIG_ZOOM_LEVEL);
        // set marker in state
        set({ marker: newMarker });
      }
      return get();
    },
    updateMarker: (lat, lng, options = {}) => {
      // get saved marker from state
      let { map, marker, setMarker } = get();
      let id = marker?.id || new Date().getTime().toString();
      // get id and remove prev marker
      if (marker) {
        if (!marker.movable) {
          // set new marker
          setMarker(id, lat, lng, options);
        } else {
          // update marker (method exists?)
          marker.coord = new Coordinate(lat, lng);
          marker = Object.assign(marker, options);
          // console.log("Marker moved:", marker);
          // move map to center location
          map.locateCoord(marker.coord, EMAP_CONFIG_ZOOM_LEVEL);
          set({ marker });
        }
      }
      return get();
    },
    changeLayer: (layerId) => {
      const { map, backgroundLayer } = get();
      console.log(backgroundLayer, layerId);
      if (map && layerId && backgroundLayer !== layerId) {
        map.showLayer(layerId);
        map.hideLayer(backgroundLayer);
        set({ backgroundLayer: layerId });
      }
      return get();
    },
    toggleLayer: (layerId) => {
      let { map, projectLayer } = get();
      if (includes(projectLayer, layerId)) {
        projectLayer = without(projectLayer, layerId);
        map.hideLayer(layerId);
      } else {
        projectLayer = [...projectLayer, layerId];
        map.showLayer(layerId);
      }
      set({ projectLayer });
      return get();
    },
    toggleControls: (controls) => {
      const { map } = get();
      includes(controls, "scale")
        ? map.showScale({
            position: "bottomright",
            imperial: false,
            metric: true,
          })
        : map.hideScale;
      includes(controls, "navigation")
        ? map.showNavigation({ name: "navigation", position: "bottomright" })
        : map.hideNavigation();
      includes(controls, "minimap")
        ? map.showMiniMap({ position: "topright" })
        : map.hideMiniMap();
      includes(controls, "legend")
        ? map.showLegend({
            position: "topright",
            layers: true,
            check: true,
          })
        : map.hideLegend();
      return get();
    },
    getLegend: () => {
      const { map } = get();
      map?.getLegend((legend: ILegend) => {
        set({ legend });
      }, null);
      return get();
    },
    setMap: async (key, value) => {
      set({
        [key]: value,
      });
      return get();
    },
  })
);
