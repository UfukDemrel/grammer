import React from "react";
import learn from "../images/learn.png";
import { Link } from "react-router-dom";

function Learning() {

  return (
    <div>
    <div className="absolute top-24 left-5 w-3/5 font-black text-2xl">LEARN ENGLISH FROM ANYTHING AND ANYWHERE</div>
    <Link to="/learning">
      <div className="shadow flex items-center justify-center bg-blue-300 pl-5 pr-5 pt-3 pb-3 rounded-full absolute bottom-28 left-5 gap-3">
        <div className="font-semibold text-sm">
          Next
        </div>
        <svg className="svg" height="11px" width="11px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 492.004 492.004">
<g>
	<g>
		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
	</g>
</g>
</svg>
      </div>
 
    </Link>
      <img
        style={{ width: "-webkit-fill-available" }}
        className="absolute flex justify-center -z-10"
        src={learn}
        alt="alt"
      />
    </div>
  );
}

export default Learning;
