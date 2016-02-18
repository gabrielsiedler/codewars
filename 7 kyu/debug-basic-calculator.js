// http://www.codewars.com/kata/debug-basic-calculator/solutions/javascript/me

const calculate = (a, o, b) => {
  switch (o) {
    case '+':
      return a+b;
    case '-':
      return a-b;
    case '*':
      return a*b;
    case '/':
      return b === 0 ? null : a/b;
    default:
      return null;
  }
};