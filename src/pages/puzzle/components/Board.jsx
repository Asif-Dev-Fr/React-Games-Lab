import React, { useEffect, useState } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { puzzleWrapperStyles, shuffle, isEqual } from "./utils";
import Tiles from "./Tiles";

const Board = (props) => {
  const { width, height, pieces, image } = props;
  console.log(image);
  const rootPositions = [...Array(pieces * pieces).keys()];
  const [positions, setPositions] = useState(shuffle(rootPositions));

  // Methods
  // const coords = {
  //   0: { x: 0, y: 0 },
  //   1: { x: 100, y: 0 },
  //   2: { x: 200, y: 0 },
  //   3: { x: 300, y: 0 },
  //   4: { x: 400, y: 0 },
  //   5: { x: 0, y: 100 },
  //   6: { x: 100, y: 100 },
  //   7: { x: 200, y: 100 },
  //   8: { x: 300, y: 100 },
  //   9: { x: 400, y: 100 },
  //   10: { x: 0, y: 200 },
  //   11: { x: 100, y: 200 },
  //   12: { x: 200, y: 200 },
  //   13: { x: 300, y: 200 },
  //   14: { x: 400, y: 200 },
  //   15: { x: 0, y: 300 },
  //   16: { x: 100, y: 300 },
  //   17: { x: 200, y: 300 },
  //   18: { x: 300, y: 300 },
  //   19: { x: 400, y: 300 },
  //   20: { x: 0, y: 400 },
  //   21: { x: 100, y: 400 },
  //   22: { x: 200, y: 400 },
  //   23: { x: 300, y: 400 },
  //   24: { x: 400, y: 400 },
  // };

  const coords = rootPositions.map((pos) => ({
    x: Math.floor((pos % pieces) * (width / pieces)),
    y: Math.floor(pos / pieces) * (height / pieces),
  }));

  console.log(coords);

  const onDropPiece = (sourcePosition, dropPosition) => {
    const oldPositions = positions.slice();
    const newPositions = [];

    for (let i in oldPositions) {
      const value = oldPositions[i];
      let newValue = value;

      if (value === sourcePosition) {
        newValue = dropPosition;
      } else if (value === dropPosition) {
        newValue = sourcePosition;
      }

      newPositions.push(newValue);
    }

    setPositions(newPositions);

    if (isEqual(rootPositions, newPositions)) {
      console.log("Done");
    }
  };

  const renderPieces = () =>
    positions.map((i) => (
      <Tiles
        key={i}
        position={i}
        onDropPiece={onDropPiece}
        {...coords[i]}
        {...props}
      />
    ));

  const createCanvas = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let cw = canvas.width;
    let ch = canvas.height;

    let rows = 5;
    let cols = 5;

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
        { col: 3, row: 0 },
        { col: 4, row: 0 },
        { col: 0, row: 1 },
        { col: 1, row: 1 },
        { col: 2, row: 1 },
        { col: 3, row: 1 },
        { col: 4, row: 1 },
        { col: 0, row: 2 },
        { col: 1, row: 2 },
        { col: 2, row: 2 },
        { col: 3, row: 2 },
        { col: 4, row: 2 },
        { col: 0, row: 3 },
        { col: 1, row: 3 },
        { col: 2, row: 3 },
        { col: 3, row: 3 },
        { col: 4, row: 3 },
        { col: 0, row: 4 },
        { col: 1, row: 4 },
        { col: 2, row: 4 },
        { col: 3, row: 4 },
        { col: 4, row: 4 },
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

  // useEffect(() => {
  //   createCanvas();
  // }, [image]);
  // return (
  //   image && <div className="mt-3">{/* <canvas id="canvas"></canvas> */}</div>
  // );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board" style={puzzleWrapperStyles({ width, height })}>
        {renderPieces()}
      </div>
      <style>
        {`
        .puzzle-piece:hover {
          opacity: 0.8;
        }
      `}
      </style>
    </DndProvider>
  );
};

export default Board;
