import React, { useState } from "react";
import "../../assets/css/ticTacToe.css";
import cross from "../../assets/images/croix.png";
import round from "../../assets/images/rond.png";
import Button from "react-bootstrap/Button";

const TicTacToe = () => {
  const [scorePlayerOne, setScorePlayerOne] = useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [isActive] = useState({
    topLeft: true,
    topCenter: true,
    topRight: true,
    middleLeft: true,
    middleCenter: true,
    middleRight: true,
    bottomLeft: true,
    bottomCenter: true,
    bottomRight: true,
  });

  const toggleClass = (e) => {
    const targetId = e.target.id;
    // add element in the box
    if (isActive[targetId] === true) {
      let img = document.createElement("img");
      img.src = currentPlayer === 1 ? cross : round;
      img.style = "width: 135px";
      img.id = currentPlayer === 1 ? "cross" : "round";
      document.getElementById(targetId).appendChild(img);
      isActive[targetId] = false;
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const displaySameStructureElement = (boxOne, boxTwo, boxThree) => {
    if (
      isActive[boxOne] === false &&
      isActive[boxTwo] === false &&
      isActive[boxThree] === false
    ) {
      const boxElementOne = document.getElementById(boxOne);
      const boxElementTwo = document.getElementById(boxTwo);
      const boxElementThree = document.getElementById(boxThree);
      if (
        boxElementOne.innerHTML.includes("cross") &&
        boxElementTwo.innerHTML.includes("cross") &&
        boxElementThree.innerHTML.includes("cross")
      ) {
        setScorePlayerOne(scorePlayerOne + 1);
        setCurrentPlayer(1);
        setTimeout(reset, 500);
      } else if (
        boxElementOne.innerHTML.includes("round") &&
        boxElementTwo.innerHTML.includes("round") &&
        boxElementThree.innerHTML.includes("round")
      ) {
        setScorePlayerTwo(scorePlayerTwo + 1);
        setCurrentPlayer(1);
        setTimeout(reset, 500);
      }
    }
  };
  const checkWin = () => {
    for (let firstArray of winCombinaison) {
      displaySameStructureElement(firstArray[0], firstArray[1], firstArray[2]);
    }
  };

  const toggleAndCheck = async (e) => {
    toggleClass(e);
    checkWin(isActive);
  };

  const winCombinaison = [
    ["topLeft", "topCenter", "topRight"],
    ["middleLeft", "middleCenter", "middleRight"],
    ["bottomLeft", "bottomCenter", "bottomRight"],

    ["topLeft", "middleLeft", "bottomLeft"],
    ["topCenter", "middleCenter", "bottomCenter"],
    ["topRight", "middleRight", "bottomRight"],

    ["topLeft", "middleCenter", "bottomRight"],
    ["topRight", "middleCenter", "bottomLeft"],
  ];

  const reset = () => {
    for (let el in isActive) {
      let findElement = document.getElementById(el);
      if (findElement.innerHTML && isActive[el] === false) {
        isActive[el] = true;
        findElement.innerHTML = "";
      }
    }
  };

  return (
    <div className="ticTacToe">
      <div className="text-center">
        <h1 className="resultPlayer ">Tic Tac Toe</h1>
        <div className="d-flex justify-content-center scoreBoard">
          <div className="playerOne col-5 ">
            <img src={cross} alt="cross" width="50" />
            <span>Player 1 :</span> {scorePlayerOne}
          </div>
          <div className="playerTwo col-5 ">
            <img src={round} alt="round" width="50" />
            <span>Player 2 :</span> {scorePlayerTwo}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center rowOne">
          <div
            id="topLeft"
            style={isActive["topLeft"] === true ? { cursor: "pointer" } : {}}
            className={"topLeft col-lg-4 centerElement"}
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="topCenter"
            style={isActive["topCenter"] === true ? { cursor: "pointer" } : {}}
            className={"topMiddle col-lg-4 centerElement"}
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="topRight"
            style={isActive["topRight"] === true ? { cursor: "pointer" } : {}}
            className="topRight col-lg-4 "
            onClick={(e) => toggleAndCheck(e)}
          ></div>
        </div>
        <div className="d-flex justify-content-center rowTwo">
          <div
            id="middleLeft"
            style={isActive["middleLeft"] === true ? { cursor: "pointer" } : {}}
            className="MiddleLeft col-lg-4 "
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="middleCenter"
            style={
              isActive["middleCenter"] === true ? { cursor: "pointer" } : {}
            }
            className="MiddleCenter col-lg-4 "
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="middleRight"
            style={
              isActive["middleRight"] === true ? { cursor: "pointer" } : {}
            }
            className="MiddleRight col-lg-4 "
            onClick={(e) => toggleAndCheck(e)}
          ></div>
        </div>
        <div className="d-flex justify-content-center rowThree">
          <div
            id="bottomLeft"
            style={isActive["bottomLeft"] === true ? { cursor: "pointer" } : {}}
            className="BottomLeft col-lg-4"
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="bottomCenter"
            style={
              isActive["bottomCenter"] === true ? { cursor: "pointer" } : {}
            }
            className="BottomCenter col-lg-4"
            onClick={(e) => toggleAndCheck(e)}
          ></div>
          <div
            id="bottomRight"
            style={
              isActive["bottomRight"] === true ? { cursor: "pointer" } : {}
            }
            className="BottomRight col-lg-4"
            onClick={(e) => toggleAndCheck(e)}
          ></div>
        </div>
        <div className="reset text-center mt-4">
          <Button variant="dark" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
