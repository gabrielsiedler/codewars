// http://www.codewars.com/kata/the-span-function/solutions/javascript/me

function span(arr, predicate) {
  var output = [[],[]];

  for(var i=0, pos = 0; i<arr.length; i++) {
    if(!predicate(arr[i])) {
      pos = 1;
    }
    output[pos].push(arr[i]);
  }

  return output;
}