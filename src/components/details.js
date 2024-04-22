import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [showSecondText, setShowSecondText] = useState(false);
  const [userAnswerText1, setUserAnswerText1] = useState("");
  const [userAnswerText2, setUserAnswerText2] = useState("");
  const [isRed, setIsRed] = useState(false);

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
  
      const blinkInterval = 500;
      const blinkIntervalId = setInterval(() => {
        setIsRed((prevState) => !prevState);
      }, blinkInterval);
  
      recognition.onend = () => {
        clearInterval(blinkIntervalId);
        setIsRed(false);
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
      <div>
        <div className="bg-green-200 text-black p-2 font-medium text-center text-xs w-max rounded-lg shadow-md mb-2">
          {text1}
        </div>
        {!showSecondText && (
          <>
            <div className="flex justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-4 m-0 right-0 shadow items-center">
              <button className="flex" onClick={() => handleButtonClick("text1")}>
              <div onClick={() => setIsRed(!isRed)}>
                {isRed ? <div className="red"></div> : ''}
              </div>
              <svg width="2.5rem" height="2.5rem" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z" fill="#979FCB" /><path d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z" fill="#394B97" /><path d="M453.184 719.104h92.16v162.944h-92.16z" fill="#394B97" /><path d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z" fill="#394B97" /><path d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z" fill="#5161A4" /></svg>
              </button>
            </div>
          </>
        )}
        {showSecondText && (
          <div>
            {userAnswerText1 && (
              <div className="flex justify-end items-center">
                <div className="bg-orange-200 w-max p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 text-black">
                  {userAnswerText1}
                </div>
              </div>
            )}
            <div className="bg-green-200 p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 w-1/2 text-black">
              {text2}
            </div>
            <div className="flex justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-4 m-0 right-0 shadow items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text2")}
              >
                <svg width="2.5rem" height="2.5rem" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z" fill="#979FCB" /><path d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z" fill="#394B97" /><path d="M453.184 719.104h92.16v162.944h-92.16z" fill="#394B97" /><path d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z" fill="#394B97" /><path d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z" fill="#5161A4" /></svg>
              </button>
            </div>
            {userAnswerText2 && (
              <div className="flex justify-end items-center">
                <div className="bg-orange-200 w-max p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 text-black">
                  {userAnswerText2}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
