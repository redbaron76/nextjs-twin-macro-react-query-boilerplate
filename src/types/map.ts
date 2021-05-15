import { State } from "zustand";

export type MapControls = "legend" | "minimap" | "navigation" | "scale";

export type BackgroundLayerId =
  | "Road"
  | "OpenTopoMap"
  | "Mapnik"
  | "Aerial"
  | "AerialWithLabels"
  | string;

export type ProjectLayerId =
  | "CRN 1:25000"
  | "lyr_CRN_Raster_25000"
  | "CTRN 1:5000"
  | "lyr_CTRN_Raster_5000"
  | "Comuni"
  | "lyr_DTM_colori_GD"
  | "Ortofoto2011"
  | "Ortofoto2014"
  | "Ortofoto1998"
  | "Ortofoto2003"
  | "Ortofoto2007"
  | "ortofoto2012"
  | "Regione"
  | "Ortofoto2017"
  | "lyr_ctrn_vol"
  | string;

export interface ILegend {
  Legenda: Legenda;
  isError: boolean;
  message: string;
}

export type MapProps = {
  config: IgisMapConfiguration;
  map: IgisMap;
  marker: PushPin;
  legend: ILegend;
  backgroundLayer: BackgroundLayerId;
  projectLayer: ProjectLayerId[];
};

export interface IMapState extends MapProps, State {
  addListener: <T>(
    event: keyof IgisMapEvents,
    callback: (e: T) => void
  ) => IMapState;
  removeListener: <T>(
    event: keyof IgisMapEvents,
    callback: (e: T) => void
  ) => IMapState;
  setMarker: (
    id: string,
    lat: number,
    lng: number,
    pinOptions?: Omit<PushPin, "id" | "coord">
  ) => IMapState;
  updateMarker: (
    lat: number,
    lng: number,
    pinOptions?: Omit<PushPin, "id" | "coord">
  ) => IMapState;
  changeLayer: (layerId: BackgroundLayerId) => IMapState;
  toggleLayer: (layerId: ProjectLayerId) => IMapState;
  toggleControls: (controls: MapControls[]) => IMapState;
  getLegend: () => IMapState;
  setMap: (
    key: keyof MapProps,
    value: MapProps[typeof key]
  ) => Promise<IMapState>;
}
