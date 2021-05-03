import React from "react";
import dynamic from "next/dynamic";
import "twin.macro";

import Navbar from "src/components/Navbar";

const Home: React.FC = () => {
  const MapWithNoSSR = dynamic(() => import("src/components/Map"), {
    ssr: false,
  });

  return (
    <div tw="relative">
      <Navbar />
      <div tw="w-screen h-screen">
        <MapWithNoSSR />
      </div>
    </div>
  );
};

export default Home;
