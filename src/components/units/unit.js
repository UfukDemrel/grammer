import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTransition } from "react-transition-state";
import gray from '../../images/gray.png';
import star from '../../images/star.png';

const Unit1 = () => {
  const [units, setUnits] = useState([]);
  const [blocks, setBlocks] = useState({});
  const [selectedUnit] = useState(null);
  const [state, toggle] = useTransition({ timeout: 500, preEnter: true });
  const [searchTerm, setSearchTerm] = useState("");

  const handleBlocks = (unitId) => {
    setBlocks((prevBlocks) => ({
      ...prevBlocks,
      [unitId]: !prevBlocks[unitId],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ufukdemrel/grammerdata/main/data.json"
        );
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredUnits = units.filter((unit) =>
    unit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-2 mt-2">
        <div className="font-semibold">Welcome back!</div>
        <div className="flex justify-between items-center">
          <img
            width="23"
            height="23"
            src="https://img.icons8.com/emoji/48/fire.png"
            alt="fire"
          />
          <div className="font-medium">{units.length}</div>
        </div>
      </div>

      <div className="flex items-center mb-3 mt-3 relative">
        <svg
          className="search absolute ml-2"
          height="1rem"
          width="1rem"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488.4 488.4"
        >
          <g>
            <g>
              <path
                d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
              />
            </g>
          </g>
        </svg>
        <input
          className="pl-7 pb-2 pt-2 border border-gray-300 rounded-lg"
          type="text"
          id="search-input"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {!selectedUnit &&
        (filteredUnits.length > 0 ? (
          filteredUnits.map((unit) => (
            <div
              onClick={() => toggle()}
              className="mb-3 shad rounded-xl p-2 cursor-pointer"
              key={unit.id}
            >
              <div
                className="flex justify-between items-center"
                onClick={() => handleBlocks(unit.id)}
              >
                <div className="flex gap-1 items-center">
                  <img width={50} height={50} src={gray} alt="Icon" />
                  <div className="block">
                    <h2 className="font-semibold">{unit.title}</h2>
                    <p className="text-sm font-medium">{unit.content}</p>
                  </div>
                </div>
                <img width={40} height={40} src={unit.icons.svg} alt="icon" />
              </div>

              {blocks[unit.id] &&
                unit.lessons &&
                unit.lessons.map((lesson) => (
                  <div key={lesson.id} className={`mt-1 example ${state.status}`}>
                    <Link
                      to={`/details/${lesson.id}`}
                      className="flex items-center gap-2 hover:bg-gray-400 rounded-xl p-1"
                    >
                      <img className="w-1/6" src={lesson.icons} alt="icons" />
                      <div className="block">
                        <div className="text-sm font-medium">{lesson.title}</div>
                        <p className="text-xs font-semibold">{lesson.content}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center font-medium mt-5">No results found</div>
        ))}
    </div>
  );
};

export default Unit1;
