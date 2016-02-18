// http://www.codewars.com/kata/most-likely/solutions/javascript/me

const mostLikely = (p1, p2) => {
  let pattern = /(\d+):(\d+)/;
  p1 = p1.match(pattern);
  p2 = p2.match(pattern);
  
  return p1[1]/p1[2] > p2[1]/p2[2];
};