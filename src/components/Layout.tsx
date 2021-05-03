import React from "react";
import "twin.macro";

import Main from "./Main";
import Aside from "./Aside";
import SidebarMenu from "./SidebarMenu";

const Layout: React.FC = ({ children }) => {
  return (
    <div tw="overflow-hidden">
      <Aside>
        <SidebarMenu />
      </Aside>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
