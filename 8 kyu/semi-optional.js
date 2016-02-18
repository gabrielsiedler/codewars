// http://www.codewars.com/kata/semi-optional/solutions/javascript/me

function wrap(value) {
  this.value = value;
  
  return { value: value }
}