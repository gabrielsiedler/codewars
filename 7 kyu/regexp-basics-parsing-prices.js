// http://www.codewars.com/kata/regexp-basics-parsing-prices/solutions/javascript/me

Object.assign(String.prototype, {
  toCents () {
    let m = this.match(/^\$(\d+)\.(\d{2})$/);
    return m && m[1] && m[2] ? Number(m[1] + m[2]) : null;
  }
});