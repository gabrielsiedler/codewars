// http://www.codewars.com/kata/recursion-number-1-factorial/solutions/javascript/me

const factorial = n => {
  if (n === 0) return 1;
  if (n <= 2) return n;

  return n * factorial(n-1);
};