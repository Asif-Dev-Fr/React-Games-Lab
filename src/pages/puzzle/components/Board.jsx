import React from "react";

const Board = ({ image }) => {
  console.log(image);
  return (
    <div>
      {image && (
        <img
          alt="puzzle image"
          src={typeof image === "string" ? image : URL.createObjectURL(image)}
        />
      )}
    </div>
  );
};

export default Board;
