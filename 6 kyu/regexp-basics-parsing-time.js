// http://www.codewars.com/kata/regexp-basics-parsing-time/solutions/javascript/me

Object.assign(String.prototype, {
  toSeconds () {
    let m = this.match(/^(\d{2}):(\d{2}):(\d{2})$/);
    
    return m && m[2] < 60 && m[3] < 60 ? +m[1] * 3600 + +m[2] * 60 + +m[3] : null;
  }
});