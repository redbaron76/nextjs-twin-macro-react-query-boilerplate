import { State } from "zustand";

export type AppProps = {
  // flags
  navbarOpen: boolean;
  sidebarOpen: boolean;
  // search
  searchText: string;
};

export interface IAppState extends AppProps, State {
  toggleSidebar: () => void;
  setApp: (key: keyof AppProps, value: AppProps[typeof key]) => Promise<any>;
}
