// http://www.codewars.com/kata/square-every-digit/solutions/javascript/me

const squareDigits = (n) => +(n+'').split('').map(x => x ** 2).join('')

// alternative solution
const squareDigits = (num) => {
  return parseInt(num.toString().split('').map((x) => x * x).join(''));
}