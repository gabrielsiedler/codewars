// http://www.codewars.com/kata/round-to-the-next-5/solutions/javascript/me

const roundToNext5 = n => n%5 === 0 ? n : n + (5-n%5);