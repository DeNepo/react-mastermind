function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function generateCode(colors) {
  return [1, 2, 3, 4].map((x) => getRandomColor(colors));
}
