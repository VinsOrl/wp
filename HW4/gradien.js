function gradient(f, p, h = 1e-5) {
  if (!Array.isArray(p)) {
    throw new Error("Point p should be an array");
  }

  let grad = new Array(p.length).fill(0);

  for (let i = 0; i < p.length; i++) {
    let p1 = p.slice();
    let p2 = p.slice();
    p1[i] += h;
    p2[i] -= h;
    grad[i] = (f(p1) - f(p2)) / (2 * h);
  }
  return grad;
}

function anotherFunction(point) {
  let x = point[0];
  let y = point[1];
  let z = point[2];
  return x * x + y * y + z * z;
}

let point = [1, 2, 3];
let grad = gradient(anotherFunction, point);
console.log(grad);
