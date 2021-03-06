import { useState } from 'react';
import {
  MasterMindContext,
  startState,
} from '../../context/master-mind-context';
import { CodePad } from '../codepad/Codepad';
import { Row } from '../row/Row';
import './board.css';
import { GameOver } from '../game-over/GameOver';

const getRandomKey = () => Math.random() + '';

export const Board = () => {
  const [state, setState] = useState(startState);

  const addGuess = (newGuess) => {
    state.guesses.push(newGuess);
    setState({ ...state });
  };

  let rows = [...state.guesses];
  while (rows.length < 10) {
    rows.push(['empty', 'empty', 'empty', 'empty']);
  }
  rows = rows.slice(0, 10);

  return (
    <MasterMindContext.Provider value={state}>
      <div className="board">
        {rows.map((g) => (
          <Row key={getRandomKey()} values={g} />
        ))}
        <hr></hr>
        <CodePad onGuess={addGuess} />
        <GameOver />
      </div>
    </MasterMindContext.Provider>
  );
};
