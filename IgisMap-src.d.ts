/// <reference path="./lib/leaflet/1.6.0/leaflet.d.ts" />
/// <reference path="./lib/jquery.d.ts" />
/// <reference path="./lib/spin.d.ts" />
declare namespace L {
  var AwesomeMarkers: any;
  var drawLocal: any;
  var Draw: any;
  var animate: any;
  var duration: any;
  var FeatureGroup: any;
  var GeometryUtil: any;
  namespace tileLayer {
    var bing: any;
  }
  namespace Control {
    var scale: any;
    var Zoom: any;
    var Draw: any;
    var MiniMap: any;
    var MousePosition: any;
  }
}
declare namespace IgisMapEmbedded {
  class IgisMapRender {
    _igisMapContainer: string;
    _igisMapConfiguration: IgisMapConfiguration;
    _map: L.Map;
    _BingLayer: any;
    _currentZoomLevel: number;
    _baseUrl: string;
    scaleControl: ScaleControl;
    miniMapControl: MiniMapControl;
    navigationControl: NavigationControl;
    geoNoteControl: GeoNoteControl;
    coordinateControl: CoordinateControl;
    _LEAFLET_JS: string;
    _LEAFLET_CSS: string;
    _LEAFLET_MARKER_CSS: string;
    _LEAFLET_MARKER_JS: string;
    onCompleteLoadMap: IgisMapEvent;
    onErrorLoadMap: IgisMapEvent;
    onClick: IgisMapEvent;
    onPushPinChanged: IgisMapEvent;
    onZoomChanged: IgisMapEvent;
    constructor(igisMapContainer: string, igisMapConfiguration: any);
    private _setLeafletUrl();
    run(): void;
    private _onload1();
    private _onload2();
    private _onload3();
    private _onload4();
    private _onload6();
    private _onload7();
    private _onload8();
    private _initControls();
    private _onMaploaded();
    private _onMapClick(e);
    private _onZoomlevelschange();
    private _onZoomOutChange();
    private _onZoomInChange();
    private _layerVisibilityOUT(layer, zoomLevel);
    private _layerVisibilityIN(layer, zoomLevel);
    private _buildTileLayer(imeLayer);
    locate(inquadramento: any): void;
    addLayer(imeLayer: IMELayer): void;
    setOpacity(imeLayer: any, opacity: any): void;
    private _getTileLayer(id);
    private _getIndex(geomtype);
    removeLayer: (l: any) => void;
    setPoint(pushpins: any, options?: any): void;
    private _onMarkerChange(e);
    private _hasMarker(id);
    private _getMarker(id);
    private _buildMarker(pushpin);
    locatePoint(id: any): void;
    removePoint(id: any): void;
    removePoints(): void;
    getZoom(): number;
    getBBoxZoom(bbox: any): number;
    getBBox(): LocationRect;
    getSize(): Point;
    getMapScale(): number;
    showControl(name: any, options: any): void;
    hideControl: (name: any) => void;
    addKML(id: string, url: string): void;
    removeKML(id: string): void;
    setLanguage(lang: string): void;
    getLanguage(): string[];
  }
  class ControlBase {
    map: L.Map;
    control: L.Control;
    constructor(map: L.Map);
    show(): void;
    hide(): void;
  }
  class NavigationControl extends ControlBase {
    constructor(map: L.Map, options: any);
  }
  class MiniMapControl extends ControlBase {
    constructor(map: L.Map, options: any);
  }
  class GeoNoteControl extends ControlBase {
    drawnItems: L.FeatureGroup;
    private geoNoteJSON;
    constructor(map: L.Map, options: any);
    getGeoJSONGeoNote(): any;
  }
  class CoordinateControl extends ControlBase {
    constructor(map: L.Map, options: any);
  }
  class ScaleControl extends ControlBase {
    constructor(map: L.Map, options: any);
  }
}
declare class LocateMapper {
  static map(val: Object): ResponseData<LocationRect>;
  private static getDati(source);
}
declare class CartografieProgettoMapper {
  static cartografieProgetto: IMELayer[];
  static bboxProject: LocationRect;
  static zoomRangeProject: ZoomRange;
  static map(val: Object): ResponseData<IMELayer[]>;
  private static getDati(source);
  private static getZoomRangeProject(rootTree);
  private static getMinZoomRangeProjectIterate(rootTree);
  private static getTree(rootTree);
  private static getBbox(elem);
  private static getZoomRange(elem);
}
declare class TokenMapper {
  static map(val: Object): ResponseData<string>;
}
declare class LegendMapper {
  static cartografieProgetto: IMELayer[];
  static map(
    val: Object,
    cartografieProgetto: IMELayer[]
  ): ResponseData<IMELayer[]>;
  private static getDati(source);
  private static searchTree(tree, matchingTitle);
  private static buildTree(cartoPrj, rootTree, scope);
}
declare class SchedaOggettoMapper {
  static map(val: Object): ResponseData<Object>;
}
declare class BingMapAddressMapper {
  static map(val: Object): ResponseData<Object>;
}
declare var $IME: any;
declare var JQUERY_LIB: string;
declare var POLYFILL_LIB: string;
declare var BINGMAPS_LOCATIONS: string;
declare var BOOTSTRAP_ICONS_CSS: string;
declare var COPYRIGHT_URL: string;
declare var CULTURE: string;
declare var PROVIDER_INSIEL: string;
declare var PROVIDER_OSM: string;
declare var PROVIDER_BINGMAP: string;
declare var LAYER_BINGMAP_AERIAL: string;
declare var LAYER_BINGMAP_AERIALWITHLABELS: string;
declare var LAYER_BINGMAP_ROAD: string;
declare var LAYER_OSM_MAPNIK: string;
declare var MIN_ZOOMRANGE_MAPPA: number;
declare var MAX_ZOOMRANGE_MAPPA: number;
declare var TIMEOUT_AJAX: number;
declare var GEOMTYPE_BACKGROUND: string;
declare var SCHEDAOGGETTO_MIN_OFFSET: number;
declare var SCHEDAOGGETTO_MAX_OFFSET: number;
declare var GEOMTYPE_RASTER: string;
declare var GEOMTYPE_AREA: string;
declare var GEOMTYPE_CIRCLE: string;
declare var GEOMTYPE_LINE: string;
declare var GEOMTYPE_POINT: string;
declare var GEOMTYPE_TEXT: string;
declare var HEARTBEAT_INTERVAL: number;
declare var DPI_DEFAULT: number;
declare var CONTROL_NAVIGATION: string;
declare var CONTROL_MINIMAP: string;
declare var CONTROL_GEONOTE: string;
declare var CONTROL_MEASURE: string;
declare var CONTROL_COORDINATE: string;
declare var CONTROL_SCALE: string;
declare var Resources: {
  warn_Init_NotCompleted: string;
  success_Init: string;
  success_configuration: string;
  success_InitLibJS: string;
  success_InitIgisService: string;
  success_InitMapRender: string;
  success_InitCartografieSfondo: string;
  success_InitCartografieProgetto: string;
  success_GetLegend: string;
  success_Locate: string;
  success_Position: string;
  success_SchedaOggetto: string;
  success_SetPoint: string;
  success_RemovePoint: string;
  success_RemovePoints: string;
  success_ShowLayer: string;
  success_HideLayer: string;
  success_GeoFinder: string;
  success_ReverseGeoFinder: string;
  error_Init: string;
  error_configuration: string;
  error_InitLibJS: string;
  error_InitIgisService: string;
  error_InitMapRender: string;
  error_InitCartografieSfondo: string;
  error_InitCartografieProgetto: string;
  error_GetLegend: string;
  error_Locate: string;
  error_Position: string;
  error_SchedaOggetto: string;
  error_SetPoint: string;
  error_RemovePoints: string;
  error_RemovePoint: string;
  error_ShowLayer: string;
  error_HideLayer: string;
  error_GeoFinder: string;
  error_ReverseGeoFinder: string;
  error_MapperLocate: string;
  error_MapperCartografieProgetto: string;
  error_MapperToken: string;
  error_MapperLegend: string;
  error_MapperSchedaOggetto: string;
  error_MapperBingMapAddress: string;
  error_SetLayer: string;
  error_BadParams: string;
  error_Callback: string;
  error_HeartBeat: string;
  proprieta_nonpresente: string;
  proprieta_nonvalida: string;
  msg_error: string;
  msg_warn: string;
  msg_info: string;
};
declare class IgisMapConfiguration {
  projectName: string;
  center: Coordinate;
  zoomLevel: number;
  locateMinZoom: number;
  backgroundLayer: BackgroundLayer;
  backgroundIMELayer?: IMELayer;
  mapBackgrounds?: IMELayer[];
  mapLayers?: string[];
  igisServiceToken?: string;
  igisServiceUrl?: string;
  igisServiceTemplate?: string;
  credentials?: string;
  protocol?: string;
  configurationServiceUrl?: string;
  logServiceUrl?: string;
  language?: string;
  minZoom?: number;
  maxZoom?: number;
  mdt?: string;
  core?: boolean;
  styleUrls?: string[];
  popup?: PopupGlobalOptions;
  lib?: libOptions;
  render?: string;
  ticket?: string;
  elevation?: boolean;
  attribution?: (AttributionItem | AttributionItem[])[];
}

declare class AttributionItem {
  content: string;
  className?: string;
  link?: string;
  title?: string;
  copyright?: boolean;
}

declare class libOptions {
  baseUrl?: string;
}

declare class PopupGlobalOptions {
  autoPadding: number[];
}

declare class BackgroundLayer {
  type: string;
  layer: string;
}
interface IIgisMapEvents {
  addListener(
    evt: string,
    callback: {
      (f: void): void;
    },
    scope?: any
  ): any;
  removeListener(
    evt: string,
    callback: {
      (f: void): void;
    },
    scope?: any
  ): any;
  remove(evt: string): any;
}
declare class IgisMapEvents implements IIgisMapEvents {
  click: any;
  Click: any;
  notification: any;
  Notification: any;
  pushPinChanged: any;
  PushPinChanged: any;
  pushPinError: any;
  locateError: any;
  layerError: any;
  zoomLevelChanged: any;
  popupopen: any;
  popupclose: any;

  //   constructor();
  //   addListener(
  //     evt: string,
  //     callback: {
  //       (f: void): void;
  //     },
  //     scope?: any
  //   ): void;
  //   removeListener(
  //     evt: string,
  //     callback: {
  //       (f: void): void;
  //     },
  //     scope?: any
  //   ): void;
  //   remove(evt: string): void;
}
interface IIgisMapEvent {
  addListener(
    callback: {
      (f: void): void;
    },
    scope?: any
  ): any;
  removeListener(
    callback: {
      (f: void): void;
    },
    scope?: any
  ): any;
  removeAll(): any;
}
declare class Handler {
  handler: {
    (f: void): void;
  };
  scope: any;
}
declare class IgisMapEvent implements IIgisMapEvent {
  private _handlers;
  addListener(
    callback: {
      (f: void): void;
    },
    scope?: any
  ): void;
  removeListener(
    callback: {
      (f: void): void;
    },
    scope?: any
  ): void;
  removeAll(): void;
  trigger(data?: any): void;
}
/*********************************************
Notifications
**********************************************/
declare class Message {
  level: any;
  message: string;
}
declare class IMENotification {
  isError: Boolean;
  messages: Message[];
  constructor();
  addInfo(msg: any): void;
  addWarn(msg: any): void;
  addError(msg: any): void;
}
declare class IMEResponse {
  isError: boolean;
  message: string;
}
declare class ResponseData<T> extends IMEResponse {
  data: T;
}
declare class Coordinate {
  lat: number;
  lng: number;
  constructor(lat: number, lng: number);
}
declare class LocationRect {
  left: number;
  bottom: number;
  right: number;
  top: number;
  topLeft: Coordinate;
  topRight: Coordinate;
  bottomLeft: Coordinate;
  bottomRight: Coordinate;
  center: Coordinate;
  height: number;
  width: number;
  constructor(
    topLeftLat: any,
    topLeftLng: any,
    bottomRightLat: any,
    bottomRightLng: any
  );
  intersects(rect: LocationRect): boolean;
}
declare class Rectangle {
  topLeft: Point;
  bottomRight: Point;
  center: Point;
  width: number;
  height: number;
  constructor(
    topLeftX: any,
    topLeftY: any,
    bottomRightX: any,
    bottomRightY: any
  );
}
declare class Point {
  x: number;
  y: number;
  constructor(x: any, y: any);
}
declare class Inquadramento {
  fit: Boolean;
  fitAll: Boolean;
  coords: Coordinate[];
  bBox: LocationRect;
  coord: Coordinate;
  zoomLevel: number;
  zoomRange: ZoomRange;
}
declare class PushPinIcon {
  color: string;
  iconColor: string;
  name: string;
  prefix: string;
  className: string;
}
declare class PushPinImage {
  src: string;
  size: Point | number[];
  anchor: Point | number[];
  className: string;
}
declare class PushPin {
  id: string;
  coord: Coordinate;
  tooltip?: string;
  movable?: boolean;
  icon?: PushPinIcon | PushPinImage;
  content?: string | HTMLElement | { (f: void): string | HTMLElement };
  contentUrl?: string;
  contentStyle?: boolean;
  open?: boolean;
  type?: string;
  // constructor(id: any, coord: any, description?: any, movable?: any, icon?: any);
}
declare class PushPinGPS extends PushPin {
  type?: string;
  constructor(id: string, description?: string, icon?: string);
}
declare class Cartografie {
  Legenda: Legenda;
  constructor();
}
declare class Legenda {
  CartografieSfondo: IMELayer[];
  CartografieProgetto: IMELayer[];
}
declare class LegendIcon {
  UrlIcon: string;
  Width: number;
  Height: number;
}
declare class IMELayerBase extends LegendIcon {
  Id: string;
  Name: string;
  Title: string;
}
declare class IMELayer extends IMELayerBase {
  IsChecked: boolean;
  Provider: string;
  ZoomRange: ZoomRange;
  Bbox: LocationRect;
  Format: string;
  GeomType: string;
  Children: IMEClass[];
  Opacity: number;
  Copyright: string;
  mapID: string;
}
declare class IMEClass extends IMELayerBase {
  Children: IMEClass[];
}
declare class IMELayerOptions {
  opacity: number;
}
declare class IMELegendOptions {
  position: string;
  layers?: boolean;
  check?: boolean;
  container?: string;
  initLayers?: string[];
  includeLayers?: string[];
  includeBaseLayers?: string[];
  excludeLayers?: string[];
  excludeBaseLayers?: string[];
  collapsed?: boolean;
}
declare class IMEMiniMapOptions {
  position: string;
}
declare class IMEFSOptions {
  position: string;
}
declare class IMENavigationOptions {
  name: string;
  position?: string;
  withGPS?: boolean;
  gpsOptions?: IMEGPSOptions;
}
declare class IMEGPSOptions {
  position?: string;
  callback?: any;
  scope?;
  watch?: boolean;
  enableHighAccuracy?: boolean;
  maximumAge?: number;
}
declare class IMEGeoNoteOptions {
  position: string;
}
declare class IMEMeasureOptions {
  position: string;
}
declare class IMECoordinateOptions {
  position: string;
}
declare class IMEFileLoaderOptions {
  position: string;
}
declare class IMEScaleOptions {
  position: string;
  metric: boolean;
  imperial: boolean;
}
declare class IMEPushPinOptions {
  locate?: boolean;
  cluster?: boolean;
  open?: boolean;
  clusterOptions?: IMEClusterOptions;
}
declare class IMEClusterOptions {
  id?: string;
  title?: string;
  color?: string;
  className?: string;
  zoomOnClick?: boolean;
  spiderfy?: boolean;
  click?: any;
  create?: any;
}
declare class IMEElevationOptions {
  position: string;
  width: number;
  height: number;
  collapsed: boolean;
}
declare class ZoomRange {
  constructor(minZoom: number, maxZoom: number);
  minZoom: number;
  maxZoom: number;
}
declare class LocateOptions {
  localizable: boolean;
  title: string;
}
declare class SchedaOptions {
  nomiLivelli: string[];
  offset: number;
  outCoordsGeom: boolean;
}
declare class InfoOptions extends SchedaOptions {
  command: any;
}
declare class PopupOptions {
  locate: boolean;
  open: boolean;
  actions: Action[];
}
declare class Action {
  id: string;
  type: POPUP_ACTIONS_TYPES;
  title: string;
  action: string;
  options: ActionOptions;
  fn: any;
  scope: any;
}
declare class ActionOptions {
  icon: any;
  className: string;
  iconButton: boolean;
  position: string;
  state: any;
}
declare class POPUP_ACTIONS_TYPES {
  static "POPUPCLICK": string;
  static "BUTTON": string;
  static "TOGGLEBUTTON": string;
}

declare class COPYRIGHT {
  static "ORTOFOTO": string;
  static "CATASTO": string;
}

declare class HeatItem {
  lat: number;
  lng: number;
  intensity: number;
}

declare class HeatOptions {
  minOpacity?: number;
  maxZoom?: number;
  max?: number; //1.0
  radius?: number; // default 25
  blur?: number; // default 15
  gradient?: any;
}

declare class RoutesOptions {
  avoid?: string;
  routePathOutput?: string;
  culture?: string;
  optimize?: string;
  output?: string;
  tolerances?: string;
  routeAttributes?: string;
  gpsStart?: boolean;
  gpsEnd?: boolean;
  navigatorLink?: boolean;
  navigatorOpen?: boolean;
  navigatorContent?: string;
  drawPath?: boolean;
  drawInstructions?: boolean;
  locate?: boolean;
}

declare class RoutesModes {
  static "Driving": string;
  static "Walking": string;
}

interface IIgisMap {
  getGisID(): string;
  getSize(): Point;
  getMapScale(): number;
  getGPSCoords(
    callback: { (f: void): void },
    scope?: Object,
    options?: IMEGPSOptions
  ): any;
  clearGPSCoords(): any;
  getBounds(): LocationRect;
  getLegend(
    callback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  locate(
    layer: string,
    whereCond: string,
    options?: LocateOptions,
    callaback?: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  locateCoord(coord: Coordinate, zoomlevel: number): any;
  posiziona(inquadramento: Inquadramento): void;
  schedaOggettoByCond(
    cond: string,
    livello: string,
    callback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  schedaOggetto(
    coord: Coordinate,
    options?: SchedaOptions,
    callaback?: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  setPoint(value: PushPin, options?: IMEPushPinOptions): any;
  locatePoint(id: string): any;
  removePoint(id: string): any;
  removePoints(): any;
  geoFinder(
    query: string,
    geoFinderCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  reverseGeoFinder(
    coord: Coordinate,
    reverseGeoFinderCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  routes(
    points: (String | Coordinate | PushPin | PushPinGPS)[],
    mode: RoutesModes,
    options: RoutesOptions,
    callback?: any,
    scope?: any
  ): any;
  removeRoutes(): any;
  elevation(
    coord: Coordinate | Coordinate[],
    elevationCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  showLayer(layerName: string, options?: IMELayerOptions): any;
  hideLayer(layerName: string): any;
  addLayer(layer: IMELayer): any;
  removeLayer(layer: IMELayer): any;
  showLegend(options?: IMELegendOptions): any;
  hideLegend(): any;
  updateLegend(): any;
  showMiniMap(options?: IMEMiniMapOptions): any;
  hideMiniMap(): any;
  showFullScreen(options?: IMEFSOptions): any;
  hideFullScreen(): any;
  showNavigation(options?: IMENavigationOptions): any;
  hideNavigation(): any;
  showGPS(options?: IMEGPSOptions): any;
  hideGPS(): any;
  showInfo(options: SchedaOptions): any;
  hideInfo(): any;
  showGeoNote(options?: IMEGeoNoteOptions): any;
  hideGeoNote(): any;
  showCoordinate(options?: IMECoordinateOptions): any;
  hideCoordinate(): any;
  showFileLoader(options?: IMEFileLoaderOptions): any;
  showFileLoader(): any;
  showScale(options?: IMEScaleOptions): any;
  hideScale(): any;
  addKML(id: string, url: string): any;
  removeKML(id: string): any;
  setLanguage(lang: string): any;
  getLanguage(): string[];
  dispose(): any;
  setOpacity(layerName: string, opacity: number): any;
  setLayerOpacity(layer: IMELayer, opacity: number): any;
  events: IgisMapEvents;
  Locate(layer: string, whereCond: string): any;
  GetLegend(
    callback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  LocateCoord(coord: Coordinate, zoomlevel: number): any;
  SchedaOggetto(
    value: any,
    nomiLivelli: string[],
    schedaOggettoCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  SetPoint(value: PushPin): any;
  RemovePoints(): any;
  GeoFinder(
    query: string,
    geoFinderCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  ReverseGeoFinder(
    coord: Coordinate,
    reverseGeoFinderCallback: {
      (f: void): void;
    },
    scope?: Object
  ): any;
  ShowLayer(layerName: string): any;
  HideLayer(layerName: string): any;
  Events: IgisMapEvents;
  draw: Draw;
  heatLayer(id: string, data: HeatItem[], options?: HeatOptions): void;
  removeHeatLayer(id: string): void;
  addHeatLayer(id: string, data: HeatItem[]): void;
  redrawHeatLayer(id): void;
}

/**
 * EagleMap embedded
 * @class
 */
declare class IgisMap implements IIgisMap {
  private _igisMapConfiguration;
  private _mapContainerID;
  private _mapRender;
  private _initNotification;
  private _onloadCallback;
  private _onloadCallbackObj;
  private _cartografieSfondo;
  private _cartografieProgetto;
  private _isCompleted;
  private _isMapRenderCompleted;
  private _isIgisServiceCompleted;
  private _spinner;
  private _spinner_div;
  private _events;
  /**
   * Eventi sulla mappa
   */
  events: IgisMapEvents;
  /**
   * @see events
   * @deprecated fino alla versione 02.01.00
   */
  Events: IgisMapEvents;
  /**
   * Rappresentazione della mappa
   * @constructor
   * @param {string} id - identificativo dell' HTMLElement contenitore (div)
   * @param {IgisMapConfiguration} configuration - configurazione della mappa
   * @param {requestCallback} callback - funzione di callback a caricamento completato
   * @param {object} callback_obj - contest in cui chiamare la funzione di callback
   */
  constructor(
    id: string,
    configuration: IgisMapConfiguration,
    callback: {
      (f: void): void;
    },
    callback_obj: Object,
    flgSpinner?: boolean
  );
  private _initConfiguration();
  private _errorConfiguration(msg);
  private _initLibs();
  private _initMapRender();
  private _errorInitMapRendere(ex?);
  private _initMapToken();
  private _errorInitIgisService(ex?);
  private _getCartografiaSfondo(bk);
  private _initCartografieProgetto();
  private _initCompleteMapRender();
  private _initCompleteIgisService();
  private _initComplete();

  /**
   * Draw
   * @public
   */
  draw: Draw;

  /**
   * Recupero token servizio cartografico
   * @public
   */
  getGisID(): string;
  /**
   * Recupero dimensione mappa
   * @public
   */
  getSize(): Point;
  /**
   * Recupero scala mappa
   * @public
   */
  getMapScale(): number;
  /**
   * Recupero coordinata GPS
   * @public
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   * @param {IMEGPSOptions} options - opzioni per il recupero della posizione GPS
   */
  getGPSCoords(callback: any, scope?: any, options?: IMEGPSOptions): void;
  /**
   * Rimuove la tracciatura del GPS
   * @public
   */
  clearGPSCoords(): any;
  /**
   * Recupero coordinate finestra mappa
   * @public
   */
  getBounds(): LocationRect;
  /**
   * @see locate
   * @deprecated fino alla versione 02.01.00
   */
  Locate(
    layerName: string,
    whereCond: string,
    localizable?: boolean,
    callback?: any,
    scope?: any
  ): void;
  /**
   * Localizza ed evidenza di un livello con condizione.
   * @public
   * @param {string} layerName - nome del livello
   * @param {string} whereCond - condizione where sul livello
   * @param {boolean} [localizable] - indica se la mappa deve localizzarsi
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  locate(
    layerName: string,
    whereCond: string,
    options?: LocateOptions,
    callback?: any,
    scope?: any
  ): void;
  /**
   * @see locateCoord
   * @deprecated fino alla versione 02.01.00
   */
  LocateCoord(coord: Coordinate, zoomlevel: number): void;
  /**
   * Posiziona sulla mappa
   * @public
   * @param {Coordinate} coord - coordinata su cui posizionarsi
   * @param {number} zoomlevel - livello di zoom su cui posizionarsi
   */
  locateCoord(coord: Coordinate, zoomlevel: number): void;
  /**
   * Posiziona sul BBox e relativo livello di zoom.
   * @public
   * @param {Inquadramento} inquadramento - Inquadramento
   */
  posiziona(inquadramento: Inquadramento): void;
  /**
   * @see schedaOggetto
   * @deprecated fino alla versione 02.01.00
   */
  SchedaOggetto(value: any, nomiLivelli: any, callback: any, scope?: any): void;
  /**
   * Scheda dati su una coordinata
   * @public
   * @param {Coordinate} coord - coordinata da interrogare
   * @param {SchedaOptions} options - opzioni per il recupero della scheda oggetto
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  schedaOggetto(
    coord: Coordinate,
    options?: SchedaOptions,
    callback?: any,
    scope?: any
  ): void;

  /**
   * Recupera le informazioni di un punto sulla mappa relative a un livello
   * @public
   * @param { schedaOptions } options - opzioni per il recupero della scheda oggetto
   * @param { requestCallback } [callback] - funzione di callback di risposta
   * @param { object } [scope] - contesto del chiamante su cui chiamare la callback
   */
  info(options: SchedaOptions, callback?: any, scope?: any): void;

  /**
   * Scheda oggetto con condizione
   * @public
   * @param {string} cond - condizone where
   * @param {string} livello - nome del livello
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  schedaOggettoByCond(
    cond: string,
    livello: string,
    callback?: any,
    scope?: any
  ): void;
  /**
   * @see geoFinder
   * @deprecated fino alla versione 02.01.00
   */
  GeoFinder(query: any, callback: any, scope?: any): void;
  /**
   * Recupero dell'indirizzo e della coordinata da una stringa
   * @public
   * @param {string} query - stringa da ricercare
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  geoFinder(query: any, callback: any, scope?: any): void;
  /**
   * @see reverseGeoFinder
   * @deprecated fino alla versione 02.01.00
   */
  ReverseGeoFinder(coord: any, callback: any, scope?: any): void;
  /**
   * Recupero dell'indirizzo da una coordinata
   * @public
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  reverseGeoFinder(coord: any, callback: any, scope?: any): void;

  /**
   * Routing tra più punti
   * @public
   * @param {Coordinate[]} coord - coordinate per il calcolo del routing
   * @param {TravelModes} mode - tipo percorso
   * @param {RoutesOptions} options - opzioni
   */
  routes(
    points: (String | Coordinate | PushPin | PushPinGPS)[],
    mode: RoutesModes,
    options: RoutesOptions,
    callback?,
    scope?
  ): void;

  /**
   * Remuovi il percorso di routing
   * @public
   */
  removeRoutes(): void;

  /**
   * Recupera l'altimetria della coordinata
   * @public
   * @param {Coordinate|Coordinate[]} coord - coordinate geografica
   * @param {elevationCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  elevation(coord: Coordinate | Coordinate[], callback, scope?): void;

  /**
   * @see setPoint
   * @public
   * @deprecated fino alla versione 02.01.00
   */
  SetPoint(pushPin: PushPin): void;
  /**
   * Inserisce un push pin sulla coordinata specificata e visualizza la descrizione come tooltip
   * @public
   * @param {PushPin} value - pushpin da aggiungere
   */
  setPoint(pushPin: PushPin, options?: IMEPushPinOptions): void;
  /**
   * @see removePoints
   * @deprecated fino alla versione 02.01.00
   */
  RemovePoints(): void;
  /**
   * Rimuove tutti i push pin dalla mappa
   * @public
   */
  removePoints(): void;
  /**
   * Localizza un pushpin sulla mappa
   * @public
   * @param {string} - id del pushpin
   */
  locatePoint(id: string): void;
  /**
   * Rimuove un pushpin sulla mappa
   * @public
   * @param {string} - id del pushpin
   */
  removePoint(id: string): void;
  /**
   * @see getLegend
   * @deprecated fino alla versione 02.01.00
   */
  Legenda(): Cartografie;
  /**
   * @see getLegend
   * @deprecated fino alla versione 02.01.00
   */
  GetLegend(callback: any, scope: any): void;
  /**
   * Recupera la legenda
   * @param
   * @param {requestCallback} [callback] - funzione di callback di risposta
   * @param {object} [scope] - contesto del chiamante su cui chiamare la callback
   */
  getLegend(callback: any, scope: any): void;
  /**
   * @see showLayer
   * @deprecated fino alla versione 02.01.00
   */
  ShowLayer(layerName: string): void;
  /**
   * Aggiungi livello
   * @param {string} layerName - nome livello
   */
  showLayer(layerName: string, options?: IMELayerOptions): void;
  addLayer(layer: IMELayer): void;
  removeLayer(layer: IMELayer): void;

  /**
   * @see hideLayer
   * @deprecated fino alla versione 02.01.00
   */
  HideLayer(layerName: string): void;
  /**
   * Nasconde livello
   * @param {string} layerName - nome livello
   */
  hideLayer(layerName: string): void;
  /**
   * Set opacità livello
   * @param {string} layerName - nome livello
   * @param {number} opacity - valore [0,1]
   */
  setOpacity(layerName: string, opacity: number): void;

  /**
   * Aggiungi la mappa di concentrazione
   * @public
   * @param {string} id - identificativo della mappa di concentrazione
   * @param {HeatItem[]} data - dati della mappa di concentrazione
   * @param {HeatOptions} options - parametri della mappa di concentrazione
   */
  heatLayer(id: string, data: HeatItem[], options?: HeatOptions): void;

  /**
   * Rimuovi la mappa di concentrazione
   * @public
   * @param {string} id - identificativo della mappa di concentrazione
   */
  removeHeatLayer(id: string): void;

  /**
   * Aggiungi dati alla mappa di concentrazione
   * @public
   * @param {string} id - identificativo della mappa di concentrazione
   * @param {HeatItem[]} data - dati della mappa di concentrazione
   */
  addHeatLayer(id: string, data: HeatItem[]): void;

  /**
   * Refresh della mappa di concentrazione
   * @public
   * @param {string} id - identificativo della mappa di concentrazione
   */
  redrawHeatLayer(id): void;

  /**
   * Aggiungi KML
   * @param {string} id - nome livello
   * @param {string} url - path file
   */
  addKML(id: string, url: string): void;

  /**
   * Rimuovi KML
   * @param {string} id - nome livello
   */
  removeKML(id: string): void;

  /**
   * Imposta lingua
   * @param {string} lang - it,en
   */
  setLanguage(lang: string): void;

  /**
   * Recupero lingue disponibili
   */
  getLanguage(): string[];

  /**
   * Set opacità livello
   * @param {IMELayer} layer - livello
   * @param {number} opacity - valore [0,1]
   */
  setLayerOpacity(layer: IMELayer, opacity: number): void;
  /**
   * Abilita legenda
   * @param {IMELegendOptions} options - opzioni relative alla legenda
   */
  showLegend(IMELegendOptions): void;
  /**
   * Disabilita legenda
   */
  hideLegend(): void;
  /**
   * Aggiorna legenda
   */
  updateLegend(): void;
  /**
   * Abilita mini mappa
   * @param {IMEMiniMapOptions} options - opzioni relative alla mini mappa
   */
  showMiniMap(options?: IMEMiniMapOptions): void;
  /**
   * Disabilita mini mappa
   */
  hideMiniMap(): void;
  /**
   * Abilita Full Screen
   * @param {IMEFSOptions} options - opzioni relative alla barra di navigazione
   */
  showFullScreen(options?: IMEFSOptions): void;
  /**
   * Disabilita Full Screen
   */
  hideFullScreen(): void;
  /**
   * Abilita barra di navigazione
   * @param {IMENavigationOptions} options - opzioni relative alla barra di navigazione
   */
  showNavigation(options?: IMENavigationOptions): void;
  /**
   * Disabilita mini mappa
   */
  hideNavigation(): void;

  /**
   * Abilita GPS
   * @param {IMEGPSOptions} options - opzioni relative al GPS
   */
  showGPS(options?: IMEGPSOptions): void;
  /**
   * Disabilita GPS
   */
  hideGPS(): void;

  /**
   * Abilita Info
   * @param {SchedaOptions} options - opzioni relative alle info
   */
  showInfo(options?: SchedaOptions): void;
  /**
   * Disabilita Info
   */
  hideInfo(): void;

  /**
   * Abilita barra geonote
   * @param {IMEGeoNoteOptions} options - opzioni relative alla barra delle geonote
   */
  showGeoNote(options?: IMEGeoNoteOptions): void;
  /**
   * Disabilita mini mappa
   */
  hideGeoNote(): void;
  /**
   * Abilita coordinate
   * @param {IMECoordinateOptions} options - opzioni relative alla barra delle geonote
   */
  showCoordinate(options?: IMECoordinateOptions): void;
  /**
   * Disabilita mini mappa
   */
  hideCoordinate(): void;

  /**
   * Abilita File loader
   * @param {IMEFileLoaderOptions} options - opzioni relative al controllo
   */
  showFileLoader(options?: IMEFileLoaderOptions): void;
  /**
   * Disabilita File loader
   */
  hideFileLoader(): void;

  /**
   * Abilita la scala grafica
   * @param {IMEScaleOptions} options - opzioni relative alla barra delle geonote
   */
  showScale(options?: IMEScaleOptions): void;
  /**
   * Disabilita mini mappa
   */
  hideScale(): void;
  /**
   * Dispose mappa
   */
  dispose(): void;
  private _onMapRenderClick(e);
  private _onMapRenderPushPinChanged(pushPin);
  private _onMapRenderZoomLevelChanged(zoomLevel);
  private _getLegenda(callbackResponse);
  private _locate(layerName, whereCond, options?, callbackResponse?);
  private _locateCoord(coord, zoomLevel);
  private _schedaOggettoByPoint(coord, options?, callbackResponse?);
  private _schedaOggettoByCond(cond, livello, callbackResponse?);
  private _geoFinder(query, callbackResponse?);
  private _reverseGeoFinder(coord, callbackResponse?);
  private _setHeartBeat();
  private _setDpi(value);
  private _setPoint(pushPin, options?);
  private _removePoints();
  private _locatePoint(id);
  private _removePoint(id);
  private _showLayer(layerName, options?);
  private _hideLayer(layerName, provider?);
  private _setOpacity(layerName, opacity);
  private _showMiniMap(options?);
  private _hideMiniMap();
  private _showLegend(options?);
  private _hideLegend();
  private _showNavigation(options?);
  private _hideNavigation();
  private _showGPS(options?);
  private _hideGPS();
  private _showGeoNote(options?);
  private _hideGeoNote();
  private _showCoordinate(options?);
  private _hideCoordinate();
  private _showFileLoader(options?);
  private _hideFileLoader();
  private _showScale(options?);
  private _hideScale();
  private _verifyResponseData<T>(r);
  private _setCartografieSfondo();
  private _getCartografieProgetto(idIMELayer);
  private _getLayerByNameAndProvider(name, provider?);
  private _buildLegenda();
  private loading();
}
declare class IgisMapUtilities {
  static getInsielTileSourcesIntersected(
    layers: IMELayer[],
    coord: Coordinate,
    map: IgisMapEmbedded.IgisMapRender
  ): IMELayer[];
  static coverZoom(zoomRange: ZoomRange, zoomLevel: number): boolean;
}
/**
 * Risposta Callback asincrona generalizzata
 * @class
 */
declare class CallbackResponse {
  callback: any;
  scope: any;
  private _eventNotification;
  private _caller;
  defaultSuccessMessage: string;
  defaultErrorMessage: string;
  /**
   * Rappresenta la risposta con callback
   * @constructor
   */
  constructor(caller: any, callback: any, scope: any, eventNotification?: any);
  /**
   * Callback delle chiamate asincrone - success
   * @private
   * @param {object} value - dato della risposta
   * @param {string} message - info
   * @param {function} [callback] - funzione di callback
   * @param {object} [scope] - contesto della callback
   */
  success(value: any, message?: string): void;
  /**
   * Callback delle chiamate asincrone - error
   * @private
   * @param {object} value - dato della risposta
   * @param {string} message - notifica d'errore
   * @param {function} [callback] - funzione di callback
   * @param {object} [scope] - contesto della callback
   */
  error(value: any, message?: string): void;
  private _notifyError(message);
  private _notifySuccess(message);
}
declare class Load {
  static loadCSS(url: any, callback?: any, scope?: any): void;
  static loadJS(url: any, callback?: any, scope?: any): void;
  static loadJQuery(protocol: any, callback?: any, scope?: any): void;
}
declare function getTicket(): number;
declare function getTime(): number;
declare function sleep(ms: any): void;
declare function getPPI(): number;
declare function isIE8(): boolean;
declare function hashCode(str: any): any;
declare class Log {
  static error(msg: any, func?: any): void;
  static warn(msg: any, func?: any): void;
  static info(msg: any, func?: any): void;
}

declare class Draw {
  control: any;
  resetActions(): void;
  onLayerClick: IgisMapEvent;

  show(options: any): void;
  hide(): void;

  getDrawItems(): any;
  getControlItems(): any;

  add(geojson: any): void;
  addPoints(geojson: any): void;
  addRectangle(
    id: string,
    corner1: Coordinate,
    corner2: Coordinate,
    properties: any
  ): void;
  getBounds(geojson: any): LocationRect;
  remove(id: string): void;
  removeAll(): void;
  updateStyle(id: string, icon: any);
  position(id: string): void;
  popup(obj: any, content: any): void;
  closePopup(): void;
  addElevation(id: string, options: IMEElevationOptions): void;
  removeElevation(id: string): void;

  polygon(id: string, properties: any, callback: any, scope: any): void;
  polyline(id: string, properties, callback: any, scope: any): void;
  circle(id: string, properties, callback: any, scope: any): void;
  rectangle(id: string, properties, callback: any, scope: any): void;
  point(id: string, properties, callback: any, scope: any): void;
  text(id: string, properties, callback: any, scope: any): void;
  circleToPolygon(center: Coordinate, mRadius: number, vertices: number): void;
}
