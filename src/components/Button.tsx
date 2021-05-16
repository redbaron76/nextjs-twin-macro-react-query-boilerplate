import React from "react";
import tw, { css, styled } from "twin.macro";

interface IStyle {
  green?: boolean;
  purple?: boolean;
  iconOnly?: boolean;
  withShadow?: boolean;
  noBorder?: boolean;
  noPadding?: boolean;
}

const StyledButton = styled.button<IStyle>((props) => [
  tw`
    py-2 px-4
    rounded
    ring-2 ring-gray-300
    text-gray-500
    transition duration-200 ease-linear
    focus:outline-none
    hover:(text-gray-600 ring-gray-400)
  `,
  props.green &&
    tw`text-white bg-green-400 ring-gray-200 hover:(text-white bg-green-600)`,
  props.purple &&
    tw`text-white bg-pink-600 ring-white hover:(text-white bg-pink-700)`,
  props.iconOnly &&
    tw`outline-none flex flex-col items-center justify-center rounded-full w-12 h-12 md:(w-14 h-14)`,
  props.withShadow && tw`shadow-xl`,
  props.noBorder && tw`ring-0`,
  props.noPadding && tw`px-0 py-0`,
  css`
    & + button {
      ${tw`ml-2`}
    }
  `,
]);

interface IButton extends IStyle {
  onClick: () => void;
}

const Button: React.FC<IButton> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
