import { MasterMindContext } from "../../context/master-mind-context";
import { useContext } from "react";
import "./game-over.css";

export function GameOver() {
  const state = useContext(MasterMindContext);

  for (let guess of state.guesses) {
    if (guess[0] === state.code[0] && 
        guess[1] === state.code[1] && 
        guess[2] === state.code[2] && 
        guess[3] === state.code[3]) {
          return (<div className="game-over">
          You won!
          <button onClick={reloadPage} className="retry-button">play again</button>
        </div>);
        }
  }

  if (state.guesses.length >= 10) {
    return (
      <div className="game-over">
        Game over
        <br/>
        <button onClick={reloadPage} className="retry-button">try again</button>
      </div>
    )
  }

  return <div></div>;
}

function reloadPage() {
  window.location.reload();
}