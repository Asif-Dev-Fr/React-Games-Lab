import React from "react";

const KeyNote = ({ note, handleClick, index, pressedKey }) => {
  return (
    <>
      {note.keyLetter.includes("f") && note.keyLetter.length === 2 ? (
        <div
          className="singleKeyBlack"
          id={index}
          style={{
            backgroundColor:
              pressedKey === note.keyLetter ? "lightseagreen" : "#000",
          }}
          onClick={(e) => handleClick(note.keyLetter, note.sound)}
        ></div>
      ) : (
        <div
          className="singleKeyWhite"
          id={index}
          style={{
            backgroundColor:
              pressedKey === note.keyLetter ? "lightseagreen" : "#fff",
          }}
          onClick={(e) => handleClick(note.keyLetter, note.sound)}
        >
          <span>{note.keyLetter}</span>
        </div>
      )}
    </>
  );
};

export default KeyNote;
