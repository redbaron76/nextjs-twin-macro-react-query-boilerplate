import React from "react";
import Head from "next/head";
import { SITE_DESCRIPTION } from "app/config";

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="description" content={SITE_DESCRIPTION} />
    </Head>
  );
};

export default Header;
