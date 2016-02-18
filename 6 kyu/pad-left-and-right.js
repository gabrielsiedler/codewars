// http://www.codewars.com/kata/pad-left-and-right/solutions/javascript/me

String.prototype.padLeft = function (ch, n) {
  return n>this.length ? Array(n-this.length+1).join(ch) + this : this.valueOf();
}

String.prototype.padRight = function (ch, n) {
  return n>this.length ? this + Array(n-this.length+1).join(ch) : this.valueOf();
}
