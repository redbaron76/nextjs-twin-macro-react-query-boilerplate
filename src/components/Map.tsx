import React, { useState, useEffect } from "react";
import "twin.macro";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeoStore } from "src/stores/geo";

import Loading from "src/components/Loading";
import ErrorMessage from "src/components/ErrorMessage";

/* const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  // iconRetinaUrl: "/images/marker-icon-2x.png",
}); */

const Map: React.FC = () => {
  const [
    latitude,
    longitude,
    error,
    watchPosition,
    getCurrentPosition,
    setMarker,
    setGeo,
  ] = useGeoStore((store) => [
    store.latitude,
    store.longitude,
    store.error,
    store.watchPosition,
    store.getCurrentPosition,
    store.setMarker,
    store.setGeo,
  ]);

  // const [pos, setPos] = useState<GeoCoords>();
  const [check, setCheck] = useState<number>(new Date().getTime());

  useEffect(() => {
    watchPosition();
    getCurrentPosition();
  }, [check]);

  if (error) {
    return (
      <ErrorMessage
        label={error.message}
        onRetry={() => setCheck(new Date().getTime())}
        fixed
      />
    );
  }

  if (!latitude || !longitude) {
    return <Loading label="Determino posizione..." fixed />;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={14}
      tap={false}
      zoomControl={false}
      scrollWheelZoom={true}
      tw="w-screen h-screen"
      whenCreated={(map) => {
        setGeo("map", map);
        setMarker([latitude, longitude]);
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker
        position={[latitude, longitude]}
        // icon={icon}
      >
        <Popup>Esempio di popup attivato dal click sul Marker.</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
