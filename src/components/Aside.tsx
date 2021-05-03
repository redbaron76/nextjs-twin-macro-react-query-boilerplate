import React from "react";
import tw from "twin.macro";

const StyledAside = tw.aside`
  absolute
  top-0
  left-0
  p-4
  overflow-auto
  bg-gray-700
  text-gray-400
  h-full
  w-2/3
  md:(w-1/3)
`;

const Aside: React.FC = ({ children }) => {
  return <StyledAside>{children}</StyledAside>;
};

export default Aside;
