function matrixMul(a, b) {
  if (a[0].length!== b.length) {
  }

  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push([]);
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i].push(sum);
    }
  }

  return result;
}

const a = [[1, 4], [5, 7]];
const b = [[5, 9], [8, 3]];
const Mul = matrixMul(a, b);

console.log(Mul);