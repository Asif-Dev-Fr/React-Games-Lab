import React, { useEffect, useState } from "react";
import useWordle from "../../../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function WordleFunction({ solution }) {
  const {
    currentGuess,
    handleKeyup,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    setIsCorrect,
    setGuesses,
    setUsedKeys,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    } else if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn, showModal]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect);
  // }, [guesses, turn, isCorrect]);

  const closeSideMenu = () => {
    if (showModal) {
      setIsCorrect(false);
      setGuesses([...Array(6)]);
      setUsedKeys({});
      setShowModal(false);
      window.location.reload();
    }
  };

  const keypadLetters = (letter) => {
    console.log(letter)
    let obj = {
      key: letter
    }
    handleKeyup(obj)
  }

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} keypadLetters={keypadLetters} />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          closeSideMenu={closeSideMenu}
        />
      )}
    </div>
  );
}
