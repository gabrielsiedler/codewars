// http://www.codewars.com/kata/sum-of-all-arguments/solutions/javascript/me

function sum() {
  return [].slice.call(arguments).reduce((a,b) => a+b);
}