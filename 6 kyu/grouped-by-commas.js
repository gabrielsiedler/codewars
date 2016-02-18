// http://www.codewars.com/kata/grouped-by-commas/solutions/javascript/me

function groupByCommas(n) {
  var _reverse = function (s) {
    return s.split('').reverse().join('');
  }
  return _reverse(_reverse(n.toString()).replace(/(\d{3})\B/g,'$1,'));
}