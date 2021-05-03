import React, { FormEvent } from "react";
import tw, { styled } from "twin.macro";

import { useAppStore } from "src/stores/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import Button from "src/components/Button";

interface ISearchbar {
  open: boolean;
  onClick: () => void;
}

const SearchbarWrapper = styled.div(() => [
  tw`flex flex-row justify-between items-center`,
]);

const Searchbar: React.FC<ISearchbar> = ({ open, onClick }) => {
  const [searchText, setApp] = useAppStore((store) => [
    store.searchText,
    store.setApp,
  ]);

  const icon = (() => {
    switch (true) {
      case open && !!searchText:
        return faTimes;
      case !!searchText:
        return faSearch;
      default:
        return faLayerGroup;
    }
  })();

  return (
    <SearchbarWrapper>
      <div tw="flex-1">
        <input
          type="text"
          value={searchText}
          tw="h-10 placeholder-gray-400 font-semibold italic text-xl text-gray-500 px-1 w-full"
          placeholder="Cosa stai cercando?"
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setApp("searchText", e.currentTarget.value);
          }}
          onFocus={() => {
            if (!!searchText) setApp("navbarOpen", true);
          }}
        />
      </div>
      <Button noBorder noPadding iconOnly onClick={onClick}>
        <FontAwesomeIcon icon={icon} tw="w-6" />
      </Button>
    </SearchbarWrapper>
  );
};

export default Searchbar;