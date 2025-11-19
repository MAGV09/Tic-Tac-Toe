import { useState } from 'react';
import './App.css';
import grids from './data.js';
import Scoreboard from './components/Scoreboard.jsx';
function App() {
  const [value, setValue] = useState('X');
  const [scoreboard, setScore] = useState({
    player1: 0,
    player2: 0,
    roundCount: 1,
  });
  const [winner, setWinner] = useState('');
  function checkPattern(grids,val) {
    const case1 =
      grids[0].value === val &&
      grids[1].value === val &&
      grids[2].value === val;
    const case2 =
      grids[3].value === val &&
      grids[4].value === val &&
      grids[5].value === val;
    const case3 =
      grids[6].value === val &&
      grids[7].value === val &&
      grids[8].value === val;
    const case4 =
      grids[0].value === val &&
      grids[4].value === val &&
      grids[8].value === val;
    const case5 =
      grids[2].value === val &&
      grids[4].value === val &&
      grids[6].value === val;
    const case6 =
      grids[0].value === val &&
      grids[3].value === val &&
      grids[6].value === val;
    const case7 =
      grids[1].value === val &&
      grids[4].value === val &&
      grids[7].value === val;
    const case8 =
      grids[2].value === val &&
      grids[5].value === val &&
      grids[8].value === val;

    const winningPatern = [case1, case2, case3, case4, case5, case6, case7, case8];

    winningPatern.forEach((item) => {
      if (item) {
        if (val == 'X') {
          setWinner('X');
          setScore({
            ...scoreboard,
            player1: scoreboard.player1 + 1,
            roundCount: scoreboard.roundCount + 1,
          });
        } else {
          setWinner('O');
          setScore({
            ...scoreboard,
            player2: scoreboard.player2 + 1,
            roundCount: scoreboard.roundCount + 1,
          });
        }
        setTimeout(reset, 2000);
      }
    });
  }
  function draw() {
    if (
      grids.every(
        (item) => item.value === 'X' || (item.value === 'O' && winner === '')
      )
    ) {
      setScore({
        ...scoreboard,
        roundCount: scoreboard.roundCount + 1,
      });
      setWinner('Draw');
      setTimeout(reset, 2000);
    }
  }
  function reset() {
    grids.map((grid) => (grid.value = ''));
    setWinner('');
  }

  function handleClick(grid) {
    if (grid.value !== 'X' && grid.value !== 'O') {
      grid.value = value;
      setValue(value === 'X' ? 'O' : 'X');
    }
    checkPattern(grids,'X');
    checkPattern(grids,'O');
    draw();
  }
  return (
    <div className="container">
      <div className="scoreboard-container">
        <Scoreboard title={'X'} content={scoreboard.player1} />
        <Scoreboard title={'Round ' + scoreboard.roundCount} content={value} />
        {winner && <h2>{winner}</h2>}
        <Scoreboard title={'O'} content={scoreboard.player2} />
      </div>
      <div className="grid-container">
        {grids.map((grid) => (
          <div key={grid.id} onClick={() => handleClick(grid)}>
            {grid.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
