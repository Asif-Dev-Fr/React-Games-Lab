import React, { useState } from "react";
import "../../assets/css/puzzle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Board from "./components/Board";
import Default from "../../assets/images/puzzleJapon.jpg";

const Puzzle = () => {
  const [showInput, setShowInput] = useState(false);
  const [image, setImage] = useState(null);

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

  return (
    <div className="puzzleContainer">
      <h2>Puzzle</h2>
      <div className="chooseImage">
        <Button variant="warning" onClick={() => chooseImage("default")}>
          Default Image
        </Button>
        <Button variant="dark" onClick={() => chooseImage("own")}>
          My own image
        </Button>
      </div>

      {showInput && (
        <Form.Group controlId="formFile" className="mt-3">
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

      {image && (
        <Board
          image={typeof image === "string" ? image : URL.createObjectURL(image)}
          width={500}
          height={500}
          pieces={5}
        />
      )}
    </div>
  );
};

export default Puzzle;
