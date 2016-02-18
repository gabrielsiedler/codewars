// http://www.codewars.com/kata/grasshopper-array-mean/solutions/javascript/me

var findAverage = function (nums) {
  return nums.reduce((x,y)=>x+y) / nums.length;
}