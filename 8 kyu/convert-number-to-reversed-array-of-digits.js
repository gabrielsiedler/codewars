// http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/solutions/javascript/me

const digitize = n => String(n).split('').reverse().map(Number);
