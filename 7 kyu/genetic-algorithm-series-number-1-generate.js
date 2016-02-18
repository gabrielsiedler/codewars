// http://www.codewars.com/kata/genetic-algorithm-series-number-1-generate/solutions/javascript/me

const generate = l => Array(l+1).join('-').split('').map(() => String(Math.round(Math.random()))).join('');