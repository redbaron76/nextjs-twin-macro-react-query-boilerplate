import create, { SetState, GetState } from "zustand";
import { browserPersist } from ".";
import { IAppState } from "types/app";

export const useAppStore = create<IAppState>(
  browserPersist(
    {
      key: "appState",
      allowlist: ["sidebarOpen"],
      denylist: [],
    },
    (set: SetState<IAppState>, get: GetState<IAppState>) => ({
      // flags
      navbarOpen: false,
      sidebarOpen: false,
      // search
      searchText: "",
      // ACTION
      toggleSidebar: () => {
        const { sidebarOpen } = get();
        set({
          navbarOpen: false,
          sidebarOpen: !sidebarOpen,
        });
      },
      setApp: async (key, value) => {
        set({
          [key]: value,
        });
      },
    })
  )
);
