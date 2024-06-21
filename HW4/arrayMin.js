function arrayMin(a) {
  let min = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
}

//source code: blackbox Ai
