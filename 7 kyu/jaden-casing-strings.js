// http://www.codewars.com/kata/jaden-casing-strings/solutions/javascript/me

String.prototype.toJadenCase = function () {
  return this.split(' ').map(v => v[0].toUpperCase() + v.slice(1,v.length)).join(' ');
};