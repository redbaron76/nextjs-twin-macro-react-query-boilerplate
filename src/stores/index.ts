import { isBrowser } from "src/app/config";
import { configurePersist } from "zustand-persist";
import { State, SetState, StateCreator } from "zustand";
import { NonFunctionPropertyNames } from "zustand-persist/lib/reconcile";

interface PersistOption<S extends State> {
  key: string;
  denylist?: NonFunctionPropertyNames<S>[];
  allowlist?: NonFunctionPropertyNames<S>[];
}

export const { persist, purge } = configurePersist({
  storage: isBrowser ? localStorage : null,
  rootKey: "eagleapp",
});

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
