// http://www.codewars.com/kata/is-integer-safe-to-use/solutions/javascript/me

function SafeInteger(n) {
  return n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER;
}