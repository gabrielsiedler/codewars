// http://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number/solutions/javascript/me

Object.assign(String.prototype, {
  hexNumber () {
    return /^(0x)?[0-9A-F]+$/i.test(this);
  }
});