import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ufukdemrel/grammerdata/main/data.json');
        const data = await response.json();
        const selectedLesson = data.flatMap(unit => unit.lessons).find(lesson => lesson.id === lessonId);
        setLesson(selectedLesson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lessonId]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{lesson.states[0].text1}</h1>
      <p>{lesson.states[0].text2}</p>
    </div>
  );
};

export default DetailsPage;
