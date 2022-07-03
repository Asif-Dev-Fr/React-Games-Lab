import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <button className="btn btn-info">
        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      </button>
      <button className="btn btn-info mt-2">
        <Link to="/mastermind">Mastermind</Link>
      </button>
      <button className="btn btn-info mt-2">
        <Link to="/memory">Memory</Link>
      </button>
      <button className="btn btn-info mt-2">
        <Link to="/wordle">Wordle</Link>
      </button>
    </div>
  );
};

export default Homepage;
