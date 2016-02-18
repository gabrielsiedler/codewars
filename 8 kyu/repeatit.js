// http://www.codewars.com/kata/repeatit/solutions/javascript/me

const repeatIt = (str, n) => (typeof str === 'string') ? (new Array(n+1)).join(str) : 'Not a string';