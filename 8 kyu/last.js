// http://www.codewars.com/kata/last/solutions/javascript/me

const last = function (l) {
  var args = Array.prototype.slice.call(arguments);
  return Array.isArray(args[0]) || (args.length === 1 && typeof args[0] === 'string')? args[0][args[0].length-1] : args[args.length-1];
}