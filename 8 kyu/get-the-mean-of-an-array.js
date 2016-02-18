// http://www.codewars.com/kata/get-the-mean-of-an-array/solutions/javascript/me

const getAverage = m => Math.floor(m.reduce(function (p, c) { return p+c; })/m.length);