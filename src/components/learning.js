import React from "react";
// import blue from "../images/blue.png";
import learning from "../images/learning.png";
import speech from "../images/speech.png";
import research from "../images/research.png";
import victory from "../images/victory.png";
import { Link } from "react-router-dom";

function Learning() {
  return (
    <div>
      <div>Hi Good Human!</div>
      <div className="font-black text-2xl mb-2">
        WELCOME BACK
      </div>
      {/* <div className="flex justify-end items-end">
        <img width={70} height={70} className="mr-5" src={red} alt="alt" />
      </div> */}
      <div className="flex justify-between items-center mb-4">
        <img src="https://ouch-cdn2.icons8.com/gwT82aWj2SbEIs_Dq49OSQpFTLZkA5IF32b24vj9tBQ/rs:fit:368:453/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTg5/L2FjMDQ3MGJlLTcz/ZTAtNGIwYi1iYWNi/LTFkYWMyMDgzOTRj/Ny5wbmc.png" alt="alt" />
      </div>

      <div className="font-semibold text-md mt-2 mb-2">
        Grammer learning english easy with 
      </div>

      <div className="flex justify-between gap-2 flex-wrap mt-3 mb-3">
        <div className="floating shadow bg-emerald-500 w45 p-1 rounded-2xl">
        <div className="flex items-center justify-center">
          <img src={learning} alt="alt"/>
        </div>
          <div className="font-semibold text-md p-1">Learning</div>
        </div>
        <div className="floating shadow bg-orange-500 w45 p-1 rounded-2xl">
          <img src={speech} alt="alt"/>
          <div className="font-semibold text-md p-1">Speech</div>
        </div>
        <div className="floating shadow bg-gray-500 w45 p-1 rounded-2xl">
          <img src={research} alt="alt"/>
          <div className="font-semibold text-md p-1">Research</div>
        </div>
        <div className="floating shadow bg-red-500 w45 p-1 rounded-2xl">
          <img src={victory} alt="alt"/>
          <div className="font-semibold text-md p-1">Victory</div>
        </div>
      </div>

      <div className="mb-3 mt-4 w-full">
        <Link to="/learning">
          <div className="shadow w-full flex items-center justify-center bg-rose-700 pl-5 pr-5 pt-3 pb-3 rounded-full gap-3">
            <div className="font-semibold text-sm">Get Starded</div>
            <svg
              className="svg"
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
      </div>
    </div>
  );
}

export default Learning;
