// http://www.codewars.com/kata/ho-ho-ho-with-functions/solutions/javascript/me

function ho() {
  return Object.keys(arguments).length ? 'Ho ' + arguments[0] : 'Ho!';
}