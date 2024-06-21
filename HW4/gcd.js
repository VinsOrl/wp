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

console.log(gcd(48, 18));
console.log(gcd(56, 98));
console.log(gcd(101, 103));

//source: chatgpt
