import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
  return (
    <div className="game">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          className="square"
        />
      ))}
    </div>
  );
}

export default Board;
