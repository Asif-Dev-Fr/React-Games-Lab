import React, { useState } from "react";
import Question from "./Question";

const Quizz = ({ countries, allCountries }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      {countries.map((country, index) => (
        <React.Fragment key={index}>
          {currentQuestion === index && (
            <Question country={country} allCountries={allCountries} />
          )}
        </React.Fragment>
      ))}
      <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>+</button>
    </div>
  );
};

export default Quizz;
