import React from "react";

const KeyNote = ({ note, findSound }) => {
  
  return (
    <>
      {note.keyLetter.includes("f") && note.keyLetter.length === 2 ? (
        <div
          className="singleKeyBlack"
          onClick={() => findSound(note.sound)}
        ></div>
      ) : (
        <div
          className="singleKeyWhite"
          style={{ marginLeft: "-5px" }}
          onClick={() => findSound(note.sound)}
        >
          <span>{note.keyLetter}</span>
        </div>
      )}
    </>
  );
};

export default KeyNote;
