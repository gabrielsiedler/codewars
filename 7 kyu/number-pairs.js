// http://www.codewars.com/kata/number-pairs/solutions/javascript/me

const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));