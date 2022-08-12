import React, { useEffect, useState } from "react";

const Board = ({ image }) => {
  console.log(image);
  const [newImage, setNewImage] = useState();

  const createCanvas = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let cw = canvas.width;
    let ch = canvas.height;

    let rows = 3;
    let cols = 3;

    let img = new Image();
    img.onload = start;
    img.src = typeof image === "string" ? image : URL.createObjectURL(image);
    function start() {
      let iw = (canvas.width = img.width);
      let ih = (canvas.height = img.height);
      let pieceWidth = iw / cols;
      let pieceHeight = ih / rows;

      let pieces = [
        { col: 0, row: 0 },
        { col: 1, row: 0 },
        { col: 2, row: 0 },
        { col: 0, row: 1 },
        { col: 1, row: 1 },
        { col: 2, row: 1 },
        { col: 0, row: 2 },
        { col: 1, row: 2 },
        { col: 2, row: 2 },
      ];

      pieces.sort(() => 0.5 - Math.random()); 

      let i = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let p = pieces[i++];
          ctx.drawImage(
            // from the original image
            img,
            // take the next x,y piece
            x * pieceWidth,
            y * pieceHeight,
            pieceWidth,
            pieceHeight,
            // draw it on canvas based on the shuffled pieces[] array
            p.col * pieceWidth,
            p.row * pieceHeight,
            pieceWidth,
            pieceHeight
          );
        }
      }
    }
  };

  useEffect(() => {
    createCanvas();
  }, [image]);
  return (
    <div>
      {/* {image && (
        <img
          alt="puzzle image"
          src={typeof image === "string" ? image : URL.createObjectURL(image)}
        />
      )} */}
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Board;
