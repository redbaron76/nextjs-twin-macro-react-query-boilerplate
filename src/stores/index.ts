import { isBrowser } from "app/config";
import { configurePersist } from "zustand-persist";
import { State, SetState, StateCreator } from "zustand";
import { NonFunctionPropertyNames } from "zustand-persist/lib/reconcile";
import { KeeperOption } from "zustand-persist/lib/keeper";

interface PersistOption<S extends State> {
  key: string;
  denylist?: NonFunctionPropertyNames<S>[];
  allowlist?: NonFunctionPropertyNames<S>[];
}

const configureOption = {
  storage: isBrowser ? localStorage : null,
  rootKey: "prenotazione",
} as KeeperOption;

export const { persist, purge } = configurePersist(configureOption);

export const browserPersist = <S extends State>(
  option: PersistOption<S>,
  fn: StateCreator<S, SetState<S>>
) => {
  if (isBrowser) {
    return persist(option, fn);
  } else {
    return fn;
  }
};
