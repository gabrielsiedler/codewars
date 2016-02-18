// http://www.codewars.com/kata/split-in-parts/solutions/javascript/me

const splitInParts = (s, l) => s.match(new RegExp('.{1,' + l + '}','g')).join(' ');

// alternative solution
const splitInParts = (s, l) => {
  var r = new RegExp('.{1,' + l + '}','g');
  return s.match(r).join(' ');
};