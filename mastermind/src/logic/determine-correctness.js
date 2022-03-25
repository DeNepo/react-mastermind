export function determineCorrectness(index, color, correctColors){
  if (color === correctColors[index]) {
    return 'correct';
  }
  if(correctColors.includes(color)) {
    return 'wrong-place';
  }
  return 'wrong'
}