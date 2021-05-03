import React, { MouseEvent, AnchorHTMLAttributes } from "react";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

interface ILink {
  to: string;
  toggle?: () => void;
}

interface IAlink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  selected: boolean;
}

const Alink = styled.a<IAlink>(({ selected }) => [selected && tw`text-white`]);

const Ahref: React.FC<ILink> = ({ children, to, toggle }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (typeof toggle === "function") toggle();
    router.push(to);
  };

  return (
    <Alink href={to} onClick={handleClick} selected={router.asPath === to}>
      {children}
    </Alink>
  );
};

export default Ahref;
