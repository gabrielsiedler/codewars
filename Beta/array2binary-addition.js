// http://www.codewars.com/kata/array2binary-addition/solutions/javascript/me

const arr2bin = function () {
  let array = Array.from(...arguments);
  if (array.some(v => typeof v !== 'number')) {
    return false;
  }
  
  array = (array||[]).reduce((p,n) => p + n, 0);
  return (typeof array === 'number') ? array.toString(2) : false;
}