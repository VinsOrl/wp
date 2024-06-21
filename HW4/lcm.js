function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0 || b === 0) {
    return 0;
  }
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));
console.log(lcm(7, 5));
console.log(lcm(0, 5));
console.log(lcm(21, 6));

//Source:chatgpt
