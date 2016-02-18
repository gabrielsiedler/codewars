// http://www.codewars.com/kata/vowel-count/solutions/javascript/me

function getCount(str) {
  return str.replace(/[^aeiou]/g, '').length;
}