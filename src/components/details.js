import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [showSecondText, setShowSecondText] = useState(false);
  const [userAnswerText1, setUserAnswerText1] = useState("");
  const [userAnswerText2, setUserAnswerText2] = useState("");

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
        setShowSecondText(false);
        setUserAnswerText1(
          localStorage.getItem(`${lessonId}-userAnswerText1`) || ""
        );
        setUserAnswerText2(
          localStorage.getItem(`${lessonId}-userAnswerText2`) || ""
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [lessonId]);

  const handleButtonClick = (textType) => {
    try {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        const userVoiceInput = event.results[0][0].transcript;
        if (textType === "text1") {
          setUserAnswerText1(userVoiceInput);
          localStorage.setItem(`${lessonId}-userAnswerText1`, userVoiceInput);
        } else if (textType === "text2") {
          setUserAnswerText2(userVoiceInput);
          localStorage.setItem(`${lessonId}-userAnswerText2`, userVoiceInput);
        }
        setShowSecondText(true);
        startRecognition(textType);
      };
      recognition.start();
    } catch (error) {
      console.error("Error starting recognition:", error);
    }
  };

  const startRecognition = (textType) => {
    try {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        const userVoiceInput = event.results[0][0].transcript;
        if (textType === "text1") {
          setUserAnswerText1(userVoiceInput);
          localStorage.setItem(`${lessonId}-userAnswerText1`, userVoiceInput);
        } else if (textType === "text2") {
          setUserAnswerText2(userVoiceInput);
          localStorage.setItem(`${lessonId}-userAnswerText2`, userVoiceInput);
        }
      };
      recognition.start();
    } catch (error) {
      console.error("Error starting recognition:", error);
    }
  };

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const { text1, text2 } = lesson.states[0];

  return (
    <div>
      <Link to="/learning">
        <div className="shadow p-2 rounded-xl border-2 w-9 flex justify-center items-center mb-3">
          <svg
            className="arrow"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
            />
          </svg>
        </div>
      </Link>
      <div className="">
        <div className="bg-slate-500 p-2 font-medium text-center w-max rounded-md shadow-md mb-2">
          {text1}
        </div>
        {!showSecondText && (
          <button
            className="flex justify-center mt-2"
            onClick={() => handleButtonClick("text1")}
          >
            <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="microphone"/>
          </button>
        )}
        {showSecondText && (
          <div>
            <div className="flex justify-end items-center">
              <div className="bg-orange-600 w-max p-2 font-medium text-center rounded-md shadow-md mb-2">
                {userAnswerText1}
              </div>
            </div>
            <div className="bg-slate-500 p-2 font-medium text-center w-max rounded-md shadow-md mb-2">
              {text2}
            </div>
            <button
              className="flex justify-center mt-2"
              onClick={() => handleButtonClick("text2")}
            >
              <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="microphone"/>
            </button>
            <div className="flex justify-end items-center">
              <div className="bg-orange-600 w-max p-2 font-medium text-center rounded-md shadow-md mb-2">{userAnswerText2}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
