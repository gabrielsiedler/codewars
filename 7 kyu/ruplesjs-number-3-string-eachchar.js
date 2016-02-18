// http://www.codewars.com/kata/ruplesjs-number-3-string-eachchar/solutions/javascript/me

Object.assign(String.prototype, {
  eachChar (c) {
    return Array.from(this, typeof c === 'function' ? c : v => v + c).join('');
  }
});