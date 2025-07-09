import "./Game.css";
import Square from "./Components/Square";
import { useState } from "react";

function Game() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  function handleButtonClick(i) {
    if (squares[i]) return;
    let newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }
  return (
    <div className="main-board">
      <div className="board-row">
        <Square value={squares[0]} onButtonClick={() => handleButtonClick(0)} />
        <Square value={squares[1]} onButtonClick={() => handleButtonClick(1)} />
        <Square value={squares[2]} onButtonClick={() => handleButtonClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onButtonClick={() => handleButtonClick(3)} />
        <Square value={squares[4]} onButtonClick={() => handleButtonClick(4)} />
        <Square value={squares[5]} onButtonClick={() => handleButtonClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onButtonClick={() => handleButtonClick(6)} />
        <Square value={squares[7]} onButtonClick={() => handleButtonClick(7)} />
        <Square value={squares[8]} onButtonClick={() => handleButtonClick(8)} />
      </div>
    </div>
  );
}

export default Game;
