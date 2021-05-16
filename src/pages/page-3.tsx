import React, { useState, useEffect } from "react";
import "twin.macro";

import Loading from "components/Loading";
import Navbar from "components/Navbar";

const Page: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2 * 1000);
  }, []);

  if (!show) return <Loading label="Loading page..." fixed />;

  return (
    <div tw="relative">
      <Navbar />
      <div tw="flex flex-col justify-center items-center w-screen h-screen">
        <span tw="font-bold text-xl text-gray-500">Page 3</span>
      </div>
    </div>
  );
};

export default Page;
