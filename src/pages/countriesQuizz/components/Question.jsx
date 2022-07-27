import React, { useEffect, useState } from "react";

const Question = ({ country, randomCountryName, generateRandomAnswer }) => {
  console.log(country, randomCountryName);
  const [answerArray, setAnswerArray] = useState([]);

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
  }, [randomCountryName]);

  const selectAnswer = (answer) => {
    if (answer === country.name.common) {
      console.log("Right answer");
      generateRandomAnswer()
    } else {
      console.log("Wrong answer. The right answer is :", country.name.common);
      generateRandomAnswer()
    }
  };

  return (
    setAnswerArray.length > 0 && (
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
    )
  );
};

export default Question;
