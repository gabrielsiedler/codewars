// http://www.codewars.com/kata/simple-pig-latin/solutions/javascript/me

const pigIt = s => s.split(' ').map(c => `${c.split('').slice().splice(1).join('')}${c[0]}ay`).join(' ');