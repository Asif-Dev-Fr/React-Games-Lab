import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";
import Homepage from "./pages/hompage/Homepage";
import NavbarComponent from "./components/NavbarComponent";
import Mastermind from "./pages/mastermind/Mastermind";
import Memory from "./pages/memory/Memory";
import Wordle from "./pages/wordle/Wordle";
import CountriesQuizz from "./pages/countriesQuizz/CountriesQuizz";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/mastermind" element={<Mastermind />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/countriesQuizz" element={<CountriesQuizz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
