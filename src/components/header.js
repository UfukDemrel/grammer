import React, { useEffect, useState } from "react";
import chat from "../chat.svg";
import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex items-center justify-between mb-3 mt-3">
      <Link to="/">
        <div className="flex items-center gap-1">
          <img src={chat} alt="alt" />
          <div className="font-semibold text-xl">English Lessons</div>
        </div>
      </Link>

      <div
        className="flex justify-end w-2/12"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? (
          <img src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" alt="alt"/>
        ) : (
          <img src="https://static.wixstatic.com/media/892357_354f20bfd3344dca825587e14758ddbc~mv2.gif" alt="alt"/>
        )}
      </div>
    </div>
  );
}

export default Header;
