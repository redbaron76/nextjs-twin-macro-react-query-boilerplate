import React from "react";
import "twin.macro";

import { useAppStore } from "src/stores/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Ahref from "src/components/Ahref";

const SidebarMenu: React.FC = () => {
  const toggleSidebar = useAppStore((store) => store.toggleSidebar);
  return (
    <div tw="min-h-full flex flex-col justify-between">
      <ul tw="space-y-3">
        <li tw="border-b-2 border-gray-400 pt-2 pb-5">
          <Ahref to="/" toggle={toggleSidebar}>
            <div tw="flex items-center">
              <FontAwesomeIcon icon={faStar} tw="w-4" />
              <span tw="pl-2 uppercase font-semibold">Home Page</span>
            </div>
          </Ahref>
        </li>
        {Array.from(Array(3).keys()).map((key) => (
          <li tw="border-b-2 border-gray-400 pt-2 pb-5" key={"id_" + key}>
            <Ahref to={`/page-${key + 1}`} toggle={toggleSidebar}>
              <div tw="flex items-center">
                <FontAwesomeIcon icon={faStar} tw="w-4" />
                <span tw="pl-2 uppercase font-semibold">
                  Link pagina {key + 1}
                </span>
              </div>
            </Ahref>
          </li>
        ))}
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="546.066"
        height="146.571"
        viewBox="0 0 546.066 146.571"
        tw="w-full h-auto fill-current text-gray-400"
      >
        <g transform="translate(-1501.936 19.263)">
          <path
            d="M246.21,65.17V77.61H210.67V92.03h32.61v11.5H210.67v16.49h36.29v12.44H195.88V65.17Z"
            transform="translate(1496.6 -24.49)"
          />
          <path
            d="M300.8,209.24a15.64,15.64,0,0,1,2.35-7.83,16,16,0,0,1,5.28-5,23.11,23.11,0,0,1,7.21-2.69,41.329,41.329,0,0,1,8.06-.8,55.415,55.415,0,0,1,7.44.52,22.69,22.69,0,0,1,6.88,2,13.46,13.46,0,0,1,5.09,4.19,11.71,11.71,0,0,1,2,7.12V232.1a51.072,51.072,0,0,0,.38,6.31,11.43,11.43,0,0,0,1.32,4.53H333.22a18.711,18.711,0,0,1-.61-2.31,21.327,21.327,0,0,1-.34-2.4,17.5,17.5,0,0,1-7.53,4.61,30.282,30.282,0,0,1-8.86,1.32,23.78,23.78,0,0,1-6.51-.85,14.751,14.751,0,0,1-5.27-2.63,12.38,12.38,0,0,1-3.54-4.53,15.26,15.26,0,0,1-1.27-6.5,14.11,14.11,0,0,1,1.46-6.83,12.2,12.2,0,0,1,3.77-4.29,17,17,0,0,1,5.28-2.41,58.9,58.9,0,0,1,6-1.27q3-.46,5.94-.75a35.2,35.2,0,0,0,5.18-.85,9.14,9.14,0,0,0,3.59-1.65,3.64,3.64,0,0,0,1.22-3.16A7.13,7.13,0,0,0,331,205a5.2,5.2,0,0,0-1.88-2,7.55,7.55,0,0,0-2.73-.94,22.128,22.128,0,0,0-3.35-.23,10.17,10.17,0,0,0-6.22,1.69q-2.26,1.69-2.64,5.66Zm30.91,9.89a5.87,5.87,0,0,1-2.12,1.18,22.62,22.62,0,0,1-2.73.71c-1,.19-2,.34-3.07.47s-2.13.28-3.2.47a24.823,24.823,0,0,0-3,.75,8.78,8.78,0,0,0-2.54,1.28,6,6,0,0,0-1.75,2,6.54,6.54,0,0,0-.66,3.11,6.3,6.3,0,0,0,.66,3,5.05,5.05,0,0,0,1.79,1.93,7.71,7.71,0,0,0,2.64,1,16.739,16.739,0,0,0,3.11.28A11.85,11.85,0,0,0,327,234a8.87,8.87,0,0,0,3.2-3.15,10,10,0,0,0,1.27-3.73,25,25,0,0,0,.24-3Z"
            transform="translate(1447 -135)"
          />
          <path
            d="M397.73,246.56a16.47,16.47,0,0,1-3.44,7,20.37,20.37,0,0,1-7.63,5.51c-3.34,1.51-7.79,2.27-13.39,2.27a31,31,0,0,1-7.3-.9,23.221,23.221,0,0,1-6.79-2.78,16.71,16.71,0,0,1-5.09-4.85,14,14,0,0,1-2.3-7.12h13.28a7.65,7.65,0,0,0,3.68,5.23,13.24,13.24,0,0,0,6.31,1.46q5.65,0,8.25-3.39a13.31,13.31,0,0,0,2.5-8.58V234h-.19a13.29,13.29,0,0,1-6.17,5.71,20.1,20.1,0,0,1-8.44,1.83,21.23,21.23,0,0,1-9.42-1.93,18,18,0,0,1-6.51-5.28,22,22,0,0,1-3.72-7.82,36.838,36.838,0,0,1-1.18-9.47,30.491,30.491,0,0,1,1.37-9.1,23.7,23.7,0,0,1,4-7.72,19.4,19.4,0,0,1,6.56-5.33,19.62,19.62,0,0,1,9-2,18.88,18.88,0,0,1,8.43,1.79,14.66,14.66,0,0,1,6.08,6h.19v-6.5h12.72V239.8a32.92,32.92,0,0,1-.8,6.69M379.4,230.35a10.51,10.51,0,0,0,3.58-3A13.25,13.25,0,0,0,385.1,223a17.79,17.79,0,0,0,.71-5,27.409,27.409,0,0,0-.57-5.7,14.08,14.08,0,0,0-1.88-4.76,9.86,9.86,0,0,0-3.49-3.3A11.1,11.1,0,0,0,374.4,203a9.74,9.74,0,0,0-4.85,1.13,10.119,10.119,0,0,0-3.39,3.06,13,13,0,0,0-2,4.43,21.841,21.841,0,0,0-.61,5.23,27,27,0,0,0,.51,5.23,14.2,14.2,0,0,0,1.8,4.67,10.4,10.4,0,0,0,3.34,3.39,9.47,9.47,0,0,0,5.18,1.32,10.71,10.71,0,0,0,5-1.13"
            transform="translate(1447 -135)"
          />
          <rect
            width="13.38"
            height="67.29"
            transform="translate(1852.89 40.68)"
          />
          <path
            d="M440.38,231.29c2,2,4.89,2.92,8.67,2.92a11.93,11.93,0,0,0,7-2,8.38,8.38,0,0,0,3.58-4.29h11.78q-2.82,8.76-8.67,12.53a25.46,25.46,0,0,1-14.14,3.77,27.91,27.91,0,0,1-10.36-1.83,21.46,21.46,0,0,1-7.82-5.24,23.43,23.43,0,0,1-4.95-8.1,29.5,29.5,0,0,1-1.75-10.37,28.56,28.56,0,0,1,1.79-10.18,23.57,23.57,0,0,1,13-13.57,25.25,25.25,0,0,1,10.13-2,23.08,23.08,0,0,1,10.84,2.41,21.62,21.62,0,0,1,7.59,6.45,26.49,26.49,0,0,1,4.29,9.24,34.419,34.419,0,0,1,.94,10.84H437.08c.19,4.33,1.28,7.47,3.3,9.42m15.12-25.63c-1.6-1.76-4-2.64-7.3-2.64a11.71,11.71,0,0,0-5.33,1.08,10.13,10.13,0,0,0-3.39,2.69,9.75,9.75,0,0,0-1.79,3.39,14.83,14.83,0,0,0-.61,3.2h21.77a15.49,15.49,0,0,0-3.35-7.72"
            transform="translate(1447 -135)"
          />
          <rect
            width="14.8"
            height="14.51"
            transform="translate(1923.95 93.46)"
          />
          <path
            d="M508.52,199.34V243h-5.94V199.34h-8.3v-5h8.3v-4.43a32.181,32.181,0,0,1,.47-5.75,11.2,11.2,0,0,1,1.79-4.53,8.66,8.66,0,0,1,3.63-2.92,14.47,14.47,0,0,1,5.89-1,21.231,21.231,0,0,1,2.45.09c.76.09,1.6.16,2.54.28v5.09l-2.26-.33a16,16,0,0,0-2.07-.14,7.71,7.71,0,0,0-3.77.75,4.6,4.6,0,0,0-1.93,2,7.72,7.72,0,0,0-.71,3c-.06,1.13-.09,2.35-.09,3.67v4.25h9.61v5Z"
            transform="translate(1447 -135)"
          />
          <path
            d="M471.55,83.83l15.26,42.7H487l15.08-42.7h6.13l-18.19,48.63H483.7L464.95,83.83Z"
            transform="translate(1496.6 -24.49)"
          />
          <path
            d="M599.79,248.73a18.78,18.78,0,0,1-3.72,7.35,16.28,16.28,0,0,1-6.64,4.62,27.879,27.879,0,0,1-10,1.6,30.059,30.059,0,0,1-7.17-.85,20.54,20.54,0,0,1-6.26-2.64,15.48,15.48,0,0,1-4.62-4.57,13.59,13.59,0,0,1-2.12-6.64h5.94a10.53,10.53,0,0,0,1.83,4.57,11.13,11.13,0,0,0,3.3,3,15,15,0,0,0,4.29,1.65,22.64,22.64,0,0,0,4.81.51q8.29,0,12-4.71T595,239v-6.6h-.19a17.3,17.3,0,0,1-6.07,7.26,16.28,16.28,0,0,1-9.38,2.73,23.46,23.46,0,0,1-10-1.93,18.64,18.64,0,0,1-6.84-5.32,21.85,21.85,0,0,1-3.91-8,37.85,37.85,0,0,1-1.22-9.75,30.241,30.241,0,0,1,1.46-9.48,23.521,23.521,0,0,1,4.24-7.82,19.8,19.8,0,0,1,6.88-5.28,21.87,21.87,0,0,1,9.38-1.93,16.909,16.909,0,0,1,5.14.76,16.16,16.16,0,0,1,4.38,2.12,19,19,0,0,1,3.53,3.15,14.261,14.261,0,0,1,2.4,3.77h.2V194.3h6V239a36.852,36.852,0,0,1-1.18,9.71m-13.62-13a15.359,15.359,0,0,0,4.9-4.34,19.1,19.1,0,0,0,3-6.17,26.061,26.061,0,0,0,1-7.16,31.34,31.34,0,0,0-.84-7.17,20.809,20.809,0,0,0-2.74-6.5,14.749,14.749,0,0,0-4.85-4.71,13.77,13.77,0,0,0-7.21-1.79,14.29,14.29,0,0,0-7.26,1.74,15.39,15.39,0,0,0-5,4.57,19.25,19.25,0,0,0-2.88,6.46,30.6,30.6,0,0,0-.9,7.4,27.22,27.22,0,0,0,.95,7.16,18.419,18.419,0,0,0,2.92,6.17,15.161,15.161,0,0,0,5,4.34,14.75,14.75,0,0,0,7.17,1.65,13.54,13.54,0,0,0,6.78-1.65"
            transform="translate(1447 -135)"
          />
          <path
            d="M57.85,134.08a60.65,60.65,0,0,0,.63,39c32.9-33.83,83.77-42.88,120.61-38.78,34.23,3,56.93,16.79,60.88,18.57-1.22-.29-2.44-.58-3.66-.84-9.74-2-38.16-6.71-68.75,1.5-30.43,7.44-63,27.78-77.58,58.05.28-.24,22.77,12.64,34.87,16.9,1.94-5,6-23.24,26.17-41.74C170.69,169,206.54,151,259.8,164.56l13.26,4.64c-64.41-65.46-169.55-62.53-215.21-35.12"
            transform="translate(1447 -135)"
          />
        </g>
      </svg>
    </div>
  );
};

export default SidebarMenu;
