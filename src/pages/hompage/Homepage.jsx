import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/tic-tac-toe">
        <Button variant="dark">Tic Tac Toe </Button>
      </Link>

      <Link to="/mastermind">
        <Button variant="dark" className="mt-2">
          Mastermind
        </Button>
      </Link>

      <Link to="/memory">
        <Button variant="dark" className="mt-2">
          Memory
        </Button>
      </Link>

      <Link to="/wordle">
        <Button variant="dark" className="mt-2">
          Wordle
        </Button>
      </Link>

      <Link to="/countriesQuiz">
        <Button variant="dark" className="mt-2">
          Countries Quizz
        </Button>
      </Link>
    </div>
  );
};

export default Homepage;
