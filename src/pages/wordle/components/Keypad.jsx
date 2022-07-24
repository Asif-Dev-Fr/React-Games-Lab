import React, { useEffect, useState } from "react";
import * as lettersList from "../../../assets/data/wordleData/letters.json";

const Keypad = ({ usedKeys, keypadLetters }) => {
  const [letters, setLetters] = useState(lettersList);
  return (
    <>
      <div className="keypad">
        {letters &&
          letters.alphabet &&
          letters.alphabet.map((l) => {
            const color = usedKeys[l.key];
            return (
              <div
                key={l.key}
                className={color}
                onClick={() => keypadLetters(l.key)}
              >
                {l.key.toUpperCase()}
              </div>
            );
          })}
      </div>
      <div className="row buttons justify-content-center">
        <div
          className="btn btn-danger col-lg-5 col-12"
          onClick={() => keypadLetters("Backspace")}
        >
          Delete
        </div>
        <div
          className="btn btn-info col-lg-5 col-12"
          onClick={() => keypadLetters("Enter")}
        >
          Enter
        </div>
      </div>
    </>
  );
};

export default Keypad;
