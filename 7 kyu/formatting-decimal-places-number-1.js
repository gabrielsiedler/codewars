// http://www.codewars.com/kata/formatting-decimal-places-number-1/solutions/javascript/me

const twoDecimalPlaces = n => +(String(n).match(/-?\d+\.\d{2}/)[0]);