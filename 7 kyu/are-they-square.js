// http://www.codewars.com/kata/are-they-square/solutions/javascript/me

const isSquare = arr => arr.length ? arr.every(v => /^\d+$/.test(Math.sqrt(v))) : undefined;