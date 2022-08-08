import React from "react";

const KeyNote = ({ note, handleClick, index }) => {
  return (
    <>
      {note.keyLetter.includes("f") && note.keyLetter.length === 2 ? (
        <div
          className="singleKeyBlack"
          id={index}
          onClick={(e) => handleClick(e, note.sound)}
        ></div>
      ) : (
        <div
          className="singleKeyWhite"
          id={index}
          onClick={(e) => handleClick(e, note.sound)}
        >
          <span>{note.keyLetter}</span>
        </div>
      )}
    </>
  );
};

export default KeyNote;
