// http://www.codewars.com/kata/array-dot-diff/solutions/javascript/me

function array_diff(a, b) {
  a = a.sort();
  b = b.sort();
  var output = [];
  
  for(i=0; i<a.length; i++) {
    var found = false;
    for(j=0; j<b.length; j++) {
      if(a[i] == b[j]) {
        found = true;
        break;
      }
      
      if(b[j] > a[i]) { 
        break;
      }
    }
    if(!found) {
      output.push(a[i]);
    }
  }
  
  return output;
}