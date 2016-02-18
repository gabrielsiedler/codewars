// http://www.codewars.com/kata/mumbling/solutions/javascript/me

function accum(s) {
  let output = '';
  let c = null;
  for (let i = 0; i < s.length; i++) {
    c = s[i].toLowerCase();
    for (let j = 0; j <= i; j++) {
      output += (j === 0) ? c.toUpperCase() : c;
    }
    if (i < s.length-1) {
      output += '-';
    }
  }
  
  return output;
}