import React from "react";
import "twin.macro";

import Navbar from "components/Navbar";

const Home: React.FC = () => {
  return (
    <div tw="relative">
      <Navbar />
      <div tw="flex flex-col justify-center items-center w-screen h-screen">
        <span tw="font-bold text-xl text-gray-500">Home Page</span>
      </div>
    </div>
  );
};

export default Home;
