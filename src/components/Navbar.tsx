import React from "react";
import tw, { styled } from "twin.macro";

import { useAppStore } from "src/stores/app";
import { useGeoStore } from "src/stores/geo";

import Searchbar from "src/components/Searchbar";
import SearchResults from "src/components/SearchResults";
import SidebarToggler from "src/components/SidebarToggler";
import { isBrowser } from "src/app/config";

interface ISearchbarWrapper {
  open: boolean;
}

export const NavbarWrapper = tw.div`
  absolute
  top-2
  left-2
  right-2
  flex
  flex-row
  z-20
`;

const MenuWrapper = styled.div<ISearchbarWrapper>(({ open }) => [
  tw`
    relative
    overflow-hidden
    flex flex-col
    bg-white
    rounded-3xl
    shadow-2xl
    ml-2
    pl-4 pr-1
    ease-in-out
    transition-height
    duration-200
    w-full
    h-12
    md:(h-14)
  `,
  open && tw`h-navbar md:(h-navbar)`,
]);

const Navbar: React.FC = () => {
  const [lat, lng, setMarker] = useGeoStore((store) => [
    store.latitude,
    store.longitude,
    store.setMarker,
  ]);
  const [
    searchText,
    sidebarOpen,
    navbarOpen,
    toggleSidebar,
    setApp,
  ] = useAppStore((store) => [
    store.searchText,
    store.sidebarOpen,
    store.navbarOpen,
    store.toggleSidebar,
    store.setApp,
  ]);

  return (
    <NavbarWrapper>
      <SidebarToggler onClick={toggleSidebar} open={sidebarOpen} />
      <MenuWrapper open={navbarOpen}>
        <Searchbar
          open={navbarOpen}
          onClick={() => {
            // close && reset && back to origin
            if (navbarOpen && !!searchText) {
              setApp("searchText", "");
              setApp("navbarOpen", false);
              setMarker([lat, lng], 14);
            }

            // re-open results
            if (!!searchText && !navbarOpen) setApp("navbarOpen", true);

            // open loading Servizi
            if (!searchText && !navbarOpen) setApp("navbarOpen", true);

            // close
            if (!searchText && navbarOpen) setApp("navbarOpen", false);
          }}
        />
        <SearchResults />
      </MenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
