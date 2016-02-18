// http://www.codewars.com/kata/failed-filter-bug-fixing-number-3/solutions/javascript/me

var FilterNumbers = function(str) {
  return str.split('').filter(c => /[^\d]/.test(c)).join('');
}