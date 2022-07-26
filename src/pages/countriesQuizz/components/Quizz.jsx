import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quizz = ({ countries, allCountries }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameMode, setGameMode] = useState("");
  const [randomCountryName, setRandomCountryName] = useState([]);

  // Methods :
  const defineGameMode = (selected) => {
    if (selected === "flag") setGameMode("flag");
    else if (selected === "country") setGameMode("country");
  };

  // Methods :
  const generateRandomAnswer = async () => {
    try {
      if (allCountries) {
        const firstAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const secondAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const thirdAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const fourthAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        console.log(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer);
        let tmpArray = [];
        if ((firstAnswer, secondAnswer, thirdAnswer, fourthAnswer)) {
          tmpArray.push(
            firstAnswer.name.common,
            secondAnswer.name.common,
            thirdAnswer.name.common,
            fourthAnswer.name.common
          );
        }
        setRandomCountryName(tmpArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateRandomAnswer();
  }, []);

  return (
    <div>
      {gameMode === "" && (
        <div className="row justify-content-center selectGameMode">
          <div
            className="col-lg-4 col-12"
            onClick={() => defineGameMode("flag")}
          >
            Guess flag
          </div>
          <div
            className="col-lg-4 col-12"
            onClick={() => defineGameMode("country")}
          >
            Guess country
          </div>
        </div>
      )}
      {gameMode === "flag" && (
        <>
          {countries.map((country, index) => (
            <React.Fragment key={index}>
              {currentQuestion === index && (
                <Question
                  country={country}
                  randomCountryName={randomCountryName}
                />
              )}
            </React.Fragment>
          ))}
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            +
          </button>
        </>
      )}
    </div>
  );
};

export default Quizz;
