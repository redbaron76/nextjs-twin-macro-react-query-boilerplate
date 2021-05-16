import React from "react";
import tw, { styled } from "twin.macro";

import { useAppStore } from "stores/app";

import Overlay from "./Overlay";

interface IMain {
  isOpen?: boolean;
}

const StyledMain = styled.main<IMain>((props) => [
  tw`
    relative
    w-screen
    min-h-screen
    transform
    ease-in-out
    transition-all
    duration-200
    bg-gray-200
  `,
  props.isOpen &&
    tw`
    h-screen
    translate-x-2/3
    overflow-y-hidden
    md:(translate-x-1/3)
  `,
]);

const Main: React.FC<IMain> = ({ children }) => {
  const [sidebarOpen, toggleSidebar] = useAppStore((store) => [
    store.sidebarOpen,
    store.toggleSidebar,
  ]);

  return (
    <StyledMain isOpen={sidebarOpen}>
      <Overlay show={sidebarOpen} onClick={toggleSidebar} />
      <div tw="relative w-screen min-h-screen">{children}</div>
    </StyledMain>
  );
};

export default Main;
