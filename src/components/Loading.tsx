import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface ILoading {
  label?: string;
  fixed?: boolean;
  inline?: boolean;
}

const StyledLoading = styled.div<ILoading>(({ fixed }) => [
  tw`
    flex flex-col justify-center items-center
    bg-white
  `,
  fixed && tw`fixed w-screen h-screen`,
]);

const StyledWrapper = styled.div<ILoading>(({ inline }) => [
  tw`
    flex flex-col justify-center items-center
  `,
  inline && tw`flex-row space-x-2 text-base`,
]);

const StyledSpan = styled.span<Pick<ILoading, "inline">>(({ inline }) => [
  tw`
    lowercase
    text-gray-500
    pt-2
  `,
  inline && tw`pt-0`,
]);

const StyledWrapperIcon = styled.div<Pick<ILoading, "inline">>(({ inline }) => [
  tw`w-10`,
  inline && tw`w-6`,
]);

const Loading: React.FC<ILoading> = ({ label, inline, fixed }) => {
  return (
    <StyledLoading fixed={fixed}>
      <StyledWrapper inline={inline}>
        <StyledWrapperIcon inline={inline}>
          <FontAwesomeIcon
            icon={faCircleNotch}
            tw="animate-spin text-green-500"
            size="3x"
          />
        </StyledWrapperIcon>
        {label && <StyledSpan inline={inline}>{label}</StyledSpan>}
      </StyledWrapper>
    </StyledLoading>
  );
};

export default Loading;
