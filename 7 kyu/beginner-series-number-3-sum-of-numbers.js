// http://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/solutions/javascript/me

const GetSum = (a,b) => {
  let v = a<b ? { min: a, max: b} : { min: b, max: a};
  let sum = 0;
  for (let i = v.min; i <= v.max; i++) {
    sum += i;
  }
  return sum;
}