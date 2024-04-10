function vectorAdd(a, b) {
  if (a.length!== b.length) {
  }

  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}

const a = [1, 4, 3];
const b = [4, 9, 6];
const sum = vectorAdd(a, b);

console.log(sum);