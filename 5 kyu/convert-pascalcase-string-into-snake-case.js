// http://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/solutions/javascript/me

function toUnderscore(string) {
  return string.toString().replace( /\B([A-Z])/g, "_$1").toLowerCase();
}