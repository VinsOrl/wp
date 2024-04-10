function daysInYear(n) {
  if (n % 4!== 0 || (n % 100 === 0 && n % 400!== 0)) {
    return 365;
  } else {
    return 366;
  }
}

console.log(daysInYear(2024));
console.log(daysInYear(2004));
console.log(daysInYear(1900));