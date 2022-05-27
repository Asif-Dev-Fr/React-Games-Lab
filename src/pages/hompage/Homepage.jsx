import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <button className="btn btn-info">
        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      </button>
    </div>
  );
};

export default Homepage;
