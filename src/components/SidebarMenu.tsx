import React from "react";
import "twin.macro";

import { useAppStore } from "stores/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Ahref from "./Ahref";

const SidebarMenu: React.FC = () => {
  const toggleSidebar = useAppStore((store) => store.toggleSidebar);
  return (
    <div tw="min-h-full flex flex-col justify-between">
      <ul tw="space-y-3">
        <li tw="border-b-2 border-gray-400 pt-2 pb-5">
          <Ahref to="/" toggle={toggleSidebar}>
            <div tw="flex items-center">
              <FontAwesomeIcon icon={faStar} />
              <span tw="pl-2 uppercase font-semibold">Home Page</span>
            </div>
          </Ahref>
        </li>
        {Array.from(Array(3).keys()).map((key) => (
          <li tw="border-b-2 border-gray-400 pt-2 pb-5" key={"id_" + key}>
            <Ahref to={`/page-${key + 1}`} toggle={toggleSidebar}>
              <div tw="flex items-center">
                <FontAwesomeIcon icon={faStar} />
                <span tw="pl-2 uppercase font-semibold">
                  Link page {key + 1}
                </span>
              </div>
            </Ahref>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
