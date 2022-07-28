import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";

const Question = ({ country, randomCountryName, generateRandomAnswer, nextQuestion }) => {
  console.log(country, randomCountryName);
  const [answerArray, setAnswerArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Methods
  useEffect(() => {
    if (!randomCountryName.includes(country.name.common)) {
      let randomPlace = Math.floor(Math.random() * randomCountryName.length);
      let tmpArray = randomCountryName;
      tmpArray.pop();
      tmpArray.splice(randomPlace, 0, country.name.common);
      console.log(tmpArray);
      setAnswerArray(tmpArray);
    }
  }, []);

  const selectAnswer = (answer) => {
    if (answer === country.name.common) {
      setIsCorrect(true);
      setShowModal(true);
      generateRandomAnswer()
      console.log("Right answer");
    } else {
      setIsCorrect(false);
      setShowModal(true);
      generateRandomAnswer()
      console.log("Wrong answer. The right answer is :", country.name.common);
    }
  };

  return (
    <>
      {answerArray.length > 0 && answerArray.includes(country.name.common) && (
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
      )}
      {showModal && (
        <Modal
          gameMode={"countryQuizz"}
          solution={country.name.common}
          country={country}
          isCorrect={isCorrect}
          nextQuestion={nextQuestion}
        />
      )}
    </>
  );
};

export default Question;
