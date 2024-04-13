import React, { useEffect, useState } from "react";
import grammer from "../images/grammer.png";
import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center justify-between mb-2 mt-2">
      <Link to="/">
        <div className="flex items-center gap-1">
        <img width={35} height={35} src={grammer} alt="alt" />
        {/* <div className="font-semibold text-xl">English Lessons</div> */}
        </div>
      </Link>

      <div
        className="flex justify-end w-2/12"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <img className="cursor-pointer" width={50} height={50} src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" alt="alt"/>
        ) : (
          <img className="cursor-pointer" width={50} height={50} src="https://static.wixstatic.com/media/892357_354f20bfd3344dca825587e14758ddbc~mv2.gif" alt="alt"/>
        )}
      </div>
    </div>
  );
}

export default Header;
