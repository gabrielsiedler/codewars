// http://www.codewars.com/kata/trim-a-string/solutions/javascript/me

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
};