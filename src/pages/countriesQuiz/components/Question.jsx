import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";

const Question = ({
  country,
  randomCountryName,
  generateRandomAnswer,
  nextQuestion,
  currentQuestion,
  limit,
  handleScore,
  numberCorrectAnswer,
  fetchCountries,
  gameMode,
  randomCountryFlags,
}) => {
  const [answerArray, setAnswerArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  useEffect(() => {
    setLoading(true);
    if (
      gameMode === "country" &&
      !randomCountryName.includes(country.name.common)
    ) {
      let randomPlace = Math.floor(Math.random() * randomCountryName.length);
      let tmpArray = randomCountryName;
      tmpArray.pop();
      tmpArray.splice(randomPlace, 0, country.name.common);
      setAnswerArray(tmpArray);
    } else if (
      gameMode === "flag" &&
      !randomCountryFlags.includes(country.flags.png)
    ) {
      let randomPlace = Math.floor(Math.random() * randomCountryFlags.length);
      let tmpArray = randomCountryFlags;
      tmpArray.pop();
      tmpArray.splice(randomPlace, 0, country.flags.png);
      setAnswerArray(tmpArray);
    }
    setLoading(false);
  }, []);

  const selectAnswer = (answer) => {
    if (gameMode === "country") {
      if (answer === country.name.common) {
        setIsCorrect(true);
        handleScore();
        setShowModal(true);
        generateRandomAnswer();
      } else {
        setIsCorrect(false);
        setShowModal(true);
        generateRandomAnswer();
      }
    } else if (gameMode === "flag") {
      if (answer === country.flags.png) {
        setIsCorrect(true);
        handleScore();
        setShowModal(true);
        generateRandomAnswer();
      } else {
        setIsCorrect(false);
        setShowModal(true);
        generateRandomAnswer();
      }
    }
  };

  const displayContent = () => {
    if (gameMode === "country") {
      return (
        <div className="question" style={{marginTop: 100}}>
          <div className="flag">
            <img src={country.flags.png} alt="flag" />
          </div>
          <div className="answers">
            {answerArray.map((answer, key) => (
              <div
                className="answer"
                key={"answer_" + key}
                onClick={() => selectAnswer(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (gameMode === "flag") {
      return (
        <div className="question" style={{marginTop: 50}}>
          <div className="flag">
            <h2>{country.name.common}</h2>
          </div>
          <div className="answers">
            {answerArray.map((flag, key) => (
              <div
                className="answer_flag"
                key={"flag_" + key}
                onClick={() => selectAnswer(flag)}
              >
                <img src={flag} alt={flag} height={200} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {!loading ? displayContent() : <Loader loading={loading} />}
      {showModal && (
        <Modal
          gameMode={"countryQuizz"}
          solution={country.name.common}
          country={country}
          isCorrect={isCorrect}
          nextQuestion={nextQuestion}
          currentQuestion={currentQuestion}
          limit={limit}
          numberCorrectAnswer={numberCorrectAnswer}
          fetchCountries={fetchCountries}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Question;
