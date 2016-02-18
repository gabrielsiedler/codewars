// http://www.codewars.com/kata/valid-braces/solutions/javascript/me

function validBraces(braces){
  var stack = [], invalid = braces.split('').filter(function hasInvalid (c) {
    if(/[[{(]/.test(c)) { stack.push(c); }
    else { if(!stack.length || c.charCodeAt(0) - stack.pop().charCodeAt(0) > 2) { return true; } }
  });
  if(invalid.length || stack.length > 0) { return false; }
  return true;
}