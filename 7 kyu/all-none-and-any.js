// http://www.codewars.com/kata/all-none-and-any/solutions/javascript/me

Object.assign(Array.prototype, {
  all(p) {
    for (let v of this) {
      if (!p(v)) return false;
    }
    return true;
  },
  
  none(p) {
    for (let v of this) {
      if (p(v)) return false;
    }
    return true;
  },
  
  any(p) {
    for (let v of this) {
      if (p(v)) return true;
    }
    return false;
  }
});