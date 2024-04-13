import React from "react";
import blue from "../images/blue.png";
import red from "../images/red.png";
import pencil from "../images/pencil.png";
import { Link } from "react-router-dom";

function Learning() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center ml-3">
        <img
          alt="alt"
          className="rounded-md bg-white p-1 border-2 border-white"
          width={40}
          height={40}
          src="https://cdn-icons-png.flaticon.com/256/5968/5968705.png"
        />
        <img width={70} height={70} className="" src={blue} alt="alt" />
      </div>
      <div className="w-3/5 font-black text-2xl ml-3 text-white">
        LEARN ENGLISH FROM ANYTHING AND ANYWHERE
      </div>
      <div className="flex justify-end items-end">
        <img width={70} height={70} className="mr-5" src={red} alt="alt" />
      </div>
      <div className="font-medium w-2/3 mt-8 mb-2 ml-3 text-white">
        You can now improve your English everywhere, learn your grammar and
        start talking to people.
      </div>
      <div className="flex justify-between items-start ml-3">
        <Link to="/learning">
          <div className="shadow flex items-center justify-center bg-blue-600 pl-5 pr-5 pt-3 pb-3 mt-5 rounded-full gap-3">
            <div className="font-semibold text-sm text-white">Next</div>
            <svg
              fill="white"
              height="11px"
              width="11px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 492.004 492.004"
            >
              <g>
                <g>
                  <path
                    d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
        <div>
          <img width={100} height={100} src={pencil} alt="alt"/>
        </div>
      </div>
    </div>
  );
}

export default Learning;
