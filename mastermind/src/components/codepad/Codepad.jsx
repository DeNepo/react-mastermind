import { ColorSelector } from "./ColorSelector";
import './codepad.css';

export function CodePad({onGuess}) {

  function performGuess() {
    const color0 = document.getElementById('colorpicker0').value;
    const color1 = document.getElementById('colorpicker1').value;
    const color2 = document.getElementById('colorpicker2').value;
    const color3 = document.getElementById('colorpicker3').value;
    onGuess([color0, color1, color2, color3]);
  }

  return (
    <>
    <div>
      {[0,1,2,3].map((x, idx) => ColorSelector(idx))}
    </div>
    <button className="submit-btn" onClick={performGuess}>Submit</button>
    </> 
  )
}