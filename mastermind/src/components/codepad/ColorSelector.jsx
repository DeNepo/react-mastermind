import { useContext } from "react";
import { MasterMindContext } from "../../context/master-mind-context";

export function ColorSelector(idx) {
  const state = useContext(MasterMindContext);
  const colors = state.possibleColors;
  return (
    <select className="color-picker" id={`colorpicker${idx}`} name="color" key={`${Math.random()}`}>
     {colors.map(c => <option key={`${Math.random()}`} value={c}>{c}</option>)}
    </select>);
}