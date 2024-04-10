function matrixAdd(a, b) {
  if (a.length!== b.length || a[0].length!== b[0].length) {
  }

  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push([]);
    for (let j = 0; j < a[i].length; j++) {
      result[i].push(a[i][j] + b[i][j]);
    }
  }

  return result;
}

const a = [[1, 2, 3], [4, 5, 6]];
const b = [[7, 8, 9], [10, 11, 12]];
const sum = matrixAdd(a, b);

console.log(sum);