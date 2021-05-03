import React from "react";
import tw, { styled } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

interface IErrorMessage {
  label?: string;
  fixed?: boolean;
  inline?: boolean;
  onRetry?: () => void;
}

const StyledError = styled.div<IErrorMessage>(({ fixed }) => [
  tw`
    flex flex-col justify-center items-center
    bg-white
  `,
  fixed && tw`fixed w-screen h-screen`,
]);

const StyledWrapper = styled.div<IErrorMessage>(({ inline, fixed }) => [
  tw`
    flex flex-col justify-center items-center w-4/5
  `,
  inline && tw`flex-row space-x-2 text-base`,
]);

const StyledSpan = styled.span<Pick<IErrorMessage, "inline">>(({ inline }) => [
  tw`
    lowercase
    text-gray-500
    text-center
    pt-2
    
  `,
  inline && tw`pt-0`,
]);

const StyledWrapperIcon = styled.div<Pick<IErrorMessage, "inline">>(
  ({ inline }) => [tw`w-10`, inline && tw`w-6`]
);

const ErrorMessage: React.FC<IErrorMessage> = ({
  label,
  inline,
  fixed,
  onRetry,
}) => {
  return (
    <StyledError fixed={fixed}>
      <StyledWrapper inline={inline}>
        <StyledWrapperIcon inline={inline}>
          <FontAwesomeIcon icon={faExclamationTriangle} tw="text-yellow-500" />
        </StyledWrapperIcon>
        {label && <StyledSpan inline={inline}>{label}</StyledSpan>}
        {onRetry && typeof onRetry === "function" && (
          <div tw="mt-8">
            <Button onClick={onRetry}>Riprova</Button>
          </div>
        )}
      </StyledWrapper>
    </StyledError>
  );
};

export default ErrorMessage;
