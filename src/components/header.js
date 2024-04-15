import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center justify-between mb-3 mt-3">
      <Link to="/">
        <div className="flex items-center gap-1">
          {theme === "light" ? (
            <img
              className="rounded-md bg-black p-1 border-2 border-black"
              width={40}
              height={40}
              src="https://cdn-icons-png.flaticon.com/256/5968/5968705.png"
              alt="alt"
            />
          ) : (
            <img
              className="rounded-md bg-white p-1 border-2 border-white"
              width={40}
              height={40}
              src="https://cdn-icons-png.flaticon.com/256/5968/5968705.png"
              alt="alt"
            />
          )}
        </div>
      </Link>

      <div
        className="flex justify-end"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <img className=" w-1/12" src={sun} alt="sun"/>
        ) : (
          <img className=" w-1/12" src={moon} alt="sun"/>
        )}
      </div>
    </div>
  );
}

export default Header;
