// http://www.codewars.com/kata/math-issues/solutions/javascript/me

Math.round = function(number) {
  var parse = parseInt(number);
  return ((number - parse) >= 0.5) ? ++parse : parse; 
};

Math.ceil = function(number) {
  var parse = parseInt(number);
  return ((number - parse) > 0) ? ++parse : parse; 
};

Math.floor = function(number) {
  return parseInt(number); 
};