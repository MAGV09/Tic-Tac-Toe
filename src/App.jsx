import { useState } from 'react';
import './App.css';
import grids from './data.js';

function App() {
  const [value, setValue] = useState('X');

  function handleClick(grid) {
    if (grid.value !== 'X' && grid.value !== 'O') {
      grid.value = value;
      setValue(value === 'X' ? 'O' : 'X');
    }
  }
  return (
    <div className="container">
      <div>Scoreboard</div>
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
