import React, { useState, useEffect } from "react";
import "twin.macro";

import Loading from "src/components/Loading";
import Navbar from "src/components/Navbar";

const Page: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2 * 1000);
  }, []);

  if (!show) return <Loading label="Carico la pagina..." fixed />;

  return (
    <div tw="relative">
      <Navbar />
      <div tw="flex flex-col justify-center items-center w-screen h-screen">
        <span tw="font-bold text-xl text-gray-500">Pagina 1</span>
      </div>
    </div>
  );
};

export default Page;
