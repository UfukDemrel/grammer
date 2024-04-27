import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import logo from "../images/logo.png";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center justify-between mb-3 mt-3">
      <Link to="/">
        <div className="flex items-center gap-1">
          <div className="shadow rounded-2xl"><img width={45} src={logo} alt="logo"/></div>
        </div>
      </Link>

      <div
        className="flex justify-end items-center"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <img className=" w-1/12" src={sun} alt="sun" />
        ) : (
          <img className=" w-1/12" src={moon} alt="sun" />
        )}
      </div>
    </div>
  );
}

export default Header;
