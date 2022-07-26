import React, { useEffect, useState } from "react";

const Question = ({ country, randomCountryName }) => {
  console.log(country, randomCountryName);
  const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    if (!randomCountryName.includes(country.name.official)) {
      let randomPlace = Math.floor(Math.random() * randomCountryName.length);
      let tmpArray = randomCountryName;
      tmpArray.pop();
      tmpArray.splice(randomPlace, 0, country.name.common);
      console.log(tmpArray);
      setAnswerArray(tmpArray);
    }
  }, [randomCountryName]);

  return (
    setAnswerArray.length > 0 && (
      <div className="question">
        <div>{country.name.official}</div>
      </div>
    )
  );
};

export default Question;
