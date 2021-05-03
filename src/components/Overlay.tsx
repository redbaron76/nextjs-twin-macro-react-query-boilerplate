import React from "react";
import tw, { styled } from "twin.macro";

interface IOverlay {
  show: boolean;
  onClick: () => void;
}

const StyledOverlay = styled.div<IOverlay>((props) => [
  tw`
    absolute w-screen h-screen z-10 bg-black
    transition-all duration-200 opacity-0
    transform origin-right ease-in-out translate-x-full
  `,
  props.show && tw`opacity-30 translate-x-0`,
]);

const Overlay: React.FC<IOverlay> = ({ show, onClick }) => {
  return <StyledOverlay show={show} onClick={onClick} />;
};

export default Overlay;
