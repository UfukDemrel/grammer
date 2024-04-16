import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ufukdemrel/grammerdata/main/data.json"
        );
        const data = await response.json();
        const selectedLesson = data
          .flatMap((unit) => unit.lessons)
          .find((lesson) => lesson.id === lessonId);
        setLesson(selectedLesson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [lessonId]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/learning">
        <div className="shadow p-2 rounded-xl border-2 w-9 flex justify-center items-center mb-3">
          <svg className="arrow" width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"/>
          </svg>
        </div>
      </Link>
      <h1>{lesson.states[0].text1}</h1>
      <p>{lesson.states[0].text2}</p>
    </div>
  );
};

export default DetailsPage;
