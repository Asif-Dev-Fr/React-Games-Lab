import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";
import Homepage from "./pages/hompage/Homepage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
