import React from "react";

const Modal = ({ isCorrect, solution, turn, closeSideMenu }) => {
  return (
    <div className="wordleModal" onClick={() => closeSideMenu()}>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">Solution : {solution}</p>
          <p>
            You found the solution in {turn} {turn === 1 ? "guess" : "guesses"}{" "}
            :)
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
  );
};

export default Modal;
