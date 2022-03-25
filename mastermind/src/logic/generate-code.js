import  { colors } from '../model/colors'

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

export function generateCode() {
  return [1, 2, 3, 4].map(x => getRandomColor());
}