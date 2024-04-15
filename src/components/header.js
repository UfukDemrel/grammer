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
          <img
            className=""
            width={40}
            height={40}
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-figma-9234652-7516877.png?f=webp"
            alt="alt"
          />
          {/* {theme === "light" ? (
            <img
              className=""
              width={40}
              height={40}
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-figma-9234652-7516877.png?f=webp"
              alt="alt"
            />
          ) : (
               <img
              className=""
              width={40}
              height={40}
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-figma-9234652-7516877.png?f=webp"
              alt="alt"
            />
          )} */}
        </div>
      </Link>

      <div
        className="flex justify-end"
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
