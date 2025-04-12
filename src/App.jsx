import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/Gameboard.jsx';

function App() {
  const [activePlayer, setActiverPlayer] = useState('X');

  function handleSelectSquare() {
    setActiverPlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
