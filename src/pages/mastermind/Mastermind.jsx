import React, { useState } from "react";
import "../../assets/css/mastermind.css";

const Mastermind = () => {
  const [score, setScore] = useState(10000);
  const [shapeSelection, setShapeSelection] = useState({});
  const [shapeColor, setShapeColor] = useState({});
  const defaultColor = "#ffffff";
  const [showColor, setShowColor] = useState(false);

  // Methods
  const handleShape = (row, shape, action, color = "") => {
    console.log("row", row, "shape", shape);
    if (action === "createObject") {
      setShapeSelection({
        ...shapeSelection,
        [row]: {
          ...shapeSelection[row],
          [shape]: {
            enable:
              shapeSelection[row] &&
              shapeSelection[row][shape] &&
              shapeSelection[row][shape]["enable"]
                ? !shapeSelection[row][shape]["enable"]
                : true,
          },
        },
      });
      console.log("dans le if");
    } else if (action === "addColor") {
      setShapeColor({
        ...shapeColor,
        [row]: {
          ...shapeColor[row],
          [shape]: {
            color,
          },
        },
      });

      setShapeSelection({
        ...shapeSelection,
        [row]: {
          ...shapeSelection[row],
          [shape]: {
            enable: false,
          },
        },
      });

      console.log("dans le else", shapeColor, shapeSelection);
    }
  };

  const rowDisabled = (row, shape) => {
    // let addOneRow = row + 1;
    // if(shapeSelection[addOneRow] && )
    return false;
  };

  return (
    <div className="mastermind-container">
      <div className="board">
        <h1 className="text-center"> Mastermind </h1>
        <h3 className="text-center mb-3">Score : {score}</h3>
        <div className="game-board mb-3">
          {Array.from(Array(10), (emptyOne, rowKey) => {
            return (
              <div className="board-row" key={"board_row_" + rowKey}>
                <div className="playable">
                  {Array.from(Array(4), (emptyTwo, shapeKey) => {
                    return (
                      <div
                        style={
                          shapeColor[rowKey] &&
                          shapeColor[rowKey][shapeKey] &&
                          shapeColor[rowKey][shapeKey]["color"]
                            ? {
                                border:
                                  "5px solid " +
                                  shapeColor[rowKey][shapeKey]["color"],
                              }
                            : { border: "5px solid " + defaultColor }
                        }
                        className="shape"
                        key={"playable_" + shapeKey + "_boardkey_" + rowKey}
                      >
                        <button
                          style={
                            shapeColor[rowKey] &&
                            shapeColor[rowKey][shapeKey] &&
                            shapeColor[rowKey][shapeKey]["color"]
                              ? {
                                  backgroundColor:
                                    shapeColor[rowKey][shapeKey]["color"],
                                }
                              : { backgroundColor: "#2c3e50" }
                          }
                          onClick={() =>
                            handleShape(rowKey, shapeKey, "createObject")
                          }
                          // disabled={() => rowDisabled(rowKey, shapeKey)}
                        >
                          {shapeSelection[rowKey] &&
                            shapeSelection[rowKey][shapeKey] &&
                            shapeSelection[rowKey][shapeKey]["enable"] ===
                              true && (
                              <div className="optionsParent">
                                <div className="optionsChild">
                                  <div className="optionsRow row">
                                    <span
                                      className="red col-6"
                                      onClick={() =>
                                        handleShape(
                                          rowKey,
                                          shapeKey,
                                          "addColor",
                                          "red"
                                        )
                                      }
                                    ></span>
                                    <span
                                      className="blue col-6"
                                      onClick={() =>
                                        handleShape(
                                          rowKey,
                                          shapeKey,
                                          "addColor",
                                          "blue"
                                        )
                                      }
                                    ></span>
                                  </div>
                                  <div className="optionsRow row">
                                    <span
                                      className="yellow col-6"
                                      onClick={() =>
                                        handleShape(
                                          rowKey,
                                          shapeKey,
                                          "addColor",
                                          "yellow"
                                        )
                                      }
                                    ></span>
                                    <span
                                      className="green col-6"
                                      onClick={() =>
                                        handleShape(
                                          rowKey,
                                          shapeKey,
                                          "addColor",
                                          "green"
                                        )
                                      }
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            )}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="results">Results {+(rowKey + 1)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mastermind;
