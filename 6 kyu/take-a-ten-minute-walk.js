// http://www.codewars.com/kata/take-a-ten-minute-walk/solutions/javascript/me

const isValidWalk = function (walk) {
  let directions = {n:0,s:0,w:0,e:0};
  
  walk.forEach(function (e) { directions[e]++; });
  
  return (walk.length === 10) && (directions.n - directions.s === 0) && (directions.w - directions.e === 0);
}