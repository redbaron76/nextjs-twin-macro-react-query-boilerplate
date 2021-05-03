import React from "react";
import tw, { styled } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Button from "src/components/Button";

interface ISidebarToggler {
  open: boolean;
  onClick: () => void;
}

const Animation = styled.div<Pick<ISidebarToggler, "open">>(({ open }) => [
  tw`transform rotate-0 duration-200`,
  open && tw`rotate-90`,
]);

const SidebarToggler: React.FC<ISidebarToggler> = ({ open, onClick }) => {
  return (
    <Button purple iconOnly withShadow noBorder onClick={onClick}>
      <Animation open={open}>
        <FontAwesomeIcon icon={faBars} tw="w-6" />
      </Animation>
    </Button>
  );
};

export default SidebarToggler;
