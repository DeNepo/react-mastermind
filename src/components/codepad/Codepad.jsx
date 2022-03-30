import { ColorSelector } from './ColorSelector';
import './codepad.css';

export const CodePad = ({ onGuess }) => {
  const performGuess = (event) => {
    const color0 = event.target.form.color0.value;
    const color1 = event.target.form.color1.value;
    const color2 = event.target.form.color2.value;
    const color3 = event.target.form.color3.value;
    onGuess([color0, color1, color2, color3]);
  };

  return (
    <form>
      <div>{[0, 1, 2, 3].map((x, idx) => ColorSelector(idx))}</div>
      <input
        type="button"
        className="submit-btn"
        onClick={performGuess}
        value="submit"
      />
    </form>
  );
};
