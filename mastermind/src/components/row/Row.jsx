import { MasterMindContext } from "../../context/master-mind-context";
import { useContext } from "react";
import { determineCorrectness } from "../../logic/determine-correctness";
import "./row.css";

export function Row({values}) {
  const state = useContext(MasterMindContext);

  console.log("correct code", state.code, "guess:", values);

  return (
    <div className="row">
      <div className={`entry ${values[0]} ${determineCorrectness(0, values[0], state.code)}`}></div>
      <div className={`entry ${values[1]} ${determineCorrectness(1, values[1], state.code)}`}></div>
      <div className={`entry ${values[2]} ${determineCorrectness(2, values[2], state.code)}`}></div>
      <div className={`entry ${values[3]} ${determineCorrectness(3, values[3], state.code)}`}></div>
    </div>)
}

