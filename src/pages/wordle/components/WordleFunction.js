import React, { useEffect } from "react";
import useWordle from "../../../hooks/useWordle";

export default function WordleFunction({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);
  console.log(currentGuess);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  );
}
