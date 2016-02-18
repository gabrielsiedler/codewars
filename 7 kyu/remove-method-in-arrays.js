// http://www.codewars.com/kata/remove-method-in-arrays/solutions/javascript/me

Object.assign(Array.prototype, {
  remove (i) {
    if (!Number.isInteger(i) || i < 0 || i > this.lenght) return;
    this.splice(i,1);
  }
});