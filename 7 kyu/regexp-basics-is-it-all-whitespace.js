// http://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/solutions/javascript/me

Object.assign(String.prototype, {
  whitespace () {
    return /^[\s\r\n\t]*$/.test(this);
  }
});