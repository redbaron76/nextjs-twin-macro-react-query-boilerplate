import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import "twin.macro";

import { useGeoStore } from "src/stores/geo";
import { useMapStore } from "src/stores/map";

import Navbar from "src/components/Navbar";
import Loading from "src/components/Loading";
import ErrorMessage from "src/components/ErrorMessage";

const Home: React.FC = () => {
  const [check, setCheck] = useState<number>(new Date().getTime());

  const [latitude, longitude, error, watchPosition] = useGeoStore((store) => [
    store.latitude,
    store.longitude,
    store.error,
    store.watchPosition,
  ]);

  const [config, setMap, setMarker, updateMarker] = useMapStore((store) => [
    store.config,
    store.setMap,
    store.setMarker,
    store.updateMarker,
  ]);

  const EagleMapWithNoSSR = useMemo(
    () =>
      dynamic(() => import("src/components/EagleMap"), {
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    watchPosition().getCurrentPosition();
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
    <div tw="relative">
      <Navbar />
      <div tw="w-screen h-screen">
        <EagleMapWithNoSSR
          // config={configuration}
          config={{
            ...config,
            center: { lat: latitude, lng: longitude },
          }}
          onMapCreate={(map) => map && setMap("map", map)}
          onMapLoad={(resp) => {
            setMarker(new Date().getTime().toString(), latitude, longitude, {
              tooltip: "La mia posizione",
              movable: true,
            })
              .addListener<PushPin>(
                "pushPinChanged",
                ({ coord: { lat, lng } }) =>
                  updateMarker(lat, lng, {
                    tooltip: `Posizione aggiornata: lat(${lat} lng(${lng}))`,
                  })
              )
              .toggleControls(["scale", "navigation"])
              .getLegend();
          }}
        />
      </div>
    </div>
  );
};

export default Home;
