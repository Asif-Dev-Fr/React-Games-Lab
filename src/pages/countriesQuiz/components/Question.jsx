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
  fetchCountries
}) => {
  const [answerArray, setAnswerArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  useEffect(() => {
    setLoading(true);
    if (!randomCountryName.includes(country.name.common)) {
      let randomPlace = Math.floor(Math.random() * randomCountryName.length);
      let tmpArray = randomCountryName;
      tmpArray.pop();
      tmpArray.splice(randomPlace, 0, country.name.common);
      setAnswerArray(tmpArray);
    }
    setLoading(false);
  }, []);

  const selectAnswer = (answer) => {
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
  };

  return (
    <>
      {!loading ? (
        <div className="question">
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
      ) : (
        <Loader loading={loading} />
      )}
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
