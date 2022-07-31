import React, { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "./components/Quiz";
import "../../assets/css/quizz.css";
import Loader from "../../components/Loader";

const CountriesQuiz = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Methods :
  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios(process.env.REACT_APP_COUNTRY_QUIZZ_API);
      // console.log(response);
      if (response && response.data) {
        // List of all countries
        setAllCountries(response.data);
        // Shuffle array
        const shuffled = response.data.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let randomCountries = shuffled.slice(0, 20);
        console.log(randomCountries);
        setCountries(randomCountries);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      {!loading && countries.length === 20 ? (
        <div>
          <Quiz
            countries={countries}
            allCountries={allCountries}
            fetchCountries={fetchCountries}
          />
        </div>
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
};

export default CountriesQuiz;
