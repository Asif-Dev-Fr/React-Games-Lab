import "./SingleCard.css";
import cover from "../../../assets/images/cover.png";

import React from "react";

const SingleCard = ({ card, handleSelection, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleSelection(card);
    }
  };

  return (
    <div className="card col-lg-3 col-12">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={cover} onClick={handleClick} alt="cover" />
      </div>
    </div>
  );
};

export default SingleCard;
