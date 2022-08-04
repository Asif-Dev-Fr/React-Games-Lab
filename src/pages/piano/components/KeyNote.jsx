import React from "react";

const KeyNote = ({ note }) => {
  return (
    <>
      {note.keyLetter.includes("f") && note.keyLetter.length === 2 ? (
        <div className="singleKeyBlack"></div>
      ) : (
        <div className="singleKeyWhite" style={{ marginLeft: "-5px" }}>
          <span>{note.keyLetter}</span>
        </div>
      )}
    </>
  );
};

export default KeyNote;
