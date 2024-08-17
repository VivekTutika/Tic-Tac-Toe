import React, { useState, useEffect } from 'react';
import Board from './Board';
import http from '../http';
import { Link } from 'react-router-dom';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('Next player: X');

  useEffect(() => {
    if (gameStatus.includes('Winner') || gameStatus === 'Draw') {
      const winner = gameStatus.includes('Winner') ? gameStatus.split(': ')[1] : 'Draw';
      const result = { 
        winner: winner,
        date: new Date().toISOString(),
      };
      http.post('/api/results', result)
        .then(response => console.log('Game result saved:', response.data))
        .catch(error => console.error('Error saving game result:', error));
    }
  }, [gameStatus]);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    updateGameStatus(newSquares);
  };

  const updateGameStatus = (squares) => {
    const winner = calculateWinner(squares);
    if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else if (squares.every(square => square)) {
      setGameStatus('Draw');
    } else {
      setGameStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus('Next player: X');
  };

  const handleNewGame = () => {
    handleReset();
  };

  return (
    <div className="game-container">
      <div className="game-board">
        <h1>Tic-Tac-Toe</h1>
        <div className="status">{gameStatus}</div>
        <Board squares={squares} onClick={handleClick} />
        <div className="controls">
          {gameStatus.includes('Winner') || gameStatus === 'Draw' ? (
            <button id="newbtn" onClick={handleNewGame}>New Game</button>
          ) : (
            <button id="resetbtn" onClick={handleReset}>Reset</button>
          )}
          <Link to="/recent-wins">
              <button id="recentWinsBtn">Recent Wins</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Game;
