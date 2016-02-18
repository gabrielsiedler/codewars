// http://www.codewars.com/kata/bit-counting/solutions/javascript/me

var countBits = function(n) {
  return (n >>> 0).toString(2).split('').filter(e => e === '1').length;
};