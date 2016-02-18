// http://www.codewars.com/kata/regexp-basics-is-it-a-eight-bit-signed-number/solutions/javascript/me

Object.assign(String.prototype, {
  signedEightBitNumber () {
    return /^((\-(1(2[0-8]|[01][0-9])|[1-9][0-9]?))|(1(2[0-7]|[01][0-9])|[1-9]?[0-9]))$/.test(this);
  }
});