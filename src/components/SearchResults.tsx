import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useAppStore } from "src/stores/app";
import { useMapStore } from "src/stores/map";
import { GeoResult } from "src/types/geo";
import "twin.macro";

import { geoSearchLocation } from "src/app/api";

import Loading from "src/components/Loading";
import Legend from "./Legend";

const SearchResults: React.FC = () => {
  const setMarker = useMapStore((store) => store.setMarker);
  const [searchText, navbarOpen, setApp] = useAppStore((store) => [
    store.searchText,
    store.navbarOpen,
    store.setApp,
  ]);

  const { data: searchResults, isLoading: searchLoading } = useQuery<
    GeoResult[]
  >(["results", searchText], geoSearchLocation, {
    enabled: !!searchText && searchText.length >= 3,
  });

  useEffect(() => {
    // trigger navbarOpen on change
    setApp("navbarOpen", searchLoading || !!searchResults);
  }, [searchLoading, searchResults]);

  if (searchLoading) {
    return (
      <div tw="flex flex-col items-center justify-center h-full">
        <Loading label="Cerco risultati..." inline />
      </div>
    );
  }

  if (navbarOpen && !searchLoading && !searchResults) {
    return <Legend />;
  }

  if (!searchResults) return null;

  return (
    <div tw="p-4 overflow-y-auto">
      <h6 tw="pb-4 text-gray-400 font-semibold italic">
        Ho trovato: {searchResults?.length}{" "}
        {`risultat${searchResults?.length === 1 ? "o" : "i"}`}
      </h6>
      <ul tw="ml-4 list-disc space-y-2">
        {searchResults?.map((res, i) => {
          return (
            <li
              key={"res_" + i}
              tw="p-2 rounded-xl cursor-pointer hover:(bg-yellow-100)"
              onClick={() => {
                setApp("navbarOpen", false);
                setMarker(res.label.split(" ").join("_"), res.y, res.x, {
                  tooltip: res.label,
                });
              }}
            >
              {res.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
