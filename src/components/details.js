import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import cupa from "../images/cupa.png";
import bell from "../images/bell.png";

const DetailsPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [userAnswerText1, setUserAnswerText1] = useState("");
  const [userAnswerText2, setUserAnswerText2] = useState("");
  const [userAnswerText3, setUserAnswerText3] = useState("");
  const [userAnswerText4, setUserAnswerText4] = useState("");
  const [userAnswerText5, setUserAnswerText5] = useState("");
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourText, setshowFourText] = useState(false);
  const [showFiveText, setshowFiveText] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [modals, setModals] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
        if (userVoiceInput.match(/[ğüşıöç]/gi)) {
          setShowPopup(true);
          return;
        }
        if (textType === "text1") {
          setUserAnswerText1(userVoiceInput);
        } else if (textType === "text2") {
          setUserAnswerText2(userVoiceInput);
          setShowThirdText(true);
          startRecognition("text3");
        } else if (textType === "text3") {
          setUserAnswerText3(userVoiceInput);
          setshowFourText(true);
        } else if (textType === "text4") {
          setUserAnswerText4(userVoiceInput);
          setshowFiveText(true);
        } else if (textType === "text5") {
          setUserAnswerText5(userVoiceInput);
          setModals(true);
        }
        setShowSecondText(true);
        startRecognition(textType);
      };
  
      const blinkInterval = 300;
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

  const { text1, text2, text3, text4, text5 } = lesson.states[0];

  return (
    <div>
      <div>
        <div className="bg-green-200 text-black p-2 font-medium text-center text-xs w-max rounded-lg shadow-md mb-2">
          {text1}
        </div>
        {!showSecondText && (
          <>
            <div className="flex z-10 bg-white justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-3 right-0 shadow-sm items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text1")}
              >
                <div onClick={() => setIsRed(!isRed)}>
                  {isRed ? <div className="red"></div> : ""}
                </div>
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z"
                    fill="#979FCB"
                  />
                  <path
                    d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z"
                    fill="#394B97"
                  />
                  <path
                    d="M453.184 719.104h92.16v162.944h-92.16z"
                    fill="#394B97"
                  />
                  <path
                    d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z"
                    fill="#394B97"
                  />
                  <path
                    d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z"
                    fill="#5161A4"
                  />
                </svg>
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
            <div className="flex z-10 bg-white justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-3 right-0 shadow-sm items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text2")}
              >
                <div onClick={() => setIsRed(!isRed)}>
                  {isRed ? <div className="red"></div> : ""}
                </div>
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z"
                    fill="#979FCB"
                  />
                  <path
                    d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z"
                    fill="#394B97"
                  />
                  <path
                    d="M453.184 719.104h92.16v162.944h-92.16z"
                    fill="#394B97"
                  />
                  <path
                    d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z"
                    fill="#394B97"
                  />
                  <path
                    d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z"
                    fill="#5161A4"
                  />
                </svg>
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

        {showThirdText && (
          <div>
            <div className="bg-green-200 p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 w-1/2 text-black">
              {text3}
            </div>
            {userAnswerText3 && (
              <div className="flex justify-end items-center">
                <div className="bg-orange-200 w-max p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 text-black">
                  {userAnswerText3}
                </div>
              </div>
            )}
            <div className="flex z-10 bg-white justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-3 right-0 shadow-sm items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text3")}
              >
                <div onClick={() => setIsRed(!isRed)}>
                  {isRed ? <div className="red"></div> : ""}
                </div>
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z"
                    fill="#979FCB"
                  />
                  <path
                    d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z"
                    fill="#394B97"
                  />
                  <path
                    d="M453.184 719.104h92.16v162.944h-92.16z"
                    fill="#394B97"
                  />
                  <path
                    d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z"
                    fill="#394B97"
                  />
                  <path
                    d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z"
                    fill="#5161A4"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {showFourText && (
          <div>
            <div className="bg-green-200 p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 w-1/2 text-black">
              {text4}
            </div>
            {userAnswerText4 && (
              <div className="flex justify-end items-center">
                <div className="bg-orange-200 w-max p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 text-black">
                  {userAnswerText4}
                </div>
              </div>
            )}
            <div className="flex z-10 bg-white justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-3 right-0 shadow-sm items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text4")}
              >
                <div onClick={() => setIsRed(!isRed)}>
                  {isRed ? <div className="red"></div> : ""}
                </div>
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z"
                    fill="#979FCB"
                  />
                  <path
                    d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z"
                    fill="#394B97"
                  />
                  <path
                    d="M453.184 719.104h92.16v162.944h-92.16z"
                    fill="#394B97"
                  />
                  <path
                    d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z"
                    fill="#394B97"
                  />
                  <path
                    d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z"
                    fill="#5161A4"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {showFiveText && (
          <div>
            <div className="bg-green-200 p-2 font-medium text-left text-xs rounded-lg shadow-md mb-2 w-1/2 text-black">
              {text5}
            </div>
            {userAnswerText5 && (
              <div className="flex justify-end items-center">
                <div className="bg-orange-200 w-max p-2 font-medium text-left text-xs rounded-lg shadow-md mb-24 text-black">
                  {userAnswerText5}
                </div>
              </div>
            )}
            <div className="flex z-10 bg-white justify-center mt-2 border-2 fixed bottom-0 rounded-t-xl text-center w-full p-3 right-0 shadow-sm items-center">
              <button
                className="flex justify-center mt-2"
                onClick={() => handleButtonClick("text5")}
              >
                <div onClick={() => setIsRed(!isRed)}>
                  {isRed ? <div className="red"></div> : ""}
                </div>
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z"
                    fill="#979FCB"
                  />
                  <path
                    d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z"
                    fill="#394B97"
                  />
                  <path
                    d="M453.184 719.104h92.16v162.944h-92.16z"
                    fill="#394B97"
                  />
                  <path
                    d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z"
                    fill="#394B97"
                  />
                  <path
                    d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z"
                    fill="#5161A4"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {modals && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="w-4/5 p-3 bg-white rounded-2xl">
              <div className="flex justify-center">
                <img className="w-28 h-28" src={cupa} alt="cupa" />
              </div>
              <div className="font-semibold text-center mb-2">Amazing!</div>
              <div className=" font-normal mb-2 text-center">
                Congratulations, you can move on to the next lesson.
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link to="/learning">
                  <div className="shadow bg-black text-white pb-2 pt-2 pl-5 pr-5 rounded-xl border-2 flex justify-center items-center">
                    Go Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center text-center items-center">
            <div className="w-4/5 p-3 bg-white rounded-2xl">
            <div onClick={() => setShowPopup(false)} className="flex justify-end items-center">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="Menu / Close_MD">
                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>
            <div className="flex justify-center mb-2">
                <img className="w-28" src={bell} alt="cupa" />
              </div>
            <div className="font-medium" onClose={() => setShowPopup(false)}>
              Incorrect word detected! Please do not use Turkish letters.
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
