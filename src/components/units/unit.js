import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gray from '../../images/gray.png';

const Unit1 = () => {
  const [units, setUnits] = useState([]);
  const [blocks, setBlocks] = useState({});
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [completedLessons, setCompletedLessons] = useState(0);
  const [filteredUnits, setFilteredUnits] = useState([]);

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

  useEffect(() => {
    const countCompletedLessons = () => {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("lesson_") && localStorage.getItem(key) === "completed") {
          count++;
        }
      }
      setCompletedLessons(count);
    };

    countCompletedLessons();
  }, []);

  useEffect(() => {
    const filtered = units.filter((unit) =>
      unit.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUnits(filtered);
  }, [units, searchTerm]);

  const handleBlocks = (unitId) => {
    setBlocks((prevBlocks) => {
      const updatedBlocks = { ...prevBlocks };
      Object.keys(updatedBlocks).forEach((key) => {
        if (key !== unitId) {
          updatedBlocks[key] = false;
        }
      });
      updatedBlocks[unitId] = !prevBlocks[unitId];
      return updatedBlocks;
    });
  };

  const handleLessonClick = (lessonId) => {
    localStorage.setItem(`lesson_${lessonId}`, "completed");
    setCompletedLessons((prevCount) => prevCount + 1);
  };

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
          <div className="font-medium">{completedLessons}</div>
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
                  <div key={lesson.id} className="mt-1">
                    <Link
                      to={`/details/${lesson.id}`}
                      className="flex items-center gap-2 hover:bg-gray-400 rounded-xl p-1"
                      onClick={() => handleLessonClick(lesson.id)}
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
