// http://www.codewars.com/kata/smallest-unused-id/solutions/javascript/me

function nextId(ids){
  var count = 0;
  ids.forEach(function (id) {
    if (id !== count) {
      return -1;
    }
    count++;
  })
  
  return count;
}