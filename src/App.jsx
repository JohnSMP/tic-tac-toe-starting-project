import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/Gameboard.jsx';
import Log from './components/Log.jsx'

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  } 

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActiverPlayer] = useState('X');

  const activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActiverPlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { rox: rowIndex, col: colIndex } , player: currentPlayer },
        ...prevTurns
      ]
      
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
