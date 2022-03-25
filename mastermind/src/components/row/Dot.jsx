export function dot({idx, color, correctColor}) {
  return (<div className={`entry ${color} ${determineCorrectness(idx, color, correctColor)}`}>

  </div>)
}