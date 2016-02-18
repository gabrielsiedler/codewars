// http://www.codewars.com/kata/sum-of-numerous-arguments/solutions/javascript/me

const findSum = (...arr) => {
  if (arr.some(v => v<0)) return -1;
  
  return arr.reduce((a,b) => a+b, 0);
};