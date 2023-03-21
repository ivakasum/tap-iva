export function calculateWinner(squares: string[]) {

  const numberOfRows = Math.sqrt(squares.length)
  let table: string[][] = [...Array(numberOfRows)].map(() => Array(numberOfRows).fill(null))

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfRows; j++) {
      table[i][j] = squares[numberOfRows * i + j]
    }
  }

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 1, t = table[i][0]; j < numberOfRows && t; j++) {
      if ((j === numberOfRows - 1) && table[i][j] === t) return t;
      if (table[i][j] !== t) break;
    }
  }

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 1, t = table[0][i]; j < numberOfRows && t; j++) {
      if ((j === numberOfRows - 1) && table[j][i] === t) return t;
      if (table[j][i] !== t) break;
    }
  }

  for (let i = 1, t = table[0][0]; i < numberOfRows && t; i++) {
    if ((i === numberOfRows - 1) && table[i][i] === t) return t;
    if (table[i][i] !== t) break;
  }

  for (let i = 1, t = table[0][numberOfRows - 1]; i < numberOfRows && t; i++) {
    if ((i === numberOfRows - 1) && table[i][numberOfRows - i - 1] === t) return t;
    if (table[i][numberOfRows - i - 1] !== t) break;
  }

  for (let j = 0; j < squares.length; j++) {
    if (!squares[j]) return null;
  }

  return "";
}
