// http://www.codewars.com/kata/valid-parentheses/solutions/javascript/me

function validParentheses(parens){
  var stack = [];

  parens.split('').forEach(function (par) {
    if(stack.length && par === ')' && stack[stack.length-1] === '(') {
      stack.pop();
    } else {
      stack.push(par);
    }
  });

  return !stack.length;
}