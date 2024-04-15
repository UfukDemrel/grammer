import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import learning from "../images/learning.png";
import speech from "../images/speech.png";
import research from "../images/research.png";
import victory from "../images/victory.png";
import { Link } from "react-router-dom";

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).slick({
      dots: true, // Pagination eklemek için dots özelliğini true yapın
      arrows: false, // Okları kaldırın
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="slider">
        <div className="p-1">
          <div>Hi Good Human!</div>
          <div className="font-black text-2xl mb-2">WELCOME BACK</div>
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://ouch-cdn2.icons8.com/gwT82aWj2SbEIs_Dq49OSQpFTLZkA5IF32b24vj9tBQ/rs:fit:368:453/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTg5/L2FjMDQ3MGJlLTcz/ZTAtNGIwYi1iYWNi/LTFkYWMyMDgzOTRj/Ny5wbmc.png"
              alt="alt"
            />
          </div>

          <div className="font-semibold text-md mt-2 mb-2">
            Grammer learning english easy with
          </div>
        </div>

        <div className="p-1">
          <div className="flex justify-between gap-2 flex-wrap mt-3 mb-3">
            <div className="floating shadow bg-emerald-500 w45 p-1 rounded-2xl">
              <div className="flex items-center justify-center">
                <img src={learning} alt="alt" />
              </div>
              <div className="font-semibold text-md p-1">Learning</div>
            </div>
            <div className="floating shadow bg-orange-500 w45 p-1 rounded-2xl">
              <img src={speech} alt="alt" />
              <div className="font-semibold text-md p-1">Speech</div>
            </div>
            <div className="floating shadow bg-gray-500 w45 p-1 rounded-2xl">
              <img src={research} alt="alt" />
              <div className="font-semibold text-md p-1">Research</div>
            </div>
            <div className="floating shadow bg-red-500 w45 p-1 rounded-2xl">
              <img src={victory} alt="alt" />
              <div className="font-semibold text-md p-1">Victory</div>
            </div>
          </div>
        </div>

        <div className="p-1">
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
      </div>
    </div>
  );
};

export default Slider;
