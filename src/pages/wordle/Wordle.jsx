import { useEffect, useState } from 'react'
import "../../assets/css/wordle.css";
import * as wordleData from "../../assets/data/wordleData/wordle.json"
import WordleFunction from './components/WordleFunction';

const Wordle = () => {
  const [randomWord, setRandomWord] = useState(null)
  const [data] = useState(wordleData)

  useEffect(() => {
    const newWord = data.solutions[Math.floor(Math.random()*data.solutions.length)]
    console.log(newWord)
    setRandomWord(newWord.word)
  }, [data.solutions])   

  return (
    <div className="wordle-container text-center mt-4">
      <h1>Wordle</h1>
      {randomWord && <WordleFunction solution={randomWord} />} 
    </div>
  );
};

export default Wordle;
