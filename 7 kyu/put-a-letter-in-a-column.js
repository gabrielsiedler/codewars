// http://www.codewars.com/kata/put-a-letter-in-a-column/solutions/javascript/me

const buildRowText = (i, c) => `| | | | | | | | | |`.split('|').map((v,j) => j-1 === i ? c : v).join('|');