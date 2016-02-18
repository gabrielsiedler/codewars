// http://www.codewars.com/kata/the-tale-of-two-zeros/solutions/javascript/me

const isNegativeZero = x => typeof x !== 'string' && (1/x) === -Infinity;