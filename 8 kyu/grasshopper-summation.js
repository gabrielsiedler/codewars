// http://www.codewars.com/kata/grasshopper-summation/solutions/javascript/me

var summation = function (num) {
  for(var i=1, count=0; i<=num; i++) { count += i; }
  return count;
}