import { includes, sortBy } from "lodash";
import React from "react";
import { useMapStore } from "src/stores/map";
import tw from "twin.macro";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const Label = tw.h3`
  font-semibold
  italic
  text-xl
  text-gray-400
  py-3
`;

interface ILegend {}

const Legend: React.FC<ILegend> = () => {
  const [
    legend,
    projectLayer,
    backgroundLayer,
    changeLayer,
    toggleLayer,
    getLegend,
  ] = useMapStore((store) => [
    store.legend,
    store.projectLayer,
    store.backgroundLayer,
    store.changeLayer,
    store.toggleLayer,
    store.getLegend,
  ]);

  if (!legend) {
    return (
      <div tw="flex flex-col items-center justify-center h-full">
        <Loading label="Carico i servizi..." inline />
      </div>
    );
  }

  if (legend.isError) {
    return <ErrorMessage label={legend.message} onRetry={getLegend} />;
  }

  const { CartografieProgetto: progetto, CartografieSfondo: sfondo } =
    legend.Legenda;

  return (
    <div tw="p-4 pt-0 overflow-y-auto space-y-2">
      <div>
        <Label>Tipo di mappa</Label>
        <ul tw="space-y-2">
          {sortBy<IMELayer>(sfondo, ["Title"]).map((t, i) => {
            return (
              <li key={`leg-${i}`}>
                <label htmlFor={t.Id} tw="space-x-2">
                  <input
                    type="radio"
                    id={t.Id}
                    checked={backgroundLayer === t.Id}
                    onChange={() => changeLayer(t.Id)}
                  />
                  <span>{t.Title}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Label>Servizi disponibili</Label>
        <ul tw="space-y-2">
          {sortBy<IMELayer>(progetto, ["Title"]).map((t, i) => {
            return (
              <li key={`leg-${i}`}>
                <label htmlFor={t.Id} tw="flex flex-row items-center space-x-2">
                  <input
                    type="checkbox"
                    id={t.Id}
                    checked={includes(projectLayer, t.Id)}
                    onChange={() => toggleLayer(t.Id)}
                  />
                  {t.UrlIcon && (
                    <img
                      src={t.UrlIcon}
                      tw="w-5 h-5 rounded border border-gray-100"
                    />
                  )}
                  <span>{t.Title}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Legend;
