// http://www.codewars.com/kata/regexp-basics-is-it-a-digit/solutions/javascript/me

Object.assign(String.prototype, {
  digit () {
    return /^\d$/.test(this);
  }
});