import React, { /* useRef, useState, */ useEffect } from "react";
import tw, { styled } from "twin.macro";
// import { useSwipe } from "use-swipe-hook";

import { useAppStore } from "src/stores/app";

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
  // const swipeRef = useRef<HTMLDivElement>(null);
  // const [open, setOpen] = useState<boolean>(false);
  const [sidebarOpen, toggleSidebar] = useAppStore((store) => [
    store.sidebarOpen,
    store.toggleSidebar,
  ]);

  // const direction = useSwipe({ ref: swipeRef, thresholdPX: 20 });

  /* useEffect(() => {
    if (!open && direction === "right") {
      document && document.body.classList.add("menu-is-open");
      setOpen(true);
    }
    if (open && direction === "left") {
      document && document.body.classList.remove("menu-is-open");
      setOpen(false);
    }
  }, [direction]); */

  /* useEffect(() => {
    if (sidebarOpen) {
      document && document.body.classList.add("menu-is-open");
    } else {
      document && document.body.classList.remove("menu-is-open");
    }
  }, [sidebarOpen]); */

  return (
    <StyledMain isOpen={sidebarOpen}>
      <Overlay show={sidebarOpen} onClick={toggleSidebar} />
      <div tw="relative w-screen min-h-screen">{children}</div>
    </StyledMain>
  );
};

export default Main;
