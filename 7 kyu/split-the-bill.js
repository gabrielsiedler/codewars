// http://www.codewars.com/kata/split-the-bill/solutions/javascript/me

function splitTheBill(x) {;
  const sum = Object.keys(x).reduce((previous, next) => previous + x[next], 0) / Object.keys(x).length;
  Object.keys(x).forEach(v => x[v] = Number((x[v] - sum).toFixed(2)));
  return x;
}