import React, { useEffect, useState } from "react";

const Question = ({ country, allCountries }) => {
  const [randomCountryName, setRandomCountryName] = useState([]);
  console.log(country);

  // Methods :
  const generateRandomAnswer = async () => {
    try {
      if (allCountries) {
        // Shuffle array
        const shuffled = allCountries.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let randomName = shuffled.slice(40, 45);
        console.log(randomName);
        for (let random of randomName) {
          console.log(random);
          if (random.name.official !== country.name.official) {
            console.log("first");
            setRandomCountryName((prev) => {
              return [...prev, random.name.official];
            });
          }
        }
        console.log(randomCountryName);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateRandomAnswer();
  }, [country]);
  return (
    <div>
      <div>{country.name.official}</div>
    </div>
  );
};

export default Question;
