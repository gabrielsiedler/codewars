// http://www.codewars.com/kata/count-by-x/solutions/javascript/me

function countBy(x, n) {
  var output = [];
  for (var i = 1; n > 0; i++) {
    if(i%x === 0) {
      output.push(i);
      n--;
    }
  }
  return output;
}