import React, { useEffect, useState } from "react";
import * as lettersList from "../../../assets/data/wordleData/letters.json";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(lettersList);
  return (
    <div className="keypad">
      {letters &&
        letters.alphabet &&
        letters.alphabet.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
