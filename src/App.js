import React, { useEffect, useState } from "react";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";
import Homepage from "./pages/hompage/Homepage";
import NavbarComponent from "./components/NavbarComponent";
import Mastermind from "./pages/mastermind/Mastermind";
import Memory from "./pages/memory/Memory";
import Wordle from "./pages/wordle/Wordle";
import CountriesQuiz from "./pages/countriesQuiz/CountriesQuiz";
import Piano from "./pages/piano/Piano";

function App() {
  // Mobile view
  const [isMobile, setIsMobile] = useState(false);
  function handleWindowSizeChange() {
    if (window.innerWidth && window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <NavbarComponent isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/mastermind" element={<Mastermind />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/countriesQuiz" element={<CountriesQuiz />} />
          <Route path="piano" element={<Piano />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
