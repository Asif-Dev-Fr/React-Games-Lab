import React, { useEffect, useState } from "react";
import * as lettersList from "../../../assets/data/wordleData/letters.json";

const Keypad = () => {
  const [letters, setLetters] = useState(lettersList);
  return (
    <div className="keypad">
      {letters &&
        letters.alphabet &&
        letters.alphabet.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
};

export default Keypad;
