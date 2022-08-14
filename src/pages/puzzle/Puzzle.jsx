import React, { useState } from "react";
import "../../assets/css/puzzle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Board from "./components/Board";
import Default from "../../assets/images/puzzleJapon.jpg";

const Puzzle = () => {
  const [showInput, setShowInput] = useState(false);
  const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  // Methods
  const chooseImage = (selection) => {
    if (selection === "default") {
      setShowInput(false);
      setImage(Default);
    } else if (selection === "own") {
      setImage(null);
      setShowInput(true);
    }
  };

  const chooseDifficulty = (number) => {
    setImage(null);
    setShowInput(false);

    switch (number) {
      case "easy":
        setDifficulty(3);
        break;

      case "intermediate":
        setDifficulty(4);
        break;

      case "hard":
        setDifficulty(5);
        break;

      default:
        break;
    }
  };

  return (
    <div className="puzzleContainer">
      <h2>Puzzle</h2>

      <div className="chooseDifficulty">
        <Button variant="warning" onClick={() => chooseDifficulty("easy")}>
          Easy
        </Button>
        <Button
          variant="warning"
          onClick={() => chooseDifficulty("intermediate")}
        >
          Intermediate
        </Button>
        <Button variant="warning" onClick={() => chooseDifficulty("hard")}>
          Hard
        </Button>
      </div>

      {difficulty && (
        <>
          <div className="chooseImage">
            <Button variant="success" onClick={() => chooseImage("default")}>
              Default Image
            </Button>
            <Button variant="dark" onClick={() => chooseImage("own")}>
              My own image
            </Button>
          </div>
          {showInput && (
            <Form.Group controlId="formFile">
              <Form.Control
                type="file"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setImage(event.target.files[0]);
                  setShowInput(false);
                }}
              />
            </Form.Group>
          )}
        </>
      )}

      {image && (
        <Board
          image={typeof image === "string" ? image : URL.createObjectURL(image)}
          width={difficulty * 100}
          height={difficulty * 100}
          pieces={difficulty}
        />
      )}
    </div>
  );
};

export default Puzzle;
