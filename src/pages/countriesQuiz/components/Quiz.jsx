import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quizz = ({ countries, allCountries, fetchCountries }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameMode, setGameMode] = useState("");
  const [randomCountryName, setRandomCountryName] = useState([]);
  const [randomCountryFlags, setRandomCountryFlags] = useState([]);
  const [numberCorrectAnswer, setNumberCorrectAnswer] = useState(0);
  const [loading, setLoading] = useState(false)

  // Methods :
  const defineGameMode = (selected) => {
    if (selected === "flag") setGameMode("flag");
    else if (selected === "country") setGameMode("country");
  };

  const generateRandomAnswer = async () => {
    try {
      if (allCountries) {
        setLoading(true)
        const firstAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const secondAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const thirdAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        const fourthAnswer =
          allCountries[Math.floor(Math.random() * allCountries.length)];
        let tmpCountryName = [];
        let tmpCountryFlag = [];
        if ((firstAnswer, secondAnswer, thirdAnswer, fourthAnswer)) {
          tmpCountryName.push(
            firstAnswer.name.common,
            secondAnswer.name.common,
            thirdAnswer.name.common,
            fourthAnswer.name.common
          );
          setRandomCountryName(tmpCountryName);
          
          tmpCountryFlag.push(
            firstAnswer.flags.png,
            secondAnswer.flags.png,
            thirdAnswer.flags.png,
            fourthAnswer.flags.png
          )
          setRandomCountryFlags(tmpCountryFlag)
          
        }
        setLoading(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateRandomAnswer();
  }, []);

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => {
      return prevQuestion + 1;
    });
  };

  const handleScore = () => {
    setNumberCorrectAnswer((prevScore) => {
      return prevScore + 1;
    });
  };

  return (
    <div>
      {gameMode === "" && !loading && (
        <div className="row justify-content-center selectGameMode">
          <div
            className="col-lg-4 col-12"
            onClick={() => defineGameMode("country")}
          >
            Guess country
          </div>
          <div
            className="col-lg-4 col-12"
            onClick={() => defineGameMode("flag")}
          >
            Guess flag
          </div>
        </div>
      )}
      {(gameMode === "country" || gameMode === "flag") && (
        <>
          {countries.map((country, index) => (
            <React.Fragment key={index}>
              {currentQuestion === index && (
                <Question
                  country={country}
                  randomCountryName={randomCountryName}
                  generateRandomAnswer={generateRandomAnswer}
                  nextQuestion={nextQuestion}
                  currentQuestion={currentQuestion}
                  limit={Object.keys(countries).length}
                  handleScore={handleScore}
                  numberCorrectAnswer={numberCorrectAnswer}
                  fetchCountries={fetchCountries}
                  gameMode={gameMode}
                  randomCountryFlags={randomCountryFlags}
                />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default Quizz;
