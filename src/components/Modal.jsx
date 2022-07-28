import React from "react";

const Modal = ({
  isCorrect,
  solution,
  turn,
  closeSideMenu,
  gameMode,
  country,
  nextQuestion
}) => {
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
            <h2>{isCorrect ? "Right answer !" : "Wrong answer :("}</h2>
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
                  <div>Spoken languages</div>

                  {Object.entries(country.languages).map((lang, key) => (
                    <div key={"lang_"+ key}> {lang[1]} </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center">
              <button onClick={() => nextQuestion()}>Next question</button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
