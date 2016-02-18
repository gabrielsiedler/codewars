// http://www.codewars.com/kata/trimming-a-string/solutions/javascript/me

function trim(arr, size) {
  if(arr.length <= size) { return arr; }

  let gap = (arr.length<=3) ? size : size-3; 
 
  return arr.split('').splice(0,gap).join('') + '...';
}