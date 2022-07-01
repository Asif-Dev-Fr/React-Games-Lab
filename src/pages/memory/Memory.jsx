import React, { useEffect } from "react";
import SingleCard from "./components/SingleCard";
import "../../assets/css/memory.css";
import helmet from "../../assets/images/helmet-1.png";
import potion from "../../assets/images/potion-1.png";
import ring from "../../assets/images/ring-1.png";
import scroll from "../../assets/images/scroll-1.png";
import shield from "../../assets/images/shield-1.png";
import sword from "../../assets/images/sword-1.png";
import { useState } from "react";

const cardImages = [
  { src: helmet, matched: false },
  { src: potion, matched: false },
  { src: ring, matched: false },
  { src: scroll, matched: false },
  { src: shield, matched: false },
  { src: sword, matched: false },
];

const Memory = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle Cards
  const shuffleCards = () => {
    // Duplicate images
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // start new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);

  const handleSelection = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="memory-containter text-center">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid row">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleSelection={handleSelection}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="mt-3">Turns: {turns}</p>
    </div>
  );
};

export default Memory;
