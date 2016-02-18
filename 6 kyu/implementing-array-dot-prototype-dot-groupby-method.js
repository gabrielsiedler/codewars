// http://www.codewars.com/kata/implementing-array-dot-prototype-dot-groupby-method/solutions/javascript/me

Array.prototype.groupBy = function(fn) {
  var _removeDuplicated = function (arr) {
    return arr.filter(function (element, index) {
      if(arr.indexOf(element) !== index) {
        return false;
      }
      return true;
    });
  };

  var groups = _removeDuplicated(this).sort();

  if(fn) {
    groups = groups.map(a => fn(a));
  }
  
  var output = {}, array = this;
  groups.forEach(function (g) {
    output[g] = array.filter(function (item) {
      return fn ? fn(item) === g : item === g;
    });
  });

  return output;
}