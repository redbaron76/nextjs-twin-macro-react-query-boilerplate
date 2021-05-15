import React, { useEffect, useState } from "react";
import { EMAP_SRC } from "src/app/config";
import useScript from "src/hooks/useScript";
import "twin.macro";

interface IEagleMap {
  config: IgisMapConfiguration;
  onMapCreate?: (map: IgisMap) => void;
  onMapLoad?: (resp: any) => void;
}

const EagleMap: React.FC<IEagleMap> = ({ config, onMapLoad, onMapCreate }) => {
  const [map, setMap] = useState<IgisMap>(null);
  const status = useScript(EMAP_SRC);

  const init = () => {
    if (!map) {
      // instantiate new map
      const igisMap = new IgisMap("eaglemap", config, onMapLoad, {});
      // run callback if required in props
      if (typeof onMapCreate === "function") onMapCreate(igisMap);
      // set map instance to local state to avoid re-run
      setMap(igisMap);
    }
  };

  useEffect(() => {
    // init map when script loaded
    if (!map && status === "ready") init();
  }, [status, map]);

  return <div id="eaglemap" tw="w-screen h-screen"></div>;
};

export default EagleMap;
