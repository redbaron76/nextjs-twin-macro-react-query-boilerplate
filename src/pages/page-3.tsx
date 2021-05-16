import React from "react";
import { useQuery } from "react-query";
import "twin.macro";

import { getVersion } from "app/api";
import { VersionData } from "./api/version";

import Loading from "components/Loading";
import Navbar from "components/Navbar";

const Page: React.FC = () => {
  const { data, isLoading } = useQuery<VersionData>("version-3", getVersion);

  if (isLoading) return <Loading label="Loading data..." fixed />;

  return (
    <div tw="relative">
      <Navbar />
      <div tw="flex flex-col justify-center items-center w-screen h-screen">
        <span tw="font-bold text-xl text-gray-500">Page 3</span>
        <span tw="font-normal text-base text-gray-500 mt-4">
          ({data?.version})
        </span>
      </div>
    </div>
  );
};

export default Page;
