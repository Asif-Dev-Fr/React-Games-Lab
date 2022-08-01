import React, { useState } from "react";

const Modal = ({
  isCorrect,
  solution,
  turn,
  closeSideMenu,
  gameMode,
  country,
  nextQuestion,
  currentQuestion,
  limit,
  numberCorrectAnswer,
  fetchCountries,
  setShowModal,
}) => {
  const [finish, setFinish] = useState(false);

  // Methods
  const newGame = () => {
    setShowModal(false);
    fetchCountries();
  };

  const result = () => {
    if (numberCorrectAnswer < 5) return <h4>You need to study more</h4>;
    else if (numberCorrectAnswer >= 5 && numberCorrectAnswer < 10)
      return <h4>Not bad but you can do better</h4>;
    else if (numberCorrectAnswer >= 10 && numberCorrectAnswer < 15)
      return <h4>Almost perfect !</h4>;
    else if (numberCorrectAnswer >= 15) return <h4>You are a flag master !</h4>;
  };
  return (
    <>
      {gameMode === "wordle" && (
        <div className="wordleModal" onClick={() => closeSideMenu()}>
          {isCorrect && (
            <div className="modalCss">
              <h1>You Win!</h1>
              <p className="solution">Solution : {solution}</p>
              <p>
                You found the solution in {turn}{" "}
                {turn === 1 ? "guess" : "guesses"} :)
              </p>
            </div>
          )}
          {!isCorrect && (
            <div>
              <h1>Nevermind</h1>
              <p className="solution">Solution : {solution}</p>
              <p>Better luck next time :)</p>
            </div>
          )}
        </div>
      )}

      {gameMode === "countryQuizz" && (
        <div className="wordleModal">
          <div className="modalCss">
            {!finish ? (
              <div>
                <h2>{isCorrect ? "Right answer !" : "Wrong answer :("}</h2>
                <h5 className="questionNumber">
                  {currentQuestion + 1}/{limit}
                </h5>
                <p className="text-center mt-3">
                  <img src={country.flags.png} alt="flag" height="180px" />
                </p>
                <div>
                  <p className="solution">Country : {solution}</p>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <p>
                        Capital : <span>{country.capital}</span>
                      </p>
                      <p>
                        Population : <span>{country.population}</span>
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                      <div>Spoken main languages</div>

                      {Object.entries(country.languages)
                        .slice(0, 4)
                        .map((lang, key) => (
                          <div key={"lang_" + key}> {lang[1]} </div>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3">
                  {currentQuestion + 1 !== limit ? (
                    <button onClick={() => nextQuestion()}>
                      Next question
                    </button>
                  ) : (
                    <button onClick={() => setFinish(true)}>
                      Finish quizz
                    </button>
                  )}
                </p>
              </div>
            ) : (
              <div>
                <h3>Your score is {numberCorrectAnswer}</h3>
                {result()}
                <button onClick={newGame}>Choose a game mode</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
